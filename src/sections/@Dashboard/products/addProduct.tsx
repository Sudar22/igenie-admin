import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  OutlinedInput,
  Paper,
  Stack,
  Switch,
  TextField,
  Tooltip,
  Typography
} from "@mui/material";
import { Theme, alpha, styled } from "@mui/material/styles";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import FormControl from "@mui/material/FormControl";

import { Link } from "react-router-dom";
import Iconify from "../../../components/iconify";
import Variants from "./@product/Variants";
import ProductOrganization from "./productOrganization";

import { useAppDispatch } from "../../../redux/hooks/hooks";
import { getAllCategories } from "../../../redux/reducers/categorySlice";
import {
  createProduct,
  getAllProducts,
} from "../../../redux/reducers/productSlice";
import { ProductType } from "./productType copy";
// import { ProductType } from "./productType";

// interface Data {
//   [key: string]: any;
// }
interface AddProductProps {}

// const modules = {
//   toolbar: [
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],
//     [{ font: [] }],
//     // [{ size: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [
//       { list: "ordered" },
//       { list: "bullet" },
//       { indent: "-1" },
//       { indent: "+1" },
//     ],
//     ["link", "image", "video"],
//   ],
// };

export const StyledInputFields = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const StyledSearch = styled(OutlinedInput)(({ theme }: { theme: Theme }) => ({
  width: 660,
  height: 40,
  margin: theme.spacing(0, 0, 2, 0),
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": {
    //   width: 350,
    // boxShadow: theme.customShadows.z8,
  },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));

const StyledRoot = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1, 0, 1),
  margin: theme.spacing(0, 0, 0, 0),
}));

const StyledProductInupt = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "row",
  // alignContent:"center",
  // alignItems:"center",

  // width: 700,
  justifyContent: "space-between",
  padding: theme.spacing(0, 0, 0, 0),
  margin: theme.spacing(0, 0, 0, 0),
  border: "1px solid black",
  borderRadius: 5,
}));

const StyledProductInfo = styled("div")(({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  // alignContent:"center",
  // alignItems:"center",

  // width: 700,
  justifyContent: "space-between",
  padding: theme.spacing(2.5, 1.5, 2, 1.5),
  margin: theme.spacing(0, 0, 0, 0),
}));

const StyledFrom = styled(FormControl)(() => ({
  width: 130,
  display: "flex",
  flexDirection: "row",
}));

const StyledButton = styled("div")(() => ({
  width: 180,
  flexDirection: "row",
  display: "inline-flex",
  justifyContent: "space-between",
}));

// const StyledTypo = styled("div")(() => ({
//   width: 180,
//   flexDirection: "row",
//   display: "inline-flex",
//   justifyContent: "space-between",
// }));

export const StyledReactQuill = styled(Paper)(
  ({ theme }: { theme: Theme }) => ({
    ".ql-container": {
      width: 660,
      height: 300,
      //   boxShadow: theme.customShadows.z8,
    },
    ".ql-editor": {
      border: "none",
      transition: "box-shadow 0.3s ease-in-out", // Add a transition for a smooth effect
      "&:focus": {
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Add the desired box shadow when focused
      },
    },
    ".ql-toolbar": {
      width: 660,
      transition: "box-shadow 0.3s ease-in-out", // Add a transition for a smooth effect

      margin: theme.spacing(0, 0, 0, 0),

      "&:focus": {
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Add the desired box shadow when focused
      },
    },

    "&fieldset": {
      borderWidth: "1px !important",
      borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
    },
  })
);

export const InitialState = {
  name: "",
  alias: "",
  shortDescription: "",
  fullDescription: "",
  enable: false,
  inStock: false,
  discountPercent: 0,
  fileImage: "",
  categoryIds: 0,
};


export const CategoryState = {
  name: "",
  alias: "",
  parent: 0,
  fileImage: "",
  enable: false,
  allParentIDs: "",
  childern: "",
};

