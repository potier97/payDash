import { createMuiTheme } from "@material-ui/core/styles";

//const light = "#8241CF";
const main = "#40A8E6";
//const dark = "#461193"; 


let theme = createMuiTheme({
  palette: {
    primary: {
      main: main,
    },
    secondary: {
      main: main,
    },
    warning: {
      main: main,
    },
    success: {
      main: main,
    },
    info: {
      main: main,
    },
  }, 
});
 

export default theme;
