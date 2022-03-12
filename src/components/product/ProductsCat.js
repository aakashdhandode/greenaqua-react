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

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function ProductsCat(props) {
  return (
    <div>
      <div className="home-tab-product-card">
             <img src={props.img} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Link to="/ProductDetails">{props.more}</Link>
      </div>
    </div>
  )
}

ProductsCat.propTypes = {}

export default ProductsCat

