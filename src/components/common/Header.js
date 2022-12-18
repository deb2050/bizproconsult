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
                <img src={logo} width="210" height="50" alt="Bizproconsult" />
            </Col>
            <Col sm={10}>
            <Nav className="justify-content-end" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">About Us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Our Services</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Our Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Testimonials</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Contact Us</Nav.Link>
                </Nav.Item>
            </Nav>
            </Col>
        </Row>
        </Container>
    </header>
  );
};

export default Header;
