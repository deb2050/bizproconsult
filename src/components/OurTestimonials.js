import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './OurTestimonials.css';

const clientTestimonial = 'Roland kennt sich wirklich aus. Er hat unserem Unternehmen geholfen, fünfmal mehr Leads für weniger Geld zu generieren, als wir vorher ausgegeben haben. Er ist zuverlässig, professionell und es macht wirklich Spaß, mit ihm zu arbeiten.';
const clientTestimonial2 = 'Zuerst war ich skeptisch, aber als ich mich darauf einließ, wurde mir klar, dass ich auf eine Goldmine praktischer Informationen gestoßen war.';

const OurTestimonials = () => {
    return (
        <section>
            <Container fluid>
                <div id="testimonials" className="mt-10 mb-20">
                    <div className="testimonial">
                        <Col><h3>Unsere Referenzen</h3></Col>
                        <Row>
                        <Col sm={6} className="two">
                            {clientTestimonial}
                        </Col>
                        <Col sm={6} className="two">
                            {clientTestimonial2}
                        </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default OurTestimonials;
