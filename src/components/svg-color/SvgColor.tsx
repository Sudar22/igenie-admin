import PropTypes from 'prop-types';
import { CSSProperties, forwardRef } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------


interface SvgColorProps extends BoxProps {
  src: string;
  sx?: CSSProperties;
}


const SvgColor = forwardRef<HTMLSpanElement, SvgColorProps>(({ src, sx, ...other }, ref) => (
  <Box
    component="span"
    className="svg-color"
    ref={ref}
    sx={{
      width: 24,
      height: 24,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));


SvgColor.propTypes = {
  src: PropTypes.string.isRequired,
  sx: PropTypes.object,
};
export default SvgColor;
