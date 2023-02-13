import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import "../assets/navbar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container fluid="sm">
          <Navbar.Brand className="btn-home" href="home">
            Home
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
