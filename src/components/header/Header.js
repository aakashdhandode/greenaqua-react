import React, { useState } from "react";
import { Container, Navbar, Nav, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import "./header.css";

export default function Header() {
  // const [showDropdown, setShowDropd  own] = useState(false);
  const [active, setActive] = useState("home");
  return (
    <>
      <div className="top-header">
        <Container>
          <Row>
            <Col sm={6} >
                <div className="name-mail">
                <a href="/" target="_blank" rel=""  >Call: +91 040 233 233 33</a>
                <a href="/" target="_blank" rel=""  >Email: contact@greenaqua.in</a>
                </div>
            </Col>
            <Col sm={6} className="text-end">
              <div className="social-icons">
                <a href="instagram.com" target="_blank" rel=""  ><i className="fab fa-instagram"></i></a>
                <a href="facebook.com" target="_blank" rel=""  ><i className="fab fa-facebook-f"></i></a>
                <a href="linkedin.com" target="_blank" rel=""  ><i className="fab fa-linkedin"></i></a>
                <a href="youtube.com" target="_blank" rel=""  ><i className="fab fa-youtube"></i></a>
                <a href="twitter.com" target="_blank" rel=""  ><i className="fab fa-twitter"></i></a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* <Navbar expand="md" className="transparent-header">
        <Container className='header-white'>
            <Navbar.Brand>
              <Link to="/">
                 <img src={logo} className="img-fluid logo-img" alt="logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link>
                  <Link to="/">Home</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/about">About Us</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/services">Services</Link>
                </Nav.Link>
                  <Nav.Link>
                  <ul className="dropdown">
                    <li><Link to="/products">Products</Link>
                        <ul className="dropdown-chaild">
                           <li><Link to="/SubCategories">Wastewater Treatment</Link>
                                <ul>
                                    <li><Link to="/ProductDetails">Sewage Treatment plants</Link></li>
                                    <li><Link to="/ProductDetails">Packages STP</Link></li>
                                    <li><Link to="/ProductDetails">Effluent Treatment Plants</Link></li>
                                    <li><Link to="/ProductDetails">Packages ETP</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/SubCategories">Industrial Water Solutions </Link>
                                <ul>
                                    <li><Link to="/ProductDetails">Sewage Treatment plants</Link></li>
                                    <li><Link to="/ProductDetails">Packages STP</Link></li>
                                    <li><Link to="/ProductDetails">Effluent Treatment Plants</Link></li>
                                    <li><Link to="/ProductDetails">Packages ETP</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/SubCategories">Domestic & Industrial </Link></li>
                            <li><Link to="/SubCategories">Drinking Water Solutions</Link></li>
                            <li><Link to="/SubCategories">Water Vending Machine</Link></li>
                            <li><Link to="/SubCategories">Water Vending Station</Link></li>
                        </ul>
                    </li>
                </ul>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/clients">Clients</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/gallery">Gallery</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/downloads">Brouchers</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/contact">Contact Us</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
  </Navbar> */}

      <section className="logo-section-header">
        <Container>
          <Row>
            <Col sm={6} xs={4}>
              <Link to="/">
                <img src={logo} className="img-fluid logo-img" alt="logo" />
              </Link>
            </Col>
            <Col sm={6} xs={8}>
              <div className='text-end'>
                <Image src={require('../../assets/images/iso.jpg')} className='partner-logo' />
                <Image src={require('../../assets/images/nsic.png')} className='partner-logo' />
                <Image src={require('../../assets/images/msme.png')} className='partner-logo pt-4' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section>
        <Navbar bg="light" collapseOnSelect expand="lg">
          <Container>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="ms-auto sub-nav"
                activeKey={active}
                onSelect={(selectedKey) => setActive(selectedKey)}
              >
                <Nav.Item>
                  <Nav.Link eventKey="home" as={Link} to="/">
                    Home
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="about" as={Link} to="/about">
                    About Us
                  </Nav.Link>
                </Nav.Item>
               
                <Nav.Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/products">Products</Link>
                      <Nav.Link eventKey="ServicesPage" as={Link} to="/ServicesPage">
                  Services
                </Nav.Link>
                      <ul className="dropdown-chaild">
                        <li><Link to="/SubCategories">Wastewater Treatment</Link>
                          <ul>
                            <li><Link to="/ProductDetails">Sewage Treatment plants</Link></li>
                            <li><Link to="/ProductDetails">Packages STP</Link></li>
                            <li><Link to="/ProductDetails">Effluent Treatment Plants</Link></li>
                            <li><Link to="/ProductDetails">Packages ETP</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/SubCategories">Industrial Water Solutions </Link>
                          <ul>
                            <li><Link to="/ProductDetails">Sewage Treatment plants</Link></li>
                            <li><Link to="/ProductDetails">Packages STP</Link></li>
                            <li><Link to="/ProductDetails">Effluent Treatment Plants</Link></li>
                            <li><Link to="/ProductDetails">Packages ETP</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/SubCategories">Domestic & Industrial </Link></li>
                        <li><Link to="/SubCategories">Drinking Water Solutions</Link></li>
                        <li><Link to="/SubCategories">Water Vending Machine</Link></li>
                        <li><Link to="/SubCategories">Water Vending Station</Link></li>
                      </ul>
                    </li>
                  </ul>
                </Nav.Link>
                <Nav.Item>
                  <Nav.Link eventKey="technologies" as={Link} to="/technologies">
                    Technologies
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="career" as={Link} to="/career">
                    Careers
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="contact" as={Link} to="/contact">
                    Contact
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section> */}

      <Navbar bg="light" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="m-auto sub-nav"
              activeKey={active}
              onSelect={(selectedKey) => setActive(selectedKey)}
            >
              <Nav.Item>
                <Nav.Link eventKey="home" as={Link} to="/">
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="about" as={Link} to="/about">
                  About Us
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link eventKey="ServicesPage" as={Link} to="/ServicesPage">
                  Services
                </Nav.Link>
              </Nav.Item> */}
  
              <Nav.Item>
                  <ul className="dropdown">
                    <li>
                        <Nav.Link eventKey="products" as={Link} to="/products">
                      Products
                    </Nav.Link>
                    <ul className="dropdown-chaild">
                        <li><Link to="/SubCategories">Water Vending Machine</Link></li>
                        <li><Link to="/SubCategories">Water Vending Station</Link></li>
                        <li><Link to="/SubCategories">Wastewater Treatment</Link>
                          <ul>
                            <li><Link to="/ProductDetails">Sewage Treatment plants</Link></li>
                            <li><Link to="/ProductDetails">Packages STP</Link></li>
                            <li><Link to="/ProductDetails">Effluent Treatment Plants</Link></li>
                            <li><Link to="/ProductDetails">Packages ETP</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/SubCategories">Industrial Water Solutions </Link>
                          <ul>
                            <li><Link to="/ProductDetails">Industrial Reverse Osmosis (RO) Plants</Link></li>
                            <li><Link to="/ProductDetails">Ultra Filtration Plant</Link></li>
                            <li><Link to="/ProductDetails"> Multi Grade Sand Filter</Link></li>
                            <li><Link to="/ProductDetails">Activated Carbon Filter</Link></li>
                            <li><Link to="/ProductDetails">MB Units</Link></li>
                            <li><Link to="/ProductDetails"> DM Plants</Link></li> 
                            <li><Link to="/ProductDetails">Desalination Plants</Link></li> 
                            <li><Link to="/ProductDetails">Chemical Dosing System</Link></li> 
                            <li><Link to="/ProductDetails">Swimming Pool Filtration Systems</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/SubCategories">Domestic & Industrial </Link>
                          <ul>
                            <li><Link to="/ProductDetails">RO Purifiers</Link></li>
                            <li><Link to="/ProductDetails">Home Softners</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/SubCategories">Drinking Water Solutions</Link>
                        <ul>
                            <li><Link to="/ProductDetails">Turnkey Project for Packaged</Link></li>
                            <li><Link to="/ProductDetails">RO Dringking Water Plants</Link></li>
                          </ul>
                        </li>
                        
                      </ul>
                    </li>
                </ul>
              </Nav.Item>
        
              <Nav.Item>
                <Nav.Link eventKey="services" as={Link} to="/services">
                 Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="gallery" as={Link} to="/gallery">
                 Gallery
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="downloads" as={Link} to="/downloads">
                Brouchers
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="contact" as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>





      {/* 
      <div className="fixed-mobile">
         <Link to="/">Call Us : +91 1234567890</Link><br />
          <Link to="/">exaple@gmail.com</Link>
      </div> */}







    </>
  );
}
