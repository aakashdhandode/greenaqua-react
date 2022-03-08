import React from "react";
import PropTypes from "prop-types";

function Brouchers(props) {
  return (
    <div>
      <div className="work-pro text-center">
        <h2>{props.title}</h2>
        <img src={props.img} />
      </div>
    </div>
  );
}

Brouchers.propTypes = {};

export default Brouchers;
