import React from "react";
import { Carousel, Col, Row, Container } from "react-bootstrap";

const about = () => {
  return (
    <Container className="container-fluid pt-5">
      <Row className="welcome text-center">
        <Col md={12}>
          <h1 className="display-4">What is the IVP?</h1>
          <hr></hr>
        </Col>
        <Col md={10} xs={12} className="mx-auto">
          <p className="lead">
            The​ ​Office​ ​of​ ​the​ ​Internal​ ​Vice President​ is the liaison
            of the student body and staffs at UCLA. As an office, we assist
            1000+ student groups. Our main goal is to create centralized
            platforms. We guide student signatories to book meeting rooms and
            event venues and help student leaders to apply for different
            fundings. We are currently working with dedicated undergraduate
            students to build a website and a mobile application. Also, we work
            on various projects throughout the year!
          </p>
        </Col>
      </Row>
      <Row className="welcome text-center">
        <Col md={12}>
          <h1 className="display-4">Mission Statement</h1>
          <hr></hr>
        </Col>
        <Col md={10} xs={12} className="mx-auto">
          <p className="lead">
            The​ ​Office​ ​of​ ​the​ ​Internal​ ​Vice President​ is the liaison
            of the student body and staffs at UCLA. As an office, we assist
            1000+ student groups. Our main goal is to create centralized
            platforms. We guide student signatories to book meeting rooms and
            event venues and help student leaders to apply for different
            fundings. We are currently working with dedicated undergraduate
            students to build a website and a mobile application. Also, we work
            on various projects throughout the year!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default about;
