import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useParams} from 'react-router-dom';

export default function ProductsCategories() {
 
  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
  fetchProducts();
  }, []);
  const fetchProducts = () => {
  axios
      .get(`/api/ga/${params.id}/products`)
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
      <section className='product-page-sub'>
        <Container>
            <div className='pro-discription'>
                <h3>Our Products</h3>
                <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
        </Container>
      </section>
    <section className='pt-5 pb-5'>


    <Container>
        <Row>
             {products.map((mainproduct) => (
                    <Col sm={3} key={mainproduct.id}>
                      <div className='home-tab-product-card pro-height'>
                              <img src={'http://127.0.0.1:8000/'+mainproduct.original} alt='greenAqua' />
                              <h3>{mainproduct.name}</h3>
                              <p>{mainproduct.description}</p>
                              <Link to={`/Details/${mainproduct.id}`}>More..</Link>                            
                        </div>
                    </Col>
             ))}
      
          
            {/* <Col sm={3}>
            <div className='home-tab-product-card pro-height'>
                <Image  src={require('../assets/images/pro3.jpg')}/>
                <h3>Domestic & Industrial</h3>
                <Link to="/SubCategories">
                More..</Link>
            </div>
            </Col> */}
           
        </Row>
    </Container>
    </section>
    </>
  );
}
