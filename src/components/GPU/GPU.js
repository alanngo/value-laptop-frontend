import React, {Component} from 'react';
import DisplayLaptop from '../DisplayLaptop'
import  {DropdownButton, Dropdown, Spinner, ButtonGroup}  from 'react-bootstrap';
import axios from 'axios'

class GPU extends Component 
{

  state = 
	{
		price: '0',
		laptops: [],
    clicked: false,
    gpu:''
  }
  onChange = (event) =>
  {
    console.log(event)
    this.setState({clicked: true})
    const URL = `https://value-laptop-backend.herokuapp.com/laptop/gpu/${event}` 
    axios.get(URL)
    .then(res =>
    {
      // console.log(res.data)
      this.setState({laptops : Object.values(res.data)})
      console.log(this.state.laptops)
    }).catch(err => console.log(err))
  }

  handleClick = (e) =>
  
  {
    e.preventDefault()
    this.setState({clicked: true})
    const URL = `https://value-laptop-backend.herokuapp.com/laptop/gpu/quadro` 
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
      <div className="GPU">
        <h3>Choose a GPU </h3>
        <DropdownButton as={ButtonGroup} size="lg" title="Nvidia" id="bg-vertical-dropdown-1" variant="success" onSelect={this.onChange}>
          <Dropdown.Item eventKey="mx">MX series (budget)</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="1050">GTX 1050/1050 Ti (entry level)</Dropdown.Item>
          <Dropdown.Item eventKey="1650">GTX 1650/1650 Super (entry level)</Dropdown.Item>
          <Dropdown.Item eventKey="1060">GTX 1060 (standard)</Dropdown.Item>
          <Dropdown.Item eventKey="1660">GTX 1660/1660 Super/1660 Ti (standard)</Dropdown.Item>
          <Dropdown.Item eventKey="1070">GTX 1070/1070 Ti (high performance)</Dropdown.Item>
          <Dropdown.Item eventKey="1080">GTX 1080/1080 Ti (enthusiast)</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="2060">RTX 2060/2060 Super (standard)</Dropdown.Item>
          <Dropdown.Item eventKey="2070">RTX 2070/2070 Super (high performance)</Dropdown.Item>
          <Dropdown.Item eventKey="2080">RTX 2080/2080 Super/2080 Ti (enthusiast)</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="Quadro">Quadro (workstation)</Dropdown.Item>
        </DropdownButton>
        <DropdownButton as={ButtonGroup} size="lg" title="AMD" id="bg-vertical-dropdown-1" variant="danger" onSelect={this.onChange}>
          <Dropdown.Item eventKey="vega">Vega (budget)</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="560">RX 560/5600 series (standard)</Dropdown.Item>
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


export default GPU;