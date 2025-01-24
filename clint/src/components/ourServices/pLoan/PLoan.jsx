import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import pLoan from "../../img/pLoan.jpg"; // Path to the background image
import pLoanbracket from "../../img/pLoanbracket.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "../../footer/Footer";
import Accordion from "react-bootstrap/Accordion";
import Stack from "react-bootstrap/Stack";
import MoveToTop from "../../moveToTop/MoveToTop";

const PLoan = () => {
  return (
    <>
      <MoveToTop />
      <div
        style={{
          backgroundImage: `url(${pLoan})`, // Set background image
          backgroundSize: "cover", // Cover entire area
          backgroundPosition: "center", // Center the image
          backgroundRepeat: "no-repeat", // Don't repeat the image
          width: "100%", // Full width
          height: "400px", // Set height to control the visible area
          marginTop: "50px",
        }}
      >
        <Container>
          <Row className="p-5">
            <Col xs={6} className="p-5 fw-bold fs-3">
              <h1>
                FULFILL ALL YOUR NEEDS WITH
                <span className="text-warning"> PERSONAL LOAN</span>
              </h1>
              <p className="text-danger">Get A Loan Instantly</p>
              <Link to="/application-form">
                <Button variant="warning" className="text-white fw-bold">
                  Apply Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "lightgray",
        }}
      >
        <Container>
          <Row>
            <Col className="text-center">
              <span className=" pt-5 fw-bold fs-3 ">
                Instant <span className="text-warning">Personal Loan</span>
              </span>
              <br />
              <span className="text-center pt-5  fs-3 ">
                & Get Financial Freedom!
              </span>
            </Col>
          </Row>
          <Row>
            <Col style={{ fontFamily: "monospace" }}>
              Do you have an expensive international trip coming ahead or a
              personal debt to pay off? Have to wait for a whole month till your
              payday to fulfill your urgent financial goals? We are here with
              the ultimate solution for your problems. Get an easy instant
              personal loan with minimum interest with the easiest process you
              can imagine. With the experience of more than 20 years, we have
              fulfilled the dreams of 10K+ customers. We have always been up to
              mark in our services. Rupeezo offers the lowest personal loan
              rates compared to other organizations. We have a high loan
              approval rate as we are integrated with leading banks and NBFCs in
              India.
            </Col>
          </Row>
        </Container>
        <Container className="pt-4">
          <Row>
            <Col xs={6}>
              <Card
                key="Red Outline"
                text="dark" // Set the text color to contrast with the background
                style={{
                  width: "fit-content", // Set the card width
                  border: "2px solid #FFC107", // Set a red border to outline the card
                  padding: "10px", // Add padding for spacing inside the card
                }}
                className="mb-2" // Add margin-bottom for spacing
              >
                <Card.Header style={{ backgroundColor: "white" }}>
                  <Card.Title>What is a personal loan?</Card.Title>
                </Card.Header>

                {/* Keep the header white */}
                <Card.Body>
                  <Card.Text>
                    <p style={{ fontSize: "small" }}>
                      It is a loan taken when a person needs instant money for a
                      wedding, vacation trip, home renovation, or other personal
                      needs. It can be secured where collateral is required or
                      unsecured where no collateral is needed. Some key
                      takeaways of are mentioned below:-
                    </p>
                    <p style={{ fontSize: "small" }}>
                      They can vary greatly based on their rate of interest,
                      amount, and processing fees. A larger amount carries a
                      lesser interest rate, whereas a smaller amount has a
                      higher interest rate comparatively.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6}>
              <Card
                key="Red Outline"
                text="dark" // Set the text color to contrast with the background
                style={{
                  width: "fit-content", // Set the card width
                  border: "2px solid #FFC107", // Set a red border to outline the card
                  padding: "10px", // Add padding for spacing inside the card
                }}
                className="mb-2" // Add margin-bottom for spacing
              >
                <Card.Header style={{ backgroundColor: "white" }}>
                  <Card.Title>Why should you take a personal loan?</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p style={{ fontSize: "small" }}>
                      It enables you to get instant funding without hassle for
                      small-scale needs. It helps you fulfill your monetary
                      problems at a small scale with optimum convenience. No
                      questions are asked about the expenditure, but one has to
                      keep in mind the loan amount. These loans are different
                      from student loans, educational loans, home loans, and car
                      loans used to fund specific areas of expenses (i.e.,
                      college expenses, mortgage expenses). Personal loans help
                      you get instant cash for medical emergencies, education,
                      or an overseas trip; they have become quite common in
                      India. It is a loan that you can take out to fulfill your
                      monetary needs temporarily.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "rgb(222, 240, 240)",
          backgroundImage: `url(${pLoanbracket})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <Container>
          <Row>
            <Row>
              <Col>
                <h3 className=" text-center">
                  Features of{" "}
                  <span className="text-warning">Personal loan</span>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <ul>
                  <li>
                    <strong> Get easy loans at reasonable rates:</strong>
                    <p>
                      Instant loans are available at affordable rates, which
                      helps take loans without shaking one’s budget.
                    </p>
                  </li>
                  <li>
                    <strong>Get lower rates on higher amounts:</strong>
                    <p>
                      Low personal loan rates are usually applied when a larger
                      loan is taken. This helps one in taking bigger loans with
                      lesser interests.
                    </p>
                  </li>
                  <li>
                    <strong>
                      Availability of more money than a credit card:
                    </strong>
                    <p>
                      It offers you a much larger amount when compared to credit
                      cards.
                    </p>
                  </li>
                  <li>
                    <strong>Flexible locking period:</strong>
                    <p>
                      Flexible locking periods are offered according to
                      convenience, making it easier to pay debts. A locking
                      period is a period when you have to pay your debt back to
                      the bank.
                    </p>
                  </li>
                  <li>
                    <strong>The fixed amount has to be paid monthly:</strong>
                    <p>
                      No variations in amount are there, and a fixed amount must
                      be paid monthly. The amount is neither increased nor
                      decreased once the monthly installments have begun.
                    </p>
                  </li>
                  <li>
                    <strong>No collateral requirement:</strong>
                    <p>
                      Usually, no collateral is required in loans up to some
                      limit, enabling one to take an instant personal loan
                      easily. The loans which do not require any collateral are
                      called unsecured loans.
                    </p>
                  </li>
                  <li>
                    <strong>Easy accessibility:</strong>
                    <p>
                      One can easily apply online and get them approved
                      instantly. Documentation and other formalities are
                      performed online.
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
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
                      Is it good to avail personal loan in India?
                    </Accordion.Header>
                    <Accordion.Body>
                      Getting a personal loan is a good idea if you have a
                      stable income and want quick money for medical
                      emergencies, wedding needs, moving costs, or vacation. It
                      provides you with more money when compared to credit
                      cards.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What is the maximum amount I can get applying for a
                      personal loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      Rupeezo offers up to 15 lac rupees for a personal loan.
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
                      How is Rupeezo’s personal loan secured?
                    </Accordion.Header>
                    <Accordion.Body>
                      Secured loans require collateral, i.e., your financial
                      assets (your home, some land, etc.). If your credit score
                      is good, you can easily get an unsecured instant personal
                      loan that does not require any collateral.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How can I repay my personal loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      You can repay your loans as monthly installments online,
                      or you can even repay your loan instantly without any
                      installments. The repayment process can be set up
                      according to one’s own comfort and availability.
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
                      Can you pay off early for a personal loan?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, you can pay your loan early. You can even pay the
                      whole amount in a single installment. You can decide your
                      installment money and even your locking period.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How can I track my personal loan application status?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      You can track your application status via email or
                      customer service.
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
                      What is the interest rate on a personal loan at Rupeezo?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      If you have a decent credit score, you can avail of a loan
                      with lower interest rates starting from 11.99%. However,
                      interest rates vary according to your personal loan
                      amount.
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
                    <Accordion.Body>
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
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How can I calculate the interest rate on a personal loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      To calculate your interest rate for a personal loan, you
                      can contact us at Rupeezo.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What happens if I do not pay the amount of my personal
                      loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      The lender will report your account as a non-performing
                      asset or an NPA, which will lower your credit score,
                      resulting in lowering your credibility to get a loan
                      further on.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            {/* sixth row */}
            <Row className="pb-5">
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Which documents are required for a personal loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      Your income proof (bank statement, salary sheet), address
                      proof, and ID proof. These are the primary documents that
                      are required for the documentation process.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How does Rupeezo help people to offer instant personal
                      loans?
                    </Accordion.Header>
                    <Accordion.Body>
                      Rupeezo provides online, hassle-free loan services
                      throughout India, bringing a quick solution to people’s
                      monetary problems. Online documentation and our
                      experienced hands make taking an instant personal loan a
                      childs play.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Stack>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default PLoan;
