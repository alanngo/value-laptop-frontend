import React, {Component} from 'react';
import { Nav } from 'react-bootstrap';

class Footer extends Component 
{

  render()
  {
    return (
      <div className="Footer" align="center">
          <Nav className="bg-dark justify-content-center">
            <Nav.Item>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav.Item>
          </Nav>
      </div>
    )
  }
}


export default Footer;