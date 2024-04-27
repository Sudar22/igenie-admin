import { Box, Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import styled from '@mui/system/styled';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { CollapseStyledNavItem, StyledNavItem, StyledNavItemIcon } from './styles';


interface NavSectionProps {
  data?: Array<NavItemProps['item']>;
  // Add any additional props if needed
}

NavSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      icon: PropTypes.node,
      info: PropTypes.node,
    })
  ),
};

export default function NavSection({ data = [], ...other }: NavSectionProps) {
  
  
  return (
    <Box {...other}>

<List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

NavItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.node,
    info: PropTypes.node,
  }),
};


interface NavItemProps {
  item: {
    title: string;
    path: string;
    icon?: React.ReactNode;
    info?: React.ReactNode;
    nestedRoutes?:string;
  };
}

// Additional modifications to add Collapse, List, and ListItemLink
const NestedList = styled('div')({
  paddingLeft: '24px', // Adjust the padding based on your design
});

const NestedListItem = styled(ListItemButton)({
  textTransform: 'capitalize',
  color: 'inherit', // or any color you desire
});



function NavItem({ item }: NavItemProps) {

  const [open, setOpen] = useState(false);

  const { title, path, icon, info ,nestedRoutes} = item;

  console.log("open", open);

  return (


    <React.Fragment>
    <StyledNavItem
      // component={RouterLink as any}
      to={path}

      onOpenNav={(() => setOpen(true))}
     
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
      <ListItemText disableTypography primary={title} />
      {/* {info && info} */}

     
    </StyledNavItem>


{nestedRoutes && (
  <Collapse in={true} timeout="auto" unmountOnExit>
    <NestedList>
      <List disablePadding sx={{ p: 1 }}>
        {nestedRoutes?.map((nestedItem: { title: string; path: string; icon: React.ReactNode }) => (
          // <NavItem key={nestedItem.title} item={nestedItem} />

          <CollapseStyledNavItem //custom style
            to={nestedItem.path}
            openNav={open}
            onCloseNav={() => setOpen(false)}
            sx={{
              '&.active': {
                color: 'text.primary',
                bgcolor: 'action.selected',
                fontWeight: 'fontWeightBold',
              },
            }}

          >
            {nestedItem.title}
          </CollapseStyledNavItem>
        )) }
      </List>
    </NestedList>
  </Collapse>
)}

</React.Fragment>

  );
}


