import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';

import './OurServices.css';
import about from '../images/about.jpg';

const servicesData = [
    {
        id: '1',
        heading: 'Finanzberatung',
        serviceText: 'Unsere Dienstleistungen sind darauf ausgerichtet, Sie über alle Aspekte und Auswirkungen einer Transaktion zu informieren, Sie von administrativem Aufwand zu befreien und Ihnen zum richtigen Zeitpunkt den richtigen Rat zu geben'
    },
    {
        id: '2',
        heading: 'Strategie-Beratung',
        serviceText: 'Nahtlose Visualisierung von hochwertigem intellektuellem Kapital ohne überragende Zusammenarbeit und auf Ideenaustausch ausgerichtete Konvergenz.'
    },
    {
        id: '3',
        heading: 'HR-Beratung',
        serviceText: 'Dynamische Innovation des ressourcenbasierten Kundendienstes für eine plattformübergreifende Integration des Kundendienstes auf dem neuesten Stand der Technik.'
    },
    {
        id: '4',
        heading: 'Organisationsstruktur',
        serviceText: 'Nahtlose Ermöglichung vollständig erforschter Wachstumsstrategien und interoperabler interner oder organischer, ressourcenorientierter Kundendienste.'
    },
    {
        id: '5',
        heading: 'Strategie',
        serviceText: 'Das strategische Management umfasst die Formulierung von Strategien und Zielen für das gesamte Unternehmen und die einzelnen Geschäftsbereiche.'
    },
]

const OurServices = () => {
    return (
        <section>
            <Container>
            <h2>Our Services</h2>
                <Row>
                    <Col sm={12}>
                        <p>
                        Mit unserem Ansatz, niedrig hängende Früchte zu nutzen, um eine ungefähre Aktivität mit Mehrwert für einen Betatest zu identifizieren, können wir die Arbeit immer erledigen. Überwinden Sie die digitale Kluft mit zusätzlichen Klickzahlen.
                        </p>
                    </Col>
                    {
                        servicesData.map((service) => {
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