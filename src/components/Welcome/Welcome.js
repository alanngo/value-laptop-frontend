import React, {Component} from 'react';
import {Carousel, Button} from 'react-bootstrap'
import laptop from "./laptop.png"
import peripheral from './peripheral.png'
import techhelp from './techhelp.png'

const WELCOME_SCREEN = 
[
  {
    img: laptop,
    link: "/laptops",
    caption:"Great Laptops Great Value",
    buttonText: "Find a Laptop",
    color:"success",
    alt: "I"
  },
  {
    img: peripheral,
    link: "/",
    caption:"Powerful Peripherals",
    buttonText: "Coming soon",
    color: "primary",
    alt: "II"
  },
  {
    img: techhelp,
    link: "/",
    caption:"Get Tech Support",
    buttonText: "Coming Soon",
    color: "danger",
    alt: "III"
  }
]
class Welcome extends Component 
{
  
  render()
  {
    return (
      <div className="Welcome">
        <Carousel>
          
          {
            WELCOME_SCREEN.map(elem =>
            (
              <Carousel.Item interval={10000}>
              <a href={elem.link}>
              <img
              className="d-block w-100"
              src={elem.img}
              alt={elem.alt}
            /></a>
            <Carousel.Caption>
              <h1>{elem.caption}</h1>
              <Button variant={elem.color} href={elem.link}><h3>{elem.buttonText}</h3></Button>
            </Carousel.Caption>
          </Carousel.Item>
            ))
          }
    
  
</Carousel>
      </div>
    )
  }
}

export default Welcome;