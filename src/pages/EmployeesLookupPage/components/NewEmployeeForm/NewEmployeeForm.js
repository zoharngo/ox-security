import React, { useContext, useState, useEffect, useCallback } from 'react';
import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material';
import { ModalContext, EmployeesContext } from '../../../../context';
import { EmployeeStatusSelect } from '../EmployeeCard';

function NewEmployeeForm() {
  const { setOpen } = useContext(ModalContext);
  const { createNewEmployee } = useContext(EmployeesContext);
  const [disableCreate, setDisableCreate] = useState(true);
  const [formState, setFormState] = useState({
    status: '',
    name: '',
  });

  const onChange = (value, field) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onCreateClick = useCallback(() => {
    createNewEmployee({
      ...formState,
      img: `\\[image_url]\${formState.name}-avatar.png`,
    });
      setOpen(false);
  }, [createNewEmployee, formState, setOpen]);

  useEffect(() => {
    const { status, name } = formState;
    if (Boolean(status && name)) {
      setDisableCreate(false);
      return;
    }
    setDisableCreate(true);
  }, [formState]);

  return (
    <Box>
      <Typography p={1} variant='subtitle1' align='justify' noWrap>
        Create New User
      </Typography>
      <Divider />
      <Stack p={3} spacing={2}>
        <TextField
          required
          onChange={(e) => onChange(e.target.value, 'name')}
          value={formState.name}
          label='User Name'
          variant='standard'
        />
        <EmployeeStatusSelect onChange={(e) => onChange(e.target.value, 'status')} status={formState.status} required />
        <Stack p={1} spacing={2} direction='row'>
          <Button disabled={disableCreate} onClick={onCreateClick} variant='contained' color='primary'>
            <Typography variant='button'>Create</Typography>
          </Button>
          <Button onClick={() => setOpen(false)} variant='contained' color='secondary'>
            <Typography variant='button'>Cancel</Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}

export default NewEmployeeForm;
