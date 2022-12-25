import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css';

const Footer = (props) => {
    return (
    <footer>
        <Container>
            <Row>
                <Col sm={4}>
                    <h3>Unsere Dienstleistungen</h3>
                    <ul className="footer-services">
                        {
                            props.servicesData.map(service => {
                                return (
                                        <li key={service.id}>
                                            {service.heading}
                                        </li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col sm={4}>
                    <h3>Kontakt</h3>
                        <h6>Ansprechpartnerin - Sandra Heitmeier</h6>
                        <h6>Rosenheimer Platz 112b,<br />81669, Munich</h6>
                        <h6>089 6090290</h6>
                        <h6>info@bizproconsult</h6>
                </Col>
                <Col sm={4}>
                    <h3>Über uns</h3>
                    <p key={props.aboutTexts.id}>
                        {props.aboutTexts.text}
                    </p>
                </Col>
            </Row>
            <Row>
                <Col sm={12} className="text-center">
                    &copy; Copyright 2023.
                </Col>
            </Row>
        </Container>
    </footer>
    )
}

export default Footer;
