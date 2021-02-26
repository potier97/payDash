import React, { useState } from 'react'; 
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from "@material-ui/core/FormControl"; 
//import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography'; 
import ciduLogo from '../../assets/img/logo.png' 
import NormalTextfield from '../../components/normalTextfield';
//DASHBOARD
import Dashboard from '../../layout/dashboard'
//LOADING MODAL  
import Loading from "../../components/loading";  
//STYLES 
import useStyles from './style'; 


const initialState = { 
  email: '',
  emailError: false,
  emailErrorMessage: '',
  password: '',
  passwordError: false,
  passwordErrorMessage: '',   
  //Modal
  tittleModal: 'Cargando...', 
  loadingModal: false,
  isLoading: true, 
  isSuccesfull: false,
  isUnsuccessful: false,
  isBadRequest: false,
  messageModal: 'Espere un momento.',
  withOutAction: true, 
}
  
export default function Form() {
  
  const classes = useStyles();  
  const [credentials, setCredentials] = useState(initialState)

  //OK //ON CHANGE TEXT
  const handleChange = e => {  
    const { name, value } = e.target;
    setCredentials(prevState => ({
      ...prevState,
      [name]: e.target.type === "checkbox" ? e.target.checked : value
    }));
  }  
 


  //OK  //LOGIN WITH EMAIL AND PASSWORD
  const sendForm = async () => {
    try {
      const status = validateLogin();
      if(!status){
        setCredentials(prevState => ({
          ...prevState, 
          tittleModal: 'Cargando...', 
          loadingModal: true,
          isLoading: true, 
          isSuccesfull: false,
          isUnsuccessful: false,
          isBadRequest: false,
          messageModal: 'Espere un momento...',
          withOutAction: true,  
        }))   
        setCredentials(initialState)
        //history.push('/mapa') 
      }      
    } catch (error) {
      //console.log('New error', error); 
      setCredentials(prevState => ({
        ...prevState, 
        tittleModal: 'Advertencia', 
        loadingModal: true,
        isLoading: false, 
        isSuccesfull: false,
        isUnsuccessful: true,
        isBadRequest: false,
        messageModal: 'Contraseña incorrecta, inténtelo de nuevo.',
        withOutAction: false,  
      })) 
      
    }
  } 

  //OK  //TOGGLE MODAL
  const toggleModal = () => {
    setCredentials(prevState => ({
      ...prevState,
      loadingModal: !prevState.loadingModal,
    })) 
  }

  //Validaciones de CELULAR entrada de usuario
  const validateLogin = () => { 
    let hayErrores = false;
    let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Correo
    if (re.test(credentials.email)) {
      setCredentials(prevState => ({
        ...prevState,
        emailError: false,
        emailErrorMessage: ""
      })) 
    } else { 
      setCredentials(prevState => ({
        ...prevState,
        emailError: true,
        emailErrorMessage: "Correo no válido",
      }))
      hayErrores = true;
    }
    //Password
    if (credentials.password.length > 0) {
      setCredentials(prevState => ({
        ...prevState,
        passwordError: false,
        passwordErrorMessage: "",
      })) 
    } else { 
      setCredentials(prevState => ({
        ...prevState,
        passwordError: true,
        passwordErrorMessage: "Ingrese contraseña",
      })) 
      hayErrores = true;
    }
    return hayErrores;
  }

  return (    
    <Dashboard>
        <Grid aling='center' className={classes.root}> 
        <CssBaseline /> 
        <div className={classes.backdrop} /> 
        <Container className={classes.container}>
            <Grid container item direction="column" justify="center" alignItems="center" >  
            <Grid item className={classes.paper}> 
                <Avatar alt="Cidu" src={ciduLogo} className={classes.avatar}/>
                <Typography component="h2" variant="h5" className={classes.tittle}>
                Iniciar Sesión
                </Typography>
            </Grid> 
            <Grid item container justify="center" className={classes.form}> 
                
                <Grid item xs={11} className={classes.inputContainer}>
                <FormControl fullWidth>
                    <NormalTextfield
                        label="Correo"
                        type="default" 
                        margin="normal"
                        fullWidth
                        name="email"
                        variant="outlined" 
                        error={credentials.emailError}
                        helperText={credentials.emailErrorMessage} 
                        value={credentials.email} 
                        onChange={handleChange}/>
                </FormControl>
                <FormControl fullWidth>
                    <NormalTextfield
                        label="Contraseña"
                        type="password" 
                        margin="normal"
                        fullWidth
                        name="password"
                        variant="outlined" 
                        error={credentials.passwordError}
                        helperText={credentials.passwordErrorMessage} 
                        value={credentials.password}  
                        onSubmit={() => console.log('send')}
                        onChange={handleChange}/>
                </FormControl>
                </Grid>  
            
                <Grid item xs={11}>
                <Button 
                    fullWidth 
                    type="submit" 
                    variant="contained" 
                    className={classes.submit} 
                    onClick={sendForm}>
                    {"Ingresar"}
                </Button> 
                </Grid>
            </Grid> 
            </Grid>
        </Container>
        
    </Grid>

      <Loading   
        show={credentials.loadingModal} 
        title={credentials.tittleModal}
        handleClose={() => console.log('algo')}
        isLoading={credentials.isLoading}
        isSuccesfull={credentials.isSuccesfull}
        isUnsuccessful={credentials.isUnsuccessful}
        isBadRequest={credentials.isBadRequest}
        messageModal={credentials.messageModal}
        withOutAction={credentials.withOutAction}
        actionBtn={toggleModal}
      />

    </Dashboard>
  );
}