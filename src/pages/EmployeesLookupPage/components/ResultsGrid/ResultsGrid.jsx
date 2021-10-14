import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { EmployeeCard } from '..';

function ResultsGrid({ employees = [] }) {
  return (
    <Grid sx={{ maxWidth: '80vw', margin: '0 auto' }} container spacing={4}>
      {employees.map((employee, index) => {
        return (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <EmployeeCard employee={employee} />
          </Grid>
        );
      })}
    </Grid>
  );
}

ResultsGrid.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ResultsGrid;
