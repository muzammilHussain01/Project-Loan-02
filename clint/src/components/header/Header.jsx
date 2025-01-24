import React from "react";
import { NavLink } from "react-router-dom"; // For React Router navigation
import Container from "react-bootstrap/Container"; // Bootstrap Container
import Navbar from "react-bootstrap/Navbar"; // Bootstrap Navbar
import Nav from "react-bootstrap/Nav"; // Bootstrap Nav
import logo from "../img/logo.png"; // Logo image source
import "./Header.css";
import SignupForm from "./SignupForm";
import Cookies from "js-cookie"; // Import the js-cookie library
function Header() {
  const cookie = Cookies.get("jwt_token");
  return (
    <>
      <Navbar
        expand="lg"
        className=" navBackgroundColor"
        style={{ position: "fixed", top: 0, zIndex: 1, width: "100%" }}
      >
        <Container fluid>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="fs-1 fw-bold text-white "
          >
            {" "}
            {/* Align Brand to the right */}
            <img
              src={logo}
              alt="Company Logo"
              className="img-fluid"
              style={{
                width: "70px",
                boxShadow: "0px 0px 20px white", // Retaining original box shadow
              }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {" "}
            {/* Collapsible navbar */}
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              {" "}
              {/* Align Nav to the right */}
              <NavLink to="/" className="nav-link fw-medium headerElement">
                <span>Home</span>
              </NavLink>
              {
                <NavLink
                  to="/dashboard"
                  className="nav-link fw-medium headerElement"
                >
                  <span>Dashboard</span>
                </NavLink>
              }
              <NavLink
                to="/about-me"
                className="nav-link fw-medium headerElement"
              >
                <span>About us</span>
              </NavLink>
              <NavLink
                to="/ourservices"
                className="nav-link fw-medium headerElement"
              >
                <span>Our services</span>
              </NavLink>
              <NavLink
                to="/connect-us"
                className="nav-link fw-medium headerElement"
              >
                <span>Contact us</span>
              </NavLink>
            </Nav>
            <SignupForm />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
