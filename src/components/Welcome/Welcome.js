import React, {Component} from 'react';
import {Carousel, Button} from 'react-bootstrap'
import laptop from "./laptop.jpg"

const WELCOME_SCREEN = 
[
  {
    img: laptop,
    link: "/laptops",
    caption:"Welcome to Lightning Laptop",
    buttonText: "Find a Laptop",
    alt: "I"
  },
  // {
  //   img: "",
  //   link: "/laptops",
  //   caption:"Amp up your workflow with the best",
  //   buttonText: "Get Started",
  //   alt: "II"
  // },
  // {
  //   img: "",
  //   link: "/laptops",
  //   caption:"Amp up your workflow with the best",
  //   buttonText: "Get Started",
  //   alt: "III"
  // }
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
            {
              return(<Carousel.Item interval={5000}>
              <a href={elem.link}>
                <img
                  className="d-block w-100"
                  src={elem.img}
                  alt={elem.alt}
                />
              </a>
              <Carousel.Caption>
                <h1>{elem.caption}</h1>
                <a href={elem.link} ><Button variant="light"><h4>{elem.buttonText}</h4></Button></a>
              </Carousel.Caption>
            </Carousel.Item>)
            })
          }
        </Carousel>
      </div>
    )
  }
}

export default Welcome;