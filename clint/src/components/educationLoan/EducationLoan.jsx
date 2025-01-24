import React from "react";
import Footer from "../footer/Footer";
import educationLoan from "../img/educationLoan.jpg";

import Button from "react-bootstrap/Button";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import MoveToTop from "../moveToTop/MoveToTop";
const EducationLoan = () => {
  return (
    <>
      <MoveToTop />
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${educationLoan})`,
          backgroundSize: "cover",
          width: "100%",
          height: "70vh",
          marginTop: "70px",
        }}
      >
        <Container>
          <Row>
            <Col className="pt-5 text-center" lg={6}>
              <h1>
                Take Smart Decision with <br />
                INSTANT <br />
                <span className="section-heading text-warning">
                  EDUCATION LOAN!
                </span>
              </h1>
              <Link to="/application-form">
                {" "}
                <Button variant="warning" className="text-white fw-bold">
                  Apply Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="loan-content nav-sticky-section py-lg-1 py-md-4 py-3">
        <h1 className="section-heading text-center mb-4">
          <strong>Apply for Instant Education Loan</strong>
          <br />
          <span className="light-font text-primary">
            &amp; Make Your Career Bright!
          </span>
        </h1>

        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <p>
                Education is the path for students to fulfill their dreams.
                Quality education is of prime importance to any individual, and
                students often go the extra mile to achieve it. However, the
                cost of education has increased in recent years, making an{" "}
                <strong>education loan</strong> a practical solution for many.
                These loans help students meet the financial requirements to
                complete their education.
              </p>
              <p>
                Several banks and Non-Banking Financial Companies (NBFCs) in
                India offer education loans at competitive rates to support the
                innovators and leaders of the future.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="common-bg py-lg-1 py-md-4 py-3">
        <h2 className="section-heading text-center mb-3 text-primary">
          <strong>
            How is an educational loan beneficial to every student?
          </strong>
        </h2>

        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <p>
                Education loans help students build their future by providing
                financial support. They ensure that students and their families
                do not face excessive difficulties in achieving their
                educational goals.
              </p>
              <p>
                These loans prevent students' families from undergoing
                significant financial strain. They don't need to deplete their
                savings or liquidate bonds and funds. Additionally, interest on
                the loan is eligible for a tax rebate under Section 80E of the
                Income Tax Act, 1961.
              </p>
              <p>
                EMIs are collectible only once students complete their study
                program, so there's no immediate repayment pressure. This
                flexible repayment schedule allows families to plan their
                finances effectively.
              </p>
              <p>
                Study abroad loans cover not only tuition but also living and
                travel expenses, study materials, and even student laptops. This
                way, non-fee expenses do not create additional financial
                burdens.
              </p>
              <p>
                Taking on a loan is a great opportunity for students to get
                their education without depending entirely on their families.
                When students repay a loan, they start building their credit
                history, which can help them secure cheaper loans in the future.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="no-bg py-lg-1 py-md-4 py-3">
        <h2 className="section-heading text-center mb-3 text-primary">
          <strong>Expenses covered by a student education loan</strong>
        </h2>

        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <p>
                An <strong>education loan</strong> is intended to help students
                with their educational pursuits. Lenders consider a wide range
                of potential expenses when providing these loans.
              </p>
              <p>
                The following expenses are typically covered by an education
                loan:
              </p>
              <ol>
                <li>Fees payable to academic institutes.</li>
                <li>Examination/library/laboratory fees.</li>
                <li>Travel expenses for studies abroad.</li>
                <li>Insurance premium for student borrowers, if applicable.</li>
                <li>Cost of books, equipment, uniforms, etc.</li>
                <li>
                  Purchase of a personal computer, if required to complete the
                  course (total expense should not exceed 20% of the total
                  loan).
                </li>
                <li>
                  Additional expenses required to complete the course, such as
                  tours, projects, or theses (total expense should not exceed
                  20% of the total loan).
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="no-bg py-lg-1 py-md-4 py-3">
        <h2 className="section-heading text-center text-primary">
          <strong>
            How does Rupeezo help students get an education loan in India?
          </strong>
        </h2>

        <Container>
          <Row>
            <Col lg={4} md={4} sm={12} className="pt-3">
              <Card>
                <Card.Body>
                  <Card.Text>
                    To apply for a loan at{" "}
                    <a href="https://www.rupeezo.in">
                      <strong>Rupeezo</strong>
                    </a>
                    , candidates can simply visit the website. Click on{" "}
                    <strong>education loans</strong>. Follow the steps, upload
                    the KYC documents, and the rest is handled by Rupeezo. They
                    have connections with all the leading banks and NBFCs in
                    India, ensuring transparent and easy processes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={4} sm={12} className="pt-3">
              <Card>
                <Card.Body>
                  <Card.Text>
                    The documentation is simple, and loans get sanctioned within
                    48 hours of applying. Rupeezo has the highest approval rate
                    in the industry, thanks to its wide network of loan
                    providers. The process is hassle-free, and once the loan
                    application is approved, the money is directly transferred
                    to the candidates' bank accounts. The happy smiles of
                    Rupeezo's customers are a testament to their service and
                    assistance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} md={4} sm={12} className="pt-3">
              <Card>
                <Card.Body>
                  <Card.Text>
                    This student loan in India is ideal for students aspiring
                    for a bigger and better future. Regardless of their
                    situations, with platforms like Rupeezo, there's always a
                    helping hand to help students pursue their dreams.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="faqs pb-lg-5 pb-md-4 pb-3">
        <h2 className="section-heading pb-3 text-center">
          <strong>
            FAQ<span className="text-warning">s</span>
          </strong>
        </h2>
        <Container>
          <Row>
            <Col lg={6}>
              <Accordion>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Who can apply for the student loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Candidates pursuing their education abroad or within India
                    in courses from approved universities or colleges are
                    eligible for student loans in India.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    How much loan amount can I get?
                  </Accordion.Header>
                  <Accordion.Body>
                    The loan amount differs from bank to bank, but for students
                    pursuing courses within India, the loan amount is capped at
                    50 lakhs, while for students pursuing courses outside India,
                    the loan amount is capped at one crore.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    How much time can I get to repay the loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    The maximum repayment period is eight years after the grace
                    period given upon completing your degree.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Which documents are necessary to apply for a student loan in
                    India?
                  </Accordion.Header>
                  <Accordion.Body>
                    Required documents include KYC documents, mark sheets from
                    10th, 12th, graduation, and entrance exams, admission
                    letter, fee structure, co-applicant KYC and income proofs,
                    and additional documents as requested by the lender.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    Do I need to give collateral to avail of a student loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Loans availed through Rupeezo are collateral-free and are
                    provided based on the credit history.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col lg={6}>
              <Accordion>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    Upon which factors are student loans considered?
                  </Accordion.Header>
                  <Accordion.Body>
                    The factors include the course being pursued by the student,
                    financial capabilities, co-applicant's financial
                    capabilities, the loan amount, tenure, and the country of
                    study.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    What are other expenses included by student loans?
                  </Accordion.Header>
                  <Accordion.Body>
                    Besides tuition fees, student loans cover living expenses,
                    books, materials, laptops, and other items required for the
                    student's education.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    What happens if I get a job and discontinue the course
                    within the grace period?
                  </Accordion.Header>
                  <Accordion.Body>
                    If you get a job and discontinue, you must make a loan
                    cancellation request. The lender may then adjust the loan
                    balance, with the final decision lying with the lender.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                    For how long can I avail the loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    The loan tenure depends on the course and the amount
                    required, and is decided by the lender.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="15">
                  <Accordion.Header>
                    How does Rupeezo assist every student in providing education
                    loans in India?
                  </Accordion.Header>
                  <Accordion.Body>
                    Rupeezo has a wide network of banks and NBFCs that it
                    partners with. Using this network, every student can avail
                    of collateral-free education loans through a transparent and
                    straightforward process.
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

export default EducationLoan;
