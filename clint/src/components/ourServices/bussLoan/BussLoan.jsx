import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import businessLoan from "../../img/businessLoan.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../footer/Footer";
import MoveToTop from "../../moveToTop/MoveToTop";
const BussLoan = () => {
  return (
    <>
      <MoveToTop />
      <div
        style={{
          backgroundImage: `url(${businessLoan})`,
          backgroundSize: "cover",
          width: "100%",
          height: "70vh",
        }}
      >
        <Container>
          <Row className="p-5">
            <Col xs={6} className="p-5">
              <h1 className="fw-bold">
                REACH A NEW HEIGHT WITH <br />
                <section className="text-primary">RUPEEZO</section>
                <section className="text-warning">BUSINESS LOAN</section>
              </h1>
              <Link to="/application-form">
                <Button variant="warning" className="text-white">
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
            <Col className="text-center pt-5 pb-2">
              <span className=" pt-5 fw-bold fs-3 ">
                Get Instant <span className="text-warning">Business Loan</span>
              </span>
              <br />
              <span className="text-center pt-5  fs-3 ">
                & Grow Your Business!
              </span>
            </Col>
          </Row>
          <Row>
            <Col style={{ fontFamily: "monospace" }} className="pb-4">
              India has many small and large-scale businesses, including retail,
              industrial corporations, and social enterprises. These enterprises
              contribute to the country's advancement and are a key source of
              employment. It is growing daily, with several businesses joining
              the force. However, many new entrepreneurs cannot develop their
              enterprises due to financial constraints. Business loans, here,
              come to the rescue. These business loans help entrepreneurs
              fulfill their dreams of owning and successfully running a
              business.
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={6}>
              <Card
                key="Red Outline"
                text="dark" // Set the text color to contrast with the background
                style={{
                  width: "fit-content", // Set the card width
                  border: "2px solid red", // Set a red border to outline the card
                  padding: "10px", // Add padding for spacing inside the card
                }}
                className="mb-2" // Add margin-bottom for spacing
              >
                <Card.Header style={{ backgroundColor: "white" }}>
                  <Card.Title>What is a business loan?</Card.Title>
                </Card.Header>

                {/* Keep the header white */}
                <Card.Body>
                  <Card.Text>
                    <p>
                      Borrowing a loan from a lender as funds to start or expand
                      a business is referred to as a business loan. If you own a
                      business and want to expand it for the long term, you will
                      require huge capital, for which a business loan may be
                      required. Many reputable banks and Non-Banking Financial
                      Companies (NFBCs) provide business loans. The loan
                      recipient is required to repay the debt within a certain
                      period at a predetermined interest rate.
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
                  border: "2px solid red", // Set a red border to outline the card
                  padding: "10px", // Add padding for spacing inside the card
                }}
                className="mb-2" // Add margin-bottom for spacing
              >
                <Card.Header style={{ backgroundColor: "white" }}>
                  <Card.Title>
                    Why should you take the business loans?
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p>
                      Looking to start a business but lack the necessary funds?
                      Or do you want to invest in some equipment for your
                      business, but you're short on cash? Then you require a
                      business loan. A business loan will be profitable for all
                      types of businesses. It is a method of financing that will
                      assist you and your company in overcoming the capital
                      crisis.
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
          backgroundColor: "rgb(229, 242, 229)",
        }}
      >
        <Container className="pt-5">
          <Row>
            <Col className=" pb-4">
              <h2 className=" text-center">
                Advantages of{" "}
                <span className="text-warning">Business loan</span> for startup
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Startups, in particular, require business loans since they lack
                the initial financing required to launch a firm. You can receive
                support with all aspects of the business's finance, including
                machinery, equipment, and the recruiting procedure. You will own
                the company and be able to secure your capital; all you need is
                a strong startup concept that will benefit you and your company.
              </p>
              <p>
                There are different types of business loans in India for
                startups and small businesses to consider. You can select the
                most beneficial loan type for your business. Some types are
                listed below:
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <ol>
                <li>
                  <h6 className="fw-bold">
                    Term Loan(Short-term and Long-term)
                  </h6>
                  <p>
                    This form of a loan refers to the length of time it will
                    take you to repay the debt, which is determined by the
                    amount of money you borrowed. There are two major types of
                    term loans namely, short-term and long-term. Short-term
                    refers to a period that lasts less than a year, whereas
                    long-term refers to a period that lasts longer. It ranges
                    from twelve months to ten years. The creditor determines a
                    term loan's payback period at the beginning of the term.
                  </p>
                </li>
                <li>
                  <h6 className="fw-bold">Working Capital loan</h6>
                  <p>
                    This sort of loan covers all aspects of a company's
                    operations, including cash flow, inventory, payroll, and so
                    on.
                  </p>
                </li>
                <li>
                  <h6 className="fw-bold">Loans under Govt. schemes</h6>
                  <p>
                    Looking to start a business but lack the necessary funds? Or
                    do you want to invest in some equipment for your business,
                    but you're short on cash? Then you require a business loan.
                    A business loan will be profitable for all types of
                    businesses. It is a method of financing that will assist you
                    and your company in overcoming the capital crisis.
                  </p>
                </li>
                <li>
                  <h6 className="fw-bold">Others</h6>
                  <p>
                    Aside from that, you should be familiar with secured,
                    unsecured business loans and small business loans. Choosing
                    a loan that will benefit you is always the ideal option, as
                    it will allow you to expand your business while also
                    improving your credit score. So, what's the difference
                    between the two?
                  </p>
                  <ul>
                    <li>
                      <h6 className="fw-bold">Secured business loan</h6>
                      <p>
                        The secured loan is the most popular because it has
                        lower business loan rates than the other loan types.
                        Simply said, it makes use of your business assets, or in
                        another sense, a form of collateral, to supply you with
                        the amount you are liable for.
                      </p>
                      <p>
                        It can be anything that has a good value in return, not
                        just your business assets. It can also be your home,
                        vehicle, or other property. You cannot sell your asset
                        once it has been given over in exchange for the loan.
                        Until you pay off your debts, it will be the property of
                        the loan creditor. It has a set duration in which you
                        have to clear all your debts.
                      </p>
                    </li>
                    <li>
                      <h6 className="fw-bold">Unsecured business loan</h6>
                      <p>
                        An unsecured business loan is the polar opposite of a
                        secured business loan. You are not required to exchange
                        assets to meet the loan criteria, meaning that any
                        collateral does not back it up.
                      </p>
                      <p>
                        Unsecured loans have higher interest rates than secured
                        loans. Because you are not trading any assets, it is a
                        risk element for the loan provider. It is mostly used to
                        make a short-term loan. It also depends on whether you
                        are eligible for unsecured loans, which is determined by
                        several factors. Finally, you must consider which one is
                        best for you. If you have collateral, choose the secured
                        one since the interest rate will be lower, and you will
                        have more time to repay it.
                      </p>
                    </li>
                  </ul>
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="pt-5">
          <Row>
            <Col className="text-center pb-4">
              <h2 className="fw-bold ">
                Rupeezo <span className="text-warning">Business Loan</span>{" "}
                Features
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Rupeezo provides excellent features, especially loans for new
                business. It offers low-interest EMIs and collateral-free loans
                with flexible payback options. We provide a tenure of 12 months
                to 10 years depending on the loan amount required, and interest
                rates may start from 11.99% pa. The processing fee varies from
                different banks and organizations.
              </p>
              <p>
                The finest element is that you don't have to run to your bank
                because everything is done securely online. Rupeezo has
                everything that you want in a loan.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>How to calculate your business loan at Rupeezo?</h4>
              <p>
                The business loan at Rupeezo is determined based on the EMI, the
                rate of interest, the principal amount, and the loan tenure.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>How to apply for a business loan at Rupeezo?</h4>
              <p>
                At Rupeezo, everything is digital. Fill in the application for
                the loan, and that's all there is to it. Simply wait for a call
                back within 24 hours. They will check your eligibility and
                conditions, and you will be approved for the loan right away.
              </p>
            </Col>
          </Row>

          <Row>
            <Col>
              <h4>Apply for the business loan online</h4>
              <p>
                Pay off your debts on the given time duration to secure your
                asset and increase your odds of acquiring loans in the future.
                Follow the procedures above carefully since they will determine
                whether or not your loan will be approved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container className="pb-5">
          <Row>
            <Col className="text-center fw-bold fs-5">
              <h3>
                FAQ<span className="text-warning">s</span>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>What is a business loan?</Accordion.Header>
                  <Accordion.Body>
                    A business loan is a debt taken out by business owners who
                    want immediate funds for equipment or other business needs.
                    Start-ups with good strategies might also benefit from it.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xs={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    What is the eligibility criteria for a business loan in
                    India?
                  </Accordion.Header>
                  <Accordion.Body>
                    The first criterion is that you must be of Indian
                    nationality and be between 24 and 70 years. You must be
                    self-employed and have had a business for at least three
                    years. Certain documents proving your identification, bank
                    paperwork, and other proof of ownership are required. You
                    must also have a minimum annual turnover of Rs. 40,000.
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
                    Who can apply for a business loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Anyone self-employed with a professional or non-professional
                    background and Indian nationality can apply for a business
                    loan. If you need a business loan, you must meet certain
                    requirements.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xs={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Is a business loan safe for small businesses?
                  </Accordion.Header>
                  <Accordion.Body>
                    As a small business owner, you can take out unsecured loans
                    because no collateral (no demand for guarantee) is required,
                    and you can pay off debts quickly with low interest rates
                    and EMIs. For small businesses, they are usually safe and
                    secure.
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
                    Should I apply for a small business loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Small business loans have advantages if you wish to build
                    and extend your present business. Alternatively, you may use
                    these loans to get started at low interest rates if you want
                    to establish a business but don't have many resources to
                    finance with. Paying off your debt might also help you
                    retain your credit score.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xs={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Is a business plan required for availing a startup business
                    loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    If you need a business loan for your company, a plan is one
                    of the most crucial elements to consider. It's essential to
                    have a strong plan that will be effective and won't cause
                    any damage to your business because neither the owner nor
                    the bank wants to lose money.
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
                    What is the maximum amount for a business loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    Rupeezo will offer you a maximum sum of 15,00,000 rupees for
                    your business by following the basic procedures.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xs={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    For what purposes can I get a business loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    First and foremost, if you are a startup, you may require
                    additional funding. Aside from that, you'll require business
                    equipment. You'll also need to recruit people, as they'll be
                    the major source of earnings for your company.
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
                    How can I improve my opportunities to get a business loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    One of the most important requirements is whether you have a
                    business or a solid idea. Also, if you have an excellent
                    credit score, your chances of getting a business loan are
                    better.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xs={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    How does Rupeezo help people offer an instant business loan
                    in India?
                  </Accordion.Header>
                  <Accordion.Body>
                    Rupeezo provides a flexible EMI and loan tenure to suit your
                    needs. You don't even need to hunt for crowdfunding because
                    you can receive the loan amount immediately to invest in
                    your company. It's a straightforward procedure that
                    necessitates the submission of legal papers and other
                    procedures. You will receive a call from lenders within 24
                    hours of submitting your loan application.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default BussLoan;
