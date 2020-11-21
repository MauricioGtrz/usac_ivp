import React from "react";

import { Navbar } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Button } from "react-bootstrap";

import logo from "../logo.png";

const header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="70"
          height="70"
          className="d-inline-block align-top"
          style={{ float: "left" }}
        />{" "}
        <h1 className="pt-3" style={{ "padding-left": "80px" }}>
          USAC IVP
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Button size="lg" variant="outline-light" href="/">
          Home
        </Button>
        <Button
          size="lg"
          variant="outline-light"
          className="ml-3"
          href="/about"
        >
          About
        </Button>
        <DropdownButton
          size="lg"
          variant="outline-light"
          id="dropdown-basic-button"
          title="Dropdown"
          className="pl-3"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default header;
