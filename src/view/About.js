import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { MdOutlineVisibility } from "react-icons/md";
import { AiOutlineAim } from "react-icons/ai";
import ClientSlider from '../components/clientlogo/ClientSlider';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineSketch } from "react-icons/ai";

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



      <section className='home-ab-section home-page'>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="about-title fl-wrap">
                <h4>About Us</h4>
                <h2 className="con-heading">Green Aqua Enviro Projects Private Limited</h2>
              </div>
              <div className="about-wrap">
                <p>A holistic water and wastewater treatment company.
                  Our brand-Green Aqua is one of the leading companies in India offering a comprehensive set of Water and 
                   Waste Water Treatment Solutions. We uniquely positioned to offer our clients one stop & integrated solutions for residential,
                  institutional, commercial, industrial areas by leveraging our expertise across various technologies.<br />

                  Green Aqua consists a team of Technical Experts who have experience in drinking water to waste Water treatment
                  solutions and related services. We take end-to-end responsibility in planning, sourcing, integrating and managing water & waste water plants,
                  thus providing customers with total systems solutions with a long term commitment for quality and service.</p>
                {/* <Link to="/" className="btn float-btn"><i className="fas fa-caret-right"></i><span>Read More About Us</span></Link> */}
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <div className="about-img fl-wrap">
                   <Image src={require('../assets/images/homeabout.jpg')} className='about-imgg' />
                <div className="about-img-title ait_2 color-bg">Green<span>Aqua</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      




      {/* main About us */}
      {/* <section className='about-section-page'>
        <Container>
          <Row>
            <Col sm={6}>
              <Image src={require('../assets/images/watee.jpg')} className='about-imgg' />
            </Col>
            <Col sm={6}>
              <div className='offers-containt'>
                <h3>Green Aqua Enviro Projects Private Limited</h3>
                <p>A holistic water and wastewater treatment company.
                  Our brand-Green Aqua is one of the leading companies in India offering a comprehensive set of Water and  Waste Water Treatment Solutions. We uniquely positioned to offer our clients one stop & integrated solutions for residential,
                  institutional, commercial, industrial areas by leveraging our expertise across various technologies.<br/>

                  Green Aqua consists a team of Technical Experts who have experience in drinking water to waste Water treatment
                   solutions and related services. We take end-to-end responsibility in planning, sourcing, integrating and managing water & waste water plants, 
                  thus providing customers with total systems solutions with a long term commitment for quality and service.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* end main about us */}

      {/* Counters section */}
      {/* <section className='count-project count-text'>
        <Container>
          <Row>
            <Col lg={3} xs={3}>
              <h3>300+</h3>
              <p>Happy Clients</p>
            </Col>
            <Col lg={3} xs={3}>
              <h3>50+</h3>
              <p>Projects</p>
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
      </section> */}
      {/* end counters section */}

      {/* Mission vision */}
      {/* <section className="space-pt">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title4 text-center">
                <h2>“Providing sustainable solutions for a better Environment”.</h2><br/><br/>

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
                  <p className="mb-0">To develop into the most dynamic and reliable industry of integrated water and wastewater solutions and become market leader, while staying committed to
                    clients and to contribute in a sustainable manner to environmental protection and an enhanced quality of life.</p>
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
                  <p className="mb-0">To provide our clients with valued water solutions using our expertise, with the power of a highly skilled team, emphasis on quality, integrated systems and assurance of reliability for
                    sustainable environment and long-lasting relationship with its clients. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="ttm-row welcome-section clearfix">
        <div className="container">
        <div className="section-title4 text-center">
                <h2>“Providing sustainable solutions for a better Environment”.</h2><br/><br/>

              </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 text-center">
              <div className="res-991-pt-0 res-991-mt-45 div-padding">
                <div className="v-section-title">
                  {/* <img className="img-fluid mivi-img" src="images/focus.png" alt="single_01" /> */}
                  <AiOutlineAim />
                  <div className="title-heade">
                    <h2 className="titlemis">Our Vision</h2>
                  </div>
                </div>
                <div className="pb-15 res-991-pb-0">
                  <p className="mb-0">To develop into the most dynamic and reliable industry of integrated water and wastewater solutions and become market leader, while staying committed to
                    clients and to contribute in a sustainable manner to environmental protection and an enhanced quality of life.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 text-center">
              <div className="res-991-pt-0 res-991-mt-45 div-padding">
                <div className="v-section-title">
                  {/* <img className="img-fluid " src="images/target.png" alt="single_01" /> */}
                  <AiOutlineEye />
                  <div className="title-heade">
                    <h2 className="titlemis">Our Mission</h2>
                  </div>
                </div>
                <div className="pb-15 res-991-pb-0">
                  <p className="mb-0">To provide our clients with valued water solutions using our expertise, with the power of a highly skilled team, emphasis on quality, integrated systems and assurance of reliability for
                    sustainable environment and long-lasting relationship with its clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 text-center">
              <div className="res-991-pt-0 res-991-mt-45 div-padding">
                <div className="v-section-title">
                  <AiOutlineSketch />
                  <div className="title-heade">
                    <h2 className="titlemis">Our Value</h2>
                  </div>
                </div>
                <div className="pb-15 res-991-pb-0">
                  <p className="mb-0">Our mission is to build your brand with creativity, collaboration, and dynamic approach.
                    Understanding, accountability, and passion are the core qualities that we believe in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientSlider />

    </>
  );
}
