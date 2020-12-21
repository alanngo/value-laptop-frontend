import 'bootstrap/dist/css/bootstrap.css' 
import './App.css';
import React    from "react";
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {Button, Nav} from "react-bootstrap"
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
// import Price from './components/Price/Price';
// import Usage from './components/Usage/Usage'
import Footer from './components/footer/Footer';
// import About from './components/about-us/About-us';
import Home from './components/Home/Home'
import logo from './components/logo2.png'

class App extends React.Component
{
  ready = false
  enter = () => 
  {
    console.log(this.ready)
    this.ready = true
    console.log(this.ready)
    return 
  }
  render()
  {
    return (
      <div className="App bg-dark text-light" >
        <img src={logo} align="center" alt="logo"/>
        <Home/>
      
      <br/>
  
      <div align="center">
        <Footer align="bottom"/>
      </div>
      </div>
      
    );
  }
  
}

export default App;
