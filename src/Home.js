
import React from 'react';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel'  
import Pic1 from "./assets/pic1.png"
import Pic2 from "./assets/pic2.png"
import Pic3 from "./assets/pic3.png"
import Container from 'react-bootstrap/Container'

function Home() {


 
      
        return (
          <>
          <Container fluid="true" style={{background:'transparent'}}> 
      <p className='centered'>For Emergency Service Call: 555-555-5555</p>
          </Container>
        
        
        <Container fluid > 
          <Carousel variant='dark' fade indicators >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Pic1}
                alt=""
                
                />

            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Pic2}
                alt="Second slide"
                />
      
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Pic3}
                alt="Third slide"
                />
      
     
            </Carousel.Item>
          </Carousel>
                </Container>
                </>
        );
      }
      
     


export default Home;
