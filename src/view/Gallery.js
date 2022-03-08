import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Homeclients from '../components/clientlogo/HomeClients';
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <>

        <section className='product-page'>
            <Container>
              <div className='product-page-pg-title'>
                  <i className="fas fa-home"></i><span>Gallery</span>
              </div>
            </Container>
        </section>
        <section className='product-page-sub'>
          <Container>
            <div className='pro-discription'>
               <h3>Gallery</h3>
               <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
          </Container>
        </section>


       <section className='pt-5 pb-5 gallery-img'>
        <Container>
            <Row>
                <Col sm={3}>
                    <Image  src={require('../assets/images/watee.jpg')} className='img-fluid'/>
                </Col>
                <Col sm={3}>
                <Image  src={require('../assets/images/pro1.jpg')} className='img-fluid'/>
                </Col>
                <Col sm={3}>
                <Image  src={require('../assets/images/pro2.jpg')} className='img-fluid'/>
                </Col>
                <Col sm={3}>
                <Image  src={require('../assets/images/pro3.jpg')} className='img-fluid'/>
                </Col>
                <Col sm={3}>
                <Image  src={require('../assets/images/pro4.jpg')} className='img-fluid'/>
                </Col>
                <Col sm={3}>
                <Image  src={require('../assets/images/pro5.jpeg')} className='img-fluid'/>
                </Col>
                <Col sm={3}>
                <Image  src={require('../assets/images/avimg.jpg')} className='img-fluid'/>
                </Col>
                <Col sm={3}>
                <Image  src={require('../assets/images/avimg2.jpg')} className='img-fluid'/>
                </Col>
                <Col sm={3}>
                <Image  src={require('../assets/images/homeabout.jpg')} className='img-fluid'/>
                </Col>
                <Col sm={3}>
                <Image  src={require('../assets/images/producttwo.jpg')} className='img-fluid'/>
                </Col>
                <Col sm={3}>
                <Image  src={require('../assets/images/productone.jpg')} className='img-fluid'/>
                </Col>
                <Col sm={3}>
                <Image  src={require('../assets/images/producttree.jpg')} className='img-fluid'/>
                </Col>
               
               
               
               
               
               
            </Row>
        </Container>
       </section>
       <section className="footer-contact">
            <Container>
                <Row>
                    <Col sm={7} className="border-rightw">
                        <Row>
                            <Col sm={2} className="text-center">
                            <Image  src={require('../assets/images/f2.png')} className='img-fluid margni-ft-img' />
                            </Col>
                            <Col sm={9} className="footer-section-containt">
                                <h1>We Help Industry To Utilize The Heavy Equipment Work Better</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={5}>
                        <Row>
                            <Col sm={7} className='mobile-side-padding'>
                                <Row>
                                <Col sm={2} className="phone-icon">
                                  <i className="fas fa-phone-alt"></i>
                                </Col>
                                <Col sm={10} className="footer-number">
                                    <p>contact us now</p>
                                    <h1>040-23323333</h1>
                                </Col>
                                </Row>
                            </Col>
                            <Col sm={5} className="get-btn">
                                <Link to="" className="get-started-btn">GET STARTED</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
        <Homeclients />
    </>
  );
}
