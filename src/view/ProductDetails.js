import React from 'react';
import { Col, Container, Row, Image, Form, Button } from 'react-bootstrap';

export default function ProductDetails() {
  return (
    <>
    <section className='product-page'>
       <Container>
          <div className='product-page-pg-title'>
             <i className="fas fa-home"></i><span>Details</span>
          </div>
       </Container>
    </section>
    <section className='product-page-sub'>
       <Container>
          <div className='pro-discription'>
             <h3>Details</h3>
             <p>Check out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
          </div>
       </Container>
    </section>
    <section className='details-page-padding'>
       <Container>
          <Row>
             <Col sm={8}>
             <Row>
                <Col sm={4}>
                <div className='pro-det-img'>
                   <Image  src={require('../assets/images/productone.jpg')}/>
                </div>
                </Col>
                <Col sm={8}>
                <div>
                   <h3>Water Vending Machine</h3>
                   <div className='descriptions-details'>
                      <p>The upflow anaerobic sludge blanket reactor (UASB) is a single tank process in an anaerobic centralised or decentralised industrial wastewater or blackwater treatment system achieving high removal of organic pollutants. Wastewater enters the reactor from the bottom, and flows upward. A suspended sludge blanket filters and treats the wastewater as the wastewater flows through it. Bacteria living in the sludge break down organic matter by anaerobic digestion, transforming it into biogas. Solids are also retained by a filtration effect of the blanket. The upflow regime and the motion of the gas bubbles allow mixing without mechanical assistance. Baffles at the top of the reactor allow gases to escape and prevent an outflow of the sludge blanket. As all aerobic treatments, UASB require a post-treatment to remove pathogens, 
                         but due to a low removal of nutrients, the effluent water as well as the stabilised sludge can be used in agriculture
                      </p>
                   </div>
                </div>
                </Col>
                <div>
                   <h4 className="details-title">Advantages</h4>
                   <ul className='groupul'>
                      <li><i className="fa fa-arrow-circle-right" id="background"></i>High reduction of BOD &amp; COD</li>
                      <li><i className="fa fa-arrow-circle-right" id="background"></i>	Can withstand high organic and hydraulic loading rates</li>
                      <li><i className="fa fa-arrow-circle-right" id="background"></i>	Low sludge production (and, thus, infrequent desludging required)</li>
                      <li><i className="fa fa-arrow-circle-right" id="background"></i>	Biogas can be used for energy (but usually first requires scrubbing)</li>
                      <li><i className="fa fa-arrow-circle-right" id="background"></i>	No aeration system required (thus little energy consumption)</li>
                      <li><i className="fa fa-arrow-circle-right" id="background"></i>	Effluent is rich in nutrients and can be used for agricultural irrigation</li>
                      <li><i className="fa fa-arrow-circle-right" id="background"></i>	Low land demand, can be constructed underground and with locally available material</li>
                      <li><i className="fa fa-arrow-circle-right" id="background"> </i>	Reduction of CH4 and CO2 emissions</li>
                   </ul>
                </div>
                
                <h4 className="details-title">Details</h4>
                                <table className="table table-striped details-des">
                                    <tbody>
                                        <tr>
                                            <th>Brand</th>
                                            <td><p>Envato</p></td>
                                        </tr>
                                        <tr>
                                            <th>RO plant Capacity </th>
                                            <td><p>250/500 LPH</p></td>
                                        </tr>
                                        <tr>
                                            <th>Size</th>
                                            <td><p>Customised</p></td>
                                        </tr>
                                        <tr>
                                            <th>Chiller</th>
                                            <td><p>160/250/380 LPH</p></td>
                                        </tr>
                                        <tr>
                                            <th>Dimensions</th>
                                            <td><p>16 x 22 x 123 cm</p></td>
                                        </tr>
                                        <tr>
                                            <th>MOC of cabinet</th>
                                            <td><p>SS/MS power coated and<br /> front wet panel Stainless</p></td>
                                        </tr>
                                        <tr>
                                            <th>Model</th>
                                            <td><p>Complete compact closed.</p></td>
                                        </tr>
                                        <tr>
                                            <th>Water vending</th>
                                            <td><p>Complete Automatic vending <br />system- 4 Nos. - RFID/Coin operated.</p></td>
                                        </tr>
                                        <tr>
                                            <th>Storage</th>
                                            <td><p>500 Ltrs</p></td>
                                        </tr>
                                        </tbody>
                                </table>

             </Row>
             </Col>














             <Col sm={4}>
             <Form className='details-form-shedo'>
                <h4 className="det-title">Product Enquiry</h4>
                <Form.Group className="mb-3">
                   <Form.Control type="text" className='input-feild-height' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                   <Form.Control type="text" className='input-feild-height' placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                   <Form.Control type="text" className='input-feild-height' placeholder="Enter Company Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                   <Form.Control type="text" className='input-feild-height' placeholder="Enter Phone" />
                </Form.Group>
                <Form.Group className="mb-3"  >
                   <textarea className="form-control" id="" rows="3" placeholder="Enter Message"></textarea>
                </Form.Group>
                <Button variant="primary" type="submit" className='btn-theme-colored'>Send your message</Button>
             </Form>
             </Col>
          </Row>
       </Container>
    </section>
    </>
  );
}
