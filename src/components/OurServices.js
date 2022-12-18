import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

import './OurServices.css';
import about from '../images/about.jpg';

const serviceMainText = 'Mit unserem Ansatz, niedrig hängende Früchte zu nutzen, um eine ungefähre Aktivität mit Mehrwert für einen Betatest zu identifizieren, können wir die Arbeit immer erledigen. Überwinden Sie die digitale Kluft mit zusätzlichen Klickzahlen.';


const OurServices = (props) => {
    return (
        <section>
            <Container>
            <h2>Our Services</h2>
                <Row>
                    <Col sm={12}>
                        <p>
                            {serviceMainText}
                        </p>
                    </Col>
                    {
                        props.servicesData.map((service) => {
                            return (
                                <Col sm={4} key={service.id}>
                                <Figure>
                                <Figure.Image
                                    width={416}
                                    height={278}
                                    alt={service.heading}
                                    src={about} // @todo update img src
                                />
                                <Figure.Caption>                        
                                    <h3>{service.heading}</h3>
                                </Figure.Caption>
                                </Figure>
                                    <p>
                                        {service.serviceText}
                                    </p>
                                </Col>
                            )
                        })
                    }
                </Row>
                <hr />
            </Container>
        </section>
    )
}

export default OurServices;