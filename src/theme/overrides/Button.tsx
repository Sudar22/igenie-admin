import { alpha } from '@mui/material/styles';
// Import the Theme type from MUI
// import { Theme } from './extendedTheme';
// import { Theme } from '@mui/material/styles';
// import { Theme as MuiTheme } from '@mui/material/styles';
// import customShadows from './customShadows';
import { Theme } from './extendedTheme';


// ----------------------------------------------------------------------


// Extend the MuiTheme type to include the customShadows property
// interface Theme extends MuiTheme {
//   customShadows: {
//     z1: string;
//     z4: string;
//     z8: string;
//     z12: string;
//     z16: string;
//     z20: string;
//     z24: string;
//     primary: string;
//     info: string;
//     secondary: string;
//     success: string;
//     warning: string;
//     error: string;
//     card: string;
//     dialog: string;
//     dropdown: string;
//   };
// }

export default function Button(theme:Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
