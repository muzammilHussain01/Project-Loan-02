import React from "react";
import medicalLoan from "../img/medicalLoan.jpg";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import MoveToTop from "../moveToTop/MoveToTop";

const MedicalLoan = () => {
  return (
    <>
      <MoveToTop />
      <div
        style={{
          backgroundImage: `url(${medicalLoan})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "70vh",
          marginTop: "30px",
        }}
      >
        <Container>
          <Row className="pt-5">
            <Col className="pt-5 text-center" lg={6}>
              <h1 className="pt-5 fw-bold fs-1 text-warning">
                {" "}
                SOLID SOLUTION <br /> In Tough Times!
              </h1>
              <h1 className=" fw-bold fs-1">GET A LOAN INSTANTLY</h1>
              <Link to="/application-form">
                <Button variant="warning" className="text-white fw-bold">
                  Apply Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="loan-content nav-sticky-section py-md-4 py-3">
        <h1 className="section-heading text-center">
          <strong>Handle Your Emergency Time</strong>
          <br />
          <span className="light-font">
            by Applying Instant{" "}
            <span className=" text-warning">Medical Loan</span>
          </span>
        </h1>

        <Container className="px-3 px-md-0">
          <Row className="ms-auto">
            <Col lg={12} md={12} sm={12}>
              <h3 className="section-heading-medical ">
                What is a medical emergency loan?
              </h3>
              <p>
                Medical emergencies never come with a prior notification; they
                randomly burst into our lives. A sudden accident might lead to
                unexpected hospital bills and treatment expenses. For these, you
                need an instant funding source.
              </p>
              <p>
                It is a personal loan solely meant to be utilized in paying
                hospital bills and medical expenses in times of emergency. These
                loans allow you to seek treatment for your loved ones without
                worrying about the budget and expenses. You can get a loan for
                up to 25 lakhs or more to ensure you can fulfill medical demands
                in a time of need.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="px-3 px-md-0">
          <h2 className="section-heading text-center">
            <strong>
              Reasons for taking personal loans for medical emergencies:
            </strong>
          </h2>
          <Row className="ms-auto">
            <Col lg={12} md={12} sm={12}>
              <p>
                Personal loans for medical emergencies are easily available in
                India in current times. Here are some reasons why you should
                avail of these loans:
              </p>
            </Col>
          </Row>

          <ol>
            <li className="section-heading-list">No collateral required</li>
            <p>
              Medical loans are meant to help you in times of emergencies. You
              can easily apply for a loan online or offline without putting any
              collateral at stake. These loans do not require any guaranteed
              collateral to present to your lender.
            </p>

            <li className="section-heading-list">
              Funds are received instantly
            </li>
            <p>
              In an emergency, time is of utmost importance. Personal loans for
              medical emergencies can provide you with instant funds by
              following a few simple steps. If you have a good credit history,
              it is easier for you to get the required funds quickly.
            </p>

            <li className="section-heading-list">They are hassle-free</li>
            <p>
              You don't want to run around gathering documents when your loved
              one is in a medical emergency. Medical loans let you apply for a{" "}
              medical loan online with minimal documentation.
            </p>

            <li className="section-heading-list">
              Repayment can be done in monthly installments
            </li>
            <p>
              Medical loans allow you to choose a repayment term according to
              your financial stability. These loans offer a tenure varying from
              12-60 months. You can choose your repayment plan by calculating
              your EMI per month by entering the loan amount and interest rate.
            </p>

            <li className="section-heading-list">Any hospital can be chosen</li>
            <p>
              Medical loans give you the flexibility to receive treatment at any
              hospital. Advanced hospitals often come with higher costs. An
              emergency loan in these situations can help you receive medical
              treatment at a reputed hospital of your choice.
            </p>
          </ol>
        </Container>
      </div>
      <div className="gradient-bg py-lg-1 py-md-4 py-3">
        <h2 className="section-heading text-center pb-3">
          <strong>
            All the key aspects of medical emergency loans
            <br /> for medical emergencies:
          </strong>
        </h2>

        <Container className="px-3 px-md-0">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="per_loan_instant">
                <p>
                  You need to know certain terms related to medical loans before
                  availing of any loan service. They are stated below:
                </p>
                <ol>
                  <li className="section-heading-list">
                    Medical loan eligibility
                  </li>
                  <p>
                    There are certain basic criteria that you need to fulfill
                    before applying for a loan:
                    <ul>
                      <li>You need to be in the age group of 24-60.</li>
                      <li>
                        You need to have an income of at least 20,000 Rupees or
                        above.
                      </li>
                      <li>
                        Salaried as well as self-employed individuals can apply
                        for a medical loan.
                      </li>
                      <li>
                        Required to provide the past three months’ salary
                        receipts or income-related documents.
                      </li>
                      <li>Need to have a credit score of around 700-900.</li>
                    </ul>
                  </p>

                  <li className="section-heading-list">Required documents</li>
                  <p>
                    When applying for a <strong>medical loan in India</strong>,
                    you need to provide some minimal documents to get approved:
                    <ul>
                      <li className="section-heading-list-others">
                        Proof of identity and address:
                      </li>
                      <p>
                        You can submit your Aadhar card and PAN card to get a
                        loan online. A voter ID card or driving licence also
                        serves the purpose.
                      </p>
                      <li className="section-heading-list-others">
                        Proof of income:
                      </li>
                      <p>
                        You need to prove that you have a steady source of
                        income to get a medical loan. The salary receipts for
                        the past three consecutive months will do the needful.
                      </p>
                      <li className="section-heading-list-others">
                        Medical loan interest rate:
                      </li>
                      <p>
                        These emergency personal loans provide lower interest
                        rates, allowing you to repay without stressing your
                        financial status.
                      </p>
                      <li className="section-heading-list-others">
                        Loan amount:
                      </li>
                      <p>
                        Loan amount refers to the sum you borrow from the bank
                        or NBFC under a specific loan scheme. Personal loans for
                        medical emergencies allow you to borrow up to 50 Lacs.
                        You can divide this into EMIs based on the interest
                        rate, calculating how much you need to pay each month to
                        repay the loan.
                      </p>
                      <li className="section-heading-list-others">
                        Loan tenure:
                      </li>
                      <p>
                        The tenure is the period over which you repay your loan.
                        Medical loans offer a wide range of tenure varying from
                        12-60 months, allowing you to comfortably repay the
                        loan.
                      </p>
                      <li className="section-heading-list-others">
                        Processing fee:
                      </li>
                      <p>
                        Most loans charge a percentage of the loan amount as the
                        processing fee before providing funds to the lender.
                      </p>
                    </ul>
                  </p>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <h2 className="section-heading text-center pb-3">
          <strong>Benefits of medical loans at Rupeezo in India</strong>
        </h2>

        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className="ms-auto ">
              <ol>
                <li>
                  Rupeezo is one of the most trusted online platforms that
                  provide instant medical loans with optimum benefits. Here are
                  some of the benefits you can gain by taking a medical loan
                  from Rupeezo:
                </li>
                <li>
                  At Rupeezo, you get to choose from the leading financial firms
                  and banks, allowing you to compare the best service suited for
                  yourself.
                </li>
                <li>
                  Minimal documents are required for you to get approval for a
                  loan.
                </li>
                <li>
                  We provide you with the lowest interest rates, starting from
                  11.99% per annum.
                </li>
                <li>
                  The online platform guarantees you the utmost security without
                  any sign of illegal theft or fraud.
                </li>
                <li>
                  You do not require any collateral to get a personal loan from
                  Rupeezo.
                </li>
                <li>
                  Our support team is ready to serve you with their expert
                  guidance in case of any queries regarding the loan terms.
                </li>
                <li>
                  Flexible repayment options are offered, varying from 3 months
                  to 5 years.
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="faqs gradient-bg py-lg-1 py-md-4 py-3">
        <h2 className="pb-1 text-center">
          <strong>
            FAQ<span className="text-warning">s</span>
          </strong>
        </h2>
        <Container className="px-3 px-md-0">
          <Row className="pb-5">
            <Col lg={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Why is a medical emergency loan required for everyone?
                  </Accordion.Header>
                  <Accordion.Body>
                    Medical loans offer you instant funds of a high amount
                    reaching up to 50 Lacs in times of emergency. You might not
                    be financially ready to face a medical emergency. The loan
                    helps you ensure smooth medical treatment for yourself or
                    your family.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Can I get a medical emergency loan easily in India?
                  </Accordion.Header>
                  <Accordion.Body>
                    If you are a salaried person residing in India and aged
                    21-60 years, you can easily get a personal loan for medical
                    emergencies.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Which documents are required for a medical emergency loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    To receive a medical loan, you need to provide KYC documents
                    (PAN and address proof) and proof of your employment &
                    income.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How to apply for a medical emergency loan at Rupeezo in
                    India?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can easily apply for the loan by following some simple
                    steps:
                    <ul>
                      <li>Choose the loan amount you require.</li>
                      <li>
                        Compare various lenders and their terms and conditions.
                      </li>
                      <li>Upload identity and income proof documents.</li>
                      <li>Select your suitable repayment module.</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    What is the interest rate for medical loans at Rupeezo in
                    India?
                  </Accordion.Header>
                  <Accordion.Body>
                    Rupeezo provides the lowest interest rates, starting from
                    11.99% per annum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col lg={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    How much time does it take to avail of medical loans in
                    India?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can get approval for your loan instantly within 5
                    minutes. The funds get transferred to your bank account
                    within 24 hours of approval.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    What are the minimum and maximum amounts I can get in
                    medical loans?
                  </Accordion.Header>
                  <Accordion.Body>
                    You can get a loan for a wide range of amounts varying from
                    3,000 rupees to as much as 50 Lacs.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    What is the rate of interest for a medical loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Interest rates can vary from 10% to 35%, depending on the
                    lender. You can get loans at low-interest rates if you have
                    a good credit score.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                    Is it necessary to provide a medical certificate to get a
                    personal loan for medical emergencies?
                  </Accordion.Header>
                  <Accordion.Body>
                    No, you don't have to provide a medical certificate to get a
                    personal loan for medical emergencies. Medical loans are
                    specified to ensure you instant funds with minimal
                    procedures.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MedicalLoan;
