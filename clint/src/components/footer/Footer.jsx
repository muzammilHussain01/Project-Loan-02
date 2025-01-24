import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="pt-5 bg-dark text-white">
      <Container>
        {/* Contact Information */}
        <Row className="mb-4">
          <Col>
            <Row className="mb-2">
              <Col xs="auto">
                <FmdGoodIcon className="me-2" />
              </Col>
              <Col>
                Jagdamba Complex, 10th Floor, Link Road Landmark - Movietime
                Building, Malad West, Mumbai, Maharashtra 400064
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs="auto">
                <LocalPhoneIcon className="me-2" />
              </Col>
              <Col>xxx--02249681409</Col>
            </Row>
            <Row>
              <Col xs="auto">
                <MailIcon className="me-2" />
              </Col>
              <Col>
                <a
                  href="mailto:contactus@rupeezo.in"
                  className="text-white text-decoration-none"
                >
                  contactus@rupeezo.in
                </a>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Quick Links */}
        <Row>
          <Col md={4}>
            <h5 className="fw-bold fs-5">Quick Links</h5>
            <Row>
              <Col className="fw-medium fontSize">
                <Link to="/" className="text-white text-decoration-none">
                  Home
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/about-me"
                  className="text-white text-decoration-none"
                >
                  About Us
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/ourservices"
                  className="text-white text-decoration-none"
                >
                  Our Services
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/connect-us"
                  className="text-white text-decoration-none"
                >
                  Contact Us
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/privacy-policy"
                  className="text-white text-decoration-none"
                >
                  Privacy Policy
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/term-condetion"
                  className="text-white text-decoration-none"
                >
                  Terms & Conditions
                </Link>
              </Col>
            </Row>
          </Col>

          {/* Loan Online */}
          <Col md={4}>
            <h5 className="fw-bold fs-5">Loan Online</h5>
            <Row>
              <Col className="fw-medium fontSize">
                <Link to="/p-loan" className="text-white text-decoration-none">
                  Personal Loan
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/business-loan"
                  className="text-white text-decoration-none"
                >
                  Business Loan
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/vehicle-loan"
                  className="text-white text-decoration-none"
                >
                  Vehicle Loan
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/medical-loan"
                  className="text-white text-decoration-none"
                >
                  Medical Loan
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/wedding-loan"
                  className="text-white text-decoration-none"
                >
                  Wedding Loan
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/education-loan"
                  className="text-white text-decoration-none"
                >
                  Education Loan
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/travel-loan"
                  className="text-white text-decoration-none"
                >
                  Travel Loan
                </Link>
              </Col>
            </Row>
          </Col>

          {/* Instant Loan */}
          <Col md={4}>
            <h5 className="fw-bold fs-5">Instant Loan</h5>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/instant-loan"
                  className="text-white text-decoration-none"
                >
                  Instant Loan
                </Link>
              </Col>
            </Row>
            <Row>
              <Col className="fw-medium fontSize">
                <Link
                  to="/business-loan"
                  className="text-white text-decoration-none"
                >
                  Business Loan
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-4">
          <Col md={8} className=" text-primary" style={{ fontSize: "small" }}>
            Copyright © May,2024 All rights reserved
          </Col>
          <Col>
            <h5>
              POWRED BY ABCD<span style={{ color: "skyblue" }}>EFGH</span>
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
