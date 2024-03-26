import { Box, Button, FormControl, OutlinedInput, Popover, Stack, Typography } from '@mui/material'
import Iconify from 'app/icons/Iconify'
import React from 'react';
import Checkbox from '@mui/material/Checkbox';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function CustomTableFilter(props) {


    const { filteredData, iconStatus, filteredRows, filteringColumnId, onRequestFilter, setFilterItemRemoveId, filteredItems, onRequestClosePoppup } = props;



    const createFilterItem = (property) => (event) => {

        setFilterItemRemoveId(property)

        onRequestFilter(event, property);

        console.log("onRequestFilter", property)
    };

    const okFilterItem = (property) => (event) => {
        onRequestClosePoppup(event, property)
    };
    const cancelFilterItem = (property) => (event) => {
        onRequestClosePoppup(event, property)
    };


    return (
        <React.Fragment>
            <Stack sx={{
                width: "250px",
                display: "flex",
                padding: "15px",
                justifyContent: "space-around",
                alignItems: "left",
                gap: "5px"

            }} >
                <Box >

                    <Typography component="a" sx={{ fontFamily: "poppins", fontSize: "px" }}>  Select all </Typography>
                    <Typography component="a" sx={{ fontFamily: "poppins", fontSize: "px" }}>  - Clear </Typography>

                </Box>

                <Stack>

                    <FormControl sx={{ width: '100%', marginTop: "1vh" }} size="small" variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<Iconify icon="ic:sharp-search" />}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>






                    <Stack sx={{
                        height: "25vh",
                        overflowY: "scroll",
                        marginTop: "1.2vh",
                        marginLeft: ".5vw",
                        padding: "0.8vw",
                        '& > *': {
                            scrollbarWidth: 'thin',
                            scrollbarColor: 'rgba(0,0,0,.1) rgba(0,0,0,0)',
                        },
                        '&::-webkit-scrollbar': {
                            width: '1px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'rgba(0,0,0,0)',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0,0,0,.1)',
                            borderRadius: '3px',
                        }
                    }}>


                        {filteredRows?.map((item, index) => (<Stack direction="row" key={index}

                            onClick={createFilterItem(item.id)}

                            sx={{
                                display: "flex",

                                alignItems: "center",
                                "&:hover": {
                                    // color: "#FFFFFF",
                                    backgroundColor: "#E0E0E0",
                                },

                            }}>

                            <Box >


                                <Box sx={{ flexGrow: 1 }}></Box>




                                <Checkbox {...label} icon={

                                    <Iconify
                                        icon="ic:outline-check"

                                        sx={{
                                            ml: 1,
                                            width: 18,
                                            height: 18,
                                            color: "#202124",
                                            opacity: .8,
                                            padding: filteringColumnId ? "0px" : "10px",
                                            margin: ".5vw",

                                        }}


                                    />}

                                    checkedIcon=


                                    {

                                        <Iconify
                                            icon="fluent-emoji-flat:white-circle"

                                            sx={{
                                                ml: 1,
                                                width: 18,
                                                height: 18,
                                                color: "#FFFFF",
                                                opacity: .8,
                                                padding:"15px",
                                                margin: ".2vw",

                                            }}


                                        />




                                    } />





                            </Box>

                            <Box>{item[filteringColumnId]}</Box>


                        </Stack>))}


                        {filteredItems?.map((item, index) => (<Box key={index}>{item[filteringColumnId]}</Box>))}


                    </Stack>


                </Stack>

                <Box sx={{ flexGrow: 1, marginTop: "2vh", marginBottom: "1.8vh", backgroundColor: "#202124", width: "100%", height: ".5px", opacity: .2 }}></Box>


                <Stack sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    flexDirection: "row",
                    gap: "3px",
                    marginLeft: "5rem"


                }}>
                    <Button size="small" variant="outlined" onClick={cancelFilterItem()}>Cancel</Button>
                    <Button size="small" variant="contained" sx={{ backgroundColor: "#0D6EFD" }} onClick={okFilterItem()}>Ok</Button>
                </Stack>

            </Stack>
        </React.Fragment>
    )
}
