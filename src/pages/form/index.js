import React, { useState, useEffect } from 'react'; 
import Button from '@material-ui/core/Button';
import FormControl from "@material-ui/core/FormControl"; 
import Grid from '@material-ui/core/Grid'; 
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';  
//DASHBOARD
import Dashboard from '../../layout/dashboard'
//LOADING MODAL  
import Loading from "../../components/loading"; 
//CALL API
import getPaises from '../../lib/paises' 
//STYLES 
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './style'; 


const initialState = { 
  name: '',
  nameError: false,
  nameErrorMessage: '', 
  lastName: '',
  lastNameError: false,
  lastNameErrorMessage: '',   
  country: '',
  countryError: false,
  countryErrorMessage: '',
  documentId: '',
  documentIdError: false,
  documentIdErrorMessage: '',

  //Modal 
  loadingModal: false, 
  isSuccesfull: true, 
  isBadRequest: false,
  textButton: 'Finalizar',
  messageModal: 'formulario enviado con éxito', 
}
  
export default function Form() {
  
  const classes = useStyles();  
  const [credentials, setCredentials] = useState(initialState) 
  const [country, setCountry] = useState([]) 
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));


  useEffect(() => {
    getCountries()
  }, [])



  const getCountries = async () => {
    try{ 
      const res = await getPaises()
      const data = await res.data
      const farms = await data.slice(0, 20)
      setCountry(farms)
    }catch(e){
      console.log('error to get countries', e)
    }
  }


  //OK //ON CHANGE TEXT
  const handleChange = e => {  
    const { name, value } = e.target; 
    setCredentials(prevState => ({
      ...prevState,
      [name]: value
    }));
  }  
  
 


  //OK  //LOGIN WITH EMAIL AND PASSWORD
  const sendForm = async () => {
    try {
      const status = validateLogin();
      if(!status){
        setCredentials(prevState => ({
          ...prevState,  
          loadingModal: true, 
          isSuccesfull: true, 
          isBadRequest: false,
          textButton: 'Finalizar',
          messageModal: 'formulario enviado con éxito', 
        }))     
      }else{
        setCredentials(prevState => ({
          ...prevState,  
          loadingModal: true, 
          isSuccesfull: false, 
          isBadRequest: true,
          textButton: 'Regresar',
          messageModal: 'formulario contiene errores', 
        }))
      }      
    } catch (error) { 
      setCredentials(prevState => ({
        ...prevState,  
        loadingModal: true, 
        isSuccesfull: false, 
        isBadRequest: true,
        textButton: 'Regresar',
        messageModal: 'formulario contiene errores', 
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

  const handleClear = () => {
    setCredentials(initialState)
  }

  //Validaciones de  entrada de usuario
  const validateLogin = () => { 
    let hayErrores = false;
    let numbers = /^[0-9]+$/;
    //Nombre
    if (credentials.name.length > 0) {
      setCredentials(prevState => ({
        ...prevState,
        nameError: false,
        nameErrorMessage: ""
      })) 
    } else { 
      setCredentials(prevState => ({
        ...prevState,
        nameError: true,
        nameErrorMessage: "Ingrese su Nombre",
      }))
      hayErrores = true;
    }
    //Apellido
    if (credentials.lastName.length > 0) {
      setCredentials(prevState => ({
        ...prevState,
        lastNameError: false,
        lastNameErrorMessage: "",
      })) 
    } else { 
      setCredentials(prevState => ({
        ...prevState,
        lastNameError: true,
        lastNameErrorMessage: "Ingrese Apellidos",
      })) 
      hayErrores = true;
    }
    //Pais
    if (credentials.country.length > 0) {
      setCredentials(prevState => ({
        ...prevState,
        countryError: false,
        countryErrorMessage: "",
      })) 
    } else { 
      setCredentials(prevState => ({
        ...prevState,
        countryError: true,
        countryErrorMessage: "Ingrese un país",
      })) 
      hayErrores = true;
    }
    //cedula
    if (credentials.documentId.length > 0 && numbers.test(credentials.documentId)) {
      setCredentials(prevState => ({
        ...prevState,
        documentIdError: false,
        documentIdErrorMessage: "",
      })) 
    } else { 
      if (credentials.documentId.length === 0 ){
        setCredentials(prevState => ({
          ...prevState,
          documentIdError: true,
          documentIdErrorMessage: "Ingrese su documento",
        })) 
      }else(
        setCredentials(prevState => ({
          ...prevState,
          documentIdError: true,
          documentIdErrorMessage: "Ingrese solo números",
        })) 
      )
      
      hayErrores = true;
    }
    return hayErrores;
  }

  return (    
    <Dashboard>
      <Grid className={classes.root}>  
        <Grid container direction="column" justify="flex-start" alignItems="stretch">  
          <Grid item className={classes.paper}>  
              <Typography component="h2" variant="h5" className={classes.tittle}>
                Información del formulario
              </Typography>
          </Grid> 
          <Divider className={classes.divider}/>
          <Grid item className={classes.paper}>  
              <Typography component="h2" variant="body1" className={classes.subtittle}>
              Ingrese el titulo y la descripción que visualizarán los usuarios durante el proceso de pago
              </Typography>
          </Grid> 

          {/* {[...new Array(50)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
            Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')} */}

          <Grid container direction="column" alignItems="stretch" justify="center" className={classes.containerForm}> 
                
            <Grid item xs={12} container direction="row" justify="space-around" alignItems="center">
              <Grid item xs={12} md={5}>
                <FormControl fullWidth>
                  <TextField
                      label="Nombre*"
                      type="default" 
                      margin="normal"
                      fullWidth
                      name="name"
                      variant="filled" 
                      InputProps={{ 'classes' : { 
                        root: classes.textInput,
                        focused: classes.focused,
                        
                      } }}  
                      error={credentials.nameError}
                      helperText={credentials.nameErrorMessage} 
                      value={credentials.name}  
                      onChange={handleChange}/>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={5}>
                <FormControl fullWidth>
                  <TextField
                      label="Apellido*"
                      type="default" 
                      margin="normal"
                      fullWidth
                      name="lastName"
                      variant="filled" 
                      InputProps={{ classes : { 
                        root: classes.textInput,
                        focused: classes.focused,  
                      } }} 
                      error={credentials.lastNameError}
                      helperText={credentials.lastNameErrorMessage} 
                      value={credentials.lastName} 
                      onChange={handleChange}/>
                </FormControl>
              </Grid>
            </Grid>

            <Grid item xs={12} container direction="row" justify="space-around" alignItems="center" className={classes.containerInput}>
              <Grid item xs={12} md={5}>
                <FormControl fullWidth variant="filled">
                  <InputLabel id="demo-simple-select-label">Seleccione un país*</InputLabel>
                  <Select 
                    color='primary'
                    className={classes.select} 
                    value={credentials.country}
                    name="country"
                    error={credentials.countryError}
                    onChange={handleChange} >
                      {country.map( c => 
                      <MenuItem key={c.name} value={c.name}>{c.name}</MenuItem>
                      )} 
                      
                  </Select>
                  {credentials.countryError && <FormHelperText error>{credentials.countryErrorMessage}</FormHelperText>}
                </FormControl>
              </Grid>
              <Grid item xs={12} md={5}>
                <FormControl fullWidth>
                  <TextField
                      label="Número de documento*" 
                      margin="normal"
                      fullWidth
                      name="documentId"
                      variant="filled" 
                      InputProps={{ classes : { 
                        root: classes.textInput,
                        focused: classes.focused, 
                      } }}   
                      error={credentials.documentIdError}
                      helperText={credentials.documentIdErrorMessage} 
                      value={credentials.documentId} 
                      onChange={handleChange}/>
                </FormControl>
              </Grid>
            </Grid>
 
            
            <Grid item xs={12} spacing={isDesktop ? 3 : 0} container direction="row" justify="flex-start" alignItems="center" className={classes.containerInput} >
              <Grid item xs={12} md={3}>
                <Button 
                    fullWidth 
                    color="primary" 
                    variant="contained" 
                    className={classes.submit} 
                    onClick={sendForm}>
                    {"Enviar"}
                </Button> 
              </Grid>
              <Grid item xs={12} md={3}>
                <Button 
                    fullWidth  
                    color="primary" 
                    variant="outlined" 
                    className={classes.submitCancel} 
                    onClick={() => setCredentials(initialState)}>
                    {"Cancelar"}
                </Button> 
              </Grid>
            </Grid>
 

 
          </Grid>  
        </Grid>
        
      </Grid>

      <Loading   
        show={credentials.loadingModal}   
        textButton={credentials.textButton} 
        isSuccesfull={credentials.isSuccesfull} 
        isBadRequest={credentials.isBadRequest}
        messageModal={credentials.messageModal} 
        actionBtn={credentials.isBadRequest ? toggleModal : handleClear}
      />

    </Dashboard>
  );
}