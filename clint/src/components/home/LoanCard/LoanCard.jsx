import React from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import carLoanCardImg from "../../img/carLoanCardImg.png";
import travelLoanCardImg from "../../img/travelLoanCardImg.png";
import businessLoanCardImg from "../../img/businessLoanCardImg.png";
import educationLoanCardImg from "../../img/educationLoanCardImg.png";
import personalLoanCardImg from "../../img/personalLoanCardImg.png";
import medicalLoanCardImg from "../../img/medicalLoanCardImg.png";
import weddingloan from "../../img/weddingloan.png";
import Card from "react-bootstrap/Card";
const LoanCard = () => {
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
                  <Col className="mb-3">
                    <Link to={cardImg.to} style={{ textDecoration: "none" }}>
                      <Card
                        className="cardHover"
                        style={{
                          background:
                            "linear-gradient(rgba(50, 50, 50, 0.3), rgba(50, 50, 50, 0.3))",
                          width: "100px",
                          height: "100px",
                        }}
                      >
                        <Card.Title
                          className="text-center pt-2 text-black"
                          style={{ fontSize: "small" }}
                        >
                          {cardImg.title}
                        </Card.Title>
                        <Card.Img
                          variant="top"
                          src={cardImg.img}
                          alt={cardImg.img}
                        />
                      </Card>
                    </Link>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LoanCard;
