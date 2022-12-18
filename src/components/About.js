import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../images/about.jpg';

import './About.css';

const About = () => {
    return (
        <section className="mt-20">
            <Container>
                <h2>Know About Us</h2>
                <Row>
                    <Col sm={4}>
                        <img src={about} alt="About Us" width="416" height="278" className="border-img" />
                    </Col>
                    <Col sm={8}>1 of 1</Col>
                </Row>
                <hr />
            </Container>
        </section>
    )
}

export default About;