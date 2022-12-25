import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import about from '../images/about.jpg';

import './About.css';

const About = (props) => {
    return (
        <section id="about" className="mt-20">
            <Container>
                <h2>Wissen über uns</h2>
                <Row>
                    <Col sm={4}>
                        <img src={about} alt="About Us" width="416" height="278" className="border-img" />
                    </Col>
                    <Col sm={8}>
                        {
                            props.aboutTexts.map((text, index) => {
                                return (
                                    <p key={index}>
                                        {text.text}
                                    </p>
                                )
                            })
                        }
                    </Col>
                </Row>
                <hr />
            </Container>
        </section>
    )
}

export default About;