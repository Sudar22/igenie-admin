

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TablePagination from "@mui/material/TablePagination";
import Iconify from "app/icons/Iconify";
import Popover from '@mui/material/Popover';

import Checkbox from '@mui/material/Checkbox';

import TextField from '@mui/material/TextField';
import { Box, Stack, Typography } from "@mui/material";


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#FAFAFA",
        height: "50px",
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledStack = styled(Stack)(({ theme }) => ({
    // paddingRight:"8px",
    // borderRight:"1px solid #F0F0F0"
}));
export const StyledIcon = styled(Box)(({ theme }) => ({
    paddingRight: "8px",
    borderRight: "1px solid #F0F0F0",
}));
export const StyledTypography = styled(Typography)(({ theme }) => ({

    fontSize: "14px",
    fontFamily: "poppins",
    padding: theme.spacing(.5, 0)

}));

export const StyledStackDropdown = styled(Stack)(({ theme }) => ({
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    maxwidth: "120px",
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        // backgroundColor: theme.palette.action.hover,
    },

    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },

    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
        boxShadow: 0,
    },
}));
