//  

import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ClientSlider from '../components/clientlogo/ClientSlider';

export default function Services() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetchProducts();
    }, []);
    const fetchProducts = () => {
      axios
        .get('http://127.0.0.1:8000/api/ga/services')
        .then((res) => {
          console.log(res);
          setProducts(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  return (
    <>
    
        
        <section className='product-page-sub'>
          <Container>
            <div className='pro-discription'>
               <h3>Services</h3>
               <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
          </Container>
        </section>
        {/* <section className='main-service-box'>
          <Container>
              <Row>
              {products.map((mainproduct) => (
                 <Col sm={6} className='service-containt'>
                    <div className=''>
                    <h2>{mainproduct.title}</h2>
                   <p>{mainproduct.description}</p>
                    </div> 
                    <div>
                    <img src={'http://127.0.0.1:8000/' + mainproduct.logo.original} alt='greenAqua' className='img-fluid'/>
                    </div>                                 
                 </Col>
                  ))}
              </Row>
          </Container>
        </section> */}
        <section className='services-bgg'>
            <Container>
                <Row>
                {products.map((mainproduct) => (
                    <Col sm={6}>
                        <div className='ser-pr-bg'>
                           <img src={'http://127.0.0.1:8000/' + mainproduct.logo.original} alt='greenAqua' className='img-fluid'/>
                           <div className='descr'>
                           <h4>{mainproduct.title}</h4>
                            <p>{mainproduct.description}</p>
                           </div>
                        </div>
                    </Col>
                    
                    ))}
                </Row>
            </Container>
        </section>
        <section className="footer-contact">
            <Container>
                <Row>
                    <Col sm={7} className="border-rightw">
                        <Row>
                            <Col lg={2} xs={3} className="text-center">
                            <Image  src={require('../assets/images/f2.png')} className='img-fluid margni-ft-img' />
                            </Col>
                            <Col lg={9} xs={9}  className="footer-section-containt">
                                <h1>We Help Industry To Utilize The  Equipment Work Better</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={5}>
                        <Row>
                            <Col lg={7} xs={7} className='mobile-side-padding'>
                                <Row>
                                <Col lg={2} xs={2} className="phone-icon">
                                  <i className="fas fa-phone-alt"></i>
                                </Col>
                                <Col lg={10} xs={10} className="footer-number">
                                    <p>contact us now</p>
                                    <h1>040-23323333</h1>
                                </Col>
                                </Row>
                            </Col>
                            <Col lg={5} xs={5}  className="get-btn">
                                <Link to="" className="get-started-btn">GET STARTED</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>

        <ClientSlider />
      
    </>
  );
}
