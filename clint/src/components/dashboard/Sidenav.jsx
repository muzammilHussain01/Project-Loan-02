import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Loan from "./Loan";
import Admin from "./Admin";
import Employee from "./Employee";
import Calculater from "./Calculater";
import Analysis from "./Analysis";
import Queries from "./Queries";
import { Navbar, Container, Nav, Button, Form, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
const Dashboard = () => {
  const [selectedSection, setSelectedSection] = useState("loans");
  const [userAccess, setUserAccess] = useState(null);

  useEffect(() => {
    // Retrieve user access from cookie
    const access = Cookies.get("userAccess");
    setUserAccess(access ? parseInt(access, 10) : null);
  }, []);

  return (
    <div className="dashboard ">
      {/* Navbar with vertical alignment */}
      <Navbar
        expand="lg"
        bg="light"
        className="flex-column sidenav"
        // style={{ zIndex: 1 }}
      >
        <Container fluid>
          {/* Collapse icon at the top */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 flex-column" navbarScroll>
              <Nav.Link
                href="#loans"
                onClick={() => setSelectedSection("loans")}
                className=" mt-5 sidenav"
              >
                Applied Loans
              </Nav.Link>
              <Nav.Link
                href="#admin"
                onClick={() => setSelectedSection("admin")}
                className="mt-2 sidenav"
              >
                Admin
              </Nav.Link>
              <Nav.Link
                href="#workers"
                onClick={() => setSelectedSection("employees")}
                className="mt-2 sidenav"
              >
                Employee
              </Nav.Link>
              <Nav.Link
                href="#calculator"
                onClick={() => setSelectedSection("calculator")}
                className="mt-2 sidenav"
              >
                Calculator
              </Nav.Link>
              <Nav.Link
                href="#analysis"
                onClick={() => setSelectedSection("analysis")}
                className="mt-2 sidenav"
              >
                Analysis
              </Nav.Link>
              <Nav.Link
                href="#queries"
                onClick={() => setSelectedSection("queries")}
                className="mt-2 sidenav"
              >
                Queries
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div className="container mt-4">
        {selectedSection === "loans" && <Loan />}
        {selectedSection === "admin" && userAccess === 0 ? (
          <Alert
            variant="danger"
            className="text-center animate__animated animate__fadeIn animate__delay-1s"
          >
            <h1 className="display-4 animate__animated animate__pulse animate__infinite animate__slow">
              <i className="bi bi-exclamation-triangle-fill"></i> Access Denied
            </h1>
            <p className="lead animate__animated animate__fadeInUp animate__delay-2s">
              You are not authorized to view this section.
            </p>
            <div className="animate__animated animate__shakeX animate__delay-3s">
              <i
                className="bi bi-shield-lock-fill"
                style={{ fontSize: "2rem" }}
              ></i>
            </div>
          </Alert>
        ) : (
          selectedSection === "admin" && userAccess === 1 && <Admin />
        )}
        {selectedSection === "employees" && <Employee />}
        {selectedSection === "calculator" && <Calculater />}
        {selectedSection === "analysis" && <Analysis />}
        {selectedSection === "queries" && <Queries />}
      </div>
    </div>
  );
};

export default Dashboard;
