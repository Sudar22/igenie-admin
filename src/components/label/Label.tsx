import PropTypes from 'prop-types';
import { forwardRef, ReactNode, HTMLAttributes } from 'react';
import { useTheme, Theme } from '@mui/material/styles';
import { Box, SxProps } from '@mui/material';
import { StyledLabel } from './styles';

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
  sx?: SxProps<Theme>;
  endIcon?: ReactNode;
  children?: ReactNode;
  startIcon?: ReactNode;
  variant?: 'filled' | 'outlined' | 'ghost' | 'soft';
  color?: 'default' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';
}

const Label = forwardRef<HTMLSpanElement, LabelProps>(
  ({ children, color = 'default', variant = 'soft', startIcon, endIcon, sx, ...other }, ref) => {
    const theme = useTheme();

    const iconStyle = {
      width: 16,
      height: 16,
      '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    };

    return (
      <StyledLabel
        ref={ref}
        component="span"
        ownerState={{ color, variant }}
        sx={{
          ...(startIcon && { pl: 0.75 }),
          ...(endIcon && { pr: 0.75 }),
          ...sx,
        }}
        theme={theme}
        {...other}
      >
        {startIcon && <Box sx={{ mr: 0.75, ...iconStyle }}>{startIcon}</Box>}

        {children}

        {endIcon && <Box sx={{ ml: 0.75, ...iconStyle }}>{endIcon}</Box>}
      </StyledLabel>
    );
  }
);

Label.propTypes = {
  sx: PropTypes.object,
  endIcon: PropTypes.node,
  children: PropTypes.node,
  startIcon: PropTypes.node,
  variant: PropTypes.oneOf(['filled', 'outlined', 'ghost', 'soft']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error']),
};

export default Label;
