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
import Facebook from "../facebook.png";
import Reddit from "../reddit.png";
import Instagram from "../instagram.png";
import Logo from "../logo.png";

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
                <img src={Facebook} height="60" width="60" href=""></img>
              </Col>
              <Col>
                <img src={Instagram} height="60" width="60" href=""></img>
              </Col>
              <Col>
                <img src={Reddit} height="60" width="60" href=""></img>
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
