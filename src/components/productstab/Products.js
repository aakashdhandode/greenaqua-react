import React from 'react';
import { Tabs, Tab, Container, Col, Row } from 'react-bootstrap';
import './product.css'
import productone from "../../assets/images/productone.jpg";
import Producttwo from "../../assets/images/producttwo.jpg";
import Producttree from "../../assets/images/producttree.jpg";
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <>
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
                               <img src={productone} className="img-fluid" alt="greenaqua" />
                               <h3>Sewage Water Treatment Plants</h3>
                               <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                               Softeners for Residential and Small Business users. </p>
                               <Link to="/ProductDetails">More..</Link>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='home-tab-product-card'>
                               <img src={Producttwo} className="img-fluid" alt="greenaqua" />
                               <h3>Packaged Sewage Treatment Plant</h3>
                               <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                               Softeners for Residential and Small Business users. </p>
                               <Link to="/ProductDetails">More..</Link>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='home-tab-product-card'>
                               <img src={Producttree} className="img-fluid" alt="greenaqua" />
                               <h3>Effluent Treatment Plant</h3>
                               <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                               Softeners for Residential and Small Business users. </p>
                               <Link to="/ProductDetails">More..</Link>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='home-tab-product-card'>
                               <img src={Producttwo} className="img-fluid" alt="greenaqua" />
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
                               <img src={productone} className="img-fluid" alt="greenaqua" />
                               <h3>Reverse Osmosis</h3>
                               <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                               Softeners for Residential and Small Business users. </p>
                               <Link to="/ProductDetails">More..</Link>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='home-tab-product-card'>
                               <img src={productone} className="img-fluid" alt="greenaqua" />
                               <h3>Softners</h3>
                               <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                               Softeners for Residential and Small Business users. </p>
                               <Link to="/ProductDetails">More..</Link>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='home-tab-product-card'>
                               <img src={productone} className="img-fluid" alt="greenaqua" />
                               <h3>Multi Grade Sand Filter</h3>
                               <p>Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                               Softeners for Residential and Small Business users. </p>
                               <Link to="/ProductDetails">More..</Link>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className='home-tab-product-card'>
                               <img src={productone} className="img-fluid" alt="greenaqua" />
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
    </>
  );
}
