import React, { useContext, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Popover from '@mui/material/Popover';
import { usePopover } from '../../../../hooks/usePopover';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import { EmployeeStatus } from '../EmployeeCard/EmployeeStatusSelect/constants';
import { ModalContext } from '../../../../context';
import PropTypes from 'prop-types';

export default function CustomizedTextInput({ onChange = () => {} }) {
  const [anchorEl, handleClick, handleClose, open] = usePopover();
  const { setOpen } = useContext(ModalContext);
  const [defaultFilter, setDefaultFilter] = useState('none');

  const _onFilterChange = (e) => {
    onChange({
      filter: e.target.value,
    });
    setDefaultFilter(e.target.value);
  };

  const _onInputChange = (e) => {
    onChange({
      text: e.target.value,
    });
  };

  return (
    <Paper component='form' sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
      <IconButton onClick={() => setOpen(true)} color='primary' sx={{ p: '10px' }} aria-label='add'>
        <AddCircleOutlineIcon />
      </IconButton>
      <InputBase
        onChange={_onInputChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder='Type to search'
        inputProps={{ 'aria-label': 'search bar' }}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton onClick={handleClick} color='primary' sx={{ p: '10px' }} aria-label='filter'>
        <FilterListIcon />
      </IconButton>
      <Popover
        id={open ? 'popover' : undefined}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ p: 3 }}>
          <FormLabel component='legend'>Status</FormLabel>
          <RadioGroup
            onChange={_onFilterChange}
            aria-label='status'
            value={defaultFilter}
            defaultValue={defaultFilter}
            name='radio-buttons-group'
          >
            <FormControlLabel value={'none'} control={<Radio />} label={'none'} />
            {Object.values(EmployeeStatus).map((status, index) => {
              return <FormControlLabel key={index} value={status} control={<Radio />} label={status} />;
            })}
          </RadioGroup>
        </Box>
      </Popover>
    </Paper>
  );
}

CustomizedTextInput.propTypes = {
  onChange: PropTypes.func,
};
