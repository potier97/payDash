import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; 
//STYLES
import useStyles from './styles';

export default function MuiAppbar(props) {

  const { onDrawerToggle, statusbar, stateScreen, } = props
  const classes = useStyles();   

  return ( 
    <AppBar
      color="primary"
      position="sticky"
      elevation={0} 
      className={clsx({[classes.appBarShift]: stateScreen }, { [classes.appBar]: !stateScreen })}  >
      <Toolbar>
        {!stateScreen && <IconButton 
          aria-label="open drawer"
          onClick={onDrawerToggle}
          edge="start"
          className={clsx(classes.menuButton, statusbar && classes.hide)} > 
          <MenuIcon />   
          </IconButton>}
      </Toolbar>
    </AppBar>
  );
}