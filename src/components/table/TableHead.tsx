"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";

import PropTypes from "prop-types";
import { visuallyHidden } from "@mui/utils";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { StyledIcon, StyledStack, StyledTableCell } from "./TableStyles";
import { Box, Popover, TableSortLabel } from "@mui/material";
import iconify from "../iconify";
import CustomTableFilter from "./TableFilter";
import { useEffect } from "react";
import { useState } from "react";

export default function CustomTableHead(props) {
  const {
    columnHead,
    filteredRows,
    setFilterItemRemoveId,
    filteredItems,
    setFilteredRows,
  } = props;

  const {
    rowsData,
    onSelectAllClick,
    setFilterStatus,
    filterStatus,
    filters,
    order,
    orderBy,
    numSelected,
    onRequestSort,
    onRequestFilter,
    unqiueFilterMenu,
    onRequesthandleFilterChange,
    filtering,
    setFiltering,
    setFilters,
    setFilteredData,
    filteredData,
    replacedData
  } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilterId, setSelectedFilterId] = useState("");
  const [isFilterSelected, setIsFilterSelected] = useState(false);

  const [filteringColumnId, setFilteringColumnId] = useState("");

  const [filteredColumns, setFilteredColumns] = useState([]);

  const [filterMenuRender,setFilterMenuRender] =useState(false);



  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  function filterData(filteredRows, filterValues) {
    return filteredRows.filter((item) => {
      // Check if the item contains the value of headCell.id in its keys
      return Object.keys(item).some((key) => filterValues.includes(key));
    });
  }

  const handleClickPoppup = (event, headCell) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation(); // Prevent event bubbling
    const { id, dataIndex } = headCell; // Extract dataIndex from headCell

    // Toggle selection state based on clicked dataIndex
    setIsFilterSelected(
      dataIndex === selectedFilterId ? !isFilterSelected : true
    );
    setSelectedFilterId(dataIndex);

    setFilteringColumnId(id);

    setFilteredColumns((prevColumns) => [...prevColumns, headCell.id]);


    // Perform any logic based on dataIndex if needed
    console.log("Selected filter for dataIndex:", dataIndex);
    console.log("Selected filter for dataIndex:", filteringColumnId);
  };

  const uniqueValues = new Set(
    filteredRows.map((item) => item[filteringColumnId])
  );
  const filterstatus = [...uniqueValues][uniqueValues];

  console.log("filterstatus", uniqueValues);

  const handleClosePoppup = () => {
    setAnchorEl(null);
    setIsFilterSelected(false);
    setSelectedFilterId(""); // Reset selected filter id
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const filteredColumnLengths = {};

  columnHead.forEach(column => {
      const columnId = column.id;
      const filter = filtering.find(filter => filter.id === columnId);
      if (filter) {
          const filteredData = filters.filter(filterItem => filter.value.includes(filterItem[columnId]));
          filteredColumnLengths[columnId] = filteredData.length;
      } else {
          filteredColumnLengths[columnId] = filters.length;
      }
  });



    // Separate columns into arrays
const names = [];
const group = [];
const status = [];
const donation = [];
const paid = [];
const tax = [];
const date = [];

filters.forEach(filter => {
    names.push(filter.name);
    group.push(filter.group);
    status.push(filter.status);
    donation.push(filter.donation);
    paid.push(filter.paid);
    date.push(filter.date);
});


  // console.log("Filtered Column Lengths columnHead:", filteredColumnLengths);




  const counts = {};

  columnHead.forEach(column => {
    counts[column.id] = filtering.filter(item => column.dataIndex in item).length;
});


// console.log("Counts:", counts);



  return (
    <TableHead>
      <TableRow>
        {columnHead.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align="center"
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <StyledStack direction="row" justifyContent="space-between">
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>

              <StyledIcon
                aria-describedby={id}
                onClick={(e) =>{ handleClickPoppup(e, headCell), counts[headCell.id]  
                }}
              >
                
                
                
                {
                
                counts[headCell.id] === 0 ? (        
                  
                  
                  
                  
                  <Iconify
            icon={headCell.iconFilter}
         
            sx={{
              ml: 1,
              width: 18,
              height: 18,
              color:
                selectedFilterId === headCell.dataIndex
                  ? "#FFFFFF"
                  : "#0D6EFD",
              backgroundColor:
                selectedFilterId === headCell.dataIndex
                  ? "#0D6EFD"
                  : "",
              borderRadius: "3px",
              "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#0D6EFD",
                padding: "2px",
                borderRadius: "3px",
              },
            }}







          />
        ) : (
          <Iconify
            icon={headCell.iconFunnel}
                    sx={{
              ml: 1,
              width: 18,
              height: 18,
              color: counts[headCell.id] ?"#0D6EFD" : "#0D6EFD" ,
              backgroundColor: counts[headCell.id] ?"#FFFFFF" : "#FFFFFF",
              borderRadius: "3px",
              "&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#0D6EFD",
                padding: "2px",
                borderRadius: "3px",
              },
            }}
          />
        )}
              </StyledIcon>

              
              {selectedFilterId === headCell.dataIndex && (
                <Popover
                  key={headCell.id}
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClosePoppup}
                  anchorOrigin={{
                    vertical: `${headCell.anchorOriginVertical}`,
                    horizontal: `${headCell.anchorOriginHorizontal}`,
                  }}

                  sx={{ boxShadow: 'none' }}
                >
                  <CustomTableFilter


                    filteringColumnId={filteringColumnId}
                    onRequestFilter={onRequestFilter}
                    setFilterItemRemoveId={setFilterItemRemoveId}
                    filteredItems={filteredItems}
                    setFilteredRows={setFilteredRows}
                    rowsData={rowsData}
                    unqiueFilterMenu={unqiueFilterMenu}
                    onRequestClosePoppup={handleClosePoppup}
                    onRequesthandleFilterChange={onRequesthandleFilterChange}
                    filters={filters}
                    filteredRows={filteredRows}
                    setFiltering={setFiltering}
                    setFilters={setFilters}
                    setFilterMenuRender={setFilterMenuRender}
                    filterMenuRender={filterMenuRender}
                    setFilteredData={setFilteredData}
                    filteredData={filteredData}
                    replacedData={replacedData}

                  />
                </Popover>
              )}
            </StyledStack>
          </StyledTableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

CustomTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
