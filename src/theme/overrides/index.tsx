//
import Autocomplete from './Autocomplete';
import Backdrop from './Backdrop';
import Button from './Button';
import Input from './Input';
import Paper from './Paper';
import Table from './Table';
import Tooltip from './Tooltip';
import Typography from './Typography';
// ----------------------------------------------------------------------
// import { Theme } from './extendedTheme';
import { Theme } from './extendedTheme';

// import { Theme as MuiTheme} from '@mui/material/styles';

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

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme:Theme) {
  return Object.assign(
    // Card(theme),
    Table(theme),
    Input(theme),
    Paper(),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    Autocomplete(theme)
  );
}
