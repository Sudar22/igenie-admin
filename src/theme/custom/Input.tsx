import { Fragment } from 'react';
import TextField from '@mui/material/TextField';
import { MediumSmallTypography } from './mediumSmallTypography';
import { useInput } from '../../hooks/useInput';

interface InputProps {
    values: string;
    label: string;

}

export const Input: React.FC<InputProps> = ({ values, label }) => {


    const inputProps = useInput("");

    return (
        <Fragment>

            {/* <MediumSmallTypography text={label} /> */}


            {/* <Input/> */}

            <TextField
                id="outlined-size-small"
                defaultValue={values}
                size="small"
                onChange={inputProps.onChange}

                value={inputProps.value}

            />


        </Fragment>
    )
}
