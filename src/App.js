import React from "react";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import SideIcons from './SideIcons';

function App() {
   
  return (
  
    <Router>
  <div className="app">

    <Header />
    <div className="app__body">
        <Sidebar /> 
        <SideIcons />  
    
    <Switch>
      <Route path="/mail">
         <Mail />
      </Route>
      <Route path="/">
        <EmailList />
      </Route>
    </Switch>
    </div>

   <SendMail />

   
    </div>
    </Router>
    
  );
}

export default App;
