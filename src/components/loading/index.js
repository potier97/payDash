import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button"; 
import DialogContentText from "@material-ui/core/DialogContentText";
import Grid from "@material-ui/core/Grid";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
//ICONS
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel"; 
//STYLES
import { useTheme } from "@material-ui/core/styles";
import useStyles from "./style.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function DialogCidu(props) {
  
  const { show=false, title='Cargando...', handleClose, isSuccesfull=false, isBadRequest=false,
    messageModal,
    withOutAction=false, 
    actionBtn,  
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
      maxWidth="md" 
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
      <DialogTitle id="simple-dialog-title" disableTypography>
        <Typography variant="h4" align="left" className={classes.title}>
          {title}
        </Typography>
      </DialogTitle>
      <DialogContent dividers className={classes.content}>
        <Grid container direction="row" justify="space-evenly" alignItems="stretch" className={classes.other}>
            <Grid item container direction="row" justify="center" alignItems="center">
              {isSuccesfull && <CheckCircleIcon style={{ color: "#86bbd8", width: "200", height: "200", }}/>}
              {isBadRequest && <CancelIcon style={{color: "#86bbd8", width: "200", height: "200"}}/>}
            </Grid>
          <DialogContentText gutterBottom className={classes.contentText} variant="h4">
            {messageModal}
          </DialogContentText>
        </Grid> 
      </DialogContent>
      {!withOutAction && <DialogActions className={classes.gridbutton}>
        <Button autoFocus onClick={actionBtn} className={classes.dialogButtom}>Cerrar</Button>
      </DialogActions> }
    </Dialog>
  );
}












 
 
  
 
