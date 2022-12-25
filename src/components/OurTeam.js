import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './OurTeam.css';

import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import team4 from '../images/team4.jpg';
import team5 from '../images/team5.jpg';

const OurTeam = () => {
    return (
        <section id="ourteam">
            <Container>
            <h2>Unser Team kennenlernen</h2>
                <Row>
                    <Col sm={3}>
                        <img src={team5} width="300" height="300" alt="Roland Wittphal" className='border-img' />
                        <h3>Roland Wittphal</h3>
                        <p>
                            Roland ist der Inhaber von Bizproconsult und hat über 15 Jahre Erfahrung in Strategie-Beratung, Organisationsstruktur und in Business Strategie
                        </p>
                    </Col>
                    <Col sm={3}>
                        <img src={team2} width="300" height="300" alt="Jenice Koer" className='border-img' />
                        <h3>Jenice Koer</h3>
                        <p>
                            Jenice Koer hat über 5 Jahre Erfahrung in der HR-Beratung.
                        </p>
                    </Col>
                    <Col sm={3}>
                        <img src={team3} width="300" height="300" alt="Christina Malchow" className='border-img' />
                        <h3>Christina Malchow</h3>
                        <p>
                            Christina Koer hat über 7 Jahre Erfahrung in der Finanzberatung.
                        </p>
                    </Col>
                    <Col sm={3}>
                        <img src={team4} width="300" height="300" alt="Tobias Strumm" className='border-img' />
                        <h3>Tobias Strumm</h3>
                        <p>
                            Tobias hat über 3 Jahre Erfahrung in der Organisationsstruktur.
                        </p>
                    </Col>
                    <Col sm={3}>
                        <img src={team1} width="300" height="300" alt="Sandra Heitmeier" className='border-img' />
                        <h3>Sandra Heitmeier</h3>
                        <p>
                            Tobias hat über 3 Jahre Erfahrung in der Organisationsstruktur.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default OurTeam;