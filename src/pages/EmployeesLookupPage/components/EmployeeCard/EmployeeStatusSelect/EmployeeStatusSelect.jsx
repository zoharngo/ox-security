import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { EmployeeStatus } from './constants';
import PropTypes from 'prop-types';

function EmployeeStatusSelect({ status, onChange, ...otherProps }) {
  return (
    <Select
      renderValue={() => status}
      variant='standard'
      labelId='select-standard-label'
      value={status}
      onChange={onChange}
      label='Status'
      {...otherProps}
    >
      {Object.values(EmployeeStatus).map((status, index) => {
        return (
          <MenuItem key={index} value={status}>
            {status}
          </MenuItem>
        );
      })}
    </Select>
  );
}

EmployeeStatusSelect.propTypes = {
  onChange: PropTypes.func,
  status: PropTypes.oneOf([...Object.values(EmployeeStatus), '']).isRequired,
  otherProps: PropTypes.any,
};

export default EmployeeStatusSelect;
