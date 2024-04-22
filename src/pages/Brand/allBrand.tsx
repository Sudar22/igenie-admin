import React, { useState } from "react";
import {
  Button,
  IconButton,
  MenuItem,
  Paper,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import Iconify from "../../components/iconify";

interface Category {
  name: string;
  alias: string;
  parentCategory: string;
  image: string;
  enable: boolean;
  // Add more properties as needed
}

export const AllBrand: React.FC<{
  categories: Category[];
  onDeleteCategory: (index: number) => void;
}> = ({ categories, onDeleteCategory }) => {

  const StyledContainer = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor:"#FFFFFF",
    border: "1px solid #C2C2C2",
    padding:20,
  }));
  const StyledHeader = styled("div")(() => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding:20,

  }));


  const [open, setOpen] = useState<null | HTMLElement>(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedRowIndex(index);
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
    setSelectedRowIndex(null);
  };

  const handleDeleteCategory = () => {
    if (selectedRowIndex !== null) {
      onDeleteCategory(selectedRowIndex);
    }
    handleCloseMenu();
  };

  return (
    <>
    <StyledContainer>
      <StyledHeader>
      <Typography variant="h5">Manage Brands</Typography>
      <Link to={"/dashboard/addbrand"}>
        <Button variant="contained">Add Brand</Button>
      </Link>
      </StyledHeader>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Brand Name</TableCell>
              <TableCell align="right">Alias Name</TableCell>
              <TableCell align="right">Parent Brand</TableCell>
              <TableCell align="right">Image</TableCell>
              <TableCell align="right">Enable</TableCell>
              <TableCell align="right">Action</TableCell>
              {/* Add more table headers as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
      
          </TableBody>
        </Table>
      </TableContainer>

    </StyledContainer>
    <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ marginRight: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleDeleteCategory} sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ marginRight: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
};



export default AllBrand;
