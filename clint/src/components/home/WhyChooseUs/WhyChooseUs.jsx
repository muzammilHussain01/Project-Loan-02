import React from "react";
import { Container, Col, Row } from "react-bootstrap";
const WhyChooseUs = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col className="whyChooseUsCard  m-2  fontWait">
              <h4>10K+ Happy Customers</h4>
              <p>
                Our financial assistance and services have in return given us
                beautiful smiles of our satisfied clients.
              </p>
            </Col>
            <Col className="whyChooseUsCard m-2 fontWait">
              {" "}
              <h4>Easy & Simple Documentation</h4>
              <p>
                Hassle free paperless documentation keeping your safety in mind
                from the comfort of your home.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="whyChooseUsCard m-2 fontWait">
              <h4>20+ Years of Experience</h4>
              <p>
                We are highly experienced in what we do and under our support,
                you will certainly feel financially independent.
              </p>
            </Col>
            <Col className="whyChooseUsCard m-2 fontWait">
              {" "}
              <h4>Online Disbursal</h4>
              <p>
                Once all the documentation is done, Receive money online
                directly in your bank account.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="whyChooseUsCard m-2 fontWait">
              <h4>Customer Transperancy</h4>
              <p>
                Your privacy is above all profits for us. Your personal data and
                information are encrypted and fully secured.
              </p>
            </Col>
            <Col className="whyChooseUsCard m-2 fontWait">
              {" "}
              <h4>Quick Sanction</h4>
              <p>
                Get your loan approved within 48 hours of submitting your
                application. It’s really quick and hassle-free.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="whyChooseUsCard m-2 fontWait">
              <h4>Highest Loan Approval Rate</h4>
              <p>
                We have the highest loan approval rate in the industry, thanks
                to our wide pool of loan providers.
              </p>
            </Col>
            <Col className="whyChooseUsCard m-2 fontWait">
              {" "}
              <h4>Collateral-Free Loans</h4>
              <p>
                We offer loans with minimal documentation based on your credit
                history and require no pledges for security.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default WhyChooseUs;
