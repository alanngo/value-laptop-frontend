import React, {Component} from 'react';
import {Card, CardGroup, Button, Table} from 'react-bootstrap'
import me from './me2.jpg'
class About extends Component {

  render()
  {
    return (
      <div align="center">
        <br/>

        	<table>
				<tr>
					<td>
						<Card border="light" className="bg-dark" style={{ width: '21rem' }}>
						        	<Card.Img src={me}/>
						        	<Card.Body>
						        	  <Card.Title>Alan Ngo</Card.Title>
						        	  <Card.Text>
						        	    I am a University of Texas at Austin alumnus working @ Infosys, experience w/ Git, Java, SpringBoot, Python, 
						        	    Flask, MongoDB, React, MERN & MEAN stack. I highly believe in learning new things and solving problems 
										to enrich one's mind and then sharing it with other people so that they can share in the intellectual endavour. 
										But with learning new things, I also set aside time for different hobbies that I love such a hanging out, 
										rock climbing, building PCs, playing games and coding for fun. 
						        	  </Card.Text>
						        	  <a href="https://www.linkedin.com/in/alan-ngo-77338a150/"><Button variant="primary">LinkedIn</Button></a>
						        	</Card.Body>
						        	</Card>
					</td>
					<td>
						<Card border="light" className="bg-dark" style={{ width: '21rem' }}>
						        	<Card.Img src={me}/>
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
          
          
      </div>
    )
  }
}


export default About;