const AddProduct: React.FC<AddProductProps> = () => {
  
  const [product, setProduct] = useState<ProductType>(InitialState);
  // const [category, setCategory] = useState<CategoryType>(CategoryState);

  // const [title, setTitle] = useState("");

  // const [valueDescription, setValueDescription] = useState("");
  // const [saveData, setSaveData] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  // const { Product } = useAppSelector((state: RootState) => state.products);
  // const { categories } = useAppSelector((state: RootState) => state.category);


  useEffect(() => {
    // Dispatch the async thunk action to fetch categories
    dispatch(getAllCategories());
  }, [dispatch]);

  // const getProductIfo = async (e: any) => {
  //   e.preventDefault();
  //   console.log("saveValue:", e.target.value);
  // };

  // useEffect(() => {
  //   setSaveData([title, valueDescription]);
  //   console.log("saveData:", saveData);
  // }, [title, valueDescription]);

  useEffect(() => {
    // Dispatch the async thunk action to fetch categories
    dispatch(getAllProducts());
  }, [dispatch]);


  // const options = listCategories?.map((category: {id:number,name:string}) => ({ id: category.id, name: category.name }));


  // const { listProducts } = Product;

  // const saveProductInfo = async () => {
  //   dispatch(createProduct(saveData));
  // };
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const saveProductInfo = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // if (!selectedOption) return;

    const { name, alias, enable, shortDescription, fullDescription, inStock } =
      product;
    const postProductData = {
      name: name,
      alias: alias,
      shortDescription: shortDescription,
      fullDescription: fullDescription,
      enable: enable,
      inStock: inStock,
      discountPercent: null, // Assuming discountPercent is nullable
      fileImage: image, // Assuming fileImage is nullable
      categoryIds: 0, // Assuming categoryId is a number, provide an appropriate default value
    };

    console.log("postProductData:", postProductData);

    // dispatch(saveCategories(postCategoryData));

    dispatch(createProduct(postProductData)).then((result: any) => {
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
  // const inputProps = useInput("");
  const quillRef = useRef<ReactQuill>(null);

  React.useEffect(() => {
    // Focus the editor when the component mounts
    if (quillRef.current) {
      quillRef.current.focus();
    }
  }, []);

  // const [active, setActive] = React.useState("");

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));

    console.log("product", product);

    return product;
  };
  // const [data, setData] = useState<Data>({});

  // const getData = async (e: any) => {
  //   e.preventDefault();

  //   let name = e.target.name;
  //   console.log(data);

  //   setData((prev) => (prev = { ...prev, [name]: e.target.value }));

  //   return data;
  // };

  // const eventHandler =(event: any)=> {
  //   const {label,value}=event.target

  //   setSaveData([label]:value)
  // }
  const [image, setImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setFileName(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleRemoveImage = () => {
  //   setImage(null);
  //   setFileName('');
  // };


  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file) return;

  //   const reader = new FileReader();  
    

  //   reader.onloadend = () => {
  //     setImage(reader.result as string);
  //     setFileName(file.name);
  //   };

  //   reader.readAsDataURL(file);
  // };
  const handleRemoveImage = () => {
    setImage(null);
    setFileName('');
  };
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const options = ["India", "International"];
  return (
    <form onSubmit={saveProductInfo} encType="multipart/form-data">
      <StyledRoot>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 1,
            }}
          >
            <Tooltip title="back">
              <IconButton component={Link} to={"../products"}>
                <Iconify icon="mdi:arrow-left" sx={{ width: 25, height: 25 }} />
              </IconButton>
            </Tooltip>
            <Stack padding={1}>
              <Typography
                variant="subtitle1"
                component="h6"
                // fontSize="26"
                fontWeight="bold"
              >
                Add Product
              </Typography>
            </Stack>
          </Box>

          <Stack mb={3} sx={{ border: "1px solid black", borderRadius: 1 }}>
            <Card>
              <Stack
                m={1.7}
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <StyledFrom>
                  <StyledInputFields>
                    <Typography id="demo-select-small-label">Status</Typography>
                    <Switch
                      {...label}
                      checked={product.enable}
                      onChange={handleChange}
                      name="enable"
                    />
                  </StyledInputFields>

                  <Stack>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      <Autocomplete
                        options={options}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Markets"
                            variant="outlined"
                          />
                        )}
                      />
                    </FormControl>
                  </Stack>
                </StyledFrom>

                <StyledButton>
                  <Button variant="outlined" color="primary">
                    Discord
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    Save
                  </Button>
                </StyledButton>
              </Stack>
            </Card>
          </Stack>

          <StyledProductInupt>
            <Card>
              <StyledProductInfo>
                <Typography>Title</Typography>
                <StyledSearch
                  name="name"
                  placeholder="Enter title"
                  value={product.name}
                  onChange={handleChange}
                />
                <Typography>Alias</Typography>
                <StyledSearch
                  name="alias"
                  placeholder="Enter title"
                  value={product.alias}
                  onChange={handleChange}
                />
                <Typography>Short Description</Typography>
                <Stack>
                  <StyledReactQuill>
                    {/* <ReactQuill
                    theme="snow"
                    value={valueDescription}
                    onChange={setValueDescription}
                    modules={modules}
                  /> */}
                    {/* <ReactQuill
                    theme="snow"
                    value={product.shortDescription}
                    onChange={(content, delta, source, editor) => {
                      // Extract the HTML content from the editor
                      const htmlContent = editor.getHTML();
                      // Update the valueDescription state with the HTML content
                      setValueDescription(htmlContent);
                      // Call getData to update the data state
                      getData({
                        target: {
                          name: "shortDescription",
                          value: htmlContent,
                        },
                      });
                    }}
                    modules={modules}
                  /> */}
                    <TextField
                      fullWidth
                      InputProps={{
                        rows: 5,
                      }}
                      multiline
                      rows={3}
                      name="shortDescription"
                      value={product.shortDescription}
                      onChange={handleChange}
                    />
                  </StyledReactQuill>
                </Stack>
                <Typography>Full Description</Typography>
                <Stack>
                  <StyledReactQuill>
                    {/* <ReactQuill
                      theme="snow"
                      value={product.fullDescription}
                      onChange={(content, delta, source, editor) => {
                        // Extract the HTML content from the editor
                        const htmlContent = editor.getHTML();
                        // Update the valueDescription state with the HTML content
                        setValueDescription(htmlContent);
                        // Call getData to update the data state
                        getData({
                          target: {
                            name: "fullDescription",
                            value: htmlContent,
                          },
                        });
                      }}
                      modules={modules}
                    /> */}
                    <TextField
                      fullWidth
                      InputProps={{
                        rows: 5,
                      }}
                      multiline
                      name="fullDescription"
                      value={product.fullDescription}
                      onChange={handleChange}
                    />
                  </StyledReactQuill>
                </Stack>
                <div>
      {/* Input for uploading image */}
      <input
        accept="image/*"
        id="contained-button-file"
        type="file"
        name="fileImage"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Upload Image
        </Button>
      </label>

      {/* Display uploaded image */}
      {image && (
        <Card style={{ marginTop: '20px' }}>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="Uploaded Image"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {fileName}
            </Typography>
            <Button onClick={handleRemoveImage} color="error">
              Remove
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
              </StyledProductInfo>
            </Card>

            <Card>
              <ProductOrganization />
            </Card>
          </StyledProductInupt>

          <Stack>
            <Variants />
          </Stack>
          {/* <Variants /> */}
        </Container>
      </StyledRoot>
    </form>
  );
};
export default AddProduct;
