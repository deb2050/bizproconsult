import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from "../../images/logo.jpg";

import "./Header.css";

const Header = () => {
  return (
    <header>
        <Container fluid>
        <Row>
            <Col sm={2}>
                <a href="/">
                    <img src={logo} width="210" height="50" alt="Bizproconsult" />
                </a>
            </Col>
            <Col sm={10}>
            <Nav className="justify-content-end">
                <Nav.Item>
                    <Nav.Link href="/">Startseite</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#about">Über uns</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#our-services">Unsere Dienstleistungen</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#ourteam">Unser Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#testimonials">Referenzen</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="#contact">Kontakt</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
        </Row>
        </Container>
    </header>
  );
};

export default Header;
