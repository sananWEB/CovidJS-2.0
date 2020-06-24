import React,{useState,useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,Paper} from '@material-ui/core';
import ButtonAppBar from "./Navbar2"
import MyCarousel from "./Slider"
import FooterPage from "./footer"
import Main2 from "./main2"
import Title from "./title"

export default function Privacy() {
  Title("Privacy Policy")
  /* useEffect(()=>{
    let title=document.title="";
    console.log(title)
  },[])*/
  return (
    <React.Fragment>
        <ButtonAppBar/>
      <Main2 image="h88.jpg" text="Privacy Policy"/>
      <CssBaseline />
      <Container maxWidth="xl">
      <Typography variant="h1" component="div" style={{minheight: '100vh' }}>
      <Paper variant="outlined" style={{marginBottom:"20px",marginTop:"20px",padding:"20px"}}>

<Typography variant="body2">At CovidJS, accessible from www.CovidJS.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by CovidJS and how we use it.</Typography>

<Typography variant="body2">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</Typography>

<Typography variant="body2">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in CovidJS. This policy is not applicable to any information collected offline or via channels other than this website.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>Consent</Typography>

<Typography variant="body2">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>Information we collect</Typography>

<Typography variant="body2">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</Typography>
<Typography variant="body2">If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</Typography>
<Typography variant="body2">When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>How we use your information</Typography>

<Typography variant="body2">We use the information we collect in various ways, including to:</Typography>
<Typography>
<ul style={{listStylePosition:"inside"}}>
<li>Provide, operate, and maintain our webste</li>
<li>Improve, personalize, and expand our webste</li>
<li>Understand and analyze how you use our webste</li>
<li>Develop new products, services, features, and functionality</li>
<li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the webste, and for marketing and promotional purposes</li>
<li>Send you emails</li>
<li>Find and prevent fraud</li>
</ul>
</Typography>
<Typography variant="h5" style={{fontWeight:"bold"}}>Log Files</Typography>

<Typography variant="body2">CovidJS follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</Typography>


<Typography variant="h5" style={{fontWeight:"bold"}}>Google DoubleClick DART Cookie</Typography>

<Typography variant="body2">Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a style={{wordBreak:"break-all"}}href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>Our Advertising Partners</Typography>

<Typography variant="body2">Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</Typography>
<Typography>
<ul style={{listStylePosition:"inside"}}>
    <li>
        <p>Google</p>
        <p><a style={{wordBreak:"break-all"}} href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>
    </li>
</ul>
</Typography>
<Typography variant="h5" style={{fontWeight:"bold"}}>Advertising Partners Privacy Policies</Typography>

<Typography variant="body2">You may consult this list to find the Privacy Policy for each of the advertising partners of CovidJS.</Typography>

<Typography variant="body2">Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on CovidJS, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</Typography>

<Typography variant="body2">Note that CovidJS has no access to or control over these cookies that are used by third-party advertisers.</Typography>

<Typography variant="h5">Third Party Privacy Policies</Typography>

<Typography variant="body2">CovidJS's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. </Typography>

<Typography variant="body2">You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>CCPA Privacy Rights (Do Not Sell My Personal Information)</Typography>

<Typography variant="body2">Under the CCPA, among other rights, California consumers have the right to:</Typography>
<Typography variant="body2">Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</Typography>
<Typography variant="body2">Request that a business delete any personal data about the consumer that a business has collected.</Typography>
<Typography variant="body2">Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</Typography>
<Typography variant="body2">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>GDPR Data Protection Rights</Typography>

<Typography variant="body2">We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</Typography>
<Typography variant="body2">The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</Typography>
<Typography variant="body2">The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</Typography>
<Typography variant="body2">The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</Typography>
<Typography variant="body2">The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</Typography>
<Typography variant="body2">The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</Typography>
<Typography variant="body2">The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</Typography>
<Typography variant="body2">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</Typography>

<Typography variant="h5" style={{fontWeight:"bold"}}>Children's Information</Typography>

<Typography variant="body2">Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</Typography>

<Typography variant="body2">CovidJS does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</Typography>
</Paper>
      </Typography>
      
      </Container>
      <FooterPage/>
    </React.Fragment>
  );
}
