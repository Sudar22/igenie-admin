
import PropTypes from 'prop-types';
import { styled, alpha, Theme } from '@mui/material/styles';
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment, SxProps } from '@mui/material';
import Iconify from '../../../components/iconify';

interface ProductListToolbarProps {
  numSelected?: number;
  filterName?: string;
  onFilterName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledRoot = styled(Toolbar)(({ theme }: { theme: Theme }) => ({
  height: 70,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
  margin: theme.spacing(0, 0, 0,0),
}));

const StyledSearch = styled(OutlinedInput)(({ theme }: { theme: Theme }) => ({
  width: 300,
  height:50,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': {
    width: 350,
    // boxShadow: theme.customShadows.z8,
  },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));

ProductListToolbar.propTypes = {
  numSelected: PropTypes.number,
  filterName: PropTypes.string,
  onFilterName: PropTypes.func,
};

export default function ProductListToolbar({
  numSelected,
  filterName,
  onFilterName,
}: ProductListToolbarProps) {
  return (
    <StyledRoot
      sx={{
        ...(numSelected && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <StyledSearch
          value={filterName}
          onChange={onFilterName}
          placeholder="Search user..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
      )}

      {numSelected ? (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <Iconify icon="ic:round-filter-list" />
          </IconButton>
        </Tooltip>
      )}
    </StyledRoot>
  );
}
