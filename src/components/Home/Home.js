import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import { Nav, Navbar} from "react-bootstrap"
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import FindLaptop from '../FindLaptop/FindLaptop'
import About from '../about-us/About-us';
// import logo from '../logo3.png'
import Welcome from '../Welcome/Welcome';
// const WIDTH = 150
// const HEIGHT = 100
class Home extends Component 
{
  render()
  {
    return (
    
    <div className="">
        <Router>
        {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="light">
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
      <Nav.Link href="/about"><h6>About</h6></Nav.Link>
      <Nav.Link href="/laptops"><h6>Laptops</h6></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}
  
        <Switch>
          <Route path="/laptops" exact component = {FindLaptop}/>
          <Route path="/about" exact component = {About}/>
          <Route component={Welcome} path='*' />
        </Switch>
        </Router>
      </div>
    )
  }
}
Home.propTypes = {
}

export default Home;