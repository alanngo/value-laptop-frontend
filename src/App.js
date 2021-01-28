import 'bootstrap/dist/css/bootstrap.css' 
import './App.css';
import React  from "react";
// import {BrowserRouter as Router, Route} from 'react-router-dom';
// import {Button, Nav} from "react-bootstrap"
// import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
// import Price from './components/Price/Price';
// import Usage from './components/Usage/Usage'
// import Footer from './components/footer/Footer';
// import About from './components/about-us/About-us';
import Home from './components/Home/Home'
import { Nav, Navbar} from 'react-bootstrap';


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
        <div className="App bg-light text-dark">
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Lightning Laptop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/laptops">Laptops</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
          <Home/>
        </div>
      
    );
  }
  
}

export default App;
