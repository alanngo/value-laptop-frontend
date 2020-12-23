import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Button, Nav, Row, Col} from "react-bootstrap"
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Price from '../Price/Price';
import Usage from '../Usage/Usage'
import About from '../about-us/About-us';

class Home extends Component 
{
  render()
  {
    return (
    
    <div className="bg-dark">
        <Router>
          <Row>
            <Col>
              <Nav.Link href = "/price"><Button variant="primary"><h4>Find a laptop within my budget</h4></Button></Nav.Link>
            </Col>
            <Col>
              <Nav.Link href = "/usage"><Button variant="success"><h4> Find a laptop that fits my usage</h4></Button></Nav.Link>
            </Col>
            <Col>
              <Nav.Link href = "/"><Button variant="danger"><h4>Coming Soon...</h4></Button></Nav.Link>
            </Col>
            <Col>
              <Nav.Link href = "/"><Button variant="warning"><h4> Coming Soon...</h4></Button></Nav.Link>
            </Col>
          </Row>
          {/* <div className="Home">
              <br/>
              <table align="center" className="choices">
                <thead>
                  <tr>
                    <Nav.Link href = "/price"><td><Button variant="primary"><h3>Find a laptop within my budget</h3></Button></td></Nav.Link>
                    <td><div className="gap"></div></td>
                    <Nav.Link href = "/usage"><td><Button variant="success"><h3> Find a laptop that fits my usage</h3></Button></td></Nav.Link>
                  </tr>
                  <tr align="center">
                    <Nav.Link href = "/"><td><Button variant="danger"><h3>Coming Soon...</h3></Button></td></Nav.Link>
                    <td><div className="gap"></div></td>
                    <Nav.Link href = "/"><td><Button variant="warning"><h3> Coming Soon...</h3></Button></td></Nav.Link>
                  </tr>
                </thead>
              </table>
            
            
          </div> */}
  
        <Switch>
          <Route path="/price" exact component = {Price}/>
          <Route path="/usage" exact component = {Usage}/>
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