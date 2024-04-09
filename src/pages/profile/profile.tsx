import { Avatar, Box, Button, Tab, Tabs, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


const StyledProfile = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  marginTop: 30,
  padding: theme.spacing(1, 4, 2, 4),
}));

const StyledHeader = styled("div")(({ theme }) => ({
  width: "100%",
  // height: 60,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledHeaderCompany = styled("div")(({ theme }) => ({
  width: "100%",
  // height: 60,
  display: "flex",
  flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "center",
}));
const CompanyDetails = styled("div")(({ theme }) => ({
  width: "100%",
  // height: 60,
  display: "flex",
  flexDirection: "column",
}));

const HeaderSeller = styled("div")(({ theme }) => ({
  width: "100%",
  // height: 60,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
export const SellerProfile = () => {


    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
  return (
    <StyledProfile>
      <StyledHeader>
        <StyledHeaderCompany>
          <img src="\logo.png" alt="" width={200} height={150} />
          <CompanyDetails>
            <Typography variant="h5">Magnaflux</Typography>
            <Typography variant="body1">Description</Typography>
            <Typography variant="body1">
              AAA, Andaman and Nicobar Islands, India, 1234
            </Typography>
            <Typography variant="body1">
              Join Since 6 March, 2024 | Total Products 64
            </Typography>
          </CompanyDetails>
        </StyledHeaderCompany>
        <HeaderSeller>
          <Typography variant="h6">Shop Owner</Typography>

          <Avatar src="\profilepic.jpg" sx={{ width: 80, height: 80 }} />
          <Typography variant="h6">Seller Name</Typography>
          <Link to="/dashboard/editprofile">
          <Button>Edit</Button>
          </Link>
        </HeaderSeller>
      </StyledHeader>

      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="My Products" {...a11yProps(0)} />
          <Tab label="Policy" {...a11yProps(1)} />
          <Tab label="Description" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
    </StyledProfile>
  );
};
