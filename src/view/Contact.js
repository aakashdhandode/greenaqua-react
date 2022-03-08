import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
export default function Contact() {
  return (
    <>
         <section className='product-page'>
            <Container>
              <div className='product-page-pg-title'>
                  <i className="fas fa-home"></i><span>Contact Us</span>
              </div>
            </Container>
        </section>
        <section className='product-page-sub'>
          <Container>
            <div className='pro-discription'>
               <h3>Contact</h3>
               <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
          </Container>
        </section>
        <section className='bg-no-repeat bg-img-right-bottom'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <div className='contact-details bg-silver-light border-theme-color-1px'>
                          <h3 className="">If You have any query <span className="text-theme-colored">please<br/>
                                contact </span>with us
                          </h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, consequuntur<br/> laboriosam fugiat explicabo recusandae minima veniam ipsa ex fuga <br/> est eum tempora.</p>
                          <ul className="list-icon theme-colored square mt-30">
                            <li><i className="fa fa-map-marker text-white flot-left-contact"></i><span className="font-weight-600">Address:
                                </span>#204, Sahiti petals, 2nd street
                                    Patrika Nagar,Hitech City,<br/> Madhapur
                                    Hyderabad - 500 081
                                    Telangana State, India</li>
                            <li><i className="fa fa-phone text-white"></i><span className="font-weight-600">Phone:
                                </span> +91 040 233 233 33</li>
                          
                            <li><i className="fa fa-envelope text-white"></i><span className="font-weight-600">Email:
                                </span>contact@greenaqua.in</li>
                         </ul>

                        <div className='footer-links'>
                                <div className="footer-social-icons mt-3">
                                    <a  href="instagram.com"  target="_blank" rel=""  ><i className="fab fa-instagram"></i></a>
                                    <a  href="facebook.com"  target="_blank" rel=""  ><i className="fab fa-facebook-f"></i></a>
                                    <a  href="linkedin.com"  target="_blank" rel=""  ><i className="fab fa-linkedin"></i></a>
                                    <a  href="youtube.com"  target="_blank" rel=""  ><i className="fab fa-youtube"></i></a>
                                    <a  href="twitter.com"  target="_blank" rel=""  ><i className="fab fa-twitter"></i></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className=''>
                            <h3 className="line-bottom">Leave Your <span className="text-theme-colored">Comment</span> Here</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error optio in
                            quia ipsum quae
                            neque alias eligendi, nulla nisi. Veniam ut quis similique culpa natus dolor aliquam
                            .</p>
                        </div>
                        <div className='Contact-form'>
                          <Form>
                            <Row>
                                <Col sm={6}>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control type="text" className='input-feild-height' placeholder="Enter Name" />
                                </Form.Group>
                                </Col>
                                <Col sm={6}>
                                <Form.Group className="mb-3" controlId="">
                                    <Form.Control type="text" className='input-feild-height' placeholder="Enter email" />
                                </Form.Group>
                                </Col>
                                <Col sm={6}>
                                <Form.Group className="mb-3" controlId="">
                            
                                    <Form.Control type="text" className='input-feild-height' placeholder="Enter Company Name" />
                                </Form.Group>
                                </Col>
                                <Col sm={6}>
                                <Form.Group className="mb-3" controlId="">
                                   
                                    <Form.Control type="text" className='input-feild-height' placeholder="Enter Phone" />
                                </Form.Group>
                                </Col>
                                <Form.Group className="mb-3" controlId="">
                                    <textarea className="form-control" id="" rows="3" placeholder="Enter Message"></textarea>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit" className='btn-theme-colored'>Send your message</Button>
                          </Form>
                        </div>
                    </Col>

                    {/* <div className="google-map-code">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                     </div> */}

                     <div className="google-map-code pt-5">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2239907615544!2d78.37894036477638!3d17.44899010561843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93df022b64f1%3A0x3704109dea29aa2e!2sPatrika%20Nagar%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1641544285795!5m2!1sen!2sin" width="100%" height="350"  style={{border:0}}  aria-hidden="false"></iframe>
        </div>
                </Row>
            </Container>
        </section>


    </>
  );
}
