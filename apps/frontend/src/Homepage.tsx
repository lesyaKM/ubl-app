import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import React from 'react';

export default class Homepage extends React.Component {
  render() {
    return (
      <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Über Uns</Button>
        <Button color="inherit">Angebot</Button>
        <Button color="inherit">Shop</Button>
        <Button color="inherit">Kontakt</Button>
      </Toolbar>
    </AppBar>
    );
  }
}
