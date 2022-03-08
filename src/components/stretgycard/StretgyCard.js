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
                        <p>Whether it is a retrofit, upgrade to current technology, or brand new installation, we can design a system to fit your needs, space, and budget.</p>
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="build-img green-module mid">
                  <div className="stety-img-bg-two text-center">
                    <i className="far fa-building"></i>
                        <h4>BUILD</h4>
                        <p>We have our own construction company specializing in building systems for you or guiding your builder through the process.</p>
                    </div>
                  </div>
                </Col>
                <Col sm={4}>
                  <div className="support-img green-module mid">
                    <div className="stety-img-bg-tree text-center">
                      <i className="fas fa-headset"></i>
                        <h4>SUPPORT</h4>
                        <p>We will educate you and your team in the preventative care that keeps you up and running, and provide quick, reliable service should you ever have down time.</p>
                    </div>
                  </div>
                </Col>
            </Row>
        </Container>
    </>
  );
}
