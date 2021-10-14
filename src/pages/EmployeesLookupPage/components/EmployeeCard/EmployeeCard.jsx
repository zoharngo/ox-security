import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import { Avatar, CardContent, Stack, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import PropTypes from 'prop-types';
import { stringAvatar } from './helpers';
import EmployeeStatusSelect from './EmployeeStatusSelect/EmployeeStatusSelect';
import { EmployeesContext } from '../../../../context';

export default function EmployeeCard({ employee = {} }) {
  const { updateEmployeeStatus } = useContext(EmployeesContext);
  const onEmployeeStatusChange = (e) => {
    updateEmployeeStatus(employee.id, {
      status: e.target.value,
    });
  };
  return (
    <Card>
      <CardContent sx={{ display: 'inline-flex', justifyContent: 'space-between', width: '100%' }}>
        <Avatar mr={1} {...stringAvatar(employee.name)} />
        <Stack ml={3} sx={{ width: '100%' }}>
          <InputLabel id='select-standard-label'>
            <Typography mr={3} sx={{ flexGrow: 1 }}>
              {employee.name}
            </Typography>
          </InputLabel>
          <EmployeeStatusSelect onChange={onEmployeeStatusChange} status={employee.status} />
        </Stack>
      </CardContent>
    </Card>
  );
}

EmployeeCard.propTypes = {
  employee: PropTypes.object.isRequired,
};
