import React    from "react";
import  {Button, Accordion, Card, Nav, CardColumns, Table}  from 'react-bootstrap';
import "./DisplayLaptop.css"
import r5 from './ryzen5.png'
import r7 from './ryzen7.png'
import r9 from './ryzen9.png'
import i5 from './i5.png'
import i7 from './i7.png'
import i9 from './i9.png'
import xeon from './xeon.png'

import mx from './mx.png'
import rtx from './rtx.png'
import gtx from './gtx.png'
import quadro from './quadro.png'

import radeon from './radeon.png'
import vega from './vega.jpg'

// get images and details
var getProcessorInfo = (proc, alternate, link, w) =><a href={link}  target="_blank" rel="noreferrer"><img src = {proc} alt={alternate} width={w}/></a>

var getCPU = (cpu, w) => 
{
  // intel
  if (cpu.includes('i5')) return getProcessorInfo(i5, "i5", "https://en.wikichip.org/wiki/intel/core_i5", w)
  if (cpu.includes('i7')) return getProcessorInfo(i7, "i7","https://en.wikichip.org/wiki/intel/core_i7", w)
  if (cpu.includes('i9')) return getProcessorInfo(i9, "i9","https://en.wikichip.org/wiki/intel/core_i9", w)
  if (cpu.includes('xeon') || (cpu.includes('Xeon'))) return getProcessorInfo(xeon, "xeon","https://en.wikichip.org/wiki/intel/xeon", w)
  
  //amd
  if (cpu.match(/(Ryzen 5|r5)/i)) return getProcessorInfo(r5, "r5", "https://en.wikichip.org/wiki/amd/ryzen_5", w)
  if (cpu.match(/(Ryzen 7|r7)/i)) return getProcessorInfo(r7, "r7", "https://en.wikichip.org/wiki/amd/ryzen_7", w)
  if (cpu.match(/(Ryzen 9|r9)/i)) return getProcessorInfo(r9, "r9", "https://en.wikichip.org/wiki/amd/ryzen_9", w)
}


var getGPU = (gpu, w) =>
{
  // amd cards
  if (gpu.match(/vega/i)) return getProcessorInfo(vega, 'vega', 'https://en.wikipedia.org/wiki/Radeon_RX_Vega_series', '60')
  if (!gpu.match(/(10|16)(50|60|70|80)/i)&&gpu.match(/(5|6)(60|70|80)/i)) 
    return getProcessorInfo(radeon, 'radeon', 'https://en.wikipedia.org/wiki/Radeon', w)
  
  // nvidia cards
  if (gpu.match(/mx/i)) return getProcessorInfo(mx, 'mx', 'https://en.wikipedia.org/wiki/Nvidia', w)
  if (gpu.match(/quadro/i)) return getProcessorInfo(quadro, 'quadro', "https://en.wikipedia.org/wiki/Quadro", w)
  if (gpu.match(/(10|16)(50|60|70|80)/i)) return getProcessorInfo(gtx, "gtx", "https://en.wikipedia.org/wiki/GeForce", w)
  if (gpu.match(/(20|30)(50|60|70|80)/i)) return getProcessorInfo(rtx, "rtx", "https://en.wikipedia.org/wiki/GeForce_20_series", w)

}

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
    <Accordion className="bg-light">
      <CardColumns> 
      {
      props.laptops.map(laptop => 
      {
        return (
        <>   
            <Card className="bg-light">
            <Accordion.Toggle
              as={Button} 
                variant="link" 
                eventKey={laptop._id}>
            <Card.Header><h3>{getCategory(laptop.category)} {laptop.name} <span className="text-success">${laptop.price}</span></h3></Card.Header>
                <div className="laptop">
                  <Card.Img variant="top" src={laptop.links.image} />
                </div>
              <Accordion.Collapse eventKey={laptop._id}>
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text>
                    <Table borderless className="text-dark">
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
                          <td>{(laptop.links.amazon==="")?<></>:<Nav.Link href={laptop.links.amazon} target="_blank" rel="noreferrer"><Button variant="warning"><h6>Buy From Amazon</h6></Button></Nav.Link>}</td>
                          <td>{(laptop.links.newegg==="")?<></>:<Nav.Link href={laptop.links.newegg} target="_blank" rel="noreferrer"><Button variant="info"><h6>Buy From Newegg</h6></Button></Nav.Link>}</td>
                        </tr>
                    </Table>
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>

              <Card.Footer> {getCPU(laptop.cpu, "70")} {getGPU(laptop.gpu, "70")}</Card.Footer>
              </Accordion.Toggle>
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
