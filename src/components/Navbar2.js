
import React,{Component,useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Box} from '@material-ui/core';
import {Container,Hidden} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'; 
import {BrowserRouter,Route,Link} from "react-router-dom"
import Title from "./title"






//..................sideBar..................
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Collapse } from 'react-burgers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faBug,faMobileAlt,faCrop,faCropAlt } from '@fortawesome/free-solid-svg-icons'
const usStyles = makeStyles({

  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

  logo:{
    fontWeight:"bold",
    textAlign:"center",
    paddingTop:"20px",
    paddingBottom:"20px",
    }
});

 function TemporaryDrawer() {
  const classes = usStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    open:false,
  });
  

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      style={{backgroundColor:"#3D4849",color:"white",  height:"100vh",

    }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
     
      <Typography variant="h4" className={classes.logo}>CovidJS</Typography>
 
      <Divider  style={{backgroundColor:"white"}} />
      <List >
        
          <ListItem button key='HOME'>
            <ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faHome} /></ListItemIcon>
            <Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="/">HOME</Link>
          </ListItem>

<ListItem button key='Continents'>
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faCropAlt} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="agegroup">AGEGROUP</Link>
</ListItem>


<ListItem button key='News'>
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faBug} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="symptoms">SYMPTOMS</Link>
</ListItem>




<ListItem button key="PREVENTION">
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faMobileAlt} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="safely">PREVENTION</Link>
</ListItem>


<ListItem button key="ABOUT">
<ListItemIcon style={{color:"white"}}><FontAwesomeIcon size="lg" icon={faCrop} /></ListItemIcon>
<Link style={{color:'white',fontSize:"17px",textDecoration:"none"}} to="about">ABOUT</Link>
</ListItem>
       
      </List>
    </div>
  );

  return (
    /*<Hidden only={['md',"lg","xl"]}>
      </Hidden>*/
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
        
          <Collapse onClick={toggleDrawer(anchor, true)} active={state[anchor]}
           color='#fff'
           width={27}
           lineSpacing={3}
           lineHeight={3}
           borderRadius={9} 
        
          />
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    
  );
}
//..................sideBar..................



  

export default function ButtonAppBar() {
      
      
        const [color1, setcolor1] = useState('transparent')
        const [color2, setcolor2] = useState("#0ABDE3")

    const useStyles = makeStyles((theme) => ({
        root: {
          bottom: theme.spacing(2),
          right: theme.spacing(2),
        },
        appbar:{
          boxShadow:theme.shadows[0],
          backgroundColor:color1,
          
         
        },
      
        manu:{
          "& li":{
            display: "inline",
            marginRight: theme.spacing(3),
            fontFamily:"'Poppins', sans-serif",
            fontSize:"17px",
            '@media (max-width:1200px)': {
              fontSize: '14px',
            },
            },
            "& li:hover":{
              display: "inline",
            fontFamily:"'Poppins', sans-serif",
            fontSize:"17px",
                color:color2,
                fontWeight:"bold"
            }

          
        },
        toolbar:{
          display:"flex",
          justifyContent:"space-between",
          
      
        },
        logo:{
          fontWeight:"bold",
          color:color2,
          textDecoration:"none",
          fontSize: '30px',
          '@media (max-width:1200px)': {
            fontSize: '30px',
            
            
          }
          },
          show:{
            display:"none",
            '@media (max-width:900px)': {
              display: "inline"
            }
            
          }
      
      }));    
    let classes = useStyles();

   window.addEventListener("scroll",()=>{
     var   a=window.scrollY;
       if(a>49){
         setcolor1("hsla(199, 98%, 52%, 0.5)");
         setcolor2("white")
       }
       else{
          setcolor1('transparent'); 
          setcolor2("#0ABDE3")
       }
   })

   
Title("CovidJS")
  
  return (
    <div className={classes.root} >
     <AppBar className={classes.appbar}  > 
        <Toolbar className={classes.toolbar} >
        <div style={{display:"flex"}}> 
        <img 
      src={process.env.PUBLIC_URL+"/logo.png"}
      alt="new"
      //sizes="50px"
      width="40" height="40"
     // style={{width:"40px"}}
      />
          {/*<Typography variant="h4"  className={classes.logo}>&nbsp;&nbsp;CovidJS</Typography>*/}
          <Link to="/" className={classes.logo}>&nbsp;&nbsp;COVIDJS</Link>
          </div>

          <Hidden only={['sm',"xs"]}>
        <div>
          <ul className={classes.manu}>
            <li><Button component={Link} style={{color:'white',fontSize:"18px"}} to="/">Home</Button></li>
            <li><Button component={Link} style={{color:'white',fontSize:"18px"}} to="agegroup">AgeGroup</Button></li>
            <li><Button component={Link} style={{color:'white',fontSize:"18px"}} to="symptoms">Symptoms</Button></li>
            <li><Button component={Link} style={{color:'white',fontSize:"18px"}} to="safely">Prevention</Button></li>
            <li><Button component={Link} style={{color:'white',fontSize:"18px"}} to="about">About</Button></li>
          </ul>
        </div>
        </Hidden>



        
          <div className={classes.show} >
          <TemporaryDrawer/>
            </div>
           </Toolbar>
      </AppBar>
    </div>
  );
}
