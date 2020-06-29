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
import Helmet from "react-helmet"

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
      <Helmet>
    
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    <link rel="icon" href="%PUBLIC_URL%/logo.png" />
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
<meta name="author" content="Muhammad Sanan"/>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content="corona tracker,covid19 tracker,coronavirus tracker, corona virus age group,coronavirus prevention,covid19 prevention,covid19 agegroup,corona tracker app,corona tracker in world,coronavirus map, covid19 map world,covid19 map,covid 19 tracker live covid 19 tracker india covid 19 tracker china covid 19 tracker worldewide covid 19 tracker america,corona worldwide data,covid19 age,coronavirus monitor, coronavirus symptoms,covid19 symptoms,Keyword,tracker for country,covid 19 apk,corona tracker,tracker.in,worlds tracker,live tracker,world tracker,tracker.com,corona near me website,number tracker world,virus tracker,livestat net website virus,https   coronaindia.org,covid-19 visualizer india district,number tracker worldwide,country tracker,online news tracker,covid-19 tracking,corona co,corona near my location,chorona virus tracker,bno tracking number,trackr vietnam,corona cases near me,coronavirus live tracker,corone england,global tracker app,live tracker apk,trackr case,corona app,oms order number tracker,lallantop live,live web tracker,coronavirus analytics,corona virus tracker,coronavirus tracker,covid19 status worldwide,word tracker app,statracker discord,stas tr bit,world news tracker,tracking covid-19,worldometer coronavirus,health tracker apk,google live tracker,tracker ru,what countries will be impacted by vom,corona near me app,world status info,update tracker,how many people death due to coronavirus,how many people recover from coronavirus,coronavirus graphs,covid19 graphs coronavirus male death rates,coronavirus female death rate,covid 19 deaths graphs,total recoverd covid19 graphs,COVID-19 Fatality Rate by Gender,SYMPTOMS ARTICLE
 coronavirus"/>
    <meta name="theme-color" content="#000000" />
    <meta name="google-site-verification" content="TfveL3YJ8zBB2kb8uKPwJnj3vTvUPgiL-awuTPYha7w" />
    <meta
      name="description"
      content="Wash Your hands and always wear mask|
      COVID-19 is a disease caused by a new strain of coronavirus. ‘CO’ stands for corona, ‘VI’ for virus, and ‘D’ for disease.
    "/>
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
  
    <title>COVIDJS</title>
    </Helmet>
     <Zoom background="#0ABDE3" color="white" time={1} />
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
