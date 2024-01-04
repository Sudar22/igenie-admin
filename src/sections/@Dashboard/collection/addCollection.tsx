import { Button, Card, Container, IconButton, OutlinedInput, Stack, Tooltip, Typography } from '@mui/material';
import { Box, Grid, Paper, TextField } from "@mui/material";
import React ,{ useState, useRef } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DOMPurify from 'dompurify';
import { useInput } from '../../../hooks/useInput';
import { InputOutlined, Padding } from '@mui/icons-material';
import { styled, alpha, Theme } from '@mui/material/styles';
import 'react-quill/dist/quill.snow.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Iconify from '../../../components/iconify';
import { Link } from 'react-router-dom';






const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        // [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
        ["link", "image", "video"],
    ]
}

const StyledSearch = styled(OutlinedInput)(({ theme }: { theme: Theme }) => ({
    width: 660,
    height: 40,
    margin:theme.spacing(0,0,2,0),
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

const StyledRoot = styled('div')(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    // justifyContent: 'space-between',
    padding: theme.spacing(0, 1, 0, 1),
    margin: theme.spacing(0, 0, 0, 0),
}));


const StyledFrom = styled(FormControl)(({ theme }: { theme: Theme }) => ({
 width:130,
}));

const StyledButton = styled('div')(({ theme }: { theme: Theme }) => ({
  width: 180,
  flexDirection: 'row',
  display: 'inline-flex',
  justifyContent: 'space-between'

}));



const StyledReactQuill = styled(Paper)(({ theme }: { theme: Theme }) => ({
    '.ql-container': {
      width: 660,
      height: 350,
    //   boxShadow: theme.customShadows.z8,

    //   transition: 'box-shadow 0.3s ease-in-out', // Add a transition for a smooth effect
    //   '&:focus': {
    //     boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Add the desired box shadow when focused
    //   },

    },
    '.ql-editor': {
      border: 'none',
      transition: 'box-shadow 0.3s ease-in-out', // Add a transition for a smooth effect
      '&:focus': {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Add the desired box shadow when focused
      },
    },
    '.ql-toolbar': {
      width: 660,
      transition: 'box-shadow 0.3s ease-in-out', // Add a transition for a smooth effect
      
      margin:theme.spacing(0,10,0,0),

      '&:focus': {
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', // Add the desired box shadow when focused
      },
      

    },
  
    '&fieldset': {
      borderWidth: '1px !important',
      borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
    },
  }));
  


export default function AddCollection() {


    const [value, setValue] = useState('');

    const inputProps = useInput("");
    const quillRef = useRef(null);

    React.useEffect(() => {
        // Focus the editor when the component mounts
        if (quillRef.current) {
          quillRef.current.focus();
        }
      }, []);
    

      const [active, setActive] = React.useState('');

  const handleChange = (event) => {
    setActive(event.target.value);
  };



    return (
        <StyledRoot>

            <Container>

              {/* <Iconify icon="mdi:arrow-left" sx={{ color: 'text.disabled', width: 20, height: 20 }} /> */}

        <Box>
        <Tooltip title="back">
            <IconButton component={Link} to={'../products'} >
              <Iconify icon="mdi:arrow-left" sx={{ width: 30, height: 30 }} />
            </IconButton>
          </Tooltip>
        </Box>

                <Stack mb={3}>

            <Card>
              <Stack m={3} flexDirection="row" justifyContent="space-between" alignItems="center">

                <StyledFrom>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={active}
                      label="Status"
                      onChange={handleChange}
                    >

                      <MenuItem value={10}>Active</MenuItem>
                      <MenuItem value={20}>Draft</MenuItem>

                    </Select>
                  </FormControl>




                </StyledFrom>


                <Stack>
                  <Typography variant='h6' component='h6'>
                    Unsaved product
                  </Typography>

                </Stack>


                <StyledButton >
                  <Button variant="outlined"  color="primary">
                    Discord
                  </Button>
                  <Button variant="contained"  color="primary">
                    Saved
                  </Button>
                </StyledButton>




              </Stack>


                    </Card>
                </Stack>

                <Card >
                  <Stack p={5}>
                  <Typography>
                        Title
                    </Typography>
                    <StyledSearch />
                    <Stack>
                    <Typography>
                    Description
                    </Typography>
                        <StyledReactQuill>      
                               <ReactQuill  ref={quillRef} theme="snow" value={value} onChange={setValue} modules={modules} />
                        </StyledReactQuill>
                    </Stack>
                  </Stack>
                </Card >
               
            </Container>


        </StyledRoot>
    )
}
