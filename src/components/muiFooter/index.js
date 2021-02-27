import React from 'react'; 
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'; 
import Typography from '@material-ui/core/Typography'; 
//IMG
import DaviviendaLogo from '../../assets/img/davivienda.png'
import EpaycoLogo from '../../assets/img/epayco.png'
//STYLES
import useStyles from './styles';

export default function MuiFooter() {

  const classes = useStyles(); 
 
  return (
    <Grid className={classes.root}>
        <Container >
            <Grid container
                    direction="row"
                    justify="space-between"
                    alignItems="center" >

                <Grid item xs={5}  >
                    <Typography variant="body2" noWrap className={classes.title}>
                    ePayco © 2011 - 2019 todos los derechos reservados. 
                    </Typography>
                </Grid>
                <Grid item xs={7} container
                  direction="row"
                  justify="flex-end"
                  alignItems="center" >
                  <Grid item className={classes.containerLogo}>
                  <img src={DaviviendaLogo} alt={'davivienda'} className={classes.logo}/>
                  </Grid>
                  <Grid item className={classes.containerLogo}>
                    <img src={EpaycoLogo} alt={'epayco'} className={classes.logo}/>
                  </Grid> 
                </Grid> 
            </Grid>

        </Container>
    </Grid>
  );
}