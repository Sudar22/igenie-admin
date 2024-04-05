import * as React from 'react';
import { styled } from '@mui/material/styles';

import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledIcon, StyledStack, StyledTableCell } from './TableStyles';
import { Box, Popover, TableSortLabel } from '@mui/material';
import Iconify from 'app/icons/Iconify';
import CustomTableFilter from './TableFilter';




export default function CustomTableHead(props) {



  const { rowHeadDataCell, filteredRows, setFilterItemRemoveId, filteredItems } = props;

  const { onSelectAllClick, order, orderBy, numSelected, onRequestSort, onRequestFilter } = props;



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedFilterId, setSelectedFilterId] = React.useState("");
  const [isFilterSelected, setIsFilterSelected] = React.useState(false);

  const [filteringColumnId, setFilteringColumnId] = React.useState("");

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };






  const handleClickPoppup = (event, headCell) => {
    setAnchorEl(event.currentTarget);
    event.stopPropagation(); // Prevent event bubbling
    const { id, dataIndex } = headCell; // Extract dataIndex from headCell

    // Toggle selection state based on clicked dataIndex
    setIsFilterSelected(dataIndex === selectedFilterId ? !isFilterSelected : true);
    setSelectedFilterId(dataIndex);

    setFilteringColumnId(id);


    // Perform any logic based on dataIndex if needed
    console.log('Selected filter for dataIndex:', dataIndex);
    console.log('Selected filter for dataIndex:', filteringColumnId);

  };

  const handleClosePoppup = () => {
    setAnchorEl(null);
    setIsFilterSelected(false);
    setSelectedFilterId(""); // Reset selected filter id
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <TableHead>
      <TableRow>
        {rowHeadDataCell.map((headCell) => (
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
                    {order === "desc" ? "sorted descending" : "sorted ascending"}
                  </Box>
                ) : null}
              </TableSortLabel>

              <StyledIcon aria-describedby={id} onClick={(e) => handleClickPoppup(e, headCell)}>


                {

                  filteredItems?.length  == 0 ? 
                  
                  <Iconify
                    icon={headCell.iconFilter}
                    sx={{
                      ml: 1,
                      width: 18,
                      height: 18,
                      color: selectedFilterId === headCell.dataIndex ? "#FFFFFF" : "#0D6EFD",
                      backgroundColor: selectedFilterId === headCell.dataIndex ? "#0D6EFD" : "",
                      borderRadius: "3px",
                      "&:hover": {
                        color: "#FFFFFF",
                        backgroundColor: "#0D6EFD",
                        padding: "2px",
                        borderRadius: "3px",
                      },
                    }}
                  />

                    :

                    <Iconify
                      icon={headCell.iconFunnel}
                      sx={{
                        ml: 1,
                        width: 18,
                        height: 18,
                        color: selectedFilterId === headCell.dataIndex ? "#FFFFFF" : "#0D6EFD",
                        backgroundColor: selectedFilterId === headCell.dataIndex ? "#0D6EFD" : "",
                        borderRadius: "3px",
                        "&:hover": {
                          color: "#FFFFFF",
                          backgroundColor: "#0D6EFD",
                          padding: "2px",
                          borderRadius: "3px",
                        },
                      }}
                    />
                    
                    }





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

                    onRequestClosePoppup={handleClosePoppup}

                    filteredRows={filteredRows}

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
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};
