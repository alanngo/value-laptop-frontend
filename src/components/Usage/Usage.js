import axios from "axios";
import React    from "react";
import  {Button, Table}  from 'react-bootstrap';
import DisplayLaptop from "../DisplayLaptop/DisplayLaptop";
// import controller from './controller.png'
import './Usage.css'
class Usage extends React.Component 
{
  state = 
	{
		usage: '0',
    laptops: [],
    ready: true
	}

  handleClick = (use) =>
  {
    console.log(use)
    const URL = `https://value-laptop-backend.herokuapp.com/laptop/category/${use}` 
    axios.get(URL)
	.then(res =>
	{
		// console.log(res.data)
		this.setState({laptops : Object.values(res.data)})
		console.log(this.state.laptops)
	}).catch(err => console.log(err))
  }

  render() 
  {
    return(
      <>
      <br/>
      <Table striped borderless hover variant="dark">
        <thead>
          <tr>
            <td><Button onClick = {() => this.handleClick("general")} variant="light"><h5>
              I'm a typical person who needs a laptop
            </h5></Button><br/></td>
            <td><div className="gap"></div></td>
            <td><Button onClick = {() => this.handleClick("gaming")} variant="light"><h5>
              I am a gamer who really values FPS🎮
            </h5></Button><br/></td>
            <td><div className="gap"></div></td>
            <td><Button onClick = {() => this.handleClick("workstation")} variant="light"> <h5>
              I'm an enthusiast who needs the best😎
            </h5></Button><br/></td>
          </tr>
        </thead>
        
      </Table>
		
		<div>
			<DisplayLaptop laptops={this.state.laptops} />
		</div>
      
      </>
    )
  }
}

export default Usage;
