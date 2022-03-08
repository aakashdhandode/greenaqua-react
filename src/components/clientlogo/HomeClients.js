import React from 'react';
import Slider from "react-slick";
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './clients.css'

export default function Clients() {
  const settings = {
    dots: false,
    autoplay: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    margin:5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    
        {/* <section className='clients-bg'>
           <Container>
                <div className='section-title text-center'>
                    <h1>Our Clients</h1>
                    <p> With Esteemed Quality certifications from Water Quality and focus on Safety and Environment MAnagement Systems, Green Aqua is committed to maintain the highest standards for Health, Saftey and Environment.</p>
                </div>
               <Row className='pt-3'>
                   <Col sm={2} xs={6}  >
                     <div className='clentslogo-card'>
                         <Image  src={require('../../assets/images/clients/01.png')}/>
                      </div>
                   </Col>
                   <Col  >
                     <div className='clentslogo-card'>
                         <Image  src={require('../../assets/images/clients/02.png')}/>
                      </div>
                   </Col>
                   <Col sm={2} xs={6}> 
                     <div className='clentslogo-card'>
                         <Image  src={require('../../assets/images/clients/16.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}> 
                     <div className='clentslogo-card'>
                       <Image  src={require('../../assets/images/clients/04.png')}/>
                      </div>
                   </Col>
                   <Col sm={2} xs={6}> 
                     <div className='clentslogo-card'>
                        <Image  src={require('../../assets/images/clients/06.png')}/> 
                      </div>
                   </Col>
                   <Col sm={2} xs={6}> 
                     <div className='clentslogo-card'>
                        <Image  src={require('../../assets/images/clients/17.png')}/> 
                       </div>
                   </Col>
                   <Col sm={2} xs={6}> 
                     <div className='clentslogo-card'>
                         <Image  src={require('../../assets/images/clients/18.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}> 
                     <div className='clentslogo-card'>
                         <Image  src={require('../../assets/images/clients/20.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}> 
                     <div className='clentslogo-card'>
                          <Image  src={require('../../assets/images/clients/10.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}> 
                     <div className='clentslogo-card'>
                         <Image  src={require('../../assets/images/clients/11.png')}/>
                       </div>
                   </Col>

                   <Col sm={2} xs={6}> 
                     <div className='clentslogo-card'>
                         <Image  src={require('../../assets/images/clients/22.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}> 
                     <div className='clentslogo-card'>
                         <Image  src={require('../../assets/images/clients/21.png')}/>
                       </div>
                   </Col>
               </Row>
                  <div className='text-center mt-4'>
                  <Link to="/clients" className='more-client-btn'>See More</Link>
                  </div>
         
           </Container>
        </section> */}
      

<section className='clients-bg client-slider'>
      <Container>
      <Slider {...settings}>
                    <div className='clentslogo-card'>
                        <Image  src={require('../../assets/images/clients/01.png')}/>
                    </div>
                    <div className='clentslogo-card'>
                    <Image  src={require('../../assets/images/clients/02.png')}/>
                    </div>
                    <div className='clentslogo-card'>
                    <Image  src={require('../../assets/images/clients/03.png')}/>
                    </div>
                    <div className='clentslogo-card'>
                    <Image  src={require('../../assets/images/clients/04.png')}/>
                    </div>
                    <div className='clentslogo-card'>
                    <Image  src={require('../../assets/images/clients/06.png')}/>
                    </div>
                    <div className='clentslogo-card'>
                    <Image  src={require('../../assets/images/clients/07.png')}/>
                    </div>
                    <div className='clentslogo-card'>
                        <Image  src={require('../../assets/images/clients/08.png')}/>
                    </div>
                    <div className='clentslogo-card'>
                        <Image  src={require('../../assets/images/clients/09.png')}/>
                    </div>
                    <div className='clentslogo-card'>
                        <Image  src={require('../../assets/images/clients/10.png')}/>
                    </div>
                 
              </Slider>
              <div className='text-center mt-4'>
                  <Link to="/clients" className='more-client-btn'>See More</Link>
                  </div>
      </Container>
</section>


    </>
  );
}
