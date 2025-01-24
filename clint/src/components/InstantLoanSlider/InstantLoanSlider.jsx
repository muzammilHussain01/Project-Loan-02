import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-slick"; // Assuming you're using React Slick for the slider
import "./InstantLoanSlider.css";
import Card from "react-bootstrap/Card";
import "slick-carousel/slick/slick.css"; // Import the Slick carousel CSS
import "slick-carousel/slick/slick-theme.css";

const InstantLoanSlider = () => {
  // Slider settings for React Slick
  const sliderSettings = {
    infinite: true, // Infinite loop
    speed: 500, // Animation speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    centerMode: true, // Center the current slide
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 1000, // Time between slide transitions (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Carousel {...sliderSettings}>
              <Col>
                <Card className="cardWidth">
                  <Card.Body>
                    <Card.Title>Instant Car Loan</Card.Title>
                    <Card.Text>
                      An instant car loan is a fast approval loan designed for
                      purchasing a car. The application process is quick, with
                      minimal paperwork, allowing you to get the funds you need
                      without lengthy delays. With an instant car loan, the
                      processing time is shorter, so you can complete the
                      purchase and receive your car sooner.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="cardWidth">
                  <Card.Body>
                    <Card.Title>Instant wedding loan</Card.Title>
                    <Card.Text>
                      An instant wedding loan is applied for marriage. The
                      process requires minimal documentation, and the fund is
                      available for use within a very short span after its
                      approval.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card className="cardWidth">
                  <Card.Body>
                    <Card.Title>Instant medical loan</Card.Title>
                    <Card.Text>
                      An Instant medical loan is a quick loan available for any
                      medical emergency. It requires little documentation and is
                      completely paperless.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                {" "}
                <Card className="cardWidth">
                  <Card.Body>
                    <Card.Title>Instant education loan</Card.Title>
                    <Card.Text>
                      An instant education loan is a quick loan to pay education
                      fees.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InstantLoanSlider;
