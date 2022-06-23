// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

// function Product(props) {
//   return (
//     <div>
//         <div className="home-tab-product-card">
//              <img src={props.img} />
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//             <Link to="/ProductDetails">{props.more}</Link>
//         </div>
//     </div>
//   )
// }

// Product.propTypes = {}

// export default Product

// import React from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

// function ProductsCat(props) {
//   return (
//     <div>
//       <div className="home-tab-product-card">
//              <img src={props.img} />
//             <h3>{props.title}</h3>
//             <p>{props.description}</p>
//             <Link to="/ProductsCategories">{props.more}</Link>
//       </div>
//     </div>
//   )
// }

// ProductsCat.propTypes = {}

// export default ProductsCat

import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function ProductsCat() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get('http://admin.greenaqua.in/api/ga/categories')
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
      {products.map((mainproduct) => (
        <div key={mainproduct.id}>
          <div className='home-cat-slider'>
            <Link to={`/category/${mainproduct.id}`}>
              <div className='home-tab-product-card pro-height'>
                <img src={'http://admin.greenaqua.in/' + mainproduct.images.original} alt='g' />
                <h3>{mainproduct.name}</h3>
              </div>
            </Link>
          </div>

        </div>
      ))}
    </div>
  )
}

export default ProductsCat





