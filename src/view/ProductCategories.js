import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductsCat from '../components/product/ProductsCat';
import Productone from "../assets/images/productone.jpg";

function ProductCategories() {
  return (
    <div>
        <section className='product-page-sub'>
            <Container>
                <div className='pro-discription'>
                    <h3>Products Categories</h3>
                    <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
                </div>
            </Container>
        </section>

        {/* products categories */}
        <section className='pt-5 pb-5'>
           <Container>
               <Row>
                   <Col sm={3}>
                       <ProductsCat 
                          img={Productone}
                            title="Sewage Water Treatment Plants"
                            description="Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                            Softeners for Residential and Small Business users."
                            more="More.."
                       />
                   </Col>
                   <Col sm={3}>
                       <ProductsCat 
                          img={Productone}
                            title="Sewage Water Treatment Plants"
                            description="Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                            Softeners for Residential and Small Business users."
                            more="More.."
                       />
                   </Col>
                   <Col sm={3}>
                       <ProductsCat 
                          img={Productone}
                            title="Sewage Water Treatment Plants"
                            description="Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                            Softeners for Residential and Small Business users."
                            more="More.."
                       />
                   </Col>
                   <Col sm={3}>
                       <ProductsCat 
                          img={Productone}
                            title="Sewage Water Treatment Plants"
                            description="Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                            Softeners for Residential and Small Business users."
                            more="More.."
                       />
                   </Col>
               </Row>
           </Container>
        </section>
    </div>
  )
}

export default ProductCategories