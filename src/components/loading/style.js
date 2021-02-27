import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    fontWeight: 'bold', 
  },
  backdrop:{
    backdropFilter: 'blur(5px)',
  },
  paper:{
    background: 'white',
    color: "#000",
    fontWeight: 'bold', 
  }, 
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  content:{
    color: "#86bbd8",
    fontWeight: 'bold', 
  },  


  dialogButtom: {
    backgroundColor: "#40A8E6",
    borderRadius: "6px",
    paddingBlockStart: "15px",
    paddingBlockEnd: "15px",
    color: "white",
    "&:hover": {
      backgroundColor: "#40A8E6",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  }, 

  other:{
    //backgroundColor: 'red',
    height: '100%'
  },
}));
export default useStyles;