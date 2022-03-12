import React from 'react'
import PropTypes from 'prop-types'

function OurClient(props) {
  return (
    <div>
        <div className='clentslogo-card'>
            <img src={props.img} />
        </div>
    </div>
  )
}

OurClient.propTypes = {}

export default OurClient
