import React, {Component} from 'react';
import {Button,  Card,  CardDeck} from 'react-bootstrap'
import axios from 'axios'

const ABOUT = 
{
	"alanngo": 
	{
		name:"Alan Ngo",
		linkedin:"https://www.linkedin.com/in/alan-ngo-77338a150/",
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
		desc:"I am a Junior Student at the University Of Texas At Austin pursuing Computer Engineering and Finance." +
		"I enjoy learning and teaching others about programming and STEM. I fell in love with programming ever since" + 
		"I was 13 where I would watch IT personal in my mom’s office do the work in addition to my school’s tech people staying" + 
		"in front of the computer all day. I love learning about new technologies which emerge every now and then because it always amazes me."	
	}
}
class About extends Component 
{
	state = 
	{
		developers: []
	}
	componentDidMount() 
	{
		let url = `https://api.github.com/repos/alanngo/value-laptop-frontend/collaborators`
		axios.get(url, 
			{
				headers:{'Authorization': 'Bearer  28e3a1ad1e68c7d839c93e5e585fb0f69171b80a'}
			})
			.then(res =>this.setState({developers: Object.values(res.data)})		)
			.catch(err => console.log(err))
	}

  render()
  {
    return (
		<>
		<CardDeck>
		{
			this.state.developers.map(elem =>
			{
				return (
				<Card bg="dark" key={elem.id}>
				<Card.Header as="h5">{ABOUT[elem.login].name}</Card.Header>
				
				<Card.Body>
				<img align="top" src={elem.avatar_url} width={'200'} alt={elem.id}/>
				<br/>
				<br/>
				<Card.Text>{ABOUT[elem.login].desc}</Card.Text>
				<Button variant="light" href={elem.html_url}>Github</Button>
				<Button variant="primary" href={ABOUT[elem.login].linkedin}>Linkedin</Button>
				</Card.Body>
				</Card>
				)
			})
			
		}
		</CardDeck>
        </>
    )
  }
}


export default About;