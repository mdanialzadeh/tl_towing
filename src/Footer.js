import React from 'react';
import Container from 'react-bootstrap/Container'
import Figure from 'react-bootstrap/Figure'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import map from './assets/map.png'
import Navbar from 'react-bootstrap/Navbar'


function Footer() {
  return (

  
      
    <Container fluid  style={{ background: "#212529" }}>
          
 

        <Row   style={{ padding: '1rem 0rem', color: "white", bottom: "0" ,justifyContent:'space-around'}}>

          <Col lg={3}>
               <h5>Contact Us</h5>
               <div>
                   <h6>T&L Towing</h6>
                   1123 Adress street <br/>
                   City, New York 12345<br/>
                   Tel: 555-555-5555<br/>
                   Email: Email@adress.com
                   
               </div>
          </Col>
          <Col lg={4}>
            <Figure>
              <Figure.Image
                width={141}
                height={120}
                alt="171x180"
                src={map}
                />
            </Figure>
          </Col>
        </Row>
      </Container>
               
   
        
      )
    
}

export default Footer;
