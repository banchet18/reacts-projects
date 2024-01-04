import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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

          <Badge
            badgeContent={4}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              class="fa-solid fa-cart-shopping"
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <div>
            <i></i>
            <p></p>
            <img src="./" alt="" />
          </div>
        </Menu>
      </Navbar>
    </>
  );
};
export default Header;
