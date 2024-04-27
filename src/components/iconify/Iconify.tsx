import { forwardRef } from 'react';
// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

import { BoxProps } from '@mui/material';
import { ReactElement } from 'react';

// // ----------------------------------------------------------------------


// interface IconifyProps {
//   icon: string | React.ReactElement;
//   width?: number | string;
//   sx?: React.CSSProperties;
// }



// const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
//   <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
// ));

// Iconify.propTypes = {
//   sx: PropTypes.object,
//   width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
// };

// export default Iconify;


// import React, { forwardRef, CSSProperties, ReactElement, ReactNode } from 'react';
// import { Icon } from '@iconify/react';
// import { Box, BoxProps } from '@mui/material';

// interface IconifyProps {
//   icon: string | ReactElement;
//   width?: number | string;
//   sx?: CSSProperties;
// }

// const Iconify = forwardRef<HTMLDivElement, IconifyProps>(
//   ({ icon, width = 20, sx, ...other }: IconifyProps, ref) => (
//     <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
//   )
// );

// Iconify.propTypes = {
//   sx: PropTypes.object,
//   width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
// };

// export default Iconify;



interface IconifyProps extends BoxProps {
  icon: string | ReactElement;
  width?: number | string;
  sx?:  React.CSSProperties;
}

const Iconify = forwardRef<HTMLDivElement, IconifyProps>(
  ({ icon, width = 20, sx, ...other }: IconifyProps, ref) => (
    <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
  )
);

// Iconify.propTypes = {
//   sx: PropTypes.object,
//   width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
// };

export default Iconify;

