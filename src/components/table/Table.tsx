// "use client";

// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableContainer from "@mui/material/TableContainer";
// import { StyledTableCell, StyledTableRow } from "./TableStyles";

// import { Box, Stack, TableCell, TablePagination, styled } from "@mui/material";
// import { Fragment, useEffect, useMemo, useState } from "react";
// import CustomTableHead from "./TableHead";
// import { getComparator, stableSort } from "./TableUtils";
// import { namesArray } from "./TableColumn/ProductColumn";



// export const StyledTablePagination = styled(TablePagination)(({ theme }) => ({
//   root: {
//     alignItems: "center",
//     justifyContent: "center",

//     // Use nested selectors properly
//     "& .MuiTablePagination-displayedRows, & .MuiTablePagination-selectLabel": {
//       marginTop: "1em",
//       marginBottom: "1em",
//     },
//   },
// }));

// export default function CustomizedTables(props) {
//   const {
//     rowsData,
//     columnHead,
//     order,
//     setOrder,
//     orderBy,
//     setOrderBy,
//     selected,
//     setSelected,
//     page,
//     setPage,
//     dense,
//     setDense,

//     rowsPerPage,
//     setRowsPerPage,
//     filteredRows,
//     setFilteredRows,
//     filteringColumnData,
//     setFilteringColumnData,
//     setFilterStatus,
//     selectFilterColumn,
//     setSelectFilterColumn,
//     filterItemRemoveId,
//     setFilterItemRemoveId,
//     filteredItems,
//     setFilteredItems,
//     handleDownloadClick,
//     fundraisers,
//     actionId,
    
//   } = props;

//   console.log("selectFilterColumn", selectFilterColumn);



  




//   const replacedData = namesArray.map((item) => {
//     const replacedItem = {};
//     for (const key in item) {
//       replacedItem[key] = item[key] === null ? "-" : item[key];
//     }
//     return replacedItem;
//   });

//   console.log("replacedData", replacedData);

//   // useEffect(()=>{
//   //   replacedData
//   // },[])

//   const [filters, setFilters] = useState([]);
//   const [filteredData, setFilteredData] = useState(replacedData);



//   const filterColumns = [
//     "status",
//     "name",
//     "date",
//     "group",
//     "donation",
//     "tax",
//     "paid",
//   ];

//   const [filtering, setFiltering] = useState([]);

//   useEffect(()=>{
//     setFilteredData(replacedData);
//    },[filters <= 0])


//   console.log("filters", filters);

//   // Separate columns into arrays
//   const names = [] ;
//   const group = [];
//   const status = [];
//   const donation = [];
//   const paid = [];
//   const tax = [];
//   const date = [];

//   filters.forEach((filter) => {
//     names.push(filter.name);
//     group.push(filter.group);
//     status.push(filter.status);
//     donation.push(filter.donation);
//     paid.push(filter.paid);
//     date.push(filter.date);
//   });

//   console.log("filter colummn name", names);
//   console.log("filter colummn group", group);
//   console.log("filter colummn status", status);
//   console.log("filter colummn donation", donation);
//   console.log("filter colummn date", paid);
//   console.log("filter colummn date", tax);

//   console.log("filtering Datas >>>>>>>>>>>", filtering);

//   const filteredColumnsData = {};

//   const filtersHead = [
//     "name",
//     "totalMoneyRaised",
//     "status",
//     "donationRate",
//     "orgFile",
//     "createdAt",
//   ];

//   filtersHead.forEach((filter) => {
//     const filteredArray = filters.filter((item) => item[filter]);
//     filteredColumnsData[filter] = filteredArray.length;
//   });

//   console.log("Filtered Column Lengths:", filteredColumnsData);
//   // console.log("Filtered Column Lengths:", filteredColumnsData[name]);



//   const handleFilterChange = (e) => {
//     console.log("Event:", e);

//     const { name, group, date, paid, status, tax, donation ,id} = e; // Destructure the properties from the event object

//     // Update the filters state array with a new object containing the properties
//     setFilters((prevFilters ) => {
//       // Filter out entries with undefined or null values for any required property
//       const filteredPrevFilters = prevFilters.filter(
//         (filter) =>
//           filter.name !== undefined &&
//           filter.date !== undefined &&
//           filter.group !== undefined &&
//           filter.paid !== undefined &&
//           filter.status !== undefined &&
//           filter.tax !== undefined &&
//           filter.donation !== undefined &&
//           filter.id !== undefined
//       );

//       // Check if the filter with the same name and date already exists in the array
//       const isDuplicate = filteredPrevFilters.some(
//         (filter) => filter.name === name && filter.date === date
//       );

//       // Add a new filter object if it's not a duplicate and all required properties are defined
//       if (
//         !isDuplicate &&
//         name !== undefined &&
//         date !== undefined &&
//         group !== undefined &&
//         paid !== undefined &&
//         status !== undefined &&
//         tax !== undefined &&
//         donation !== undefined &&
//         id !== undefined 
//       ) {
//         return [
//           ...filteredPrevFilters,
//           {
//             status: status,
//             date: date,
//             name: name,
//             group: group,
//             tax: tax,
//             paid: paid,
//             donation: donation,
//             id
//           },
//         ];
//       } else {
//         return filteredPrevFilters; // Return the filtered previous filters if it's a duplicate or any required property is undefined
//       }
//     });

//     console.log("Filter CustomizedTables", filters);
//   };

//   // Function to remove items from original data based on filtered data
//   const removeFilteredItems = (replacedData, filters) => {
//     // Get the names of items in replacedData
//     const filteredNames = filters.map((item) => item.name);

