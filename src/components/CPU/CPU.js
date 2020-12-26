import React, {Component} from 'react';
import { DropdownButton, ButtonGroup, Dropdown, Spinner} from 'react-bootstrap'
import DisplayLaptop from '../DisplayLaptop/DisplayLaptop'
import axios from 'axios';
class CPU extends Component 
{

  state = 
	{
		price: '0',
		laptops: [],
		clicked: false
  }
  
  onChange = (event) =>
  {
    console.log(event)
    this.setState({clicked: true})
    const URL = `https://value-laptop-backend.herokuapp.com/laptop/cpu/${event}` 
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
    return (
      <div className="CPU">
        <h3>Choose a CPU </h3>
        <DropdownButton as={ButtonGroup} size="lg" title="Intel" id="bg-vertical-dropdown-1" variant="primary" onSelect={this.onChange}>
          <Dropdown.Item eventKey="i5">core i5 (standard)</Dropdown.Item>
          <Dropdown.Item eventKey="i7">core i7 (high performance)</Dropdown.Item>
          <Dropdown.Item eventKey="i9">core i9 (enthusiast)</Dropdown.Item>
          <Dropdown.Item eventKey="Xeon">xeon (workstation)</Dropdown.Item>
        </DropdownButton>
        <DropdownButton as={ButtonGroup} size="lg" title="AMD" id="bg-vertical-dropdown-2" variant="danger" onSelect={this.onChange}>
          <Dropdown.Item eventKey="ryzen 5">Ryzen 5 (standard)</Dropdown.Item>
          <Dropdown.Item eventKey="ryzen 7">Ryzen 7 (high performance)</Dropdown.Item>
          <Dropdown.Item eventKey="ryzen 9">Ryzen 9 (enthusiast)</Dropdown.Item>
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
      </div>
    )
  }
}


export default CPU;