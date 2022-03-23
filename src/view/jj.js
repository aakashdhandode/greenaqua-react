
import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Col, Container, Row, Image } from 'react-bootstrap';
import ProductsCat from '../components/product/ProductsCat';
import Productone from "../assets/images/productone.jpg";
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductsCategories = () => {

    const params = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
    fetchProducts();
    }, []);
    const fetchProducts = () => {
    axios
        .get(`/api/ga/${params.id}/products`)
        .then((res) => {
        console.log(res);
        setProducts(res.data.data);
        })
        .catch((err) => {
        console.log(err);
        });
    };

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
        <section className='pt-5 pb-5'>
           <Container>
               <Row>
               {products.map((mainproduct) => (
                    <Col sm={3} key={mainproduct.id}>
                        {/* <div className='home-tab-product-card pro-height'>
                              <Image  src={require('../assets/images/pro1.jpg')}/>
                              <h3>{mainproduct.name}</h3>
                              <Link to={`/products/${mainproduct.id}`}>
                              More..</Link>
                        </div> */}
                    </Col>
             ))}
               {/* {subcategory.map((productsubcategory) => (
                    <Col sm={3} key={productsubcategory.id}>
                      <div className='home-tab-product-card pro-height'>
                              <Image  src={require('../assets/images/pro1.jpg')}/>
                              <h3>{productsubcategory.name}</h3>
                              <Link to={`/${productsubcategory.id}/products`}>
                              More..</Link>
                        </div>
                    </Col>
             ))} */}
               {/* <Col sm={3}>
                     <div className="home-tab-product-card">
                        <Image  src={require('../assets/images/pro1.jpg')} className="img-fluid"/>
                        <h3>skldfjasdlkjd</h3>
                        <p>jaskdhfskjdh</p>
                        <Link to="/ProductDetails">sfdf</Link>
                    </div>
               </Col> */}


                   {/* <Col sm={3}>
                       <ProductsCat 
                          img={Productone}
                            title="Sewage Water Treatment Plants"
                            description="Green Aqua engaged in manufacturing, supplying and distributing Water RO Purifiers and Home 
                            Softeners for Residential and Small Business users."
                            more="More.."
                       />
                   </Col>         
               */}
               </Row>
           </Container>
        </section>
    </div>
  )
}

export default ProductsCategories