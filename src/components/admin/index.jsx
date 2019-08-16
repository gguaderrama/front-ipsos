  
import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import '../../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Flag from '@material-ui/icons/Flag';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import CallIcon from '@material-ui/icons/CallMade';
import CheckIcon from '@material-ui/icons/CheckBoxOutlined';
import SmartphoneIcon from '@material-ui/icons/PhoneIphone';
import PeopleIcon from '@material-ui/icons/People';
import Home from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

import Background from '../../assets/Capa_38.png';
import Backgrounds from '../../assets/ico.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@material-ui/core';

const site = "Inicio"
const mail = "christian.cadena"
const title = "Empleados"
const drawerWidth = 240;
const drawerWidths = 70;
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles(theme => ({
  root: {
    padding: theme.spacing(1, 10),
    '&:focus': {
      backgroundColor: '#214490',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
      },
    },
  },
}))(MenuItem);
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  roots: {
    padding: theme.spacing(1, 0),
    marginLeft:'75%',
    display:'inlineblock',
  },
  paper: {
    padding: theme.spacing(1, 2),
  },
  palette: {
      // color: 'default',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft:drawerWidths,
    width: `calc(100% - ${drawerWidths}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  var abrir=false;
  var foto=Backgrounds;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  function handleDrawerOpen() {
    setOpen(true);
    document.getElementById('mostrarOcultar').style.display="none";
    document.getElementById('mostrarOcultare').style.display="block";
    var img = document.getElementsByClassName("img");
    img.className.remove("img");
    img.className.add("image");

console.log(img);
  }
  function handleDrawerClose() {
    setOpen(false);
    document.getElementById('mostrarOcultar').style.display="block";
    document.getElementById('mostrarOcultare').style.display="none";
    // let image = document.getElementsByClassName("image").width;
    // console.log(image, 'este es el valor de la imagen ')

   image.className.remove("image");
   image.className.add("img");

console.log(image);
  }

  console.log('este es el valor de la imagen ')
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className="navbar">
        <Grid id="mostrarOcultar" container="true" >
          <IconButton
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
              <MenuIcon />
             </IconButton>
        </Grid>
        <Grid id="mostrarOcultare" container="true"   edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: close,
            })} >
          <IconButton onClick={handleDrawerClose} >
               {theme.direction === 'rtl' ? <ChevronRightIcon /> : <MenuIcon />}
          </IconButton>
        </Grid>
            <IconButton className="mis">
              <Badge badgeContent={4} color="primary">
              <MailIcon/>
              </Badge>
            </IconButton>
          <IconButton>
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>    
            <IconButton>
              <Badge badgeContent={1} color="secondary">
                <Flag />
              </Badge>
            </IconButton>
            <IconButton onClick={handleClick}>
            <FontAwesomeIcon icon={ faUserCircle} />
            </IconButton>
            <div>
            
      <Typography
        aria-controls="customized-menu"
        aria-haspopup="true"
        // variant="contained"
      >
        {mail}
      </Typography>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="container-correo">
        <StyledMenuItem >
          <ListItemText primary={mail} />
        </StyledMenuItem>
        </div>
        <Button
        variant="contained"
        // color="secondary"
        container ="true"
         spacing={24}
      >
       Opciones
      </Button>
      <Link href="/" className="btn-exit" >
        <IconButton  >
          <FontAwesomeIcon icon={ faSignInAlt} />
        </IconButton>
      </Link>
    </StyledMenu>
    </div>
          
            <IconButton>
                <SettingsIcon />
            </IconButton>  
      </Toolbar>
        
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <img className="img" src={Background} id="ipsos" />
        <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText primary="Estudios" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SmartphoneIcon />
          </ListItemIcon>
          <ListItemText primary="Dispositivos" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <CallIcon />
          </ListItemIcon>
          <ListItemText primary="Reportes" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Nóminas" />
        </ListItem>       
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />   
      <div className="container-dashboard">
         <Toolbar>
         <Grid >
          <Typography variant="h6">
           {title}
          </Typography> 
         </Grid>    
           <Paper elevation={0} className={classes.roots}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
              <Link href="/"  className={classes.link}>
                <HomeIcon  className={classes.icon} />
                Inicio
              </Link>
              <Typography  color="textPrimary" >
                RH
              </Typography>  
            </Breadcrumbs> 
           </Paper>
          </Toolbar> 
        
      </div> 
      </main>
    </div>
  );
}
