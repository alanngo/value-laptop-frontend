import React, {Component} from 'react';
import axios from 'axios'
import './FindLaptop.css'
import {Spinner, Button, Form, Row, Col, Dropdown, ButtonGroup, Pagination, Container} from 'react-bootstrap'
import DisplayLaptop from '../DisplayLaptop'

const STRING_SEARCH = (arg0) => ({$regex: `${arg0}`, $options:"i"})
const RANGE = (begin, end) =>({ "$lte": Number(end), "$gte": Number(begin)})
const PRICE = (arg0) => 
{
  if (!arg0) return {$gte: Number(0)}

  let suffix = arg0.charAt(arg0.length-1)
  let prefix = arg0.substr(0, arg0.length-1)
  if (suffix==='K' || suffix==='k') return {$lte: Number(prefix) *1000}
  return {$lte: Number(arg0)}
}
const CHIP_TYPE = (elem) => 
{
  if (elem.includes("MX")||elem.includes("vega")) return "budget"
  if (elem.includes("50")) return "entry level"
  if (elem.includes("60") || elem.match(/(i5|ryzen 5)/i)) return "standard"
  if (elem.includes("70") || elem.match(/(i7|ryzen 7)/i)) return "hi-performance"
  if (elem.includes("80") || elem.match(/(i9|ryzen 9)/i)) return "enthusiast"
  if (elem.includes("Quadro") || elem.match(/(xeon|threadripper)/i)) return "workstation"
}
const USE_TYPE = (elem) => 
({
  "School/Office":"general",
  "I'm a gamer": "gaming",
  "High-end usage": "workstation"
})[elem]

const WORKLOAD = (ram) =>
({
  8:"minimum multitasking",
  16: "standard multitasking",
  32:"Industry-grade workflow",
  64:"No compromises"
})[ram]

//laptop parts 
const INTEL = ["i5", "i7", "i9", "xeon"]
const RYZEN = ["Ryzen 5", "Ryzen 7", "Ryzen 9"] 
const NVIDIA = ["MX", "1050", "1650", "1060",  "1660", "2060", "1070",  "2070", "1080",  "2080", "Quadro"]
const AMD = ["vega", "560"]
const RAM = [8, 16, 32, 64]
const USAGE = ["School/Office", "I'm a gamer", "High-end usage"]
const DEFAULT_STATE=	{
  criteria: 
  {
    name: STRING_SEARCH('.*'),
    cpu: STRING_SEARCH('.*'),
    ram: RANGE(8, 128),
    gpu: STRING_SEARCH('.*'),
    price: PRICE(0),
    category: STRING_SEARCH('.*')
  },
  laptops: [],
  clicked: false,
  dropDownCPU: "CPU",
  dropDownGPU: "GPU",
  dropDownRAM:"RAM",
  dropDownUsage: "Usage",
  elapsedTime: 0, 
  searchCount: 0,
  first: 0,
  last: 9,
  curr: 1
}

class FindLaptop extends Component 
{
  state = DEFAULT_STATE

  changeValue = (key, value)=> this.setState({[`${key}`]: value})

  handleClick = (e) => 
  {
    e.preventDefault()

    // reset every time
    this.setState(DEFAULT_STATE)

    this.setState({searchCount: 1})
    this.setState({clicked: true})
    const URL = `https://value-laptop-backend.herokuapp.com/laptop/`
    const BODY = this.state.criteria
    axios.post(URL, BODY)
    .then(res => 
    {
      console.log(res.data)
      this.setState({laptops: Object.values(res.data)})
      if (Object.values(res.data).length <=0)
      {
        this.setState({searchCount: -1})
        console.log("no data")
        console.log(this.state)
        alert("No laptops found with given input")
      }
        
    }).catch(err => console.log(err))
    .then(() => console.log(this.state))

  }

