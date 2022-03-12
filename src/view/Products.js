import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <>
      <section className='product-page-sub'>
        <Container>
            <div className='pro-discription'>
                <h3>Our Products</h3>
                <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
        </Container>
      </section>

    {/* Our Products  section*/}
    <section className='pt-5 pb-5'>
    <Container>
        <Row>
            <Col sm={3}>
            <div className='home-tab-product-card pro-height'>
                <Image  src={require('../assets/images/pro1.jpg')}/>
                <h3>Wastewater Treatment</h3>
                <Link to="/SubCategories">
                More..</Link>
            </div>
            </Col>
            <Col sm={3}>
            <div className='home-tab-product-card pro-height'>
                <Image  src={require('../assets/images/pro2.jpg')}/>
                <h3>Industrial Water Solutions</h3>
                <Link to="/SubCategories">
                More..</Link>
            </div>
            </Col>
            <Col sm={3}>
            <div className='home-tab-product-card pro-height'>
                <Image  src={require('../assets/images/pro3.jpg')}/>
                <h3>Domestic & Industrial</h3>
                <Link to="/SubCategories">
                More..</Link>
            </div>
            </Col>
            <Col sm={3}>
            <div className='home-tab-product-card pro-height'>
                <Image  src={require('../assets/images/pro4.jpg')}/>
                <h3>Drinking Water Solutions</h3>
                <Link to="/SubCategories">
                More..</Link>
            </div>
            </Col>
            <Col sm={3}>
            <div className='home-tab-product-card pro-height'>
                <Image  src={require('../assets/images/pro5.jpeg')}/>
                <h3>Water Vending Machine</h3>
                <Link to="/SubCategories">
                More..</Link>
            </div>
            </Col>
            <Col sm={3}>
            <div className='home-tab-product-card pro-height'>
                <Image  src={require('../assets/images/pro5.jpeg')}/>
                <h3>Water Vending Station</h3>
                <Link to="/SubCategories">
                More..</Link>
            </div>
            </Col>
        </Row>
    </Container>
    </section>
    </>
  );
}
