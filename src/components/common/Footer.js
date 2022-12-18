import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Footer.css';

const Footer = () => {
    return (
    <section>
        <Container>
            <Row>
                <Col sm={12}>footer</Col>
            </Row>
            <hr />
        </Container>
    </section>
    )
}

export default Footer;
