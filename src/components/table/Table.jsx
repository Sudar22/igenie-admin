
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { StyledTableCell, StyledTableRow } from 'sub-components/table/TableStyles';

import CustomTableHead from 'sub-components/table/TableHead';
import { Box, TableCell, TablePagination } from '@mui/material';

export default function CustomizedTables(props) {

  const { rowsData, rowHeadDataCell,
    

  } = props;

  /////-------material ui--------------///////////////
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [filteredRows, setFilteredRows] = React.useState(rowsData);


  // ---material ui  poppup-----///

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [filterValue, setFilterValue] = React.useState('');
  const [status, setStatus] = React.useState("");

  const [filteringColumnData, setFilteringColumnData] = React.useState([]);
  const [selectFilterColumn, setSelectFilterColumn] = React.useState([]);
  const [filterItemRemoveId,setFilterItemRemoveId] =React.useState("");
  const [filteredItems,setFilteredItems] =React.useState([]);


  const columns = [
    { id: 'status', label: 'Status' },
    { id: 'date', label: 'Date' },
    { id: 'fundraiser', label: 'Fundraiser' },
    { id: 'group', label: 'Group' },
    { id: 'donation', label: 'Donation' },
    { id: 'tax', label: 'Tax' },
    { id: 'paid', label: 'Paid' },
  ];

  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) {
        return order;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }

  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rowsData.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id, row) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleRequestFilter = (filteredRows, row) => {

    // const filteredRow = rowsData.filter(row => row.id !== filterItemRemoveId);



    const filteredRow = rowsData.filter(row => row.id !== filterItemRemoveId);
    const filteredItemRemoved = rowsData.filter(row => row.id == filterItemRemoveId);

    handleClick(filteredRow);



    setFilteredRows(filteredRow);
    setFilteredItems(filteredItemRemoved);


    console.log("filteredRow", filteredRow)


  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rowsData.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsData.length) : 0;

  const visibleRows = React.useMemo(
    () => stableSort(rowsData, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    ),


    [order, orderBy, page, rowsPerPage],
  );


  React.useEffect(() => {
    // Apply sorting when `orderBy` or `order` changes
    const sortedRows = stableSort(filteredRows, getComparator(order, orderBy));
    setFilteredRows(sortedRows);
  }, [orderBy, order]);




  return (
    <React.Fragment>
      <TableContainer component={Paper} sx={{ maxHeight: "400px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <CustomTableHead
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            onRequestFilter={handleRequestFilter}
            rowCount={rowsData.length}
            rowHeadDataCell={rowHeadDataCell}
            filteredRows={filteredRows}
            filteringColumnData={filteringColumnData}
            selectFilterColumn={selectFilterColumn}
            setFilterItemRemoveId={setFilterItemRemoveId}
            filteredItems={filteredItems}
          />
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <StyledTableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >

                    {/* /-- wrong name instead  columnDataCell not row/ */}
                    {rowHeadDataCell.map((column) => (
                      <StyledTableCell key={column.id} align="center" onClick={(e) => setSelectFilterColumn(row[e.id])}>
                        <Box component={column.component} sx={{ fontFamily: "poppins", fontSize: "16px" }} align={column.align} > {row[column.id]}</Box>
                      </StyledTableCell>
                    ))}
                  </StyledTableRow>
                );
              })}
            {emptyRows > 0 && (
              <StyledTableRow
                style={{
                  height: (dense ? 33 : 53) * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <CustomPagination /> */}


      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </React.Fragment>
  );
}


