import React, {Component} from 'react';
import DisplayLaptop from '../DisplayLaptop'
import  { Dropdown, Button, Spinner, ButtonGroup}  from 'react-bootstrap';
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
    console.log(e.target.value)
    let list = e.target.value.split(',')
    console.log(list)
    let tmp = []
    this.setState({clicked: true})
    list.forEach(elem => 
    {
      console.log(`elem: ${elem}`)
      const URL = `https://value-laptop-backend.herokuapp.com/laptop/gpu/${elem}` 
      console.log(URL)
      axios.get(URL)
      .then(res =>
      {
        let data = Object.values(res.data)
        data.forEach(d => tmp.push(d))
        tmp.sort((a, b) => b.price - a.price)
        this.setState({laptops : tmp})
      })
      .then(() => console.log(tmp))
      .catch(err => console.log(err))
    })

  }

  NVIDIA = ["MX", "1050", "1650", "1060",  "1660", "2060", "1070",  "2070", "1080",  "2080", "Quadro"]
  AMD = ["vega", "560"]

  getCategory = (elem) => 
  {
    if (elem.includes("MX")||elem.includes("vega")) return "budget"
    if (elem.includes("50")) return "entry level"
    if (elem.includes("60")) return "standard"
    if (elem.includes("70")) return "hi-performance"
    if (elem.includes("80")) return "enthusiast"
    if (elem.includes("Quadro")) return "workstation"
  }
  render()
  {
    return (
      <div className="GPU">
        <h3>Choose a GPU </h3>
        <Dropdown as={ButtonGroup} size="lg" id="bg-vertical-dropdown-1" variant="success" onSelect={this.onChange}>
          <Button 
          variant="success" onClick={this.handleClick} value={this.NVIDIA}>Nvidia</Button>
          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
          <Dropdown.Menu>
            {
              this.NVIDIA.map(elem => <Dropdown.Item eventKey={elem}>{elem} ({this.getCategory(elem)})</Dropdown.Item>)
            }
          </Dropdown.Menu>
        </Dropdown>
        
        <Dropdown as={ButtonGroup} size="lg" id="bg-vertical-dropdown-1" variant="danger" onSelect={this.onChange}>
          <Button onClick={this.handleClick} variant="danger" value={this.AMD}>AMD</Button>
          <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />
            <Dropdown.Menu>
            {
              this.AMD.map(elem => <Dropdown.Item eventKey={elem}>{elem} ({this.getCategory(elem)})</Dropdown.Item>)
            }
        </Dropdown.Menu>
        </Dropdown>

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