// ----------------------------------------------------------------------
// Import the Theme type from MUI
import { Theme } from '@mui/material/styles';

// export default function Table(theme:Theme) {
//     return {
//       MuiTableCell: {
//         styleOverrides: {
//           head: {
//             color: theme.palette.text.secondary,
//             backgroundColor: theme.palette.background.neutral,
//           },
//         },
//       },
//     };
//   }
  



export default function Table(theme: Theme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.default, // Use default instead of neutral
        },
      },
    },
  };
}
