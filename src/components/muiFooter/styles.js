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
  container: {
    //marginTop: theme.spacing(1),
    //marginBottom: theme.spacing(1),
  },
  title: {
    color: "#000",
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
  containerLogo: {
    //backgroundColor: 'red',
    display: "flex",
    marginLeft: theme.spacing(1),
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      //with: theme.spacing(2),
      height: theme.spacing(1.5),
    },
  },
}));
export default useStyles;
