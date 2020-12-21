import React from "react";

import {
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
  Container,
  Col,
  Row,
} from "react-bootstrap";

import Facebook from "../images/facebook.png";
import Reddit from "../images/reddit.png";
import Instagram from "../images/instagram.png";
import Logo from "../images/logo.png";

const footer = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ height: "450px" }}
      className="sticky-bottom"
    >
      <Container className="container-fluid">
        <Row className="mx-auto">
          <Col xs="12" className="text-center">
            <Row className="mx-auto pb-5">
              <Col>
                <img src={Logo} height="200" width="200"></img>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href="https://www.facebook.com/USACIVP" target="_blank">
                  <img src={Facebook} height="60" width="60" href=""></img>
                </a>
              </Col>
              <Col>
                <a href="https://www.instagram.com/usacivp/?hl=en" target="_blank">
                  <img src={Instagram} height="60" width="60" href=""></img>
                </a>
              </Col>
              <Col>
                <a href="https://www.reddit.com/user/usac-ivp-office/" target="_blank">
                  <img src={Reddit} height="60" width="60" href=""></img>
                </a>
              </Col>
            </Row>
            <Row>
              <Col className="pt-5 text-light">
                © 2020 USAC IVP, University of California, Los Angeles
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default footer;