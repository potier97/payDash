import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {    
    background: '#e4e4e4',
    height: '95%', 
    overflow: "auto",
  }, 
  paper: {
    margin: theme.spacing(3, 5), 
  },
  tittle: {
    color: "#000",
    fontWeight: 'bold'
  },
  subtittle:{
    color: "#999999",
  },
  containerForm:{
    padding: theme.spacing(0, 5),  
    [theme.breakpoints.down("sm")]: {
      padding:theme.spacing(0, 3),
    }, 
  },
  divider: {
    width: `calc(100% - ${drawerWidth}px)`,
    alignSelf: 'center'
  },
  select:{
    backgroundColor: '#fff',
    color: '#000',
    "&:hover": {
      backgroundColor: "#fff",
    },
    '&$focused': {
      backgroundColor: '#fff', 
    }, 
  },


   
  inputContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }, 



  submit: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4), 
    backgroundColor: "#40A8E6",
    borderRadius: "6px",
    paddingBlockStart: "15px",
    paddingBlockEnd: "15px",
    color: "white",
    "&:hover": {
      backgroundColor: "#40A8E6",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    }, 
  }, 
  submitCancel: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),  
    borderRadius: "6px",
    paddingBlockStart: "15px",
    paddingBlockEnd: "15px", 
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },

  textInput: { 
      backgroundColor: '#fff', 
      '&:hover': {
        backgroundColor: '#fff',
      },
      '&$focused': {
        backgroundColor: '#fff', 
      }, 
  },
  focused: {},


  containerInput: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }



}));
export default useStyles;
