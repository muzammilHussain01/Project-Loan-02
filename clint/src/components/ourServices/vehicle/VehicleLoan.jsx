import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import vehicleLoan from "../../img/vehicleLoan.jpg";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../footer/Footer";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import MoveToTop from "../../moveToTop/MoveToTop";
const VehicleLoan = () => {
  return (
    <>
      <MoveToTop />
      {/* Background section */}
      <div
        style={{
          backgroundImage: `url(${vehicleLoan})`, // Background image
          backgroundSize: "cover", // Cover entire area
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // No repetition
          height: "400px", // Fixed height
          width: "100%", // Full width
          marginTop: "100px", // Top margin
          display: "flex", // Use flexbox layout
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
        }}
      >
        <Container>
          <Row className="p-5">
            {" "}
            {/* Padding for Row */}
            <Col xs={7}></Col> {/* Blank column for layout */}
            <Col xs={5} className="fw-bold fs-3 text-center text-white">
              {" "}
              {/* Content column */}
              <h3>
                <span className="fw-bold text-black">DRIVE WHAT</span>
                <br />
                <span className="text-warning">YOU DESIRE</span>
              </h3>
              <p className="text-danger">Get A Loan Instantly</p>
              <Link to="/application-form">
                <Button variant="warning" className="fw-bold text-white">
                  Apply Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Information Section */}
      <div>
        <Container style={{ borderBottom: "2px solid gray" }}>
          <Row>
            <Col className="text-center fw-bold fs-5 mb-3 mt-4">
              <h3 className="text-center ">
                Need Vehicle Finance?
                <br /> Apply Online for Instant{" "}
                <span className="text-warning">Vehicle Loan</span>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              {" "}
              <Card>
                <Card.Body>
                  <Card.Text>
                    Having a vehicle is not only a dream but it is necessary for
                    our daily life as well. Though it is a requirement, people
                    want to have it but sometimes it may not be possible due to
                    monetary issues. But to solve this issue from the core many
                    financial companies have offered vehicle loan in India.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6}>
              {" "}
              <Card>
                <Card.Body>
                  <Card.Text>
                    It is available at the commutative interest rate, flexible
                    tenure, and easy repayment. Often the interest rate on
                    vehicle loan may vary from one lender to another. Rupeezo
                    has brought the best vehicle loan online at the lowest
                    interest rate to make your dream come true.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container style={{ borderBottom: "2px solid gray" }}>
          {" "}
          {/* Section divider */}
          <Row>
            <Col className="text-center fw-bold fs-5 mb-3 mt-4">
              {" "}
              {/* Section header */}
              <h3>
                Apply for Vehicle Loan at{" "}
                <span className="text-warning">Rupeezo</span>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              {" "}
              {/* Main content */}
              <p>
                A vehicle loan provides the cash you need to purchase your dream
                vehicle. However, traditional loans can have drawbacks such as
                high-interest rates and slow processing times.
              </p>
              <p>
                At Rupeezo, we offer vehicle loans with low-interest rates and a
                streamlined application process. You can get a loan quickly and
                enjoy stress-free repayment.
              </p>
              <p>
                Before applying, make sure to read all terms and conditions. If
                you have any questions, our customer service team is here to
                help.
              </p>
              <p>
                Contact us at Rupeezo.in to get started with your vehicle loan
                and realize your dream vehicle.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* FAQs Section */}
      <div>
        <Container>
          <Row>
            {" "}
            {/* Section header */}
            <Col className="text-center fw-bold fs-5 mb-3 mt-4">
              <h3>
                FAQ<span className="text-warning">s</span>
              </h3>
            </Col>
          </Row>
          <Stack gap={3}>
            <Row>
              {" "}
              {/* First FAQ row */}
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>What is a Vehicle Loan?</Accordion.Header>
                    <Accordion.Body>
                      A vehicle loan is a type of secured loan offered by
                      financial companies to purchase vehicles.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Who can apply for a Vehicle Loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      Any working professional, either salaried or
                      self-employed, living in India can apply for a vehicle
                      loan.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            {/* Second FAQ row */}
            <Row>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      When can I opt for a Vehicle Loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      You can opt for a vehicle loan when you need a vehicle and
                      prefer not to use your savings. Rupeezo offers instant
                      disbursal.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Different types of Vehicle Loans?
                    </Accordion.Header>
                    <Accordion.Body>
                      There are two main types of vehicle loans: Four-Wheeler
                      loans and Two-Wheeler loans. You can choose based on your
                      needs.
                      <ul>
                        <li>Four-Wheeler loan</li>
                        <li>Two-Wheeler loan</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            {/* Third FAQ row */}
            <Row>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What is the interest rate on car loans and two-wheeler
                      loans?
                    </Accordion.Header>
                    <Accordion.Body>
                      Interest rates for car loans usually range between 6.65%
                      and 8.50%. Two-wheeler loans are generally between 6.85%
                      and 14.50%.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What is the eligibility for a Vehicle Loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      The eligibility criteria include:
                      <ul>
                        <li>Age: Between 18-60 years.</li>
                        <li>
                          Income: At least 3 lakhs p.a. (varies by lender).
                        </li>
                        <li>Vehicle Model: Can be any type.</li>
                        <li>Employment: Both salaried and self-employed.</li>
                        <li>Citizenship: Indian.</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            {/* Fourth FAQ row */}
            <Row>
              <Col xs={6} className="mb-5">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What is the interest rate on personal loans at Rupeezo?
                    </Accordion.Header>
                    <Accordion.Body>
                      Personal loan rates start from 11.99%, depending on your
                      credit score and loan amount.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How can I cancel my personal loan after it's disbursed?
                    </Accordion.Header>
                    <Accordion.Body>
                      Loan cancellation is possible with a fee, but if you
                      withdraw the application early, there is no fee.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Stack>
        </Container>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default VehicleLoan;
