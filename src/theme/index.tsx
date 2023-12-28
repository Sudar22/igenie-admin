// import { useMemo,ReactNode } from 'react';
// // @mui
// import { ThemeOptions, Theme } from '@mui/material/styles';
// import { CssBaseline } from '@mui/material';
// import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
// //
// import palette from './palette';
// import shadows from './shadows';
// import GlobalStyles from './globalStyles';
// import customShadows from './customShadows';
// import ComponentsOverrides from './overrides';

// // ----------------------------------------------------------------------

// interface ThemeProviderProps {
//     children?: ReactNode;
//   }
  
//   const ThemeProvider :  React.FC<ThemeProviderProps> = ({ children }) => {
//     const themeOptions :ThemeOptions = useMemo(
//       () => ({
//         palette,
//         shape: { borderRadius: 6 },
//         typography:{
//           "fontFamily": `"Roboto", "montserrat"`,
//           "fontSize": 14,
//           "fontWeightLight": 300,
//           "fontWeightRegular": 400,
//           "fontWeightMedium": 500
//          },
//         shadows:shadows() as Theme['shadows'],
//         customShadows: customShadows(),
//       }),
//       []
//     );
  
//     const theme = createTheme(themeOptions);
//     theme.components = ComponentsOverrides(theme);
  
//     return (
//       <StyledEngineProvider injectFirst>
//         <MUIThemeProvider theme={theme}>
//           <CssBaseline />
//           <GlobalStyles />
//           {children}
//         </MUIThemeProvider>
//       </StyledEngineProvider>
//     );
//   }
  
//   export default ThemeProvider 


import { useMemo, ReactNode } from 'react';
// @mui
import { ThemeOptions } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import palette from './palette';
import shadows from './shadows';
import GlobalStyles from './globalStyles';
import customShadows from './customShadows';
import ComponentsOverrides from './overrides/index'; // Adjust the import
import Theme from './overrides/extendedTheme'; // Adjust the import

// ----------------------------------------------------------------------

interface ThemeProviderProps {
  children?: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography: {
        fontFamily: `"Roboto", "montserrat"`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
      },
      shadows: shadows() as Theme['shadows'],
      customShadows: customShadows(),
    }),
    []
  );

  const theme = createTheme(themeOptions);
  // theme.components = ComponentsOverrides(theme); // Explicitly pass the theme argument

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {/* {ComponentsOverrides(theme)} */}
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
