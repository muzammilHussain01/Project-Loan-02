import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Container, Col, Row } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
const AccordionComponent = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col className="text-center fw-bold fs-5">
              <h3>
                FAQ<span className="text-warning">s</span>
              </h3>
            </Col>
          </Row>
          <Stack gap={3}>
            <Row>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Who can be eligible for a loan in India?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="fontWait">
                        The following serve as the minimum eligibility criteria:
                      </p>
                      <ul className="fontWait">
                        <li>Age:</li>
                        <p>Minimum 21 years to maximum 68 years</p>
                        <li>Employment type and status:</li>
                        <p>
                          A student, a salaried person, a homemaker, a retired
                          person, a self-employed professional, or a business
                          owner are eligible to apply for a loan in India.
                        </p>
                        <li>Credit Score:</li>
                        <p>750 or above.</p>
                        <li>Monthly Income:</li>
                        <p>
                          The minimum net income required is 5000 per month.
                        </p>
                        <li>Work experience:</li>
                        <p>Minimum of 1-year work experience required.</p>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How much salary is required for a loan in India?
                    </Accordion.Header>
                    <Accordion.Body className="fontWait">
                      The minimum salary varies for Mumbai, Delhi, and the rest
                      of the cities. The minimum salary requirement for
                      residents of Mumbai and Delhi is INR 25,000 per month,
                      while it is INR 20,000 per month for other cities.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            {/* second row */}
            <Row>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Can I avail myself of a loan without a salary?
                    </Accordion.Header>
                    <Accordion.Body className="fontWait">
                      Yes, if you are a freelancer or self-employed individual
                      making money. Here, you need to provide certain financial
                      documents to prove your income. There is no need for a
                      salary slip in such cases.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What is the interest rate for Rupeezo personal loans in
                      India?
                    </Accordion.Header>
                    <Accordion.Body className="fontWait">
                      Rupeezo offers highly competitive rates against unsecured
                      personal loans, which are deemed one of the best in the
                      industry. You can easily avail of loan opportunities here
                      with interest rates starting from 11.99% p.a.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            {/* third row */}
            <Row>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Which documents are necessary for a loan in India?
                    </Accordion.Header>
                    <Accordion.Body className="fontWait">
                      Documents pertaining to ID proof, address proof, last 6
                      months’ bank statement, salary slip of last 6 months, or
                      salary certificate of current date are mandatory to apply
                      for a loan in India.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How much minimum and a maximum loan can I avail?
                    </Accordion.Header>
                    <Accordion.Body className="fontWait">
                      An individual can avail loan amount based upon its
                      credibility. The minimum loan amount that an individual
                      can avail of varies, but the maximum can go up to 40 lakhs
                      based upon their eligibility to repay.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            {/* fourth row */}
            <Row>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How to get a quick personal loan at Rupeezo?
                    </Accordion.Header>
                    <Accordion.Body className="fontWait">
                      This is a simple process. All you need to do is open our
                      website and apply for the loan of your choice amongst the
                      varied types available. You may even check your loan
                      eligibility or credit rating at the site itself to move
                      forward with the application.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How can I cancel my personal loan after the loan is
                      disbursed?
                    </Accordion.Header>
                    <Accordion.Body className="fontWait">
                      Loan cancellation is easily carried out, but a
                      cancellation fee must be paid. However, no cancellation
                      fee is induced if the loan application is withdrawn in the
                      early stages.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            {/* fifth row */}
            <Row>
              <Col xs={6} className="mb-5">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Which type of loan is the best loan in India?
                    </Accordion.Header>
                    <Accordion.Body className="fontWait">
                      Being highly popular, a personal loan is indeed the best
                      loan option available in India. These collateral-free
                      loans are quick to approve and easy to avail, along with
                      the added advantage of instant liquidity.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Is Rupeezo safe for a loan in India?
                    </Accordion.Header>
                    <Accordion.Body className="fontWait">
                      <p>
                        Rupeezo is one of the leading and most trustworthy loan
                        aggregation platforms that maintains utmost transparency
                        in all its dealing and keeps the data and other vital
                        information fully secured and encrypted, making it a
                        highly safe option to avail loans.
                      </p>
                      <p>
                        One of India's best loan provider companies, we assure
                        to take care of your loan needs with paperless
                        documentation and quick sanction of loans in the most
                        secure way. Contact us today contactus@rupeezo.in, our
                        team will call you within minutes.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Stack>
        </Container>
      </div>
    </>
  );
};

export default AccordionComponent;
