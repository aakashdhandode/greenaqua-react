import React, { useState, useEffect } from 'react';
import { Col, Container, Row,Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Brouchers from '../components/brouchers/Brouchers';
import Brouchersimg from '../assets/images/downbutton.jpg';
import ClientSlider from '../components/clientlogo/ClientSlider';
import axios from 'axios';
export default function Downloads() {
    const [downloads, setDownloads] = useState([]);
    useEffect(() => {
    fetchGallery();
    }, []);
    const fetchGallery = () => {
    axios
        .get('http://127.0.0.1:8000/api/ga/files/broucher/true')
        .then((res) => {
        console.log(res);
        setDownloads(res.data.data);
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
               <h3>Downloads</h3>
               <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
          </Container>
        </section> 
        <section className='downloads-padding'>
            <Container>
                <Row>
                {downloads.map((broucher) => (
                    <Col sm={3}>
                    <div className="work-pro text-center">
                      <a href={'http://127.0.0.1:8000/'+broucher.original} download target="_blank">
                          <h2>{broucher.name}</h2>
                          <Image  src={require('../assets/images/downbutton.jpg')} />
                       </a>
                    </div>
                    </Col>
                    ))}
                    {/* <Col sm={3}>
                       <Brouchers
                        title="Water Vending Machine"
                        img={Brouchersimg}
                       />
                    </Col>
                    <Col sm={3}>
                       <Brouchers
                        title="Water Vending Machine"
                        img={Brouchersimg}
                       />
                    </Col>
                    <Col sm={3}>
                       <Brouchers
                        title="Water Vending Machine"
                        img={Brouchersimg}
                       />
                    </Col>
                    <Col sm={3}>
                       <Brouchers
                        title="Water Vending Machine"
                        img={Brouchersimg}
                       />
                    </Col>                  */}
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
                                <h1>We Help Industry To Utilize The Heavy Equipment Work Better</h1>
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
