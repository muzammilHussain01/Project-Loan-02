import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import instantLoan from "../img/instantLoan.jpg";
import Button from "react-bootstrap/Button";
import "./InstantLoan.css";
import Footer from "../footer/Footer";
import Accordion from "react-bootstrap/Accordion";
import InstantLoanSlider from "../InstantLoanSlider/InstantLoanSlider";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import MoveToTop from "../moveToTop/MoveToTop";
const InstantLoan = () => {
  return (
    <>
      <MoveToTop />
      <div
        style={{
          backgroundImage: `url(${instantLoan})`,
          backgroundRepeat: "no-repeat",

          width: "100%",
          minHeight: "80vh",
          marginTop: "70px",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Row className="p-5">
            <Col xs={7}></Col>
            <Col className="p-5 text-center">
              <p className="pl-5 ">
                <h2>Grow Yourself with</h2> <h2>Rupeezo</h2>
                <h1 className="fw-bold text-warning"> INSTANT LOANS</h1>
                <p>
                  <h3>Get A Loan Instantly</h3>
                </p>
              </p>
              <Button
                variant="warning"
                className="pl-3 pr-3 fw-bold text-white"
              >
                Apply Now
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <h1 className="text-center pt-3 text-primary">
                Rupeezo - Your First Choice for Instant Loan Online
              </h1>
              <p className="fontweight">
                The banking sector is changing rapidly. Nowadays, most people
                are averse to standing in long queues to apply for loans, which
                is why instant loans have become quite attractive. As indicated
                by the term, instant loan is a type of loan which requires
                minimal documentation and is approved quickly without any
                hassles. Moreover, it does not require any asset showcase. It is
                quick and convenient where borrowers can apply for loans online
                without going to banks. These features make an instant loan
                online more attractive than traditional bank loans. These loans
                are also called personal loans or quick loans.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <p className="fontweight">
                You should take an instant loan online from Rupeezo. It offers a
                seamless experience. The process is extremely user-friendly and
                requires minimal documentation. Competitive interest rates from
                banks and Non-Banking Financial Companies (NBFCs) make loans
                attractive from Rupeezo. The process is very fast and helpful in
                times of need.
              </p>
              <p className="fontweight">
                In a nutshell, an instant loan is a convenient form of loan
                which is easy to apply for since it requires very little
                paperwork and is quick. Our quick processing time and high
                approval rates, makes for a great platform to take loans. It
                also assists the borrowers in the process.
              </p>
              <p className="fontweight">
                Rupeezo is a premium loan aggregation platform that lives up to
                its reputation of quick loans and high approval rates.
              </p>
              <ul>
                <li>
                  We offer quick loans to debtors. It has a diverse profile of
                  lenders, making the process swift and hassle-free. It leaves
                  no room for delay in the processing of loans.
                </li>
                <li>
                  The documentation that we need is very minimal and varies
                  slightly from lender to lender, depending on the loan
                  requirements. However, the processing time of the documents is
                  less in comparison to traditional loans.
                </li>
                <li>
                  The interest rates are competitive, and if a person has a
                  decent credit history, they can avail of instant loans at a
                  very affordable interest rate.
                </li>
                <li>
                  Our loans are also collateral-free. Instead, it aggregates
                  details of lenders and borrowers to increase loan transparency
                  and keep the process safe and secure.
                </li>
                <li>
                  The loan repayment system is very flexible, and a borrower can
                  easily fix their tenure, which ranges from 3 months to 5
                  years.
                </li>
                <li>
                  Our platform is breach-free and is completely safe for
                  transactions. It also has high approval rates because of
                  smooth processing.
                </li>
                <li>
                  Our support team can help the borrowers through every step of
                  taking a loan like documentation, pre, and post-payment
                  queries, and other concerns.
                </li>
              </ul>

              <p className="fontweight pt-3">
                You should take an instant loan online from Rupeezo. It offers a
                seamless experience. The process is extremely user-friendly and
                requires minimal documentation. Competitive interest rates from
                banks and Non-Banking Financial Companies (NBFCs) make loans
                attractive from Rupeezo. The process is very fast and helpful in
                times of need. In a nutshell, an instant loan is a convenient
                form of loan which is easy to apply for since it requires very
                little paperwork and is quick. Our quick processing time and
                high approval rates, makes for a great platform to take loans.
                It also assists the borrowers in the process.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <InstantLoanSlider />
      </div>
      <div>
        <Container className="pt-5  cardContainer">
          {/* cardStyling */}
          <Row>
            <Col>
              <p>
                An instant loan in India is beneficial to a borrower for various
                reasons. The top features and benefits of a quick loan in India
                are listed below:
              </p>
            </Col>
          </Row>
          <Stack gap={5}>
            <Row>
              <Col xs={6}>
                <Card className="bg-warning cardStyling">
                  <Card.Body>
                    <Card.Title>Paperless transaction:</Card.Title>
                    <Card.Text>
                      In contrast to a traditional application for a loan, the
                      application for this loan is paperless because it is
                      online. A debtor can upload the required documents online,
                      making the translation entirely paperless.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card className="bg-warning cardStyling">
                  <Card.Body>
                    <Card.Title>No collateral:</Card.Title>
                    <Card.Text>
                      These loans are unsecured loans because of which you will
                      not have to submit any security or collateral while
                      applying for a loan.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Card className="bg-warning cardStyling">
                  <Card.Body>
                    <Card.Title>Quick:</Card.Title>
                    <Card.Text>
                      These loans are quick and instant because the processing
                      time is less. Hence, these kinds of loans are attractive
                      when people need immediate funds.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card className="bg-warning cardStyling">
                  <Card.Body>
                    <Card.Title>Flexible tenures:</Card.Title>
                    <Card.Text>
                      These loans are quick and instant because the processing
                      time is less. Hence, these kinds of loans are attractive
                      when people need immediate funds.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Card className="bg-warning cardStyling">
                  <Card.Body>
                    <Card.Title>Minimal processing time:</Card.Title>
                    <Card.Text>
                      The processing time of this loan is less than a
                      traditional loan which makes it helpful during immediate
                      requirements of the fund.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card className="bg-warning cardStyling">
                  <Card.Body>
                    <Card.Title>Flexible loan amounts:</Card.Title>
                    <Card.Text>
                      A person applying for a quick loan can choose the loan
                      amount themselves, too, subject to the minimum and maximum
                      amount of the lenders. A quick loan can be availed from
                      Rs. 5000 to Rs. 5 lakhs.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Stack>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col className="text-center fw-bold fs-5 pt-5">
              <h1>
                FAQ<span className="text-warning">s</span>{" "}
              </h1>
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
            <Row>
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
      </div>{" "}
      <Footer />
    </>
  );
};

export default InstantLoan;
