import React from 'react';
import './App.css';
import Broadcast from './Components/Broadcast/Broadcast';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavbarComp from './Components/NavbarComp/NavbarComp';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComp />
    
     <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/broadcast' component={Broadcast}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
