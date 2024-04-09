import { useState } from 'react';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover } from '@mui/material';
// mocks_
// import account from '../../../../_mock/account';
import account from '../../../_mock/account';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
    path:'',

  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
    path:'profile',

  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
    path:'',

  },
];

// ----------------------------------------------------------------------
                                         
export default function AccountPopover() {
  
  const [open, setOpen] = useState<HTMLButtonElement | null>(null);

    
    // const handleOpen = (event) => {
    //   setOpen(event.currentTarget);
    // };


    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
      setOpen(event.currentTarget);
    };

    
  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
            p: 0,
            width: 24, height: 24 ,
            ...(open && {
              '&:before': {
                zIndex: 1,
                content: "''",
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
              },
            }) ,
          }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {account.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
              <Link to={option.path} style={{textDecoration: 'none'}}>

            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
            </Link>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
