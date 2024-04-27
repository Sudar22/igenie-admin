import {
  Alert,
  Autocomplete,
  Button,
  Card,
  CardContent,
  CardMedia,
  Snackbar,
  Switch,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import {
  getAllCategories,
  saveCategories,
} from "../../redux/reducers/categorySlice";
import { RootState } from "../../redux/stores/reduxStore";
import { CategoryType } from "./categoryType";

interface AddCategoryProps {}

export const StyledContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  border: "1px solid #C2C2C2",
  padding: 20,
}));

export const StyledSubContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  border: "1px solid #C2C2C2",
  padding: 20,
}));

export const StyledInputFields = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

export const StyledInput = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
}));

export const StyledInputBox = styled(TextField)(() => ({
  width: 300,
  "& .MuiInputBase-root": {
    height: 30, // Adjust the height as needed
  },
}));
export const StyledAutocomplete = styled(Autocomplete)(() => ({
  width: 300,
  "& .MuiInputBase-root": {
    height: 30, // Adjust the height as needed
  },
}));

export const StyledInputText = styled(Typography)(() => ({
  width: 200,
}));
export const StyledButtons = styled(Typography)(() => ({
  // width: 200,
  display: "flex",
  flexDirection: "row",
  gap: 20,
}));

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const InitialState = {
  name: "",
  alias: "",
  parent: 0,
  fileImage: "",
  enable: false,
  allParentIDs: "",
  childern: "",
};

const AddCategory: React.FC<AddCategoryProps> = () => {
  const [category, setCategory] = useState<CategoryType>(InitialState);
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  // auto complete textfield

  const dispatch = useAppDispatch();
  // const navigate = useNavigate(); // Initialize useNavigate

  const { categories } = useAppSelector((state: RootState) => state.category);

  useEffect(() => {
    // Dispatch the async thunk action to fetch categories
    dispatch(getAllCategories());
  }, [dispatch]); // Only dispatch on component mount

  const { listCategories } = categories;
  // const options = listCategories?.map((category: {id:number,name:string}) => ({ id: category.id, name: category.name }));
let options: { id: number; name: string }[] = [];
if (listCategories && listCategories.length > 0) {
  options = listCategories.map((category: { id: number; name: string }) => ({
    id: category.id,
    name: category.name,
  }));
} else {
  options = [{ id: 0, name: "No category" }];
}


  const [selectedOption, setSelectedOption] = React.useState<{
    id: number;
    name: string;
  } | null>(null);

  const handleAutocompleteChange = (
    _event: React.ChangeEvent<{}>,
    newValue: { id: number; name: string } | null
  ) => {
    setSelectedOption(newValue);
  };
  // const [value, setValue] = React.useState<string | null>(
  //   options?.length > 0 ? options[0] : null
  // );
  // const [value, setValue] = React.useState<string | null>(
  //   options?.length > 0 ? options[0].name : null
  // );
  
  // const [inputValue, setInputValue] = React.useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
      setFileName(file.name);
    };

    reader.readAsDataURL(file);
  };

  // Function to handle image removal
  const handleRemoveImage = () => {
    setImage(null);
    setFileName(null);
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let { name, value } = event.target;
    setCategory((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));

    console.log("category", category);

    return category;
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCategory({ ...category, [name]: checked });
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (!selectedOption) return;

    const { name, alias, enable } = category;
    const postCategoryData = {
      name: name,
      alias: alias,
      parent: !selectedOption ? null : selectedOption.id,
      enable: enable,
      allParentIDs: "",
      childern: "",
      fileImage: image,
    };

    console.log("postCategoryData:", postCategoryData);

    // dispatch(saveCategories(postCategoryData));

    dispatch(saveCategories(postCategoryData)).then((result: any) => {
      // Navigate to another path if the dispatch operation is successful
      // if (result.meta.requestStatus === 'fulfilled') {
      //   return <Link to={"../addcategory"} />
      // ; // Replace '/another-path' with your desired path
      // }
      if (result.meta.requestStatus === "fulfilled") {
        // Show success message in Snackbar
        setSnackbarMessage("Category saved successfully");
        setSnackbarOpen(true);
      }
    });
  };
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <StyledContainer>
        <Typography variant="h5">Manage Categories</Typography>
        <StyledSubContainer>
          <StyledInput>
            <StyledInputFields>
              <StyledInputText variant="body1">Category Name</StyledInputText>
              <StyledInputBox
                value={category.name}
                onChange={handleChange}
                name="name"
              />
            </StyledInputFields>
            <StyledInputFields>
              <StyledInputText variant="body1">Alias Name</StyledInputText>
              <StyledInputBox
                label=""
                variant="outlined"
                value={category.alias}
                onChange={handleChange}
                name="alias"
              />
            </StyledInputFields>
            <StyledInputFields>
              <StyledInputText variant="body1">Parent Category</StyledInputText>

              <Autocomplete
                value={selectedOption}
                onChange={handleAutocompleteChange}
                options={options}
                getOptionLabel={(option) => option.name}
                id="controllable-states-demo"
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Parent Category" />
                )}
              />
            </StyledInputFields>
            <StyledInputFields>
              <StyledInputText variant="body1">Image</StyledInputText>

              <div>
                {/* Input for uploading image */}
                <input
                  accept="image/*"
                  id="contained-button-file"
                  type="file"
                  name="fileImage"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" component="span">
                    Upload Image
                  </Button>
                </label>

                {/* Display uploaded image */}
                {image && (
                  <Card style={{ marginTop: "20px" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={image}
                      alt="Uploaded Image"
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {fileName}{" "}
                      </Typography>
                      <Button onClick={handleRemoveImage} color="error">
                        Remove
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </StyledInputFields>
            <StyledInputFields>
              <StyledInputText variant="body1">Enable</StyledInputText>
              <Switch
                {...label}
                checked={category.enable}
                onChange={handleSwitchChange}
                name="enable"
              />
            </StyledInputFields>
          </StyledInput>
          <StyledButtons>
            <Button variant="contained" type="submit">
              Save
            </Button>
            <Button variant="contained">Cancel</Button>
          </StyledButtons>
        </StyledSubContainer>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={handleCloseSnackbar}
            severity="success"
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </StyledContainer>
    </form>
  );
};

export default AddCategory;
