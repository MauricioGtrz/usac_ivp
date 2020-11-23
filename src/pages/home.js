import "../App.css";
import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import ucla from "../images/ucla-royce-hall@-x.png";

function App() {
  return (
    <div className="App">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src={ucla}
            alt="First slide"
          />
          <Carousel.Caption style={{ "min-height": "50%" }}>
            <h3>Welcome to the</h3>
            <h1 className="display-2">USAC IVP OFFICE</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container className="container-fluid pt-5">
        <Row className="welcome text-center">
          <Col md={12}>
            <h1 className="display-4">Welcome to...</h1>
            <hr></hr>
          </Col>
          <Col md={10} xs={12} className="mx-auto">
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac
              velit convallis, congue purus quis, consequat arcu. Nunc
              consectetur consectetur maximus. Vestibulum mattis erat euismod
              turpis hendrerit, ut convallis lacus venenatis. Aenean sodales id
              nibh eget faucibus. Curabitur dignissim quis justo eu ornare.
              Vestibulum euismod eros velit, ac rhoncus lorem posuere non.
              Aliquam sollicitudin eget purus vel faucibus.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

// style={{
//     "min-height": "100%",
//     "min-height": "100vh",
//     display: "flex",
//     "align-items": "center",
//   }}
