import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ProductsCategories() {

  const [products, setProducts] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetchProducts();
  }, params.id);
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
      {/* <section className='product-page-sub'>
        <Container>
          <div className='pro-discription'>
            <h3>Our Products</h3>
            <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
          </div>
        </Container>
      </section> */}
      <section className='pt-5 pb-5'>
        <Container>
          <Row>
            {products.map((mainproduct) => (
              <Col sm={3} key={mainproduct.id}>
                <div className='home-tab-product-card'>
                <Link to={`/details/${mainproduct.id}`}>
                  <img src={'/' + mainproduct.featured.original} alt='greenAqua' />
                  <h3>{mainproduct.name}</h3>
                  <p>{mainproduct.description}</p>
                  <Link to={`/details/${mainproduct.id}`}>More..</Link>
                  </Link>
                </div>
              </Col>
            ))}

          </Row>
        </Container>
      </section>
    </>
  );
}
