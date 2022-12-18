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
                    <Col sm={8}>
                    <p>
                    Unsere Leidenschaft ist es, unsere Kunden bestmöglich zu unterstützen und dabei ständig zu wachsen, zu lernen und zu innovieren. Mit unserer branchenübergreifenden Kompetenz bieten wir unseren Kunden eine zuverlässigere Lieferkette und Vertrauen in die Langlebigkeit ihrer Programme.
                    </p>
                    <p>
                    Wir bringen Win-Win-Überlebensstrategien an den Tisch, um eine proaktive Vorherrschaft zu gewährleisten. Am Ende des Tages ist eine neue Normalität, die sich aus der Generation X entwickelt hat, auf dem Weg zu einer rationalisierten Cloud-Lösung. Nutzergenerierte Inhalte in Echtzeit werden mehrere Berührungspunkte für das Offshoring haben.
                    </p>
                    </Col>
                </Row>
                <hr />
            </Container>
        </section>
    )
}

export default About;