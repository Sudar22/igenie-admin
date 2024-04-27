import { Box, Grid, Paper, TextField } from "@mui/material";
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



//customhooks
import { useInput } from "../../../../../hooks/useInput";



const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        [{ size: [] }],
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




export default function ProductDescriptionEdit() {

    const [value, setValue] = useState('');

    const inputProps = useInput("");



    return (
        <Box



        >

            <Paper square={false}>

                <Grid container
                    sx={{
                        width: "40vw",
                        height: "45vh",
                        flexDirection: "column"




                    }}
                >
                    {/* <Input values="title" label="Title" /> */}

                    <TextField

                        // label="Title"

                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                        onChange={inputProps.onChange}

                        value={inputProps.value}

                    />


                    <ReactQuill theme="snow" value={value} onChange={setValue} modules={modules} />


                </Grid>



                {/* <Grid >
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }} />
                </Grid> */}

            </Paper>




        </Box>
    )
}
