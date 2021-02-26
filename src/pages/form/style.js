import { makeStyles } from "@material-ui/core/styles";
//import visorBackground from '../../assets/img/visorBackground.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "Century-Gothic",
    display: "flex",
    height: "95%",
    //backgroundColor: "red",
  },

  container: {
    height: "100%",
    zIndex: 3,
    display: "grid",
    flexDirection: "column",
    justifyContent: "center",
  },
  paper: {
    margin: theme.spacing(2, 2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  tittle: {
    fontWeight: "bold",
    fontFamily: "Century-Gothic",
    color: "#fff",
    textAlign: "-webkit-center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginBottom: theme.spacing(2),
  },
  inputContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  avatar: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(11),
      height: theme.spacing(11),
    },
  },
  submit: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontFamily: "Century-Gothic",
    backgroundColor: "#33658A",
    borderRadius: "6px",
    paddingBlockStart: "15px",
    paddingBlockEnd: "15px",
    color: "white",
    "&:hover": {
      backgroundColor: "#33658A",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
  radiobutton: {
    color: "#fff",
    "&$checked": {
      color: "#fff",
      "&:hover": {
        color: "#fff",
        backgroundColor: "#ffffff20",
      },
    },
    "&:hover": {
      color: "#fff",
      backgroundColor: "#ffffff20",
    },
  },
  checked: {},
  copyright: {
    marginTop: theme.spacing(1),
  },
  copy: {
    //fontWeight: "bold",
    fontFamily: "Century-Gothic",
    color: "#fff",
  },
  video: {
    minWidth: "100%",
    width: "100%",
    height: "-webkit-fill-available",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1,
    objectFit: "cover",
    display: "flex",
  },
  backdrop: {
    width: "100%",
    height: "100%",
    position: "fixed",
    left: 0,
    top: 0, 
    zIndex: 2, 
    //backgroundImage: `linear-gradient(rgba(51, 101, 138, 0.65), rgba(51, 101, 138, 0.65)), url(${visorBackground}) !important`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default useStyles;
