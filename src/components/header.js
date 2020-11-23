import React from "react";

import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { DropdownButton } from "react-bootstrap";
import { Button } from "react-bootstrap";

import logo from "../images/logo.png";

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
        <Nav className="ml-auto">
          <Nav.Link href="/" style={{ "font-size": "1.5em" }} className="pr-3">
            Home
          </Nav.Link>
          <NavDropdown
            title="About"
            id="basic-nav-dropdown"
            style={{ "font-size": "1.5em" }}
            className="pr-2"
          >
            {" "}
            <NavDropdown.Item href="/About">The Office</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/Team">The Team</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/Events" style={{ "font-size": "1.5em" }}>
            Events
          </Nav.Link>

          <Nav.Link href="/News" style={{ "font-size": "1.5em" }}>
            Latest News
          </Nav.Link>

          <Nav.Link href="/Contact" style={{ "font-size": "1.5em" }}>
            Contact
          </Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default header;
