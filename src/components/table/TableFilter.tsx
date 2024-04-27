// import {
//   Box,
//   Button,
//   FormControl,
//   FormControlLabel,
//   OutlinedInput,
//   Stack,
//   Typography,
// } from "@mui/material";
// import Checkbox from "@mui/material/Checkbox";
// import Iconify from "../iconify/Iconify";
// import React, { useMemo, useState } from "react";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// export default function CustomTableFilter(props) {
//   const {
//     rowsData,
//     filteringColumnId,
//     onRequestFilter,
//     setFilterItemRemoveId,
//     filteredItems,
//     onRequestClosePoppup,
//     setFilteredRows,
//     filterColumns,
//     onRequesthandleFilterChange,
//     filters,
//     setFiltering,
//     setFilters,
//     filteredData,
//     setFilteredData,
//     replacedData,
//   } = props;

//   console.log("filteredData from table filter", filteredData);

//   const initialSelectedItems = useMemo(() => {
//     return Object.fromEntries(
//       rowsData.map((item) => [item[filteringColumnId], true])
//     );
//   }, [rowsData, filteringColumnId]);

//   const [selectedItems, setSelectedItems] = useState(initialSelectedItems);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [filterMenuRender, setFilterMenuRender] = useState(false);
//   const [filterDataAdd, setFilterDataAdd] = useState();
//   const [keyValue, setKeyValue] = useState({});


//   // Function to handle the clear selection option

//   const uniqueData = {};

//   (filters.length === 0 ? rowsData : filteredData)
//   .forEach((item) => {
//     if (!uniqueData.hasOwnProperty(item[filteringColumnId])) {
//       uniqueData[item[filteringColumnId]] = item;
//     }
//   });



//   const handleSearch = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     const filteredUniqueData = Object.values(uniqueData).filter((item) =>
//       item[filteringColumnId].toLowerCase().includes(term.toLowerCase())
//     );

//     setSearchResults(filteredUniqueData);
//   };

//   const handleCheckboxChange = (value) => (event) => {
//     const isChecked = event.target.checked;
//     setSelectedItems((prevSelectedItems) => ({
//       ...prevSelectedItems,
//       [value]: isChecked,
//     }));

//   };


//   const createFilterItem = (value) => () => {
//     setFiltering((prev) => {
//       const newState = [...prev];
//       newState.push(value);
//       return newState;
//     });
//   };

//   const selectAll = () => {
//     const allItemsSelected = {};
//     rowsData.forEach((item) => {
//       allItemsSelected[item[filteringColumnId]] = true;
//     });
//     setSelectedItems(allItemsSelected);
//     setFilteredData([replacedData]);
//     onRequestFilter();
//   };

//   const clearFilterItems = () => {
//     // setSelectedItems({})

//     const allItemsSelected = {};
//     rowsData.forEach((item ) => {
//       allItemsSelected[item[filteringColumnId]] = false;
//     });
//     setSelectedItems(allItemsSelected);
//     createFilterItem(keyValue)();

//   };

//   const handleOkButtonClick = () => {
//     const selectedIds = Object.keys(selectedItems).filter(
//       (key) => selectedItems[key]
//     );

//     createFilterItem(keyValue)();

//     // if(filters.length ==0)


//     // setSelectedItems((prevSelectedItems) => ({
//     //   ...prevSelectedItems,
//     //   [value]: isChecked,
//     // }));
//     // setFilterItemRemoveId(selectedIds);
//     onRequestClosePoppup();
//     onRequesthandleFilterChange(filterDataAdd);

//   };

//   return (
//     <React.Fragment>
//       <Stack
//         sx={{
//           width: "250px",
//           display: "flex",
//           padding: "15px",
//           justifyContent: "space-around",
//           alignItems: "left",
//           gap: "5px",
//         }}
//       >
//         <Box>
//           <Typography
//             component="a"
//             sx={{ fontFamily: "poppins", fontSize: "px" }}
//             onClick={selectAll}
//           >
//             {" "}
//             Select all{" "}
//           </Typography>
//           <Typography
//             component="a"
//             sx={{ fontFamily: "poppins", fontSize: "px" }}
//             onClick={clearFilterItems}
//           >
//             - Clear{" "}
//           </Typography>
//         </Box>

//         <Stack>
//           <FormControl
//             sx={{ width: "100%", marginTop: "1vh" }}
//             size="small"
//             variant="outlined"
//           >
//             <OutlinedInput
//               id="outlined-adornment-weight"
//               endAdornment={<Iconify icon="ic:sharp-search" />}
//               aria-describedby="outlined-weight-helper-text"
//               inputProps={{
//                 "aria-label": "weight",
//               }}
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//           </FormControl>

