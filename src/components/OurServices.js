import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './OurServices.css';

const serviceMainText = 'Mit unserem Ansatz, niedrig hängende Früchte zu nutzen, um eine ungefähre Aktivität mit Mehrwert für einen Betatest zu identifizieren, können wir die Arbeit immer erledigen. Überwinden Sie die digitale Kluft mit zusätzlichen Klickzahlen.';

const OurServices = (props) => {
    return (
        <section id="our-services">
            <Container>
            <h2>Unsere Dienstleistungen</h2>
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
                                    <i className={service.icon}></i>
                                    <h3>{service.heading}</h3>
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