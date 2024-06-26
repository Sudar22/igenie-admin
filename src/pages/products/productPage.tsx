import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Container,
  IconButton,
  MenuItem,
  Paper,
  Popover,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Typography
} from "@mui/material";
import { sentenceCase } from "change-case";
import { filter } from "lodash";
import { ChangeEvent, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import USERLIST from "../../_mock/user";
import Iconify from "../../components/iconify";
import Label from "../../components/label";
import Scrollbar from "../../components/scrollbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { getAllUsers } from "../../redux/reducers/vendorSlice";
import { RootState } from "../../redux/stores/reduxStore";
import {
  ProductListHead,
  ProductListToolbar,
} from "../../sections/@Dashboard/products";

interface User {
  id: string;
  name: string;
  // role: string;
  status: string;
  company: string;
  avatarUrl: string;
  isVerified: boolean;
  [key: string]: any; // Allow any string as an index
}

interface HeadCell {
  id: string;
  label: string;
  alignRight?: boolean;
}

const TABLE_HEAD: HeadCell[] = [
  { id: "Seller", label: "Seller Name", alignRight: false },
  { id: "Organization", label: "Organization", alignRight: false },
  { id: "Location", label: "Location", alignRight: false },
  { id: "isVerified", label: "Verified", alignRight: false },
  { id: "status", label: "Status", alignRight: false },
  { id: "action", label: "Action", alignRight: false },
];

function descendingComparator(a: User, b: User, orderBy: string) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: "asc" | "desc", orderBy: string) {
  return order === "desc"
    ? (a: User, b: User) => descendingComparator(a, b, orderBy)
    : (a: User, b: User) => -descendingComparator(a, b, orderBy);
}



// function applySortFilter(array: User[], comparator: (a: User, b: User) => number, query: string) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   if (query) {
//     return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
//   }
//   return stabilizedThis.map((el) => el[0]);
// }

function applySortFilter(
  array: User[],
  comparator: (a: User, b: User) => number,
  query: string
) {
  // const stabilizedThis = array.map((el, index) => [el, index]);
  // stabilizedThis.sort((a, b) => {
  //   const order = comparator(a[0], b[0]); // Compare only the User objects, not the entire tuple
  //   if (order !== 0) return order;
  //   return a[1] - b[1];
  // });
  const stabilizedThis: [User, number][] = array.map((el, index) => [el, index]);
stabilizedThis.sort((a, b) => {
  const order = comparator(a[0], b[0]); // Compare only the User objects, not the entire tuple
  if (order !== 0) return order;
  return a[1] - b[1];
});

  if (query) {
    return filter(
      array,
      (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

interface Button {
  label: string;
  name: string;
}

export default function ProductPage() {
  const [open, setOpen] = useState<null | HTMLElement>(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const [selected, setSelected] = useState<string[]>([]);

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const dispatch = useAppDispatch();


  useEffect(() => {
    // Dispatch the async thunk action to fetch categories
    dispatch(getAllUsers());
  }, [dispatch]);

  const { users } = useAppSelector((state: RootState) => state.user);

  console.log("users DATA" , users)

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelecteds = USERLIST.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (_event: ChangeEvent<HTMLInputElement>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [] as any;
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(
    USERLIST,
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound = !filteredUsers.length && !!filterName;

  const [buttons, setButtons] = useState<Button[]>([
    { label: "Button 1", name: "button1" },
  ]);

  const handleAddButton = () => {
    setButtons([
      ...buttons,
      { label: "New Button", name: `button${buttons.length + 1}` },
    ]);
  };

  const handleEditButtonName = (
    event: React.SyntheticEvent<HTMLDivElement>,
    index: number
  ) => {
    let { innerText } = event.currentTarget;
    let editedButtons = [...buttons];
    editedButtons[index].name = innerText;
    setButtons(editedButtons);
  };

  // const StyledButton = styled(Button)(({ theme }) => ({
  //   width: "auto",
  //   margin: theme.spacing(0, 1),
  //   fontSize: 10,
  //   backgroundColor: "#000",
  //   color: "#FFF",
  //   "&:hover": {
  //     backgroundColor: "#57A845",
  //   },
  // }));
  return (
    <>
      <Helmet>
        <title> Seller </title>
      </Helmet>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h6" gutterBottom>
            Sellers Pannel
          </Typography>

          <Stack direction="row" spacing={1.2} flexWrap="wrap-reverse">


          </Stack>
        </Stack>

        <Stack>
          <Card>
            <ProductListToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
            />
          </Card>
        </Stack>

        <Card>
          <Scrollbar>
            <Card>
              <Stack direction="row" p={1}>
                <Button size="small">ALL</Button>
                <Button size="small">Active</Button>
                <Button size="small">Draft</Button>
                {buttons.map((button, index) => (
                  <div>
                    <div
                      key={index}
                      contentEditable={true}
                      onInput={(event) => handleEditButtonName(event, index)}
                    >
                      <Button>{button.name}</Button>
                    </div>
                    {/* <button onClick={() => handleDeleteButton(index)}>Delete Button</button> */}
                  </div>
                ))}
                <Button size="small" onClick={handleAddButton}>
                  +
                </Button>
              </Stack>
            </Card>


            
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>


                
                <ProductListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />     <TableBody>
                {filteredUsers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const {
                      id,
                      name,
                      category,
                      status,
                      company,
                      avatarUrl,
                      isVerified,
                    } = row;

                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={selectedUser}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={selectedUser}
                            size="small"
                            onChange={(event: ChangeEvent<HTMLInputElement>) => handleClick(event, name)}
                          />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                          >
                            <Avatar alt={name} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{company}</TableCell>

                        <TableCell align="left">{category}</TableCell>

                        <TableCell align="left">
                          {isVerified ? "Yes" : "No"}
                        </TableCell>

                        <TableCell align="left">
                          <Label
                            color={
                              (status === "pending" && "error") || "success"
                            }
                          >
                            {sentenceCase(status)}
                          </Label>
                        </TableCell>

                        <TableCell align="right">
                          <IconButton
                            size="large"
                            color="inherit"
                            onClick={handleOpenMenu}
                          >
                            <Iconify icon={"eva:more-vertical-fill"} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}

                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
           

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete
                            words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Link to={"/dashboard/products/editproduct"}>
        <MenuItem>
          <Iconify icon={"eva:edit-fill"} sx={{ marginRight: 2 }} />
          Edit
        </MenuItem>
        </Link>
        <MenuItem sx={{ color: "error.main" }}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ marginRight: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}