//           <Stack
//             sx={{
//               height: "25vh",
//               overflowY: "scroll",
//               marginTop: "1.2vh",
//               marginLeft: ".5vw",
//               padding: "0.8vw",
//               "& > *": {
//                 scrollbarWidth: "thin",
//                 scrollbarColor: "rgba(0,0,0,.1) rgba(0,0,0,0)",
//               },
//               "&::-webkit-scrollbar": {
//                 width: "1px",
//               },
//               "&::-webkit-scrollbar-track": {
//                 background: "rgba(0,0,0,0)",
//               },
//               "&::-webkit-scrollbar-thumb": {
//                 backgroundColor: "rgba(0,0,0,.1)",
//                 borderRadius: "3px",
//               },
//             }}
//           >
//             {searchTerm
//               ? searchResults.map((item, index) => (
//                   <Stack
//                     direction="row"
//                     key={index}
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       "&:hover": {
//                         backgroundColor: "#E0E0E0",
//                       },
//                     }}
//                   >
//                     {/* Rendering the filtered items */}
//                     <Box>
//                       <FormControlLabel
//                         label={item[filteringColumnId]}
//                         control={
//                           <Checkbox
//                             checked={selectedItems[item[filteringColumnId]] || true }
//                             onChange={(event) =>
//                               handleCheckboxChange(item[filteringColumnId])(
//                                 event
//                               )
//                             }
//                             sx={{
//                               color: "#FFFFFF",
//                               borderColor: "#FFFFFF",
//                               border: "none",
//                             }}
//                             icon={
//                               <Box margin="1.35vh">
//                                 <Iconify
//                                   icon="fluent-emoji-flat:white-circle "
//                                   sx={{
//                                     color: "#FFFFF",
//                                     opacity: 0.8,
//                                   }}
//                                 />
//                               </Box>
//                             }
//                             checkedIcon={
//                               <Iconify
//                                 icon="ic:outline-check"
//                                 sx={{
//                                   color: "#202124",
//                                   opacity: 0.8,
//                                 }}
//                               />
//                             }
//                           />
//                         }
//                       />
//                     </Box>
//                   </Stack>
//                 ))
//               : Object.values(uniqueData)?.map((item, index) => (
//                   <Stack
//                     direction="row"
//                     key={index}
//                     sx={{
//                       display: "flex",

//                       alignItems: "center",
//                       "&:hover": {
//                         backgroundColor: "#E0E0E0",
//                       },
//                     }}
//                   >
               
//                     <Box>
//                       {
//                         <FormControlLabel
//                           label={item[filteringColumnId]}
//                           control={
//                             <Checkbox
//                               checked={selectedItems[item[filteringColumnId]]}
//                               onChange={(event) => {
//                                 const keyValue = {
//                                   [filteringColumnId]: item[filteringColumnId],
//                                 };
//                                 handleCheckboxChange(item[filteringColumnId])(
//                                   event
//                                 );
//                                 // createFilterItem(keyValue)();
//                                 setKeyValue(keyValue);
//                                 setFilterDataAdd(item);
//                               }}
//                               // Pass the name of the filter as an argument

//                               sx={{
//                                 color: "#FFFFFF",
//                                 borderColor: "#FFFFFF",
//                                 border: "none",
//                               }}
//                               icon={
//                                 <Box margin="1.35vh">
//                                   <Iconify
//                                     icon="fluent-emoji-flat:white-circle "
//                                     sx={{
//                                       color: "#FFFFF",
//                                       opacity: 0.8,
//                                     }}
//                                   />
//                                 </Box>
//                               }
//                               checkedIcon={
//                                 <Iconify
//                                   icon="ic:outline-check"
//                                   sx={{
//                                     color: "#202124",
//                                     opacity: 0.8,
//                                   }}
//                                 />
//                               }
//                             />
//                           }
//                         />
//                       }
//                     </Box>
//                   </Stack>
//                 ))}
//             {/* {Object.keys(selectedItems).map((key, index) => (
//   <Box
//     key={index}
//     sx={{
//       marginLeft: "38px",
//       mt: "10px",
//       border: "1px solid black", // Fixed typo in 'solid'
//     }}
//   >
//     {selectedItems[key] && <span>{key}</span>}

//   </Box>
// ))} */}

//             {filters?.map((item, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   marginLeft: "38px",
//                   mt: "10px",
//                   border: "1px boild black",
//                 }}
//               >
//                 {item[filteringColumnId]}
//               </Box>
//             ))}
//           </Stack>
//         </Stack>

//         <Box
//           sx={{
//             flexGrow: 1,
//             marginTop: "2vh",
//             marginBottom: "1.8vh",
//             backgroundColor: "#202124",
//             width: "100%",
//             height: ".5px",
//             opacity: 0.2,
//           }}
//         ></Box>

//         <Stack
//           sx={{
//             display: "flex",
//             alignItems: "flex-end",
//             flexDirection: "row",
//             gap: "3px",
//             marginLeft: "5rem",
//           }}
//         >
//           <Button
//             size="small"
//             variant="outlined"
//             onClick={onRequestClosePoppup}
//           >
//             Cancel
//           </Button>
//           <Button
//             size="small"
//             variant="contained"
//             sx={{ backgroundColor: "#0D6EFD" }}
//             onClick={handleOkButtonClick}
//           >
//             Ok
//           </Button>
//         </Stack>
//       </Stack>
//     </React.Fragment>
//   );
// }
