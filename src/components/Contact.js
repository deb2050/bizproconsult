import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationMap from '../components/Map';

import './Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <Container>
            <h2>Kontakt</h2>
                <Row>
                    <Col sm={8}>
                        <div>
                            <LocationMap />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <h4>Ansprechpartner - Roland Wittphal</h4>
                        <h6>Rosenheimer Platz 112b,<br />81669, Munich</h6>
                        <h6>089 6090290</h6>
                        <h6>
                            <a href="mailto:info@bizproconsult.de?subject=Allgemeine%20Fragen">Kontaktieren Sie uns per E-Mail</a>
                        </h6>
                    </Col>
                </Row>
                <br />
            </Container>
        </section>
    )
}

export default Contact;
