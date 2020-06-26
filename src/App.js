import React,{Fragment,useEffect,useState} from 'react';
import ButtonAppBar from "./components/Navbar2";
import { Button ,Hidden} from '@material-ui/core';
import { createMuiTheme,ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import {lightBlue,blue} from '@material-ui/core/colors/purple';
import {BrowserRouter,Route} from "react-router-dom"
import "./App.css"
import MyCarousel from "./components/Slider"
import Worldwide from "./components/worldwide"
import Chart from "./components/Chart"
import Graph from "./components/graph"
import Gender from "./components/gender"
import Who from "./components/who"
import FooterPage from "./components/footer"
import Symptoms from "./components/symptoms"
import Agegroup from "./components/agegroup"
import About from "./components/about"
import Safely from "./components/safely"
import Article from "./components/article"
import { Zoom } from 'react-preloaders';
import { Scrollbars } from 'react-custom-scrollbars';
import Privacy from "./components/privacy"
import Service from "./components/service"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: '#0276aa',
      main: '#03a9f4',
      dark: '#35baf6',
      contrastText: '#fff',
    },
    secondary: {
      light: '#1c54b2',
      main: '#2979ff',
      dark: '#5393ff',
      contrastText: '#fff',
    },
  },
  typography:{
    fontFamily:"'Poppins', sans-serif"
  }
  
});


theme = responsiveFontSizes(theme);
function App() {

  return (

    <BrowserRouter>
      <ThemeProvider theme={theme}> 

      <Zoom background="#0ABDE3" color="white" />
      <Route path="/" exact component={ButtonAppBar} />
      <Route path="/" exact component={MyCarousel} />

      <ScrollAnimation animateIn='fadeIn'   animateOut='fadeOut'>
      <Route path="/" exact component={Worldwide} />
</ScrollAnimation>

<ScrollAnimation animateIn='fadeIn'   animateOut='fadeOut'>
      <Route path="/" exact component={Graph} />
</ScrollAnimation>


<Hidden only={[ "xs"]}>
      <Route path="/" exact component={Chart} />
      </Hidden>


<ScrollAnimation animateIn='fadeIn'   animateOut='fadeOut'>
      <Route path="/" exact component={Gender} />
</ScrollAnimation>


<ScrollAnimation animateIn='fadeIn'   animateOut='fadeOut'>
      <Route path="/" exact component={Article} />
</ScrollAnimation>
      <Route path="/" exact component={Who} />
      <Route path="/" exact component={()=><FooterPage/>}  />
        <Route path="/agegroup" component={Agegroup}/>
        <Route path="/symptoms" component={Symptoms}/>
        <Route path="/about" component={About}/>
        <Route path="/safely" component={Safely}/>
        <Route path="/service" component={Service}/>
        <Route path="/privacy" component={Privacy}/>
     </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
