import React from 'react'; 
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar'; 
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'; 
//NAVIGATION
import { useHistory } from 'react-router-dom';
//ICONS
import logo from '../../assets/img/logo.png'
import Dashboard from '../../assets/img/house-outline.png'
import Customers from '../../assets/img/group.png'
import Susbscriptions from '../../assets/img/recurrent.png'
import Charge from '../../assets/img/hand.png'
import Collection from '../../assets/img/analysis.png'
import Reports from '../../assets/img/bar-chart.png'
import Balance from '../../assets/img/atm.png'
import Integrations from '../../assets/img/intersection.png'
import Admin from '../../assets/img/management.png'
//STYLES
import useStyles from './styles';


const viewsPages = [
    {
        icon: Dashboard,
        name: 'Dashboard',
        route: '/'
    },
    {
        icon: Customers,
        name: 'Clientes',
        route: '/clientes'
    },
    {
        icon: Susbscriptions,
        name: 'Subscripciones',
        route: '/suscripciones'
    },
    {
        icon: Charge,
        name: 'Cobra',
        route: '/cobra'
    },
    {
        icon: Collection,
        name: 'Recaudo',
        route: '/recaudo'
    },
    {
        icon: Reports,
        name: 'Reportes',
        route: '/reportes'
    },
    {
        icon: Balance,
        name: 'Saldos y Retiros',
        route: '/saldoRetiro'
    },
    {
        icon: Integrations,
        name: 'Integraciones',
        route: '/integraciones'
    },
    {
        icon: Admin,
        name: 'Admin',
        route: '/admin'
    }, 
]


export default function MuiDrawer(props) {

  const {  
    statusbar, 
    stateScreen, 
    ...rest 
  } = props; 

  const history = useHistory(); 
  const classes = useStyles(); 

  //Navigate
  const handlePage = e => history.push(e)
   

  return (
    <Drawer
    className={classes.drawer} 
    PaperProps={{ className: classes.appBarShift}} 
    anchor="left" 
    {...rest} 
    >
    <div className={classes.drawerHeader}> 
        <img src={logo} alt="logo" className={classes.logo}/>
    </div>
    <Divider />
    <List>
        <ListItem className={classes.containerNameUser}>
            <ListItemText primary={'ALEXANDER RODRIGUEZ RODRIGUEZ'} primaryTypographyProps={{ 'noWrap': true }} className={classes.tittleName} />
        </ListItem> 
        {viewsPages.map(view => (
        <ListItem button key={view.name} onClick={() => handlePage(view.route)} className={classes.listItem}>
            <ListItemIcon>{<Avatar alt="Remy Sharp" variant="square" src={view.icon} className={classes.logoScreeen}/>}</ListItemIcon>
            <ListItemText primary={view.name} className={classes.title} />
        </ListItem>
        ))}
    </List> 
    </Drawer>  
  );
}