import {
  Button,
  Card,
  Container,
  IconButton,
  OutlinedInput,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box, Paper } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useInput } from "../../../hooks/useInput";
import { styled, alpha, Theme } from "@mui/material/styles";
import "react-quill/dist/quill.snow.css";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Iconify from "../../../components/iconify";
import { Link } from "react-router-dom";
import ProductOrganization from "./productOrganization";
import Variants from "./@product/Variants";

import { createProduct } from "../../../redux/reducers/productSlice";
import { useAppDispatch } from "../../../redux/hooks/hooks";

interface Data {
  [key: string]: any;
}

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    // [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
  ],
};

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

const StyledFrom = styled(FormControl)(({ theme }: { theme: Theme }) => ({
  width: 130,
  display: "flex",
  flexDirection: "row",
}));

const StyledButton = styled("div")(({ theme }: { theme: Theme }) => ({
  width: 180,
  flexDirection: "row",
  display: "inline-flex",
  justifyContent: "space-between",
}));

const StyledTypo = styled("div")(({ theme }: { theme: Theme }) => ({
  width: 180,
  flexDirection: "row",
  display: "inline-flex",
  justifyContent: "space-between",
}));

const StyledReactQuill = styled(Paper)(({ theme }: { theme: Theme }) => ({
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
}));

export const initialState = {
  firstName: "",
  lastName: "",
  userName: "human@1asd",
  email: "",
  passWord: "",
  contactNo: "",
  confirmPassWord: "",
};

export default function AddProduct() {
  const [title, setTitle] = useState("");

  const [valueDescription, setValueDescription] = useState("");
  const [saveData, setSaveData] = useState<string[]>([]);

  const dispatch = useAppDispatch();

  const getProductIfo = async (e: any) => {
    e.preventDefault();
    console.log("saveValue:", e.target.value);
  };

  // useEffect(() => {
  //   setSaveData([title, valueDescription]);
  //   console.log("saveData:", saveData);
  // }, [title, valueDescription]);

  const saveProductInfo = async () => {
    dispatch(createProduct(saveData));
  };

  const inputProps = useInput("");
  const quillRef = useRef<ReactQuill>(null);

  React.useEffect(() => {
    // Focus the editor when the component mounts
    if (quillRef.current) {
      quillRef.current.focus();
    }
  }, []);

  const [active, setActive] = React.useState("");

  const handleChange = (event: any) => {
    setActive(event.target.value);
  };
  const [data, setData] = useState<Data>({});

  const getData = async (e: any) => {
    e.preventDefault();

    let name = e.target.name;
    console.log(data);

    setData((prev) => (prev = { ...prev, [name]: e.target.value }));

    return data;
  };

  // const eventHandler =(event: any)=> {
  //   const {label,value}=event.target

  //   setSaveData([label]:value)
  // }
  return (
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
                <Stack>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Status"
                      defaultValue={20}
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Active</MenuItem>
                      <MenuItem value={20}>Draft</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>

                <Stack>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Markets
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Markets"
                      defaultValue={10}
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>India</MenuItem>
                      <MenuItem value={20}>International</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </StyledFrom>

              {/* 
              <Stack>
                <Typography variant='h6' component='h6'>
                  Unsaved changes
                </Typography>

              </Stack> */}

              <StyledButton>
                <Button variant="outlined" color="primary">
                  Discord
                </Button>
                <Button variant="contained" color="primary"               onClick={() => {
                saveProductInfo;
              }}>
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
                onChange={getData}
              />
              <Typography>Alias</Typography>
              <StyledSearch
                name="alias"
                placeholder="Enter title"
                onChange={getData}
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
                  <ReactQuill
                    theme="snow"
                    // value={valueDescription}
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
                  />
                </StyledReactQuill>
              </Stack>
              <Typography>Full Description</Typography>
              <Stack>
                <StyledReactQuill>
                <ReactQuill
                    theme="snow"
                    value={valueDescription}
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
                  />
                </StyledReactQuill>
              </Stack>
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
  );
}
