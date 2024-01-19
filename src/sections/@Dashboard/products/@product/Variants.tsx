import React, { useState } from 'react';
import { styled, alpha, Theme } from '@mui/material/styles';
import { Button, Card, Container, Divider, IconButton, OutlinedInput, Stack, Tooltip, Typography } from '@mui/material';
import Iconify from '../../../../components/iconify';
import { Link } from 'react-router-dom';


const StyledRoot = styled('div')(({ theme }: { theme: Theme }) => ({

    width: 700,
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'space-between',
    padding: theme.spacing(0, 0, 0, 0),

    margin: theme.spacing(2.5, 0, 0, 0),

}));
const StyledInputBox = styled('div')(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'space-between',
    padding: theme.spacing(1, 4, 1, 4),

    margin: theme.spacing(0, 0, 0, 0),

}));
const StyledHead = styled('div')(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: theme.spacing(2, 0, 0, 1.5),

    margin: theme.spacing(0, 0, 1, 0),

}));
const StyledOption = styled('div')(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0, 0, 0, 0),

    margin: theme.spacing(0, 0, 1, 0),

}));

const StyledSearch = styled(OutlinedInput)(({ theme }: { theme: Theme }) => ({
    width: 580,
    height: 40,
    margin: theme.spacing(0, 0, 2, 0),
    transition: theme.transitions.create(['box-shadow', 'width'], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
    '&.Mui-focused': {
        //   width: 350,
        boxShadow: theme.customShadows.z8,
    },
    '& fieldset': {
        borderWidth: `1px !important`,
        borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
    },
}));




export function Option() {

    return (
        <StyledInputBox>
            <StyledOption>
                <Stack>
                    <Typography variant='subtitle1' component='h6' fontSize='24'>
                        Option name
                    </Typography>
                    <StyledSearch />
                </Stack>


                <Stack>
                    <Tooltip title="delete">
                        <IconButton  >
                            <Iconify icon="material-symbols:delete-outline" sx={{ width: 25, height: 25 }} />
                        </IconButton>

                    </Tooltip>
                </Stack>


            </StyledOption>
            <StyledOption>
                <Stack>
                    <Typography variant='subtitle1' component='h6' fontSize='24'>
                        Option values
                    </Typography>
                    <StyledSearch />
                </Stack>



            </StyledOption>

            <Stack >
                <Button>
                    done
                </Button>
            </Stack>
            <Divider/>
        </StyledInputBox>

    )

};


export default function Variants() {

    // const [add,setAdd]=useState<Boolean>(false);



    return (
        <StyledRoot>



            <Card>
                <StyledHead>
                    <Typography variant='subtitle1' component='h6' fontSize='24' fontWeight='bold'>
                        Variant
                    </Typography>


                </StyledHead>


                <Stack direction="row" pl={2} justifyContent="center">
                    <Tooltip title="add">
                        <IconButton  >
                            <Iconify icon="carbon:add" sx={{ width: 25, height: 25 }} />
                        </IconButton>

                    </Tooltip>

                    <Button> add  options like size or color </Button>


                </Stack>




                <Option />
                <Option />


                <Divider />



                <Stack>
                    <Button>add anthor option </Button>

                </Stack>
            </Card>






        </StyledRoot>

        // <div>hello</div>
    )
}
