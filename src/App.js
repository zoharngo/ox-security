import { Box, CssBaseline } from '@mui/material';
import { EmployeesProvider } from './context';
import { EmployeesLookupPage } from './pages';

function App() {
  return (
    <Box sx={{ width: '100vw' }}>
      <CssBaseline />
      <EmployeesProvider>
        <EmployeesLookupPage />
      </EmployeesProvider>
    </Box>
  );
}

export default App;
