import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { Nav, Navbar, NavDropdown} from "react-bootstrap"
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import FindLaptop from '../FindLaptop/FindLaptop'
import Price from '../Price/Price';
import Usage from '../Usage/Usage';
import CPU from '../CPU/CPU';
import GPU from '../GPU/GPU';
import About from '../about-us/About-us';
import logo from '../logo3.png'
const WIDTH = 150
const HEIGHT = 100
class Home extends Component 
{
  render()
  {
    return (
    
    <div className="bg-dark">
        <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img src={logo} 
            width={WIDTH}
            height = {HEIGHT}
            alt={"logo"}
            />
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto" align="bottom">
      <Nav.Link href="/about"><h2>About</h2></Nav.Link>
      <Nav.Link href="/laptops"><h2>Laptops</h2></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  
        <Switch>
          <Route path="/laptops" exact component = {FindLaptop}/>
          <Route path="/price" exact component = {Price}/>
          <Route path="/usage" exact component = {Usage}/>
          <Route path="/cpu" exact component = {CPU}/>
          <Route path="/gpu" exact component = {GPU}/>
          <Route path="/about" exact component = {About}/>
        </Switch>
        </Router>
      </div>
    )
  }
}
Home.propTypes = {
}

export default Home;