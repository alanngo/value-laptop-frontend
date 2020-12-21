import 'bootstrap/dist/css/bootstrap.css' 
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Button, Nav} from "react-bootstrap"
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Price from './components/Price/Price';
import Usage from './components/Usage/Usage'
import Footer from './components/footer/Footer';
import About from './components/about-us/About-us';
import Home from './components/Home/Home'
import logo from './components/lightning_laptop.png'

function App() {
  return (
    <div className="bg-dark text-light" >
    <Router>
      <div className="App">
      <img src={logo} align="left"/>
      <h1 >Select an option to get started.</h1>
      <br/>
      <Home/>
        
      </div>
    </Router>
    
    <br/>

    <div align="center">
      <Footer align="bottom"/>
    </div>
    </div>
    
  );
}

export default App;
