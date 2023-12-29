import PropTypes from 'prop-types';
import { memo } from 'react';
// @mui
import { Box} from '@mui/material';
import { SxProps } from '@mui/material/styles';

//
import { StyledRootScrollbar, StyledScrollbar } from './styles';

import { ReactNode, CSSProperties } from 'react';
// @mui
// import { Box, SxProps } from '@mui/system';

// ----------------------------------------------------------------------



interface ScrollbarProps {
    sx?: SxProps;
    children?: ReactNode;
    timeout?: number;
  }



function Scrollbar({ children, sx, ...other }: ScrollbarProps) {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    );
  }

  return (
    <StyledRootScrollbar>
      <StyledScrollbar timeout={500} clickOnTrack={false} sx={sx as CSSProperties} {...other}>
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
}

export default memo(Scrollbar);
