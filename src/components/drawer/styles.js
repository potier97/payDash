import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({ 
 
  appBarShift:{
    width: drawerWidth,
    backgroundColor: '#3A3A3A',
    overflowX: 'hidden', 
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
  containerNameUser: {
    display: "flex",
    alignItems: "center", 
    justifyContent: 'center',
    flexDirection: 'row', 
  }, 
  tittleName:{
    color: '#fff',
    backgroundColor: '#000',
    padding: theme.spacing(1, 2), 
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
