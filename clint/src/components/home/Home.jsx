import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import homeBackground from "../img/homeBackground.jpeg";
import Footer from "../footer/Footer";
import "./Home.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs ";
import MoveToTop from "../moveToTop/MoveToTop";
import AccordionComponent from "./Accordion/AccordionComponent";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import ChooseUsCard from "./ChooseUsCard/ChooseUsCard";
import Content from "./Content/Content";
import LoanCard from "./LoanCard/LoanCard";
import ContactUs from "./ContactUs";
import Welcome from "./welcome/Welcome";
import ActiveMembers from "./ActiveMembers/ActiveMembers";
import SlidingStrip from "./SlidingStrip/SlidingStrip";
import RotatingCircel from "./RotatingCircel/RotatingCircel";
function Home() {
  const lines = [
    "Unlock Best Personal Loan Offers From 30+ Lenders. Register and submit documents online. Interest rates starting from 11.49%.",
  ];

  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < lines[0].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + lines[0][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 10); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lines]);

  return (
    <>
      <div>
        <Welcome />
        <ContactUs style={{ zIndex: "1", backgroundColor: "red" }} />
        <div
          style={{
            position: "relative",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url(${homeBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            marginTop: "50px",
          }}
        >
          <Breadcrumbs />
          <Container className="p-5">
            <Row>
              <Col className="text-warning fs-1 fw-5">
                <RotatingCircel /> Your Dream Our RESPONSIBILITY
              </Col>
            </Row>
            <Row className="pt-1">
              <Col lg={6} md={6} sm={6}>
                <h4 className="text-white">{text}</h4>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col lg={3}>
                <Link to="/loanWithUs">
                  <Button
                    variant="outlined-warning"
                    className="text-white fs-medium loanWithUsBtn"
                  >
                    Loan with Us
                  </Button>
                </Link>
              </Col>
              <Col lg={3}>
                <Link to="/ourservices">
                  <Button
                    variant="outlined"
                    className=" text-white fs-medium ourServicesBtn"
                  >
                    Our Services
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>

        <SlidingStrip />
        <LoanCard />
        <MoveToTop />
        <Content />
        <ChooseUsCard />
        <WhyChooseUs />
        <AccordionComponent />
        <ActiveMembers />
        <Footer />
      </div>
    </>
  );
}

export default Home;
