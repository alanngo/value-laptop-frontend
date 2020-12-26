import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Button, Nav, Row, Col} from "react-bootstrap"
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Price from '../Price/Price';
import Usage from '../Usage/Usage';
import CPU from '../CPU/CPU';
import GPU from '../GPU/GPU';
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
              <Nav.Link href = "/price"><Button variant="danger"><h4>Find laptop by price</h4></Button></Nav.Link>
            </Col>
            <Col>
              <Nav.Link href = "/usage"><Button variant="warning"><h4>Find laptop by use</h4></Button></Nav.Link>
            </Col>
            <Col>
              <Nav.Link href = "/cpu"><Button variant="primary"><h4>Find laptop by CPU</h4></Button></Nav.Link>
            </Col>
            <Col>
              <Nav.Link href = "/gpu"><Button variant="success"><h4> Find laptop by GPU</h4></Button></Nav.Link>
            </Col>
          </Row>
  
        <Switch>
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