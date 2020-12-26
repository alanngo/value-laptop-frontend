import axios from "axios";
import React    from "react";
import  {DropdownButton, Dropdown, Spinner}  from 'react-bootstrap';
import DisplayLaptop from "../DisplayLaptop/DisplayLaptop";
// import controller from './controller.png'
import './Usage.css'
class Usage extends React.Component 
{
  state = 
	{
		usage: '0',
    laptops: [],
    clicked: false
	}
  onChange = (event) =>
  {
    console.log(event)
    this.setState({usage: event}, () => console.log("usage: "+ this.state.usage))
    this.setState({clicked: true})
    const URL = `https://value-laptop-backend.herokuapp.com/laptop/category/${event}` 
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
      <DropdownButton 
      id="dropdown-basic-button" 
      title="I need a laptop for... " 
      variant="light"
      size="lg"
      onSelect={this.onChange}>
        <Dropdown.Item eventKey="general">Office/School</Dropdown.Item>
        <Dropdown.Item eventKey="gaming">Gaming </Dropdown.Item>
        <Dropdown.Item eventKey="workstation">High-End work</Dropdown.Item>
      </DropdownButton>
      <br/>        
			{
				(this.state.clicked === false)?<></>:
				(this.state.laptops.length<=0)?
				<> 
					<Spinner animation="border" variant="info" />
				</>
				:
				<div>
					<DisplayLaptop laptops={this.state.laptops}/>
				</div>
			}
      
      </>
    )
  }
}

export default Usage;
