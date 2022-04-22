import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Modal, Button, Form } from 'react-bootstrap';
import './footer.css'
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Footer() {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const [footerLink, setFooterLink] = useState([]);
   useEffect(() => {
      fetchFooterLink();
   }, []);
   const fetchFooterLink = () => {
      axios
         .get('http://3.111.169.240/api/ga/categories')
         .then((res) => {
            //  console.log(res);
            setFooterLink(res.data.data);
         })
         .catch((err) => {
            console.log(err);
         });
   };


   return (
      <>

         <footer>
            <Container>
               <Row>
                  <Col sm={4}>
                     <div className="footer-logo">
                        <Image src={require('../../assets/images/logo.png')} className='img-fluid' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae, in aspernatur
                           distinctio eveniet neque excepturi numquam</p>
                     </div>
                     <div className='footer-links'>
                        <div className="footer-social-icons mt-3">
                           <a href="instagram.com" target="_blank" rel=""  ><i className="fab fa-instagram"></i></a>
                           <a href="https://www.facebook.com/greenaquaenviro" target="_blank" rel=""  ><i className="fab fa-facebook-f"></i></a>
                           <a href="linkedin.com" target="_blank" rel=""  ><i className="fab fa-linkedin"></i></a>
                           <a href="https://twitter.com/" target="_blank" rel=""  ><i className="fab fa-youtube"></i></a>
                           <a href="twitter.com" target="_blank" rel=""  ><i className="fab fa-twitter"></i></a>
                        </div>
                     </div>
                  </Col>
                  <Col sm={2} xs={4}>
                     <div className="footer-content-list footer-content-item">
                        <div className="footer-content-title">
                           <h3>Links</h3>
                        </div>
                        <ul className="footer-details footer-list">
                           <li>
                              <i className="fal fa-chevron-right"></i>
                              <Link to="/">
                                 Home</Link>
                           </li>
                           <li>
                              <i className="fal fa-chevron-right"></i>
                              <Link to="/About">
                                 About Us</Link>
                           </li>
                           <li>
                              <i className="fal fa-chevron-right"></i>
                              <Link to="/products">
                                 Our Products</Link>
                           </li>
                           <li>
                              <i className="fal fa-chevron-right"></i>
                              <Link to="/Services">
                                 Our Services</Link>
                           </li>
                           <li>
                              <i className="fal fa-chevron-right"></i>
                              <Link to="/Careers">
                                 Careers</Link>
                           </li>

                           <li>
                              <i className="fal fa-chevron-right"></i>
                              <Link to="/Gallery">
                                 Gallery</Link>
                           </li>
                           <li>
                              <i className="fal fa-chevron-right"></i>
                              <Link to="/clients">
                             Our Clients</Link>
                           </li>
                           <li>
                              <i className="fal fa-chevron-right"></i>
                              <Link to="/downloads">
                              Brouchers</Link>
                           </li>
                           <li>
                              <i className="fal fa-chevron-right"></i>
                              <Link to="/Contact">
                                 Contact Us</Link>
                           </li>
                        </ul>
                     </div>
                  </Col>
                  <Col sm={3} xs={8}>
                     <div className="footer-content-list footer-content-item">
                        <div className="footer-content-title">
                           <h3>Our Products</h3>
                        </div>
                        <ul className="footer-details footer-list">
                           {footerLink.map((footeritem) => (
                              <li key={footeritem.id}>
                                 <i className="fal fa-chevron-right"></i>
                                 <Link to="/">{footeritem.name}</Link>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </Col>
                  <Col sm={3}>
                     <div className="footer-content-list footer-content-item">
                        <div className="footer-content-title">
                           <h3>Contact us</h3>
                        </div>
                        <div className="footer-address-info-item mt-2">
                           <p className="footer-physical-address"> #204, Sahiti petals, 2nd street
                              Patrika Nagar,Hitech City, Madhapur
                              Hyderabad - <br />500 081
                              Telangana State, India
                           </p>
                        </div>
                        <div className="footer-address-info-item">
                           <p className="footer-contact-number">
                              Phone :
                              <Link to=""> +91 94914 48686</Link>
                           </p>
                        </div>
                        <div className="footer-address-info-item">
                           <p className="footer-contact-number">
                              Landline :
                              <Link to="">  040 233 233 33</Link>
                           </p>
                        </div>
                        <div className="footer-address-info-item">
                           <p className="footer-email">
                              Email :
                              <Link to="">
                                 <span className=""> contact@greenaqua.in</span></Link>
                           </p>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </footer>




         <div className='copywrite'>
            <p className="text-center text-white">Copyright ©2022<span className=""> GreenAqua</span>. Design &amp; Develop By <a href="www.odms.in/" rel="" target="_blank" className="text-white"> ODMS Pvt Ltd. </a></p>
         </div>

         <div className="wf-pop" onClick={handleShow}>
            <Image src={require('../../assets/images/getq.png')} />
         </div>

         <div className="container-fluid">
            <div className="">
               {/* wataspp */}
               <div className="follow-whatsapp">
                  <a href="https://web.whatsapp.com/send?phone=+919491448686 &amp;text=Towards the creation xof a home for your dream"
                     title="Contact Us On WhatsApp" target="_blank"> <i className="fab fa-whatsapp"></i></a>
               </div>
               {/* phone */}
               <div className="follow-facebook">
                  <a href="tel:+919491448686" title="Contact Us On facebook" target="_blank"> <i className="fa fa-phone"></i></a>
               </div>
               {/* email */}
               <div className="follow-instagram">
                  <a href="mailto: contact@greenaqua.in" title="Contact Us On instagram" target="_blank"> <i className="fa fa-envelope"></i></a>
               </div>
            </div>
         </div>


         <div className="get-quets">
            <Modal
               show={show}
               onHide={handleClose}
               backdrop="static"
               keyboard={false}
               className="pop-up get-quets"
               centered
               dialogClassName="modal-20w"
            >
               <Modal.Header closeButton>
                  <Modal.Title>Request A Call Back</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form className=''>
                     <Form.Group className="">
                        <Form.Control type="text" className='input-feild-height' placeholder="Enter Name" />
                     </Form.Group>
                     <Form.Group className="">
                        <Form.Control type="text" className='input-feild-height' placeholder="Enter email" />
                     </Form.Group>
                     <Form.Group className="">
                        <Form.Control type="text" className='input-feild-height' placeholder="Enter Company Name" />
                     </Form.Group>
                     <Form.Group className="">
                        <Form.Control type="text" className='input-feild-height' placeholder="Enter Phone" />
                     </Form.Group>
                     <Form.Group className=""  >
                        <textarea className="form-control" id="" rows="3" placeholder="Enter Message"></textarea>
                     </Form.Group>
                     <div className='text-center'>
                        <Button variant="primary" type="submit" className='btn-theme-colored w-100'>Send your message</Button>
                     </div>
                  </Form>
               </Modal.Body>
            </Modal>
         </div>




      </>
   );
}