  handleCompany = (company) => 
  {
    let count = 0;
    let resString = ""
    resString = resString.concat('(')
    company.forEach(elem => 
    {
      if (count === company.length-1)
        resString = resString.concat(`${elem}`)
      else
        resString = resString.concat(`${elem}|`)
      count++;
    })
    resString = resString.concat(`)`)
    return resString
  }
  
// render related
  renderForm  = () =>
  {
    return (<Form onSubmit={this.handleClick}>
      <Form.Group as={Row}>
        <Col>
        <Form.Label>Keywords</Form.Label>
          <Form.Control placeholder="Know the company?" 
          onChange= {(event)=>
          {
            let name = event.target.value
            let criteria = this.state.criteria
            criteria.name = STRING_SEARCH(name)
            this.setState
            (
              {criteria: criteria},
              () => console.log(criteria)
            )
          }}/>
        </Col>
        <Col>
        <Form.Label>
          My Budget
        </Form.Label>
          <Form.Control placeholder="How much you wanna spend?" 
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
            <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic">{this.state.dropDownCPU}</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Divider />
              <Dropdown.Item eventKey=".*" onClick={() => this.changeValue("dropDownCPU","All CPUs")}>All CPUs</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Divider />
              <Dropdown.Item eventKey="i" onClick={() => this.changeValue("dropDownCPU","Intel")}>Intel</Dropdown.Item>
              <Dropdown.Divider />
              {
                INTEL.map(elem =><Dropdown.Item eventKey={elem} onClick={() => this.changeValue("dropDownCPU",`Intel ${elem} `)}>{elem} ({CHIP_TYPE(elem)})</Dropdown.Item>)
              }
            
            <Dropdown.Divider />
            <Dropdown.Item eventKey="ryzen" onClick={() => this.changeValue("dropDownCPU","AMD Ryzen")}>AMD</Dropdown.Item>
            <Dropdown.Divider />
            {
              RYZEN.map(elem =><Dropdown.Item eventKey={elem} onClick={() => this.changeValue("dropDownCPU",`AMD ${elem}`)}>{elem} ({CHIP_TYPE(elem)})</Dropdown.Item>)
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
            <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic">{this.state.dropDownGPU}</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Divider />
              <Dropdown.Item eventKey=".*" onClick={() => this.changeValue("dropDownGPU", "All GPUs")}>All GPU</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Divider />
              <Dropdown.Item eventKey={this.handleCompany(NVIDIA)} onClick={() => this.changeValue("dropDownGPU","Nvidia")}>Nvidia</Dropdown.Item>
              <Dropdown.Divider />
              {
                NVIDIA.map(elem =><Dropdown.Item eventKey={elem} onClick={() => this.changeValue("dropDownGPU",`Nvidia ${elem} `)}>{elem} ({CHIP_TYPE(elem)})</Dropdown.Item>)
              }
            
            <Dropdown.Divider />
            <Dropdown.Item eventKey={this.handleCompany(AMD)} onClick={() => this.changeValue("dropDownGPU","AMD Radeon")}>AMD</Dropdown.Item>
            <Dropdown.Divider />
            {AMD.map(elem =><Dropdown.Item eventKey={elem} onClick={() => this.changeValue("dropDownGPU",`AMD ${elem}`)}>{elem} ({CHIP_TYPE(elem)})</Dropdown.Item>)}
            </Dropdown.Menu>
            </Dropdown>
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
                let ram = Number(event)
                let criteria = this.state.criteria
                console.log(typeof(ram))
                if (ram >= 128)
                  criteria.ram = RANGE(8, ram)
                else
                  criteria.ram = RANGE(ram, ram)
                this.setState
                ({criteria: criteria},
                  () => console.log(criteria)
                )
              }
            } >
            <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic">{this.state.dropDownRAM}</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Divider />
              <Dropdown.Item eventKey={1024} onClick={() => this.changeValue("dropDownRAM", "All RAM")}>Any</Dropdown.Item>
              <Dropdown.Divider />
              {RAM.map(elem =><Dropdown.Item eventKey={elem} onClick={() => this.changeValue("dropDownRAM",`${elem} GB`)}>{elem} GB ({WORKLOAD(elem)})</Dropdown.Item>)}
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
                let category = event
                let criteria = this.state.criteria
                criteria.category = STRING_SEARCH(category)
                this.setState
                ({criteria: criteria},
                  () => console.log(criteria)
                )
              }
            } >
            <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic">{this.state.dropDownUsage}</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Divider />
              <Dropdown.Item eventKey=".*" onClick={() => this.changeValue("dropDownUsage", "All Uses")}>Any</Dropdown.Item>
              <Dropdown.Divider />
              {USAGE.map(elem =><Dropdown.Item eventKey={USE_TYPE(elem)} onClick={() => this.changeValue("dropDownUsage",`${elem}`)}>{elem}</Dropdown.Item>)}
            </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Form.Group>
      <Button variant="success" onClick={this.handleClick}><h4>Search🔍</h4></Button>
  </Form>)
  }
  conditionalDisplay = ()=>
  {
    if (this.state.searchCount<0)
      return <><p>no laptops found😢</p></>
      
    if (this.state.clicked===false)
      return <></>
    if (this.state.laptops.length<=0)
      return <Spinner animation="border" variant="info"/>

    
    return (
    <>
    <DisplayLaptop laptops={this.state.laptops.slice
    (
      this.state.first,
      this.state.last)}/>
    </>
    )

  }

  // pagination
  getPageNumbers()
  {
    let ret = []
    for (let i =0; i<this.state.laptops.length/9; i++) 
      ret.push(i + 1)
    return ret
  }
  getPageInterval(page)
  {
    let ret = []

    let a = 0; 
    let b = 9;
    for (let i =1; i<=page; i++)
    {
      if (i!==1)
      {
        a=b
        b=a + 9
        ret[i] ={first: a, last: b}
      }
      else
        ret[i] ={first: a, last: b}
    }
    console.log(ret)
    return ret
  }
  displayPagination()
  {
    let pages = this.getPageNumbers()
    return (
      <div className="pagination">
        <Pagination >

            <Pagination.Prev disabled={this.state.curr<=1} onClick={() => 
            {
              let tmp0 = this.state.first
              let tmp1 = this.state.last
              let marker = this.state.curr
              this.setState(
                {
                first: tmp0-9, 
                last: tmp1-9,
                curr: marker-1
                })
            }}/>
            {
              pages.map(page=> <Pagination.Item disabled={this.state.curr===page} key={page} onClick={() => 
              {
                let table= this.getPageInterval(page)
                console.log("page: "+this.state.curr)
                this.setState(
                  {
                    first: table[page].first,  
                    last: table[page].last ,
                    curr: page
                  }, () =>
                  {
                    console.log(this.state.first)
                    console.log(this.state.last)
                    console.log(this.state.curr)
                  }
                )

              }}>{page}</Pagination.Item>)
            }
            <Pagination.Next disabled={this.state.curr>=pages.length} onClick={() => 
            {
              let tmp0 = this.state.first
              let tmp1 = this.state.last
              let marker = this.state.curr
              this.setState(
              {
                first: tmp0+9, 
                last: tmp1+9,
                curr: marker+1
              }, () =>
              {
                console.log(this.state.first)
                console.log(this.state.last)
                console.log(this.state.curr)
              })

            }}/>

          </Pagination>
          </div>
    )
  }

  render()
  {
    return (
      <div className="FindLaptop">
        <Container fluid>
        {this.renderForm()}
        <br/>
        {this.conditionalDisplay()}
        <br/>
        {
          (this.state.laptops.length===0)?<></>:
        this.displayPagination()}
        </Container>
      </div>
    )
  }
}

export default FindLaptop;