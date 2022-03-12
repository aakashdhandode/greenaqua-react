import React from 'react';
import { Container } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
export default function Contact() {
  return (
    <>
        <section className='product-page-sub'>
          <Container>
            <div className='pro-discription'>
               <h3>Contact</h3>
               <p>sCheck out the categories below to find the right products and solutions for you. And, if you don't find what you're looking for, please contact us.</p>
            </div>
          </Container>
        </section>
    
        <ContactForm />


        <section>
            <Container>
                <div className="google-map-code pb-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2239907615544!2d78.37894036477638!3d17.44899010561843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93df022b64f1%3A0x3704109dea29aa2e!2sPatrika%20Nagar%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1641544285795!5m2!1sen!2sin" width="100%" height="350"  style={{border:0}}  aria-hidden="false"></iframe>
                </div>
            </Container>
        </section>
       


    </>
  );
}
