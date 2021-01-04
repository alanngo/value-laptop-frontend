import React, {Component} from 'react';
import axios from 'axios'
import {Spinner, Button, Form, Row, Col, Dropdown, ButtonGroup} from 'react-bootstrap'
import DisplayLaptop from '../DisplayLaptop'

const STRING_SEARCH = (arg0) => ({$regex: `${arg0}`, $options:"i"})
const RANGE = (begin, end) =>({ "$lte": Number(end), "$gte": Number(begin)})
const PRICE = (arg0) => ({$lte: Number(arg0)})
const CATEGORY = (elem) => 
{
  if (elem.includes("MX")||elem.includes("vega")) return "budget"
  if (elem.includes("50")) return "entry level"
  if (elem.includes("60") || elem.match(/(i5|ryzen 5)/i)) return "standard"
  if (elem.includes("70") || elem.match(/(i7|ryzen 7)/i)) return "hi-performance"
  if (elem.includes("80") || elem.match(/(i9|ryzen 9)/i)) return "enthusiast"
  if (elem.includes("Quadro") || elem.match(/(xeon|threadripper)/i)) return "workstation"
}

//cpus 
const INTEL = ["i5", "i7", "i9", "xeon"]
const RYZEN = ["Ryzen 5", "Ryzen 7", "Ryzen 9"] 
const NVIDIA = ["MX", "1050", "1650", "1060",  "1660", "2060", "1070",  "2070", "1080",  "2080", "Quadro"]
const AMD = ["vega", "560"]

class FindLaptop extends Component 
{
  
  state = 
	{
    criteria: 
    {
      name: STRING_SEARCH('.*'),
      cpu: STRING_SEARCH('.*'),
      ram: RANGE(8, 128),
      gpu: STRING_SEARCH('.*'),
      price: {$gte: 0},
      category: STRING_SEARCH('.*')
    },
		laptops: [],
    clicked: false,
    dropDownCPU: "Choose a CPU",
    dropDownGPU: "Choose a GPU"
  }

  changeValue = (key, value)=> this.setState({[`${key}`]: value})

  handleClick = (e) => 
  {
    e.preventDefault()
    const URL = `https://value-laptop-backend.herokuapp.com/laptop/`
    const BODY = this.state.criteria
    this.setState({clicked: true})
    axios.post(URL, BODY)
    .then(res => 
    {
      console.log(res.data)
      this.setState({laptops: Object.values(res.data)})
    })
  }

  handleCompany = (company) => 
  {
    let count = 0;
    let resString = ""
    resString = resString.concat('(')
    company.forEach(elem => 
    {
      if (count == company.length-1)
        resString = resString.concat(`${elem}`)
      else
        resString = resString.concat(`${elem}|`)
      count++;
    })
    resString = resString.concat(`)`)
    return resString
  }
  render()
  {
    return (
      <div className="FindLaptop">
      <h1> Find a laptop</h1>
      <Form onSubmit={this.handleClick}>
          <Form.Group as={Row}>
            <Col>
            <Form.Label>Name</Form.Label>
              <Form.Control placeholder=" Laptop Name" 
              onChange= {(event)=>
              {
                let name = event.target.value
                let criteria = this.state.criteria
                criteria.name = STRING_SEARCH(name)
                this.setState
                ({criteria: criteria},
                  () => console.log(criteria)
                )
              }}/>
            </Col>
            <Col>
            <Form.Label>
              Max Price
            </Form.Label>
              <Form.Control placeholder=" Laptop Price" 
              onChange= {(event)=>
              {
                let price = event.target.value
                let criteria = this.state.criteria
                criteria.price = PRICE(price)
                this.setState
                ({criteria: criteria},
                  () => console.log(criteria)
                )
              }}/>
            </Col>

          </Form.Group>
            <Form.Group as={Row}>
              
              <Col>
                <Dropdown as={ButtonGroup} size="lg" id="bg-vertical-dropdown-1" variant="primary" 
                onSelect=
                {
                  (event) =>
                  {
                    console.log(event)
                    let cpu = event
                    let criteria = this.state.criteria
                    criteria.cpu = STRING_SEARCH(cpu)
                    this.setState
                    ({criteria: criteria},
                      () => console.log(criteria)
                    )
                  }
                } >
                <Dropdown.Toggle split variant="light" id="dropdown-split-basic">{this.state.dropDownCPU}</Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Divider />
                  <Dropdown.Item eventKey=".*" onClick={() => this.changeValue("dropDownCPU","All CPUs")}>All CPUs</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="i" onClick={() => this.changeValue("dropDownCPU","Intel")}>Intel</Dropdown.Item>
                  <Dropdown.Divider />
                  {
                    INTEL.map(elem =><Dropdown.Item eventKey={elem} onClick={() => this.changeValue("dropDownCPU",`Intel ${elem} `)}>{elem} ({CATEGORY(elem)})</Dropdown.Item>)
                  }
                
                <Dropdown.Divider />
                <Dropdown.Item eventKey="ryzen" onClick={() => this.changeValue("dropDownCPU","AMD Ryzen")}>AMD</Dropdown.Item>
                <Dropdown.Divider />
                {
                  RYZEN.map(elem =><Dropdown.Item eventKey={elem} onClick={() => this.changeValue("dropDownCPU",`AMD ${elem}`)}>{elem} ({CATEGORY(elem)})</Dropdown.Item>)
                }
                </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col>
              <Dropdown as={ButtonGroup} size="lg" id="bg-vertical-dropdown-1" variant="primary" 
                onSelect=
                {
                  (event) =>
                  {
                    console.log(event)
                    let gpu = event
                    let criteria = this.state.criteria
                    criteria.gpu = STRING_SEARCH(gpu)
                    this.setState
                    ({criteria: criteria},
                      () => console.log(criteria)
                    )
                  }
                } >
                <Dropdown.Toggle split variant="light" id="dropdown-split-basic">{this.state.dropDownGPU}</Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Divider />
                  <Dropdown.Item eventKey=".*" onClick={() => this.changeValue("dropDownGPU", "All GPUs")}>All GPU</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey={this.handleCompany(NVIDIA)} onClick={() => this.changeValue("dropDownGPU","Nvidia")}>Nvidia</Dropdown.Item>
                  <Dropdown.Divider />
                  {
                    NVIDIA.map(elem =><Dropdown.Item eventKey={elem} onClick={() => this.changeValue("dropDownGPU",`Nvidia ${elem} `)}>{elem} ({CATEGORY(elem)})</Dropdown.Item>)
                  }
                
                <Dropdown.Divider />
                <Dropdown.Item eventKey={this.handleCompany(AMD)} onClick={() => this.changeValue("dropDownGPU","AMD Radeon")}>AMD</Dropdown.Item>
                <Dropdown.Divider />
                {
                  AMD.map(elem =><Dropdown.Item eventKey={elem} onClick={() => this.changeValue("dropDownGPU",`AMD ${elem}`)}>{elem} ({CATEGORY(elem)})</Dropdown.Item>)
                }
                </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Form.Group>
          <Button variant="success" onClick={this.handleClick}>Search</Button>

      </Form>
        
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


export default FindLaptop;