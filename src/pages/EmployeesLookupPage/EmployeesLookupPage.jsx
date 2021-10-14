import React, { useRef, useContext, useState, useEffect, useCallback } from 'react';
import { Paper, Box } from '@mui/material';
import { AppBar, Modal } from '../../components';
import { CustomizedTextInput, NewEmployeeForm, ResultsGrid } from './components';
import { EmployeesContext, ModalProvider } from '../../context';

function EmployeesLookupPage() {
  const { employees = [] } = useContext(EmployeesContext);
  const containerRef = useRef(null);
  const [employeesList, setEmployeesList] = useState([]);
  const [filterState, setFilterState] = useState({
    filter: 'none',
    text: '',
  });
  useEffect(() => {
    setEmployeesList(employees);
  }, [employees]);

  useEffect(() => {
    const { filter, text } = filterState;
    let results = [...employees];
    if (text !== '') {
      results = results.filter((e) => e.name.toLowerCase().startsWith(text.toLowerCase()));
    }
    if (filter !== 'none') {
      results = results.filter((e) => e.status === filter);
    }
    setEmployeesList(results);
  }, [employees, filterState]);

  const onChange = useCallback((filterState) => {
    setFilterState((prev) => ({ ...prev, ...filterState }));
  }, []);

  return (
    <ModalProvider>
      <Modal containerRef={containerRef.current}>
        <NewEmployeeForm />
      </Modal>
      <Paper ref={containerRef} sx={{ backgroundColor: '#F5F5F5', minHeight: '100vh' }}>
        <AppBar title='Employees' sx={{ position: 'sticky' }} />
        <Box component='div' sx={{ display: 'flex', justifyContent: 'center', minHeight: '10vh', padding: '5em' }}>
          <CustomizedTextInput onChange={onChange} />
        </Box>
        <ResultsGrid employees={employeesList} />
      </Paper>
    </ModalProvider>
  );
}

export default EmployeesLookupPage;
