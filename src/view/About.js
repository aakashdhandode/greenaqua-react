import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
// import counterbg from "../assets/images/counterbg.jpg";
import tipsone from "../assets/images/f1.png";
import tiptwo from "../assets/images/f22.png";
import tipthree from "../assets/images/f3.png";
import tipfour from "../assets/images/f4.png";
import { FaBeer } from 'react-icons/fa';
import { MdOutlineVisibility } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";
import Homeclients from '../components/clientlogo/HomeClients';
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
        {/* <section className="product-page">
        <div className="container">
            <div className="row">
                    <div className="col-sm-6 product-page-pg-title">
                       <i className="fas fa-home"></i><span>About Us</span>
                    </div>
                    <div className="col-sm-6"></div>
            </div>
        </div>
    </section> */}
        <section className='product-page'>
            <Container>
              <div className='product-page-pg-title'>
                  <i className="fas fa-home"></i><span>About Us</span>
              </div>
            </Container>
        </section>
        <section className='product-page-sub'>
          <Container>
            <div className='pro-discription'>
               <h3>About Us</h3>
               <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
          </Container>
        </section>
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
                           an ultimate solution to the customers by quality products and service.</p>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
        {/* <section className='timeline-section'>
          <Container>
            <div className="timeline-content">
                <div className="timeline-item">

                    <div className="timeline-item-image timeline-item-inner">
                        <div className="timeline-label"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla non fugit, ex explicabo reiciendis! Officiis nam cum aut esse debitis fuga! </p>
                    </div>
                    <div className="timeline-item-text timeline-item-inner">
                        <h3>1978</h3>

                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-text timeline-item-inner">
                        <h3 className="text-end-year">1998</h3>
                    </div>
                    <div className="timeline-item-image timeline-item-inner">
                        <div className="timeline-label"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla non fugit, ex explicabo reiciendis! Officiis nam cum aut esse debitis fuga! </p>

                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-image timeline-item-inner">
                        <div className="timeline-label"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla non fugit, ex explicabo reiciendis! Officiis nam cum aut esse debitis fuga! </p>

                    </div>
                    <div className="timeline-item-text timeline-item-inner">
                        <h3>2006</h3>

                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-text timeline-item-inner">
                        <h3 className="text-end-year">1998</h3>

                    </div>
                    <div className="timeline-item-image timeline-item-inner">
                        <div className="timeline-label"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla non fugit, ex explicabo reiciendis! Officiis nam cum aut esse debitis fuga! </p>

                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-item-image timeline-item-inner">
                        <div className="timeline-label"></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla non fugit, ex explicabo reiciendis! Officiis nam cum aut esse debitis fuga! </p>

                    </div>
                    <div className="timeline-item-text timeline-item-inner">
                        <h3>2006</h3>

                    </div>
                </div>
            </div>
          </Container>
        </section> */}
        <section className='count-project count-text'>
          <Container>
            <Row>
              <Col sm={3}>
                 <h3>300+</h3>
                 <p>Happy Clients</p>
              </Col>
              <Col sm={3}>
                 <h3>300+</h3>
                 <p>Happy Clients</p>
              </Col>
              <Col sm={3}>
                 <h3>300+</h3>
                 <p>Happy Clients</p>
              </Col>
              <Col sm={3}>
                 <h3>300+</h3>
                 <p>Happy Clients</p>
              </Col>
            </Row>
          </Container>
        </section>
      

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
                <i className="text-white"><MdOutlineVisibility /></i>
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
                <i className="text-white"><AiOutlineAim /></i>
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

        {/* <section className='filter-tips mb-5'>
          <Container>
             <h2 className="tips-title">THINGS TO CONSIDER <br />BEFORE BUYING A WATER PURIFIER</h2>
            <Row className='filter-style'>
              <Col sm={3}>
                <div className='text-center'>
                  <img src={tipsone} className="img-fluid" alt="greenaqua" />
                </div>
                <h4>TIP 1</h4>
                <p className="ts-speaker-name"><strong>THE STANDARDS OF WATER</strong></p>
                <ul>
                  <li>THE STANDARDS OF WATER</li>
                  <li>Water should not contain heavy metals, bacteria and viruses</li>
                  <li>Water should have good minerals</li>
                </ul>
              </Col>
              <Col sm={3}>
                <div className='text-center'>
                  <img src={tiptwo} className="img-fluid" alt="greenaqua" />
                </div>
                <h4>TIP 2</h4>
                <p className="ts-speaker-name"><strong>THE STANDARDS OF WATER</strong></p>
                <ul>
                  <li>THE STANDARDS OF SERVICE</li>
                  <li>Water should not contain heavy metals, bacteria and viruses</li>
                  <li>Water should have good minerals</li>
                </ul>
              </Col>
              <Col sm={3}>
                <div className='text-center'>
                  <img src={tipthree} className="img-fluid" alt="greenaqua" />
                </div>
                <h4>TIP 3</h4>
                <p className="ts-speaker-name"><strong>THE STANDARDS OF WATER</strong></p>
                <ul>
                  <li>THE STANDARDS OF FILTERS</li>
                  <li>Water should not contain heavy metals, bacteria and viruses</li>
                  <li>Water should have good minerals</li>
                </ul>
              </Col>
              <Col sm={3}>
                <div className='text-center'>
                  <img src={tipfour} className="img-fluid" alt="greenaqua" />
                </div>
                <h4>TIP 4</h4>
                <p className="ts-speaker-name"><strong>THE STANDARDS OF WATER</strong></p>
                <ul>
                  <li>THE STANDARDS OF TECHNOLOGY</li>
                  <li>Water should not contain heavy metals, bacteria and viruses</li>
                  <li>Water should have good minerals</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section> */}
        


        <Homeclients />
    </>
  );
}
