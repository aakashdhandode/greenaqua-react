import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image} from 'react-bootstrap';
// import Homeclients from '../components/clientlogo/HomeClients';
import { Link } from "react-router-dom";
import OurClient from '../components/clientlogo/OurClient';
import Brouchersimg from '../assets/images/clients/01.png';
import axios from 'axios';

export default function Clients() {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
  fetchGallery();
  }, []);
  const fetchGallery = () => {
  axios
      .get('http://admin.greenaqua.in/api/ga/files/client/true')
      .then((res) => {
      // console.log(res);
      setGallery(res.data.data);
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
               <h3>Our Clients</h3>
               <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
          </Container>
        </section>

        <section className='clients-bg'>
           <Container>
               <Row className='pt-3'>
               {gallery.map((image) => (
                 <Col sm={2} xs={6}>
                     <div className='clentslogo-card' key={image.id}>
                     <img src={'http://admin.greenaqua.in/'+image.original} alt='greenAqua' />
                      </div>
                   </Col>
                   ))}
                   {/* {gallery.map((image) => (
                     <div key={image.id}>
                            <img src={'http://admin.greenaqua.in/'+image.original} alt='greenAqua' />
                      </div> */}
                      

                   {/* <Col sm={2} xs={6}>
                      <OurClient
                          img={Brouchersimg}
                       />
                   </Col>
                   <Col sm={2} xs={6}>
                      <OurClient
                          img={Brouchersimg}
                       />
                   </Col>
                   <Col sm={2} xs={6}>
                      <OurClient
                          img={Brouchersimg}
                       />
                   </Col>
                   <Col sm={2} xs={6}>
                      <OurClient
                          img={Brouchersimg}
                       />
                   </Col>
                   <Col sm={2} xs={6}>
                      <OurClient
                          img={Brouchersimg}
                       />
                   </Col>
                   <Col sm={2} xs={6}>
                      <OurClient
                          img={Brouchersimg}
                       />
                   </Col>
                   <Col sm={2} xs={6}>
                      <OurClient
                          img={Brouchersimg}
                       />
                   </Col>
                   <Col sm={2} xs={6}>
                      <OurClient
                          img={Brouchersimg}
                       />
                   </Col>
                   <Col sm={2} xs={6}>
                      <OurClient
                          img={Brouchersimg}
                       />
                   </Col> */}
                   

                  


                  {/*  <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/01.png')}/>
                      </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/02.png')}/>
                      </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/03.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                       <Image  src={require('../assets/images/clients/04.png')}/>
                      </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                        <Image  src={require('../assets/images/clients/06.png')}/> 
                      </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                        <Image  src={require('../assets/images/clients/07.png')}/> 
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/08.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/09.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                          <Image  src={require('../assets/images/clients/10.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/11.png')}/>
                       </div>
                   </Col>

                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/12.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/13.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/14.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/15.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/16.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/17.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/18.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/19.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/20.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/21.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/22.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/23.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/24.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/25.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/26.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/27.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/28.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/29.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/30.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/31.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/32.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/33.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/34.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/35.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/36.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/37.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/38.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/39.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/40.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/41.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/42.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/43.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/44.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/45.png')}/>
                       </div>
                   </Col>

                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/46.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/47.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/48.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/49.png')}/>
                       </div>
                   </Col>
                   <Col sm={2} xs={6}>
                     <div className='clentslogo-card'>
                         <Image  src={require('../assets/images/clients/50.png')}/>
                       </div>
                   </Col> */}
               </Row>
             
         
           </Container>
        </section>
        <section className="footer-contact">
            <Container>
                <Row>
                    <Col sm={7} className="border-rightw">
                        <Row>
                            <Col sm={2} xs={6} className="text-center">
                            <Image  src={require('../assets/images/f2.png')} className='img-fluid margni-ft-img' />
                            </Col>
                            <Col sm={9} className="footer-section-containt">
                                <h1>We Help Industry To Utilize The  Equipment Work Better</h1>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={5}>
                        <Row>
                            <Col sm={7} className='mobile-side-padding'>
                                <Row>
                                <Col sm={2} xs={6} className="phone-icon">
                                  <i className="fas fa-phone-alt"></i>
                                </Col>
                                <Col sm={10} className="footer-number">
                                    <p>contact us now</p>
                                    <h1>040-23323333</h1>
                                </Col>
                                </Row>
                            </Col>
                            <Col sm={5} className="get-btn">
                                <Link to="" className="get-started-btn">GET STARTED</Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  );
}
