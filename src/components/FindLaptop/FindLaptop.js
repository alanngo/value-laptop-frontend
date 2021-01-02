import React, {Component} from 'react';
import axios from 'axios'
import {Spinner, Button, Form, Row, Col} from 'react-bootstrap'
import DisplayLaptop from '../DisplayLaptop'
const STRING_SEARCH = {$regex: ".*", $options:"i"}
class FindLaptop extends Component 
{
  state = 
	{
    criteria: 
    {
      name: STRING_SEARCH,
      cpu: STRING_SEARCH,
      ram: { $lte: 128, $gte: 8},
  
      gpu: STRING_SEARCH,
  
      price: {$lte: 1000},
      category: STRING_SEARCH
  },
		laptops: [],
    clicked: false,
  }


  handleClick = (e) => 
  {
    e.preventDefault()
    const URL = `https://value-laptop-backend.herokuapp.com/laptop/`
    let body = {name:"razer"}
    this.setState({clicked: true})
    axios.get(URL, {params: body})
    .then(res => 
    {
      console.log("body")
      console.log(body)
      let results = Object.values(res.data)
      this.setState({laptops: results})
      console.log(this.state.laptops)
    })
  }
  render()
  {
    return (
      <div className="FindLaptop">
      <h1> Find a laptop</h1>
      <Form onSubmit={this.handleClick}>
          <Row>
            <Col>
              <Form.Control placeholder=" Laptop Name" 
              onChange= {(event)=>
              {
                let name = event.target.value
                let criteria = this.state.criteria
                criteria.name = name
                console.log(this.state)
                this.setState
                (
                  {
                    criteria: criteria
                  },
                  () => console.log(criteria)
                )
              }}/>
            </Col>
          </Row>
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
FindLaptop.propTypes = {
}

export default FindLaptop;