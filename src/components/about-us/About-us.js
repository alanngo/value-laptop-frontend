import React, {Component} from 'react';
import {Button,  Jumbotron} from 'react-bootstrap'
import alan from './me2.jpg'
import omar from './omar.jpg'
class About extends Component {

  render()
  {
    return (
      <div align="center">
        <br/>

		<Jumbotron className="bg-dark" align="left">
			<h3>Alan Ngo</h3>		
			<table>
				<tr >
					<td>
						<img src={alan} width="250" alt="alan"/>
					</td>
					<td className="align-top">
						<p>
							I am a University of Texas at Austin alumnus working @ Infosys with experience in Java, Python, and 
							C++ to name a few. I highly believe in learning new things and solving problems 
							to enrich one's mind and then sharing it with other people so that they can share in the intellectual endavour. 
							However, with learning new things, I also set aside time for different hobbies that I love such a hanging out, sleeping,
							rock climbing, building PCs, playing games and coding for fun. 
						</p>
					</td>
				</tr>
			</table>
			<br/>
			<p><a href="https://www.linkedin.com/in/alan-ngo-77338a150/"><Button variant="primary">LinkedIn</Button></a></p>
			
			</Jumbotron>
			<Jumbotron className="bg-dark" align="left">
			<h3>Omar Belkady</h3>		
			<table>
				<tr >
					<td>
						<img src={omar} width="250" alt="omar"/>
					</td>
					<td className="align-top">
						<p>
							I am a Junior Student at the University Of Texas At Austin pursuing Computer Engineering and Finance. 
							I enjoy learning and teaching others about programming and STEM. I fell in love with programming ever since 
							I was 13 where I would watch IT personal in my mom’s office do the work in addition to my school’s tech 
							people staying in front of the computer all day. I love learning about new technologies which emerge every
							now and then because it always amazes me.
						</p>
					</td>
				</tr>
			</table>
			<br/>
			<p><a href="https://www.linkedin.com/in/omar-belkady/"><Button variant="primary">LinkedIn</Button></a></p>
			
			</Jumbotron>
        	{/* <table align="center">
				<tr>
					<td>
						<Card border="light" className="bg-dark" style={{ width: '21rem' }}>
						        	<Card.Img src={me}/>
						        	<Card.Body>
						        	  <Card.Title>Alan Ngo</Card.Title>
						        	  <Card.Text>

						        	  </Card.Text>
						        	  <a href="https://www.linkedin.com/in/alan-ngo-77338a150/"><Button variant="primary">LinkedIn</Button></a>
						        	</Card.Body>
						        	</Card>
					</td>
					<td>
						<Card border="light" className="bg-dark" style={{ width: '21rem' }}>
						        	<Card.Img src={omar}/>
						        	<Card.Body>
						        	  <Card.Title>Omar Belkady</Card.Title>
						        	  <Card.Text>
									  I am a Junior Student at the University Of Texas At Austin pursuing Computer Engineering and Finance. 
									  I enjoy learning and teaching others about programming and STEM. I fell in love with programming ever since 
									  I was 13 where I would watch IT personal in my mom’s office do the work in addition to my school’s tech 
									  people staying in front of the computer all day. I love learning about new technologies which emerge every
									  now and then because it always amazes me.
						        	  </Card.Text>
						        	  <a href="https://www.linkedin.com/in/omar-belkady/"><Button variant="primary">LinkedIn</Button></a>
						        	</Card.Body>
						        	</Card>
					</td>
				</tr>
			</table>
           */}
          
      </div>
    )
  }
}


export default About;