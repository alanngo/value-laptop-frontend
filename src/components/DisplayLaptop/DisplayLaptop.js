import React    from "react";
import  {Button, Accordion, Card, Nav, CardColumns, Table}  from 'react-bootstrap';

var getTB = (size) => 
{
  if (size>=1000)
    return `${size/1000.0} TB`
  return `${size} GB`
}


var getCategory = (category) =>
{
  switch (category)
  {
    case 'gaming': return '🎮'
    case 'workstation': return '🥇'
    default: return ''
  }
}

var DisplayLaptop = (props) =>
{
  console.log("DisplayLaptop")
  console.log(props)
  console.log("Render")
  return (
    <div>
    <Accordion className="bg-dark">
      <CardColumns> 
      {
      props.laptops.map(laptop => 
      {
        return (
        <>           
            <Card className="bg-dark">
              
            <Accordion.Toggle
              as={Button} 
                variant="link" 
                eventKey={laptop._id}>
            <Card.Header><h3>{getCategory(laptop.category)} {laptop.name} <span className="text-success">${laptop.price}</span></h3></Card.Header>

                <Card.Img variant="top" src={laptop.links.image} />
              </Accordion.Toggle>


              <Accordion.Collapse eventKey={laptop._id}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <Table borderless className="text-light">
                        <tr> 
                          <td><h5> CPU</h5></td>
                          <td>{laptop.cpu}</td>
                        </tr>
                        <tr> 
                          <td><h5> RAM</h5></td>
                          <td>{laptop.ram} GB</td>
                        </tr>
                        <tr> 
                          <td><h5> Storage</h5></td>
                          <td>
                            {
                              (laptop.storage.nvme===0)?
                              <></>:
                              <>{getTB(laptop.storage.nvme)} NVME</>
                            }
                            <br/>
                            {
                              (laptop.storage.ssd===0)?
                              <></>:
                              <>{getTB(laptop.storage.ssd)} SSD</>
                            }
                            <br/>
                            {
                              (laptop.storage.hdd===0)?
                              <></>:
                              <>{getTB(laptop.storage.hdd)} HDD</>
                            }
                          </td>
                        </tr>
                        <tr>
                          <td><h5> GPU</h5></td>
                          <td>{laptop.gpu}</td>
                        </tr>
                        <tr>
                          <td>{(laptop.links.amazon==="")?<></>:<Nav.Link href={laptop.links.amazon}><Button variant="warning"><h6>Buy From Amazon</h6></Button></Nav.Link>}</td>
                          <td>{(laptop.links.newegg==="")?<></>:<Nav.Link href={laptop.links.newegg}><Button variant="info"><h6>Buy From Newegg</h6></Button></Nav.Link>}</td>
                        </tr>
                    </Table>
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
        </>
        
        )})
      }
      </CardColumns>
    </Accordion>

    </div>
  )
}

export default DisplayLaptop;
