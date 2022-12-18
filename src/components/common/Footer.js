import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css';

const Footer = () => {
    return (
    <footer>
        <Container>
            <Row>
                <Col sm={4}>
                    <h3>Our Services</h3>
                </Col>
                <Col sm={4}>
                    <h3>Contact Us</h3>
                </Col>
                <Col sm={4}>
                    <h3>About Us</h3>
                </Col>
            </Row>
        </Container>
    </footer>
    )
}

export default Footer;
