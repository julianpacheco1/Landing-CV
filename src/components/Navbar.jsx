import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid="sm">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
