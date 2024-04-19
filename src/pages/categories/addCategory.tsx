import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  styled,
  Switch,
  FormControlLabel,
} from "@mui/material";

interface Category {
  name: string;
  alias: string;
  parentCategory: string;
  image: string;
  enable: boolean;
  // Add more properties as needed
}

interface AddCategoryProps {
  onSave: (category: Category) => void;
}

export const AddCategory: React.FC<AddCategoryProps> = ({ onSave }) => {
  const [category, setCategory] = useState<Category>({
    name: "",
    alias: "",
    parentCategory: "",
    image: "",
    enable: false,
    // Initialize other properties as needed
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCategory({ ...category, [name]: value });
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setCategory({ ...category, [name]: checked });
  };

  const handleSubmit = () => {
    onSave(category);

    // Save category to local storage
    const categoriesFromStorage = localStorage.getItem("categories");
    const categories = categoriesFromStorage ? JSON.parse(categoriesFromStorage) : [];
    localStorage.setItem("categories", JSON.stringify([...categories, category]));

    // Optionally, you can reset the form fields here
    setCategory({
      name: "",
      alias: "",
      parentCategory: "",
      image: "",
      enable: false,
    });
  };

  const StyledContainer = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:"#FFFFFF",
    border: "1px solid #C2C2C2",
    padding:20,
  }));
  const StyledSubContainer = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:"#FFFFFF",
    border: "1px solid #C2C2C2",
    padding:20,
  }));
  const StyledInputFields = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }));
  const StyledInput = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  }));
  const StyledInputBox = styled(TextField)(() => ({
    width: 300,
    "& .MuiInputBase-root": {
      height: 30, // Adjust the height as needed
    },
  }));
  const StyledInputText = styled(Typography)(() => ({
    width: 200,
  }));
  const StyledButtons = styled(Typography)(() => ({
    // width: 200,
    display: "flex",
    flexDirection: "row",
    gap: 20,
  }));
  const VisuallyHiddenInput = styled("input")({
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
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <StyledContainer>
      <Typography variant="h5">Manage Categories</Typography>
      <StyledSubContainer>
      <StyledInput>
        <StyledInputFields>
          <StyledInputText variant="body1">Category Name</StyledInputText>
          <StyledInputBox
            id="category-name"
            label=""
            variant="outlined"
            value={category.name}
            onChange={handleChange}
            name="name"
          />
        </StyledInputFields>
        <StyledInputFields>
          <StyledInputText variant="body1">Alias Name</StyledInputText>
          <StyledInputBox
            id="alias-name"
            label=""
            variant="outlined"
            value={category.alias}
            onChange={handleChange}
            name="alias"
          />
        </StyledInputFields>
        <StyledInputFields>
          <StyledInputText variant="body1">Parent Category</StyledInputText>
          <StyledInputBox
            id="parent-category"
            label=""
            variant="outlined"
            value={category.parentCategory}
            onChange={handleChange}
            name="parentCategory"
          />
        </StyledInputFields>
        <StyledInputFields>
          <StyledInputText variant="body1">Image</StyledInputText>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            // startIcon={<CloudUploadIcon />}
            // value={category.image}
            // onChange={handleChange}
          >
            Upload Image
            <VisuallyHiddenInput type="file" />
          </Button>
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
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
        <Button variant="contained">Cancel</Button>
      </StyledButtons>
      </StyledSubContainer>
    </StyledContainer>
  );
};
