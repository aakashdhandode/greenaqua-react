

import React, { Component } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        
    }
    saveStudent = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://admin.greenaqua.in/api/ga/contact', this.state);
        if (res.data.success) {
            alert(res.data.message)
            this.setState({
                name: '',
                email: '',
                phone: '',
                company: '',
                message: ''
            });                        
        }else{
            alert(res.data.message)
        }
    }
    render() {
    return(
    <>
        <section className='bg-no-repeat'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className='contact-details bg-silver-light border-theme-color-1px'>
                            <h3 className="">If You have any query <span className="text-theme-colored">please<br />
                                contact </span>with us
                            </h3>
                       
                       
                            <ul className="list-icon theme-colored square mt-30">
                                <li><i className="fa fa-map-marker text-white flot-left-contact"></i><span className="font-weight-600">Address:
                                </span>#204, Sahiti petals, 2nd street
                                    Patrika Nagar,Hitech City,<br /> Madhapur
                                    Hyderabad - 500 081
                                    Telangana State, India</li>
                                <li><i className="fa fa-mobile text-white"></i><span className="font-weight-600">Phone:
                                </span> +91 94914 48686</li>

                                <li><i className="fa fa-phone text-white"></i><span className="font-weight-600">Landline:
                                </span> 040 233 233 33</li>

                                <li><i className="fa fa-envelope text-white"></i><span className="font-weight-600">Email:
                                </span>contact@greenaqua.in</li>
                            </ul>

                            <div className='footer-links'>
                                <div className="footer-social-icons mt-3">
                                    <a href="instagram.com" target="_blank" rel=""  ><i className="fab fa-instagram"></i></a>
                                    <a href="facebook.com" target="_blank" rel=""  ><i className="fab fa-facebook-f"></i></a>
                                    <a href="linkedin.com" target="_blank" rel=""  ><i className="fab fa-linkedin"></i></a>
                                    <a href="youtube.com" target="_blank" rel=""  ><i className="fab fa-youtube"></i></a>
                                    <a href="twitter.com" target="_blank" rel=""  ><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className=''>
                            <h3 className="line-bottom">Leave Your <span className="text-theme-colored">Comment</span> Here</h3>
                          
                        </div>
                        <div className='Contact-form'>
                            <Form onSubmit={this.saveStudent}>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Group className="mb-3" controlId="">
                                            <Form.Control type="text" name="name" onChange={this.handleInput} value={this.state.name} className='input-feild-height' placeholder=" Name" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group className="mb-3" controlId="">
                                            <Form.Control type="text" name="email" onChange={this.handleInput} value={this.state.email} className='input-feild-height' placeholder=" Email" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group className="mb-3" controlId="">  
                                            <Form.Control type="text" name="company" onChange={this.handleInput} value={this.state.company} className='input-feild-height' placeholder="Location" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group className="mb-3" controlId="">
                                            <Form.Control type="text" name="phone" onChange={this.handleInput} value={this.state.phone} className='input-feild-height' placeholder=" Phone" />
                                        </Form.Group>
                                    </Col>
                                    <Form.Group className="mb-3" controlId="">
                                        <textarea className="form-control" name="message" onChange={this.handleInput} value={this.state.message} rows="3" placeholder="Requirement"></textarea>
                                    </Form.Group>
                                </Row>
                                <Button variant="primary" type="submit" className='btn-theme-colored'>Send your message</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
         )
        }
    }

export default ContactForm;

