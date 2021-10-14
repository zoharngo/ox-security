import React from 'react';
import { AppBar as CoreAppBar, Toolbar, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';

const AppBar = ({ title = '', sx }) => {
  return (
    <CoreAppBar sx={{ ...sx }} color='default'>
      <Toolbar>
        <Typography color='primary' variant='h6' sx={{ flexGrow: 1 }} noWrap>
          {title}
        </Typography>
        <Button color='primary'>Login</Button>
      </Toolbar>
    </CoreAppBar>
  );
};

AppBar.propTypes = {
  title: PropTypes.string,
  sx: PropTypes.object,
};

export default AppBar;
