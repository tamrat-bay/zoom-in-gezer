import React from 'react';
import './App.css';
import Broadcast from './Components/Broadcast/Broadcast';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComp from './Components/NavbarComp/NavbarComp';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import InstructorSignup from './Components/InstructorSignup/InstructorSignup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp />
     
     <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/broadcast' component={Broadcast}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contactus' component={ContactUs}/>
        <Route exact path='/instructor-signup' component={InstructorSignup}/>
     </Switch>
     
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
