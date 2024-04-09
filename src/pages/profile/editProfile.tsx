import {
  Autocomplete,
  Avatar,
  Button,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useDispatch } from "react-redux";

const StyledShipping = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  // justifyContent:"center",
  // alignItems: "center",
  padding: theme.spacing(2, 2),
}));
const Detail = styled("div")(({ theme }) => ({
  width: "60%",
  display: "flex",
  // height: 590,
  flexDirection: "column",
  justifyContent: "center",
  // alignItems:"center",
  gap: 80,
  // boxShadow: theme.shadows[10],
  // backgroundColor: "#FFF",
  // padding: theme.spacing(2, 2),
}));
const ImgLogo = styled("div")(({ theme }) => ({
  width: "40%",
  display: "flex",
  // height: 590,
  flexDirection: "column",
  // justifyContent: "center",
  gap: 50,
}));

const SellerImg = styled("div")(({ theme }) => ({
  // width: "0%",
  display: "flex",
  // height: 590,
  flexDirection: "column",
  justifyContent: "center",
  gap: 50,
}));

const SellerLogo = styled("div")(({ theme }) => ({
  // width: "60%",
  display: "flex",
  // height: 590,
  flexDirection: "column",
  justifyContent: "center",
  gap: 50,
}));
const Textbox = styled(TextField)(({ theme }) => ({
  width: "30.75vw",
}));

const Textfields = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 20,
}));
const Parafields = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 100,
}));
const CountryTextbox = styled(Autocomplete)(({ theme }) => ({
  width: "30.75vw",
}));
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#024554",
  color: "#FFF",
  boxShadow: "none",
}));
const StyledButtons = styled("div")(({ theme }) => ({
  display: "flex",
  gap: 10,
}));
const CountrySelect = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  return (
    <CountryTextbox
      options={countries}
      value={selectedCountry}
      onChange={(selectedOption) => setSelectedCountry(selectedOption)}
      renderInput={(params) => <TextField {...params} label="Country" />}
      disableClearable
    />
  );
};

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

export const EditProfile = () => {
  const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0]; // Get the first file from the selected files
    setSelectedImage(imageFile); // Update the selected image state
  };
  const [saveData, setSaveData] = useState<string[]>([]);
  const [valueDescription, setValueDescription] = useState("");
  const dispatch = useDispatch();
  const quillRef = useRef(null);
  useEffect(() => {
    setSaveData([valueDescription]);
    console.log("saveData:", saveData);
  }, [valueDescription]);

  const saveProductInfo = async () => {
    dispatch(saveProduct(saveData));
  };
  React.useEffect(() => {
    // Focus the editor when the component mounts
    if (quillRef.current) {
      quillRef.current.focus();
    }
  }, []);
  return (
    <div>
      <Typography variant="h4">My Account</Typography>
      <StyledShipping>
        <Detail>
          <Textfields>
            <Textbox name="Email" label="Email" />
            <Textbox name="Seller Name" label="Seller Name" />
            <Textbox name="Seller Shop Name" label="Seller Shop Name" />
            <Textbox name="Address 1" label="Address 1" />

            <Textbox name="City" label="City" />
            <CountrySelect />
            <Textbox name="Pincode" label="Pincode" />
            <Textbox name="Phone Number" label="Phone Number" />
            <Parafields>
              <ReactQuill
                ref={quillRef}
                theme="snow"
                value={valueDescription}
                onChange={setValueDescription}
                modules={modules}
                style={{ width: 500, height: 200 }}
              />
              <ReactQuill
              ref={quillRef}
              theme="snow"
              value={valueDescription}
              onChange={setValueDescription}
              modules={modules}
              style={{ width: 500, height: 200 }} />
              <ReactQuill 
              ref={quillRef}
              theme="snow"
              value={valueDescription}
              onChange={setValueDescription}
              modules={modules}
              style={{ width: 500, height: 200 }} />
            </Parafields>
          </Textfields>

          <StyledButtons>
            <StyledButton>Save</StyledButton>
            <StyledButton>Cancel</StyledButton>
          </StyledButtons>
        </Detail>
        <ImgLogo>
          <SellerImg>
            <Typography variant="h5">SELLER PROFILE & STATUS</Typography>
            {selectedImage ? (
              <div>
                <Avatar
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  style={{ width: 185, height: 185 }}
                />
              </div>
            ) : (
              <div>
                <Avatar
                  src=""
                  alt="Default"
                  style={{ width: 185, height: 185 }}
                />
              </div>
            )}
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
            {/* Display the selected image */}
          </SellerImg>
          <SellerLogo>
            <Typography variant="h5">SELLER SHOP LOGO</Typography>
            {selectedImage ? (
              <div>
                <Avatar
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  style={{ width: 185, height: 185 }}
                  variant="rounded"
                />
              </div>
            ) : (
              <div>
                <Avatar
                  src=""
                  alt="Default"
                  style={{ width: 165, height: 165 }}
                  variant="rounded"
                >
                  <StorefrontIcon fontSize="large" />
                </Avatar>
              </div>
            )}
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
              <VisuallyHiddenInput
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
            {/* Display the selected image */}
          </SellerLogo>
        </ImgLogo>
      </StyledShipping>
    </div>
  );
};
