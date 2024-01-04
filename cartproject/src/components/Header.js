import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Add to Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>

          <i
            class="fa-solid fa-cart-shopping"
            style={{ frontSize: 25, cursor: "pointer" }}
          ></i>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
