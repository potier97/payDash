import { makeStyles } from "@material-ui/core/styles";
  

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    flex: 'block',
    overflowY: 'hidden',
    background: '#e4e4e4',
    height: '100%', 
    [theme.breakpoints.up('md')]: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,  
    },
  }, 
}));
export default useStyles;