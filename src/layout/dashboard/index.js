import React, { useState } from 'react';
import MuiAppBar from '../../components/appbar';
import MuiFooter from '../../components/muiFooter'
import MuiDrawer from '../../components/drawer';
//STYLES
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';

export default function Dahboard(props){

  const classes = useStyles();
  const [isMobile, setIsMobile] = useState(false)
  const { children } = props; 

  const handleMenu = () => setIsMobile(!isMobile)
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <div className={classes.root}>
      <MuiAppBar onDrawerToggle={handleMenu} statusbar={isMobile} stateScreen={isDesktop} />
      <MuiDrawer 
        open={isMobile}
        variant={isDesktop ? 'permanent' : 'temporary'}
        statusbar={isMobile}
        onClose={handleMenu}
        stateScreen={isMobile} 
      />
      <main className={classes.main} > 
        {children}
        <MuiFooter />
      </main>
        
    </div>
  ) 
}
 
