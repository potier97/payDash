import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({ 

  // drawer: {
  //   width: drawerWidth,
  //   flexShrink: 0,
  // }, 
  // drawerPaper: {
  //   width: drawerWidth,
  //   backgroundColor: '#3A3A3A'
  // }, 
  appBarShift:{
    width: drawerWidth,
    backgroundColor: '#3A3A3A',
    overflowX: 'hidden',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBar:{
    width: '65px',
    backgroundColor: '#3A3A3A',
    overflowX: 'hidden',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1, 2), 
    ...theme.mixins.toolbar,
    justifyContent: "center",
  }, 
  logo: { 
    width: '80%', 
  },
  title: {
    color: '#fff'
  },
  logoScreeen: {
    height: theme.spacing(3),
    width: theme.spacing(3), 
  },
  listItem: {
    display: "flex",
    alignItems: "center", 
    justifyContent: 'center',
    flexDirection: 'row',
    '&:hover': {
      backgroundColor: '#282727',
    },
  }

}));

export default useStyles
