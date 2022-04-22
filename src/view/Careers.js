import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Modal, Button, Form } from 'react-bootstrap';
import '../assets/css/careers.css'

function Careers() {
    const [lgShow, setLgShow] = useState(false);
    return (
        <div>
            <section className='product-page-sub'>
                <Container>
                    <div className='pro-discription'>
                        <h3>Careers</h3>
                        <p>We take our responsibilities as an employer very seriously. We take good care of our new employees,
                            but we also challenge them from the very beginning by giving them responsibilities very quickly.</p>
                    </div>
                </Container>
            </section>

            <section className='pt-5 pb-5'>
                <Container>
                    <div class="section-title text-center"><h1>Opened Positions</h1>
                        <p>Explore opportunities with Hidden Brains. Let us know your area
                            of interest or expertise and we will tell you how to get there. Submit Your Resume here</p></div>

                    <div className='career-card'>
                        <div className='career-title'>
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            <span>WAREHOUSE OFFICER</span>
                        </div>
                        <div className='career-details-ptb'>
                            <h4>Job Summary</h4>
                            <p>When you give to Our Industry, know your donation is making a difference whether you are supporting our signature Programs or our carefully curated list of gifts that professional. Over 24 years experience and knowledge international standards, technologicaly changes and industrial systems. We have facility to produce
                                advance work various industrial applications based on specially developed tech- nology are also ready.</p>
                            <h4 className='pt-3'>Job Skills Required</h4>
                            <ul>
                                <Row>
                                    <Col sm={5}><li><i class="fa fa-check" aria-hidden="true"></i>There are many variations of passages</li>
                                        <li><i class="fa fa-check" aria-hidden="true"></i>Natusvoluptatem accusantium doloremque</li>
                                        <li><i class="fa fa-check" aria-hidden="true"></i>Nemo enim ipsam voluptatem quia voluptas</li></Col>
                                    <Col sm={6}><li><i class="fa fa-check" aria-hidden="true"></i>Duis aute irure dolor in reprehenderit in voluptate</li>
                                        <li><i class="fa fa-check" aria-hidden="true"></i>Elit esse cillum dolore eu fugiat nulla pariatur</li>
                                        <li><i class="fa fa-check" aria-hidden="true"></i>Duis aute irure dolor in reprehenderit in voluptate velit esse</li></Col>
                                </Row>
                            </ul>
                            <button onClick={() => setLgShow(true)}>Apply Now &nbsp;  <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                        </div>
                    </div>

                    <div className='career-card'>
                        <div className='career-title'>
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                            <span>LEAD ENGINEER / TECHNOLOGIST</span>
                        </div>
                        <div className='career-details-ptb'>
                            <h4>Job Summary</h4>
                            <p>When you give to Our Industry, know your donation is making a difference whether you are supporting our signature Programs or our carefully curated list of gifts that professional. Over 24 years experience and knowledge international standards, technologicaly changes and industrial systems. We have facility to produce
                                advance work various industrial applications based on specially developed tech- nology are also ready.</p>
                            <h4 className='pt-3'>Job Skills Required</h4>
                            <ul>
                                <Row>
                                    <Col sm={5}><li><i class="fa fa-check" aria-hidden="true"></i>There are many variations of passages</li>
                                        <li><i class="fa fa-check" aria-hidden="true"></i>Natusvoluptatem accusantium doloremque</li>
                                        <li><i class="fa fa-check" aria-hidden="true"></i>Nemo enim ipsam voluptatem quia voluptas</li></Col>
                                    <Col sm={6}><li><i class="fa fa-check" aria-hidden="true"></i>Duis aute irure dolor in reprehenderit in voluptate</li>
                                        <li><i class="fa fa-check" aria-hidden="true"></i>Elit esse cillum dolore eu fugiat nulla pariatur</li>
                                        <li><i class="fa fa-check" aria-hidden="true"></i>Duis aute irure dolor in reprehenderit in voluptate velit esse</li></Col>
                                </Row>
                            </ul>
                            <button onClick={() => setLgShow(true)}>Apply Now &nbsp;  <i class="fa fa-arrow-right" aria-hidden="true"></i></button>
                        </div>
                    </div>

                </Container>
            </section>



            <div className='lg-models'>
                <Modal
                    size="lg"
                    show={lgShow}
                    className="lg-models"
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                        Apply Now ! 
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                  <Form className='row career-form'>
                     <Form.Group className="col-sm-6">
                     <Form.Label>Name</Form.Label>
                        <Form.Control type="text" className='input-feild-height' placeholder="Enter Name" />
                     </Form.Group>
                     <Form.Group className="col-sm-6">
                     <Form.Label>Email</Form.Label>
                        <Form.Control type="text" className='input-feild-height' placeholder="Enter email" />
                     </Form.Group>
                     <Form.Group className="col-sm-6">
                     <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" className='input-feild-height' placeholder="Mobile Number" />
                     </Form.Group>
                     <Form.Group className="col-sm-6">
                     <Form.Label>Total Experience</Form.Label>
                        <Form.Control type="text" className='input-feild-height' placeholder="Total Experience" />
                     </Form.Group>
                     <Form.Group className="col-sm-12">
                     <Form.Label>Resume Upload</Form.Label>
                        <Form.Control type="file" className='input-feild-height' placeholder="Total Experience" />
                     </Form.Group>
             
                     <div className=''>
                        <Button variant="primary" type="submit" className='btn-theme-colored'>Send your message</Button>
                     </div>
                  </Form>
               </Modal.Body>
                </Modal>
            </div>

        </div>
    )
}

export default Careers