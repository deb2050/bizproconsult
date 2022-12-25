import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './OurTeam.css';

const OurTeam = ({teamDetails}) => {
    return (
        <section id="ourteam">
            <Container>
            <h2>Unser Team kennenlernen</h2>
                <Row>
                    {
                        teamDetails.map(member => {
                            return (
                                <Col sm={3} key={member.id}>
                                    <img src={member.image} width="300" height="300" alt={member.teamMember} className='border-img' />
                                    <h3>{member.teamMember}</h3>
                                    <p>
                                        {member.portfolio}
                                    </p>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}

export default OurTeam;