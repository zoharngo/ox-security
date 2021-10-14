import { createContext } from 'react';

const EmployeesContext = createContext({
  employees: [],
  setEmployees: () => {},
});

export default EmployeesContext;
