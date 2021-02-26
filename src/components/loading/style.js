import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    fontWeight: 'bold',
    fontFamily: 'Century-Gothic',
  },
  backdrop:{
    backdropFilter: 'blur(5px)',
  },
  paper:{
    background: '#28282a',
    color: "white",
    fontWeight: 'bold',
    fontFamily: 'Century-Gothic',
  },
  title:{
    //fontSize: 'xx-large', 
    color: "white",
    fontWeight: 'bold',
    fontFamily: 'Century-Gothic',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  contentText:{
    color: "#86bbd8",
    fontFamily: 'Century-Gothic',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3), 
    textAlign: 'center', 
    alignItems: 'center',
    display: 'flex'
  },
  content:{
    color: "#86bbd8",
    fontWeight: 'bold',
    fontFamily: 'Century-Gothic',
  },
  gridbutton:{
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  dialogButtom:{
    marginRight: theme.spacing(3),
    paddingBlockStart: '10px',
    paddingBlockEnd: '10px',
    paddingInlineStart: '25px',
    paddingInlineEnd: '25px',
    fontWeight: 'bold',
    background: 'white',
    color: '#33658A',
    fontFamily: 'Century-Gothic',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
  other:{
    //backgroundColor: 'red',
    height: '100%'
  },
}));
export default useStyles;