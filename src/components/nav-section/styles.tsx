import React from 'react';
import { styled, Theme,StyledComponentProps } from '@mui/material/styles';
import { ListItemIcon, ListItemButton } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';



interface StyledNavItemProps {
  to: string;
  children?: React.ReactNode;
  sx?: Record<string, any>;
}

export const StyledNavItem = styled((props: StyledNavItemProps & StyledComponentProps) => {
  const { to, ...other } = props;
  return <ListItemButton component={RouterLink} to={to} {...other} />;
})(
  ({ theme }: { theme?: Theme }) => ({
    ...theme!.typography.body2,
    height: 42,
    position: 'relative',
    textTransform: 'capitalize',
    color: theme!.palette.text.secondary,
    borderRadius: theme!.shape.borderRadius,
  })
);





export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
