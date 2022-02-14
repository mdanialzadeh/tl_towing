import React, { useState } from 'react';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import picx from './assets/pic1.png'
function Services() {

  return (

  <Container  style={{ padding: '4rem 2rem', }}>
     
    <Row className="justify-content-md-center" style={{margin: '1rem 0' }} Row xs={1} lg={3}>

        <Col xs={12} md={10} style={{margin:'.5rem 0'}}>
        <Card style={{ height:'100%'}}>
            <Card.Body style={{ width: '100%', height: "100%"}}>
            <Card.Title>Emergency Towing</Card.Title>
            <Card.Text bg={"light"}>
              Our skilled technicians will get your automobile off the road to the location of your choice.   Need a place to store it? Tow to our shop with peace of mind that your car will be safe for as long as you desire to keep it in our enclosed private lot.
              <br/>
              *Accident recovery and mechanical tow rates available upon request.
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
     

        <Col xs={12} md={10} style={{margin:'.5rem 0'}}>
        <Card style={{ height:'100%'}}>
            <Card.Body style={{ width: '100%', height: "100%"}}>
          <Card.Title>Private Transport</Card.Title>
          <Card.Text>
          we specialize in transporting exocit vehicles, antiques, and anything else you want to keep safe while transporting
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12} md={10} style={{margin:'.5rem 0'}}>
        <Card style={{ height:'100%'}}>
            <Card.Body style={{ width: '100%', height: "100%"}}>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
          </Card.Text>
          </Card.Body>
        </Card>
      </Col>
        
    </Row>
  
  </Container>
    
  )
}

export default Services;
