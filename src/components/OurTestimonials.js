import React from "react";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import './OurTestimonials.css';

const clientTestimonial = 'Roland kennt sich wirklich aus. Er hat unserem Unternehmen geholfen, fünfmal mehr Leads für weniger Geld zu generieren, als wir vorher ausgegeben haben. Er ist zuverlässig, professionell und es macht wirklich Spaß, mit ihm zu arbeiten.';

const OurTestimonials = () => {
    return (
        <section id="testimonials">
            <Container fluid>
                <div id="testimonials" className="mt-10 mb-20">
                    <div className="testimonial">
                        <Col><h3>Our Testimonials</h3></Col>
                        <Col className="two">
                            {clientTestimonial}
                        </Col>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default OurTestimonials;
