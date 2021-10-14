import { useState, useCallback, useEffect } from 'react';
import EmployeesContext from './employeesContext';
import PropTypes from 'prop-types';

function EmployeesProvider({ children }) {
  const [employees, setEmployees] = useState([]);

  const updateEmployeeStatus = useCallback(
    async (id, rows) => {
      try {
        const res = await fetch(`http://localhost:3001/users/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(rows),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (res.ok && res.status === 200) {
          const employee = employees.find((e) => e.id === id);
          const updatedEmployee = {
            ...employee,
            ...rows,
          };
          setEmployees(
            employees.map((e) => {
              if (e.id === id) {
                return {
                  ...e,
                  ...updatedEmployee,
                };
              }
              return {
                ...e,
              };
            })
          );
        }
      } catch (err) {
        console.error(err.message);
      }
    },
    [employees]
  );

  const createNewEmployee = useCallback(async (rows) => {
    try {
      const res = await fetch(`http://localhost:3001/users`, {
        method: 'POST',
        body: JSON.stringify(rows),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (res.ok && res.status === 201) {
        const employee = await res.json();
        setEmployees((prev) => [...prev, employee]);
      }
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  const fetchEmployees = useCallback(async () => {
    try {
      const res = await fetch(`http://localhost:3001/users`);
      if (res.ok && res.status === 200) {
        const employees = await res.json();
        setEmployees(employees);
      }
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        updateEmployeeStatus,
        createNewEmployee,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
}

EmployeesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmployeesProvider;
