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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Iconify from "../../components/iconify";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getAllCategories } from "../../redux/reducers/categorySlice";
import { RootState } from "../../redux/stores/reduxStore";



export const AllCategories: React.FC<{}> = () => {


  const dispatch = useAppDispatch();

  const { categories } = useAppSelector((state: RootState) => state.category);

  const {listCategories}=categories

  console.log("listCategories",listCategories)



  useEffect(() => {
    // Dispatch the async thunk action to fetch categories
    dispatch(getAllCategories());
  }, [dispatch]); // Only dispatch on component mount


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

  // const handleDeleteCategory = () => {
  //   if (selectedRowIndex !== null) {
  //     onDeleteCategory(selectedRowIndex);
  //   }
  //   handleCloseMenu();
  // };

  return (
    <>
    <StyledContainer>
      <StyledHeader>
      <Typography variant="h5">Manage Categories</Typography>
      <Link to={"/dashboard/addcategory"}>
        <Button variant="contained">Add Category</Button>
      </Link>
      </StyledHeader>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Category image</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Alias Name</TableCell>
              <TableCell align="left">Parent </TableCell>
              <TableCell align="left">Enable</TableCell>
              <TableCell align="left">Action</TableCell>
              {/* Add more table headers as needed */}
            </TableRow>
          </TableHead>
          <TableBody>
          {
            
            listCategories?.map((item:{name:string,imagePath:string,alias:string,parent:string,enabled:boolean}, index:number) => (
              <TableRow key={index}>
                <TableCell align="left" sx={{width:"200px"}}><img src={item.imagePath} alt={item.name}/></TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell align="left">{item.alias}</TableCell>
                <TableCell align="left">{item.parent}</TableCell>

                
                <TableCell align="left">
                  {item.enabled ? "Yes" : "No"}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    size="large"
                    color="inherit"
                    onClick={(event) => handleOpenMenu(event, index)}
                  >
                    <Iconify icon={"eva:more-vertical-fill"} />
                  </IconButton>
                </TableCell>
                {/* Render other category details */}
              </TableRow>
            ))}
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

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ marginRight: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
};



export default AllCategories;


