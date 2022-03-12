import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { MdOutlineVisibility } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";
import ClientSlider from '../components/clientlogo/ClientSlider';

export default function About() {
  return (
    <>
     <section className='product-page-sub'>
          <Container>
              <div className='pro-discription'>
                <h3>About Us</h3>
                <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
              </div>
          </Container>
     </section>

    {/* main About us */}
    <section className='about-section-page'>
      <Container>
          <Row>
            <Col sm={6}>
            <Image  src={require('../assets/images/watee.jpg')} className='about-imgg'/>
            </Col>
            <Col sm={6}>
            <div className='offers-containt'>
                <h3>Welcome to Green Aqua Enviro Projects Private Limited, Hyderabad, India.</h3>
                <p>Green Aqua is a young and dynamic Company in the business of providing complete water treatment solutions. Our brand-Green Aqua is one of the leading companies in india offering a comprehensive set of Water & Waste Water Treatment Solutions. At green Aqua, we uniquely positioned to offer our clients one stop & integrated solutions for household, institutional, commercial, industrial and public water water supplies by leveraging our experties across various technologies.
                  Green Aqua consists a team of Technical Engineers who have experience in pure drinking water to waste Water
                  treatmantsolutions and related services. We started to serve the needs of safe drinking water to
                  industrial porcess water and also to recycle the waste water. The main aim of the Company is to give 
                  an ultimate solution to the customers by quality products and service.
                </p>
            </div>
            </Col>
          </Row>
      </Container>
    </section>
    {/* end main about us */}

    {/* Counters section */}
    <section className='count-project count-text'>
      <Container>
          <Row>
            <Col lg={3} xs={3}>
            <h3>300+</h3>
            <p>Happy Clients</p>
            </Col>
            <Col lg={3} xs={3}>
            <h3>300+</h3>
            <p>Happy Clients</p>
            </Col>
            <Col lg={3} xs={3}>
            <h3>300+</h3>
            <p>Happy Clients</p>
            </Col>
            <Col lg={3} xs={3}>
            <h3>300+</h3>
            <p>Happy Clients</p>
            </Col>
          </Row>
      </Container>
    </section>
    {/* end counters section */}

    {/* Mission vision */}
    <section className="space-pt">
      <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="section-title4 text-center">
                  <h2>Welcome to Green Aqua Enviro Projects Private Limited, Hyderabad, India.</h2>
                  <p>Green Aqua consists a team of Technical Engineers who have experience in pure drinking water to waste Water treatmantsolutions and related services. We started to serve the needs of safe drinking water to industrial porcess water and also to recycle the waste water. The main aim of the Company is to give an ultimate solution to the customers by quality products and service.</p>
                </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6 mb-4 mb-sm-0">
                <div className="feature-info feature-info-style-02 bg-dark text-white">
                  <div className="feature-info-icon">
                      <i className="text-white">
                        <MdOutlineVisibility />
                      </i>
                      <h4 className="mb-0 ms-4 feature-info-title text-white">Our Vision</h4>
                  </div>
                  <div className="feature-info-content">
                      <p className="mb-0">To make these virtues a habit, himself on his daily actions. In a journal he drew a table with a row for every virtue and a column for every day of the week.</p>
                  </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="feature-info feature-info-style-02 bg-primary text-white">
                  <div className="feature-info-icon">
                      <i className="text-white">
                        <AiOutlineAim />
                      </i>
                      <h4 className="mb-0 ms-4 feature-info-title text-white">Our Mission</h4>
                  </div>
                  <div className="feature-info-content">
                      <p className="mb-0">We also know those epic stories, those modern-day legends surrounding the early failures of such supremely successful folks as Michael Jordan and Bill Gates.</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
    {/* end mission vision */}

    <ClientSlider />
     
    </>
  );
}
