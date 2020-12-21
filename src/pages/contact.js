import React from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";

const contact = () => {
  return (
    <div>
      <Container style={{ "margin-top": "5%", "margin-bottom": "5%" }}>
        <Form action="https://formsubmit.co/samyallal2@gmail.com" method="POST">
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control placeholder="Joe Bruin" name="name"/>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="joebruin@email.com" name="email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="subject" placeholder="Subject" name="subject"/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} name="message" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default contact;