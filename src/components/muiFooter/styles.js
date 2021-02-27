import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#fff",
    height: "5%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }, 
  title: {
    color: "#000",
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  containerLogo: { 
    display: "flex",
    marginLeft: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    [theme.breakpoints.down("xs")]: { 
      height: theme.spacing(1.5),
    },
  },
}));
export default useStyles;
