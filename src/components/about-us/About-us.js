import React, {Component} from 'react';
import {Button,  Card,  CardDeck, Container} from 'react-bootstrap'
import alan from './me2.jpg'
import omar from './omar.jpg'


const ABOUT = 
{
	"alanngo": 
	{
		name:"Alan Ngo",
		linkedin:"https://www.linkedin.com/in/alan-ngo-77338a150/",
		img: alan,
		gh:"https://github.com/alanngo",
		desc:"I am a University of Texas at Austin alumnus working at Infosys with"+ 
		"experience in Java, Python, and C++ to name a few. I highly believe in learning new things and"+
		"solving problems to enrich one's mind and then sharing it with other people so that they can share"+
		"in the intellectual endavour. Aside from learning new things, I also dedicate time for different"+
		"hobbies that I love such a hanging out, hiking, rock climbing, building PCs, playing games and coding for fun."	
	},
	"omarbelkady": 
	{
		name: "Omar Belkady",
		linkedin:"https://www.linkedin.com/in/omar-belkady/",
		img: omar,
		gh: "https://github.com/omarbelkady",
		desc:"I am a Junior Student at the University Of Texas At Austin pursuing Computer Engineering and Finance." +
		"I enjoy learning and teaching others about programming and STEM. I fell in love with programming ever since" + 
		"I was 13 where I would watch IT personal in my mom’s office do the work in addition to my school’s tech people staying" + 
		"in front of the computer all day. I love learning about new technologies which emerge every now and then because it always amazes me."	
	}
}
class About extends Component 
{
  render()
  {
    return (
		<>
		<Container fluid>
		<CardDeck>
		{
			Object.keys(ABOUT).map(elem =>
			{
				return (
				<Card bg="light" key={elem.id}>
				<Card.Header as="h5">{ABOUT[elem].name}</Card.Header>
				
				<Card.Body>
				<img align="top" src={ABOUT[elem].img} width={'200'} alt={elem.id}/>
				<br/>
				<br/>
				<Card.Text>{ABOUT[elem].desc}</Card.Text>
				<Button variant="dark" href={ABOUT[elem].gh}>Github</Button>
				<Button variant="primary" href={ABOUT[elem].linkedin}>Linkedin</Button>
				</Card.Body>
				</Card>
				)
			})
			
		}
		</CardDeck>
		</Container>
        </>
    )
  }
}


export default About;