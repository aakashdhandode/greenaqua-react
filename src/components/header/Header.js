import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Container, Navbar, Nav, Col, Row, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Header() {
  // const [showDropdown, setShowDropd  own] = useState(false);
  const [active, setActive] = useState("home");
  const [mainCategory, setMainCatLink] = useState([]);
  const [subCategory, setProducts] = useState([]);


  useEffect(() => {
    fetchMainCatLink();
  }, []);
  const fetchMainCatLink = () => {
    axios
      .get("http://admin.greenaqua.in/api/ga/categories")
      .then((res) => {
        setMainCatLink(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const params = useParams();
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get(`http://admin.greenaqua.in/api/ga/${params.id}/products`)
      .then((res) => {
        console.log(res);
        setProducts(res.data.data?.data ?? []);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="top-header">
        <Container>
          <Row>
            <Col sm={6}>
              <div className="name-mail">
                <a href="/" target="_blank" rel="">
                  Call: +91 040 233 233 33
                </a>
                <a href="/" target="_blank" rel="">
                  Email: contact@greenaqua.in
                </a>
              </div>
            </Col>
            <Col sm={6}>
              <div className="social-icons">
                <a href="instagram.com" target="_blank" rel="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="facebook.com" target="_blank" rel="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="linkedin.com" target="_blank" rel="">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="youtube.com" target="_blank" rel="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="twitter.com" target="_blank" rel="">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <section className="logo-section-header">
        <Container>
          <Row>
            <Col sm={6} xs={4}>
              <Link to="/">
                <img src={logo} className="img-fluid logo-img" alt="logo" />
              </Link>
            </Col>
            <Col sm={6} xs={8}>
              <div className="text-end">
                <Image
                  src={require("../../assets/images/iso.jpg")}
                  className="partner-logo"
                />
                <Image
                  src={require("../../assets/images/nsic.png")}
                  className="partner-logo"
                />
                <Image
                  src={require("../../assets/images/msme.png")}
                  className="partner-logo pt-4"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
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

              <Nav.Item>
                <ul className="dropdown">
                  <li>
                    <Nav.Link eventKey="products" as={Link} to="/products">
                      Products
                    </Nav.Link>
                    <ul className="dropdown-chaild">
                      {mainCategory.map((mainitem) => {
                        return (
                          <li key={mainitem.id}>
                            <a href={`/products/${mainitem.id}`}>
                              {mainitem.name}
                            </a>
                            <ul>
                              {/* <li><Link to="/ProductDetails">Sewage Treatment plants</Link></li> */}

                              {mainitem?.subcats?.map((subcat) => (
                                <li key={subcat.id}>
                                  <a href={`/Details/${subcat.id}`}>
                                    {subcat.name}
                                  </a>
                                </li>
                              ))}

                              {subCategory.map((subcat) => (
                                   <li key={subcat.id}>
                                      <Link to={`/Details/${subcat.id}`}>
                                        {subcat.name}
                                      </Link>
                                 </li>
                              ))}

                              
                            </ul>
                          </li>
                        );
                      })}
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
                <Nav.Link eventKey="gallery" as={Link} to="/Careers">
                  Careers
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
