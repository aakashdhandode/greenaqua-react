import React from 'react';
import sliderone from "../../assets/images/ee.jpg";
import './banner.css'

export default function Banner() {
  return (
    <>
        <section>
           {/* <Image  src={require('../../assets/images/banner.jpg').default}/> */}
           <img src={sliderone} className="img-fluid banner-img-style" alt="sap" />
        </section>
    </>
  );
}
