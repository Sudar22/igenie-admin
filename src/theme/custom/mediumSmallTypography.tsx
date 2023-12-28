
// export default function MediumSmallTypography() {
//   return (


//   )
// }


   import { Typography } from "@mui/material"
import { Fragment } from "react"

interface MediumSmallTypographyProps {
    text: string;
}

export const MediumSmallTypography: React.FC<MediumSmallTypographyProps> = ({ text }) => {
    return (
        <Fragment>
            <Typography >
                {
                    text
                }
            </Typography>
        </Fragment>
    )
}