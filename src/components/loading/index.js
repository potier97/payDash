import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button"; 
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import Slide from "@material-ui/core/Slide";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//ICONS
import CheckCircleIcon from "@material-ui/icons/CheckCircle"; 
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
//STYLES
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./style.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function DialogCidu(props) {
  
  const { show=false, handleClose, isSuccesfull=false, isBadRequest=false,
    messageModal,
    actionBtn,  
    textButton,
  } = props;
  const classes  = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      open={show}
      onClose={handleClose}    
      fullScreen={fullScreen}
      fullWidth 
      maxWidth="xs" 
      TransitionComponent={Transition}
      className={classes.root}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      BackdropProps={{
        classes: {
          root: classes.backdrop,
        },
      }}
      PaperProps={{
        classes: {
          root: classes.paper,
        },
      }}
    >
      
      <DialogContent dividers className={classes.content}>
        <Grid container direction="column" justify="center" alignItems="stretch" className={classes.other}>
            <Grid item container direction="row" justify="center" alignItems="center">
              {isSuccesfull && <CheckCircleIcon style={{ color: "#67C940", width: "200", height: "200", }}/>}
              {isBadRequest && <HighlightOffIcon style={{color: "#E1251B", width: "200", height: "200"}}/>}
            </Grid>
          <DialogContentText gutterBottom variant="body1" align='center'>
            {messageModal}
          </DialogContentText>
          <Button onClick={actionBtn} color='primary' fullWidth variant="contained" className={classes.dialogButtom}>{textButton}</Button>
        </Grid> 
      </DialogContent> 
    </Dialog>
  );
}












 
 
  
 
