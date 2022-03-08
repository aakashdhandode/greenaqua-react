import React from 'react';
// import Banner from '../components/banner/Banner';
import Slider from '../components/slider/Slider';
// import Products from '../components/productstab/Products';
import StretgyCard from '../components/stretgycard/StretgyCard';
import Homeclients from '../components/clientlogo/HomeClients';
// import '../components/banner/Banner';
import '../assets/css/main.css'
import { Col, Container, Row, Image, Button, Form, Tabs, Tab } from 'react-bootstrap';
import homeabout from "../assets/images/homeabout.jpg";
import '../assets/css/product.css'
import productone from "../assets/images/productone.jpg";
import Producttwo from "../assets/images/producttwo.jpg";
import Producttree from "../assets/images/producttree.jpg";
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
    
       {/* <Banner /> */}
       <Slider />
       <section className='home-product-card'>
           <Container>
               <Row>
                   <Col sm={4}>
                      <Image  src={require('../assets/images/img01.png')} alt="greenaqua"/>
                      <h3>Domestic Range</h3>
                      <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home Softeners for Residential and Small Business users. These water Purifiers are designed and developed in accordance with the guidelines laid in the industry to attain highest benchmarks of quality. We uniquely positioned to offer our clients one stop &amp; integrated solutions for household, institutional, commercial, industrial by leveraging our expertise across various technologies to cater the needs of domestic.</p>
                   </Col>
                   <Col sm={4}>
                   <Image  src={require('../assets/images/img02.png')} alt="greenaqua"/>
                       <h3>Commercial & Industrial</h3>
                        <p>Green Aqua is engaged in offering the commercial and Industrial Water Treatment Plants. Under this category, we offer our customers a wide range of solutions for drinking, process and recycling applications which includes Reverse Osmosis Plants(RO), Ultra Filtration(UF), nano filtration(NF), UV Purification Systems, Pressure sand filters, Activated carbon filters, Water Softeners, DM Plants, Mixed Bed Units, Desalination plants, Sewage Treatment Plants(STP)</p>   
                   </Col>
                   <Col sm={4}>
                   <Image  src={require('../assets/images/img03.png')} alt="greenaqua"/>
                      <h3>Water Treatment Solutions</h3>
                      <p>Green Aqua expertise lies in designing of Sewage treatment or effluent treatment plant that meet individual site requirements by creating a versatile, reliable and an efficient design that on one hand meets the stringent discharge norms and regulations of Pollution control Board (PCB). Our design includes physical, chemical and biological processes to remove physical, chemical and biological contaminants. Its objective is to produce a waste stream (or treated effluent) and a solid waste or sludge suitable for.</p>   
                    </Col>
               </Row>
           </Container>
       </section>


       <section className='new-about-bg'>
           <Container fluid>
               <Row>
                   <Col sm={6} className='wlcome-img-padding'>
                       <img src={homeabout} className="img-fluid" alt="greenaqua" />
                   </Col>
                   <Col sm={6}>
                   <div className="offers-containt">
                        <h3>Welcome to Green Aqua Enviro Projects Private Limited, Hyderabad, India.</h3>
                        <p>Welcome to Green Aqua Enviro Projects Private Limited, Hyderabad, India. Green Aqua is one of the leading 
                        specialist in water treatment industry operate in the Designing, manufacturing, supply,
                             erection and commissioning of water and waste water treatment plants. At Green Aqua,
                              we are uniquely positioned to offer our clients one stop &amp; integrated solutions for 
                              household, institutional, commercial, industrial by leveraging our expertise across various
                               technologies to cater the needs of domestic, commercial and industrial requirements.</p>
                        <p>By Integrating process thechnolgy, design engineering and project management capabilites,
                         we take end-to-end responsibility in planning, sourcing, integrating and managing water &amp; 
                         waste water plants, thus providing customers with total systems solutions with a long term commitment
                          for quality and service.</p>
                    </div>
                   </Col>
               </Row>
           </Container>
       </section>
       <section className='pt-4'>
          {/* <Products /> */}
          <Container>
            <div className='section-title text-center'>
                <h1>Our Products</h1>
                <p> With Esteemed Quality certifications from Water Quality and focus on Safety and Environment MAnagement Systems, Green Aqua is committed to maintain the highest standards for Health, Saftey and Environment.</p>
            </div>
            <div className='products-tabs'>
                <Tabs defaultActiveKey="tabone" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="tabone" title="Wastewater Treatment">
                        <Row>
                            <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <Image  src={require('../assets/images/productone.jpg')} alt="greenaqua"/>
                                <h3>Sewage Water Treatment Plants</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <Image  src={require('../assets/images/producttwo.jpg')} alt="greenaqua"/>
                                <h3>Packaged Sewage Treatment Plant</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <Image  src={require('../assets/images/producttwo.jpg')} alt="greenaqua"/>
                                <h3>Effluent Treatment Plant</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <Image  src={require('../assets/images/producttree.jpg')} alt="greenaqua"/>
                                <h3>Industrial Reverse Osmosis Plant</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                        </Row>
                    </Tab>


                    <Tab eventKey="tabtwo" title="Industrial Water Solution">
                    <Row>
                        <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <Image  src={require('../assets/images/productone.jpg')} alt="greenaqua"/>
                                <h3>Reverse Osmosis</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <Image  src={require('../assets/images/productone.jpg')} alt="greenaqua"/>
                                <h3>Softners</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <Image  src={require('../assets/images/productone.jpg')} alt="greenaqua"/>
                                <h3>Multi Grade Sand Filter</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <Image  src={require('../assets/images/productone.jpg')} alt="greenaqua"/>
                                <h3>Activated Corbon Filter</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                    </Row>
                    </Tab>



                    <Tab eventKey="tabthree" title="Water Vending Machine">
                    <Row>
                    <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <img src={Producttwo} className="img-fluid" alt="greenaqua" />
                                <h3>Water Vending Machine</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                    </Row>
                    </Tab>
                    <Tab eventKey="tabfour" title="Water Vending Station">
                    <Row>
                        <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <img src={Producttwo} className="img-fluid" alt="greenaqua" />
                                <h3>Water Vending Station</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                    </Row>
                    </Tab>

                    <Tab eventKey="tabfive" title="Domestic & Industrial">
                    <Row>
                            <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <img src={Producttwo} className="img-fluid" alt="greenaqua" />
                                <h3>RO Purifiers</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <img src={Producttwo} className="img-fluid" alt="greenaqua" />
                                <h3>Home Softner</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                    </Row>
                    </Tab>

                    <Tab eventKey="tabsix" title="Dringking Water Solution">
                    <Row>
                            <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <img src={Producttwo} className="img-fluid" alt="greenaqua" />
                                <h3>Turnkey Packaged Water</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className='home-tab-product-card'>
                                <img src={Producttwo} className="img-fluid" alt="greenaqua" />
                                <h3>RO Drinking Water Plants</h3>
                                <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                                Softeners for Residential and Small Business users. </p>
                                <Link to="/ProductDetails">More..</Link>
                                </div>
                            </Col>
                    </Row>
                    </Tab>
                </Tabs>
            </div>
        </Container>
       </section>





       <section className='pt-4'>
          <StretgyCard />
       </section>
       <Homeclients />

       <section className="footer-contact">
           <Container>
               <Row>
                   <Col sm={3} xs={6}>
                       <div className="sevice-icons">
                         <Image className='icon-image'  src={require('../assets/images/economy.png')}/>
                         <h1>Economy</h1>
                       </div>
                   </Col>
                   <Col sm={3} xs={6}>
                       <div className="sevice-icons">
                         <Image  className='icon-image' src={require('../assets/images/qulity.png')}/>
                         <h1>Quality</h1>
                       </div>
                   </Col>
                   <Col sm={3} xs={6}>
                       <div className="sevice-icons">
                         <Image  className='icon-image' src={require('../assets/images/service.png')}/>
                         <h1>Service</h1>
                       </div>
                   </Col>
                   <Col sm={3} xs={6}>
                       <div className="sevice-icons">
                         <Image  className='icon-image' src={require('../assets/images/innovation.png')}/>
                         <h1>Innovation</h1>
                       </div>
                   </Col>
               </Row>
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
                </Row>
            </Container>
        </section>
 
      

    </>
  );
}
