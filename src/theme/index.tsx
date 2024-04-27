import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
//
import { Shadows } from "@mui/material";
import customShadows from './customShadows';
import GlobalStyles from './globalStyles';
import componentsOverrides from './overrides';
import { Theme as customtheme } from './overrides/extendedTheme';
import palette from './palette';
import shadows from './shadows';


// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};





export default function ThemeProvider({ children }: { children?: React.ReactNode }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography:{
        "fontFamily": `"Roboto", "montserrat"`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
       },
      shadows: shadows() as Shadows,
      customShadows: customShadows() ,
    }),
    []
  );

  const theme = createTheme(themeOptions) as customtheme;
  theme.components = componentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
