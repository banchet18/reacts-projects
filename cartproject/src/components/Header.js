import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" style={{ height: "60px" }}>
        <Container>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none mx-3">
              Add to Cart
            </NavLink>
            <NavLink to="/" className="text-decoration-none">
              Home
            </NavLink>
          </Nav>

          <Badge badgeContent={4} color="primary">
            <i
              class="fa-solid fa-cart-shopping"
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
