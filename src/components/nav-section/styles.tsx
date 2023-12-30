import React, { useEffect } from 'react';
import { styled, Theme,StyledComponentProps } from '@mui/material/styles';
import { ListItemIcon, ListItemButton } from '@mui/material';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';



interface StyledNavItemProps {
  to: string;
  children?: React.ReactNode;
  sx?: Record<string, any>;
  onOpenNav:() => void

}

export const StyledNavItem = styled((props: StyledNavItemProps & StyledComponentProps) => {
  const { onOpenNav,to, ...other } = props;


  return <ListItemButton onClick={onOpenNav}
   component={RouterLink} to={to} {...other} />;
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


interface CollapseStyledNavItemProps {
  to: string;
  children?: React.ReactNode;
  sx?: Record<string, any>;
  onCloseNav: () => void;
  openNav?: boolean;
}

export const CollapseStyledNavItem = styled((props: CollapseStyledNavItemProps & StyledComponentProps) => {
  const { openNav ,onCloseNav,to, ...other } = props;
  const { pathname } = useLocation();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname,openNav, onCloseNav]);


  return <ListItemButton  component={RouterLink} to={to} {...other} />;
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