//     // Filter out items from originalData that are not present in replacedData
//     const updatedOriginalData = replacedData.filter((item) =>
//       filteredNames.includes(item.name)
//     );

//     return updatedOriginalData;
//   };

//   // Remove items from original data
//   const updatedOriginalData = removeFilteredItems(replacedData, filters);

//   // useEffect(() => {
//   //   setFilteredRows(replacedData);
//   // }, [rowsData]);

//   const columns = [
//     { id: "status", label: "Status" },
//     { id: "date", label: "Date" },
//     { id: "fundraiser", label: "Fundraiser" },
//     { id: "group", label: "Group" },
//     { id: "donation", label: "Donation" },
//     { id: "tax", label: "Tax" },
//     { id: "paid", label: "Paid" },
//   ];

//   const handleRequestSort = (event, property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };



//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleChangeDense = (event) => {
//     setDense(event.target.checked);
//   };

//   const emptyRows =
//     page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsData.length) : 0;



//   useEffect(() => {
//     const sortedRows = stableSort(filteredData, getComparator(order, orderBy));
//     setFilteredData(sortedRows);
//   }, [orderBy, order]);

//   const handleGetFilterId = (event) => {
//     setSelectFilterColumn(event);
//   };

//   const reducedArray = filtering.map((item) => {
//     const reducedItem = {};

//     columnHead.forEach((column) => {
//       if (column.dataIndex in item) {
//         reducedItem[column.dataIndex] = item[column.dataIndex];
//       }
//     });

//     return reducedItem;
//   });

//   console.log("Reduced Array:", reducedArray);



//     const filterData = useMemo(() => {
//       return () => {
//           const newFilteredData = replacedData.filter(item => {
//               return !filtering.some(filterItem => {
//                   const filterKey = Object.keys(filterItem)[0];
//                   return item[filterKey] === filterItem[filterKey];
//               });
//           });
//           setFilteredData(newFilteredData);
//       };
//   }, [replacedData, filtering]);




// useEffect(()=>{
//   filterData()

// },[replacedData <= 1,filtering])




// console.log("Unfiltered Data:", filteredData);


//   return (
//     <Fragment>
//       <TableContainer component={Paper} sx={{ minHeight: "40vh" }}>
//         <Table
//           sx={{ minWidth: 700 }}
//           aria-label="customized table"
//           id={actionId}
//         >
//           <CustomTableHead
//             numSelected={selected.length}
//             order={order}
//             orderBy={orderBy}
//             onRequestSort={handleRequestSort}
//             onRequestFilter={filterData}
//             // onRequestFilter={filterData}

//             onRequesthandleFilterChange={handleFilterChange}
//             rowCount={replacedData.length}
//             columnHead={columnHead}
//             filteredRows={filteredRows}
//             setFilteredRows={setFilteredRows}
//             filteringColumnData={filteringColumnData}
//             selectFilterColumn={selectFilterColumn}
//             setFilterItemRemoveId={setFilterItemRemoveId}
//             filteredItems={filteredItems}
//             setFilterStatus={setFilterStatus}
//             rowsData={replacedData}
//             unqiueFilterMenu={fundraisers}
//             filters={filters}
//             filterColumns={filterColumns}
//             filtering={filtering}
//             setFiltering={setFiltering}
//             setFilters={setFilters}
//             filteredData={filteredData}
//             setFilteredData={setFilteredData}
//           />
//           <TableBody>
//             {
            
//           filteredData
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row, index) => {
//                 // const isItemSelected = isSelected(row.id);
//                 const labelId = `enhanced-table-checkbox-${index}`;
//                 return (
//                   <StyledTableRow
//                     hover
//                     // onClick={(event) => handleClick(event, row.id)}
//                     role="checkbox"
//                     // aria-checked={isItemSelected}
//                     tabIndex={-1}
//                     key={row.id}
//                     alignItem="left"
           
//                   >
//                     {/* {console.log("row.id",row.id)} */}
//                     {columnHead.map((column, columnIndex) => (
//                       <StyledTableCell
//                         key={columnIndex}
//                         alignItems="left"
//                         sx={{
//                           maxWidth: "16.67vw" /* Set your desired width */,
//                           whiteSpace: "nowrap",
//                           overflow: "hidden",
//                           textOverflow: "ellipsis",
//                         }}
//                       >
//                         <Box
//                           component={column.component}

//                           // href={column?.link}
//                           href={`${column.link}${row.id}`}


//                           sx={{
//                             fontFamily: "poppins",
//                             fontSize: "16px",
//                             alignItems: "left",
//                           }}
//                         >
//                           {column.id === "tax" ? (
//                             row.tax ? (
//                               <a href={row.tax} download>
//                                 <img
//                                   style={{ cursor: "pointer" }}
//                                   src={"/Vector.svg"}
//                                 />
//                               </a>
//                             ) : null
//                           ) : (
//                             row[column.id]
//                           )}
//                         </Box>
//                       </StyledTableCell>
//                     ))}
//                   </StyledTableRow>
//                 );
//               })}
//             {emptyRows > 0 && (
//               <StyledTableRow
//                 style={{
//                   width:"100%"
//                 }}
//               >
//                 <TableCell colSpan={8} alignItem="center" justifyContent="center">
//                 empty No Data

//                 </TableCell>
                
               



//               </StyledTableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       {/* <CustomPagination /> */}

//       <Stack justifyContent="center">
//         <StyledTablePagination
//           sx={{ alignItems: "center", my: 2, display: "flex" }}
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div" 
//           // className={classes.pagination}
//           count={filteredRows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Stack>
//     </Fragment>
//   );
// }

