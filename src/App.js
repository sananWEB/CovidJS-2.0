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
    <meta name="keywords" content="covidjs, covid, 19, corona virus, corona, virus, symtomps, corona symtops, prevention,Keyword,tracker for country,tracker.in,live tracker,virus tracker,livestat net website virus,number tracker worldwide,world tracker,tracker.com,number tracker world,trackr vietnam,corona app,bno tracking number,corona co,global tracker app,online news tracker,tracker home',country tracker,qq tracker,home tracker,for more details,world news tracker,cornoa,cornona,Keyword,Keyword,death rate by age graph,age stats,death rates by age,mortality rate by age,probability of death by age,death by age group,age mortality rate,age statistics,sex old,age graph,percentage of people died from sex,by age,death probability age,us deaths by age,can viruses die of old age,probability of dying by age usa,percentage of people who died from sex,death age,how many people die at what age,age profile,average of people ages of death,age the,death by sex,age specific mortality rate graph,age group statistics,us deaths by age latest stats,with age of,death rate versus age usa,mortality graph by age,usa deaths by age,age of death,death by demographics,death rates by cause and sex,with the age,statistical chance of dying in your 20s,what is age specific cfr,global mortality rate by age,worldwide mortality rate by age,chance of death via old age game calculation,statistic chances you will die of old age,worldwise mortality by age,corona od,what age groups die the most,riscol graphs,what is deaths gender,risk of death vs. mortality,people dying of old age per year,when the age of die,sex groups,Keyword,mapa usa,mapa mundial,johns,john's,usa mapa,coronoa,death map,heat map usa,johns hopkins map,hopkin,corona map,corono,map number,live world map,este mapa,cv hopkins,jhh map,world maps numbers,johns hopkins data,hopkins john,map numbers,joh hopkins,johns hopkins stats,usa map real,sickmap,world map real time,corona maps,virus map,mapa mu nidal,jhh maps,johns hopkinsdeath,johns hopkins graphic,global map locations news,john hopkins death,johns hopk,us john,hopkins world,coronavirus 2019-ncov global cases by john hopkins csse,hopkins university map,john hopkins coronavirus map,johns hopkins coronavirus map,11..50,corona real,hopkin germany link,number tracker usa,global pandemic map,coronavirus map,corona disease map,corona infection map,the coronavirus map,Keyword,world of graphs,corona day,data statistics charts,chart corona infection rate,coronavirus infection rate chart,19 girapgh,daily stats,stats number chart,coronavirus infection graph,charts for stats,what is a daily case,who graphs,statistics for charts,daily growth,case distribution,statistics of,see cases,new cases,case chart,www.worldometers.com,graph of the day,statistics cases,growth rate chart,worldometers.com,active+statistics,daily total,charting hockey,logorific case,growth rate graph,recovery rate,new case,case of the day,world meter information,increase graph,carona,exponential growth statistics,graphing by cases,global graphs,worldwide prevalence bar chart,growth rate chart log,global case ang,tot chart,recoveries,current recovery,chinese world daily,recover cases,recovery rates,new info,stats graph,mar in grapha,,what are,what are the,virus symptoms,whatare,corona sign,what are the symptoms,what arr,virus symptoms 2019,what arw,what are th,what are the signs of,what are rhe,what are symptoms,signs and symptoms of,what are all,sintoms,the symptoms,coronavirus symptoms,virus symptoms in adults,wht are the,what are the syptoms of a virus,key symptoms and incubation period for the illness,what are the simtem,corona od,smyptoms,ssymptoms,waht are,what are the symptom,what are the symtom,what are the symtoms,what are the symptoms of the,what are the symptoms for,signs of virus,virus sign,signs for showing disease,list signs,most common symptoms,showing of symptoms,and what are,source symptoms,simptome,if experiencing symptoms,any symptoms,what are a symptoms,what are symtoms,what are the sympt,what atr signs of,coronavirus infection symptoms,whether or not symptoms,fl symptom quiz,,coronoa,corono,oms order number tracker,slash royale stats,new live track,trackr case,tracker ru,stas tr bit,lallantop live,live web tracker,chorona virus tracker,coronavirus tracker,ar word tracker,tracker list 2019,google live tracker,website stat tracker,clm tracker,news tracker project,tracker list,more details...,more details,more+details,corona.,tracer tracker,telegram tracker,news tracker app,city info tracker,Keyword,worldometer,world o meters,world o meter,worldmeter,world meter,death tracker,death site,population of corona,coronavirus infection,worldo,update virus,worldsmeter,virus tracker,corona now,corona'o,state live counts,counting sars,world ometer,worldofmeter,world o meteer,corona population,latest statistics,current update,data virus update,china infection,virus chart,ilive inoframtion,coronoa now,country count,live updates on website,word meter,virus statistics,infected update,updated virus list,worldometers.com,worl virus,coronavirus deaths,coronavirus latest news,latest news coronavirus,coronavirus update today,latest news about coronavirus,worldometer coronavirus,corona virus deaths,latest coronavirus update,virus coronavirus update today,corona virus news,coronavirus how many deaths,live infection,corona virus update,coronavirus update,,Keyword,preventive measures,precautionary measure,how to prevent viruses,how does a virus stay safe,how to defend against a viral epidemic,preventative measures agaisnt,list of viruses and how to prevent,top viruses and how to prevent,how to avoid virus infection,top viruses today and how to prevent,how to protect a virus,how to protect yourself against,protect yourself from,protect yourself against,corona virus precaution,corolla virus protection,how you protect,protect virus,coronavirus precaution guidlines,novel coronavirus prevention,how to avoid,precautionary measures,taking precautions,safety measures,what some tricks viruses use to stay safe,virus prevention,corona fonte,things you can do to protecto yourself in public,taking precaustions,what to do to stay away from a virus,how to protect a viruses,protection advice,coronavirus precaution measure,https   hygieneadvise.com,how to avoid the,how to protect yourself,protect yourself,how to protect,do the,preventative measures,preventive measure,precautions and further directions,how to protect your self,protecting yourself,protet yourself,virus bp picture,virus safety,is corona safe,how to protect your hands in public,how to prvent" />
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
