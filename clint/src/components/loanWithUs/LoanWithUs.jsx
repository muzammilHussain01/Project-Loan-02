import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loanTypes from "../img/loanTypes.png";

import "./LoanWithUs.css"; // Ensure correct CSS import

import Footer from "../footer/Footer";
import Card from "react-bootstrap/Card";
import carLoanCardImg from "../img/carLoanCardImg.png";
import travelLoanCardImg from "../img/travelLoanCardImg.png";
import businessLoanCardImg from "../img/businessLoanCardImg.png";
import educationLoanCardImg from "../img/educationLoanCardImg.png";
import personalLoanCardImg from "../img/personalLoanCardImg.png";
import medicalLoanCardImg from "../img/medicalLoanCardImg.png";
import weddingloan from "../img/weddingloan.png";
import { Link } from "react-router-dom";
const LoanWithUs = () => {
  const allCardImg = [
    {
      img: carLoanCardImg,
      title: "Vehical Loan",
      to: "/vehicle-loan",
    },
    {
      img: weddingloan,
      title: "Wedding Loan",
      to: "/wedding-loan",
    },
    {
      img: travelLoanCardImg,
      title: "Travel Loan",
      to: "/travel-loan",
    },
    {
      img: businessLoanCardImg,
      title: "Business Loan",
      to: "/business-loan",
    },
    {
      img: educationLoanCardImg,
      title: "Education Loan",
      to: "/educationloan",
    },
    {
      img: personalLoanCardImg,
      title: "Personal Loan",
      to: "/p-loan",
    },
    {
      img: medicalLoanCardImg,
      title: "Medical Loan",
      to: "/medical-loan",
    },
  ];

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${loanTypes})`, // Background image
          backgroundSize: "cover", // Ensure the image spans the full width
          backgroundRepeat: "no-repeat", // Prevent repeating
          backgroundPosition: "center", // Center the image
          width: "100%", // Full width
          padding: 0, // Reset padding
          margin: 0, // Reset margin
          height: "70vh",
          marginTop: "50px",
        }}
      >
        <Container>
          <Row className="pt-5">
            <Col className=" pt-5">
              <h4 className="fw-bold pt-5">
                YOUR BEST FINANCIAL FRIEND
                <section className="text-warning fs-1">
                  TODAY TOMORROW ALWAYS
                </section>
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col className="text-center pt-4 pb-3">
              <h3>
                Our Wide
                <span className="text-warning"> Range of Loans</span>
              </h3>
            </Col>
          </Row>
          <Row>
            {allCardImg.map((cardImg) => {
              return (
                <>
                  <Col>
                    <Link to={cardImg.to}>
                      <Card
                        className="cardHover mb-5"
                        style={{
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <Card.Title
                          className="text-center pt-2"
                          style={{
                            fontSize: "small",
                            width: "100px",
                            height: "100px",
                          }}
                        >
                          {cardImg.title}
                        </Card.Title>
                        <Card.Img
                          variant="top"
                          src={cardImg.img}
                          alt={cardImg.img}
                        />
                        <Card.Body className="text-center"></Card.Body>
                      </Card>
                    </Link>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default LoanWithUs;
