//
import Card from './Card';
import Paper from './Paper';
import Input from './Input';
import Table from './Table';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import Autocomplete from './Autocomplete';
// ----------------------------------------------------------------------
import { Theme } from './extendedTheme';



// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme:Theme) {
  return Object.assign(
    // Card(),
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
