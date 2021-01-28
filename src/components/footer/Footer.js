import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';

class Footer extends Component 
{

  render()
  {
    return (
      <div className="Footer" align="center">
          <Nav className="bg-light justify-content-center">
          <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav.Item>
          </Nav>
      </div>
    )
  }
}


export default Footer;