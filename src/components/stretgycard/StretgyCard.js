import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './StretgyCard.css'

export default function componentName() {
  return (
    <>
        <Container fluid className='home-green-cards'>
            <Row>
                <Col sm={4}>
                  <div className="desgin-img green-module mid">
                    <div className="stety-img-bg text-center">
                        <i className="fal fa-drafting-compass"></i>
                        <h4>DESIGN</h4>
                        <p>Whether it is a retrofit, upgrade to current technology, or brand-new installation,
                         we can design a plant suitable for your space, budget and as well as statutory & engineering requirements.</p>
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="build-img green-module mid">
                  <div className="stety-img-bg-two text-center">
                    <i className="far fa-building"></i>
                        <h4>BUILD</h4>
                        <p>With our expert engineering & supportive team, we build the utmost effective, less maintenance, 
                        eco-friendly water & waste water treatment plants by adopting advance engineering and quality control systems.</p>
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="support-img green-module mid">
                    <div className="stety-img-bg-tree text-center">
                      <i className="fas fa-headset"></i>
                        <h4>SUPPORT/TRAINING</h4>
                        <p>We do educate your team in the preventive maintenance, Standard operating procedures that keeps your plant running and you 
                        ever have down time. We provide quick remote support and onsite support to promise you reliable service.</p>
                    </div>
                  </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}
