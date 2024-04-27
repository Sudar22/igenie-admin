import PropTypes from 'prop-types';
// @mui
// import { styled ,Theme,css} from '@mui/material/styles';

// import { styled, Theme, StyledProps } from '@mui/system';

// import { styled, alpha} from '@mui/material/styles';

// import {styled,  SxProps ,Theme} from '@mui/system';



import { AppBar, Box, IconButton, Stack, Toolbar, styled } from '@mui/material';
// utils
// components
import Iconify from '../../../components/iconify';
//
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import Searchbar from './Searchbar';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 80;




const StyledRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor:"#FFF",
  // ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',

  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH - 60}px)`,
  },
}));



const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

// Header.propTypes = {
//   onOpenNav: PropTypes.func.isRequired,
// };

// interface HeaderProps {
//   onOpenNav?: () => boolean;
// }





const Header = ({ onOpenNav }:{onOpenNav:() => void}) => {
  
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: { lg: 'none' },
          }}
        >
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
          
        >
          {/* <LanguagePopover /> */}
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default Header