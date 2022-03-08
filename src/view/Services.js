import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import serviceone from "../assets/images/avimg.jpg";
import serviceimgtwo from "../assets/images/avimg2.jpg";
import Homeclients from '../components/clientlogo/HomeClients';
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <>
    
        <section className='product-page'>
            <Container>
              <div className='product-page-pg-title'>
                  <i className="fas fa-home"></i><span>Services</span>
              </div>
            </Container>
        </section>
        <section className='product-page-sub'>
          <Container>
            <div className='pro-discription'>
               <h3>Services</h3>
               <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
          </Container>
        </section>
{/* 
        <section className='service-section-page'>
            <Container>
                <Row>
                    <Col sm={4}>
                        <div className="services-icon">
                            <i className="far fa-industry-alt"></i>
                            <h4>Operation and Maintenance</h4>
                            <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home Softeners for Residential and Small Business users. </p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="services-icon">
                            <i className="far fa-industry-alt"></i>
                            <h4>Operation and Maintenance</h4>
                            <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home Softeners for Residential and Small Business users. </p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="services-icon">
                            <i className="far fa-industry-alt"></i>
                            <h4>Operation and Maintenance</h4>
                            <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home Softeners for Residential and Small Business users. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section> */}

        <section className='main-service-box'>
          <Container>
              <Row>
                 <Col sm={6} className='service-containt'>
                   <h2>Operation and Maintenance of STP-ETP</h2>
                   <p>Green Aqua undertakes operation &amp; maintenance, annual maintenance contracts for all WATER AND WASTE
                             WATER TREATMENT PLANTS Which includes STp, ETp, RO plants, Desalination plants, water softeners etc.
                            We have vast experience in providing AMC, Operation &amp; Maintenance Services for Effluent and Sewage 
                            treatments (E.T.P./S.T.P), Water treatment plats( ETP) to many industries, govt.sectors, residential 
                            colonies etc.
                            Our maintenace staff are well versed with operating and maintenance procedures of the plants. 
                            Our services are available round the clock for operation, break down service .</p>
                            <ul>
                                <li>We charge optimum</li>
                                <li>We serve 365/24/7</li>
                                <li>Maintenace of records for accurate results</li>
                                <li>Expert professionals to take care of each problem</li>
                            </ul>
                 </Col>
                 <Col sm={6} className="p-0">
                     <img src={serviceone} className="img-fluid service-containt-img" alt="greenaqua" />
                 </Col>
                 <Col sm={6} className="p-0">
                     <img src={serviceimgtwo} className="img-fluid service-containt-img" alt="greenaqua" />
                 </Col>
                 <Col sm={6} className='service-containt'>
                   <h2>Operation and Maintenance of STP-ETP</h2>
                   <p>Green Aqua undertakes operation &amp; maintenance, annual maintenance contracts for all WATER AND WASTE
                             WATER TREATMENT PLANTS Which includes STp, ETp, RO plants, Desalination plants, water softeners etc.
                            We have vast experience in providing AMC, Operation &amp; Maintenance Services for Effluent and Sewage 
                            treatments (E.T.P./S.T.P), Water treatment plats( ETP) to many industries, govt.sectors, residential 
                            colonies etc.
                            Our maintenace staff are well versed with operating and maintenance procedures of the plants. 
                            Our services are available round the clock for operation, break down service .</p>
                            <ul>
                                <li>We charge optimum</li>
                                <li>We serve 365/24/7</li>
                                <li>Maintenace of records for accurate results</li>
                                <li>Expert professionals to take care of each problem</li>
                            </ul>
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
