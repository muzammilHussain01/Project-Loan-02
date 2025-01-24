import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import travelLoan from "../img/travelLoan.jpg";
import Footer from "../footer/Footer";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import MoveToTop from "../moveToTop/MoveToTop";
const TravelLoan = () => {
  return (
    <>
      <MoveToTop />
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${travelLoan})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "90vh",
          marginTop: "50px",
        }}
      >
        <Container>
          <Row className="pt-5">
            <Col className="pt-5 text-center" lg={6}>
              <h1 className="pt-5">
                TRAVEL YOURSELF WITH{" "}
                <span className="text-warning"> MORE FREEDOM!</span>
              </h1>
              <h3>GET A LOAN INSTANTLY</h3>
              <Link to="/application-form">
                <Button variant="warning" className="text-white fw-bold">
                  Apply Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="loan-content nav-sticky-section py-lg-3 py-md-4 py-3">
        <h1 className="section-heading text-center pb-3 ">
          <strong>Explore Your Dream Destinations</strong>
          <br />
          <span className="light-font">
            by Applying Instant{" "}
            <span className="text-warning">Travel Loan</span>
          </span>
        </h1>

        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="business_feature_sect">
                <div className="pb-4">
                  <h4 className="business_feature_head">
                    What is a travel loan?
                  </h4>
                  <p>
                    A <strong>travel loan</strong> is a type of unsecured
                    personal loan taken for the specific objective of travel.
                    Different lenders in the market offer loans for both
                    domestic and foreign travel. These loans can have interest
                    rates starting from 10.75% with a repayment timeline of up
                    to 6 years.
                  </p>
                  <p>
                    Loans taken for travel purposes offer an extra boost to the
                    finance, providing more leeway when preparing the budget for
                    the journey. Before applying for a loan, consider repayment
                    options to ensure that the loan reparations are feasible and
                    within the stipulated time.
                  </p>
                </div>

                <div className="pb-4">
                  <h4 className="business_feature_head">
                    Eligibility criteria
                  </h4>
                  <p>
                    Before applying for a loan used for travel purposes,
                    consider these factors to ensure successful loan approval:
                  </p>
                  <ul>
                    <li>Age must be between 24 to 60 years old.</li>
                    <li>
                      The individual can be an employee or self-employed with a
                      base income of Rs. 20,000 and above.
                    </li>
                    <li>Must have a CIBIL score greater than 700.</li>
                  </ul>
                </div>

                <div className="pb-4">
                  <h4 className="business_feature_head">Documents required</h4>
                  <p>
                    Lenders require certain official documents as proof of
                    identity and the ability to repay the loan. The required
                    documents vary from lender to lender, but here's a general
                    list:
                  </p>
                  <ul>
                    <li>
                      Proof of identity can be in the form of an Aadhar card,
                      driver's licence, or voter ID.
                    </li>
                    <li>
                      Address proof will include an Aadhar card or ration card.
                    </li>
                    <li>
                      For income proof, most lenders require payslips from the
                      past three months or IT returns.
                    </li>
                  </ul>
                </div>

                <div className="pb-0">
                  <h4 className="business_feature_head">
                    Loan amount, interest rates, and tenure
                  </h4>
                  <p>
                    Any individual meeting the above requirements can apply for
                    a personal loan for travel. The loan can have the following
                    stipulations:
                  </p>
                  <ul className="mb-0">
                    <li>
                      A loan application can be submitted for amounts up to Rs.
                      40 lakhs.
                    </li>
                    <li>
                      <strong>Travel loan interest rates</strong> can start from
                      10.75% per annum onwards, depending on the lender.
                    </li>
                    <li>
                      Tenures can range from 12 months to 6 years. Many banks
                      offer flexible tenures for more convenient payments.
                    </li>
                    <li>
                      Lenders can levy a processing fee for online transactions,
                      up to 4.13% of the total loan amount.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="no-bg py-lg-1 py-md-4 py-3">
        <h2 className="section-heading pb-3 text-center ">
          <strong>
            Why should you consider getting a{" "}
            <span className="text-warning">Travel loan</span>?
          </strong>
          <br />
        </h2>

        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div className="choose_rup_india">
                <div className="choose_rup_ind_box">
                  <p>
                    Many applicants believe that travel loans can only be used
                    to pay for ticket expenses. But the amount can be used for
                    tickets, hotel bookings, meals, expeditions, or just
                    sightseeing. Loans offer great flexibility in their use and
                    management.
                  </p>
                </div>
                <div className="choose_rup_ind_box">
                  <p>
                    Travel loans online offer emergency funding for unexpected
                    and immediate travel. The approval time for online loans can
                    be as low as 5 minutes, and the amount can be transferred in
                    less than a day.
                  </p>
                </div>
                <div className="choose_rup_ind_box">
                  <p>
                    Credit cards are often the go-to solution for instant cash
                    needs. Compared to credit cards, loans are much better
                    alternatives as they have lower processing fees and cheaper
                    interest rates. A loan for travel also reduces the trouble
                    of activating a credit card for international travel.
                  </p>
                </div>
                <div className="choose_rup_ind_box">
                  <p>
                    Minimal documentation such as proof of identity, address,
                    and employment is needed to get approval for a loan.
                  </p>
                </div>
                <div className="choose_rup_ind_box">
                  <p>
                    Loan amounts can go as high as Rs 40 lakhs with a repayment
                    period of more than 40 months, ensuring ample time for
                    repayment.
                  </p>
                </div>
                <div className="choose_rup_ind_box">
                  <p>
                    An ordinary travel loan does not need security or
                    collateral. There can be exceptions if the loan amount is
                    high.
                  </p>
                </div>
                <div className="choose_rup_ind_box">
                  <p>
                    The advent of mobile computing expedites the loan
                    application process without visiting branches, saving
                    countless hours of travel and expense.
                  </p>
                </div>
                <div className="choose_rup_ind_box">
                  <p>
                    Almost all modern lenders have excellent customer care
                    services accessible from anywhere in the world for
                    assistance. Strict laws ensure loan processing is as
                    transparent as possible.
                  </p>
                </div>
              </div>

              <div className="choose_rup_ind_content">
                <p>
                  Get your instant personal loan today with the easiest process
                  you can find online and turn your fantasies into realities
                  with Rupeezo, India. Need a loan today? Apply online on our
                  website or send us an email at contactus@rupeezo.in.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="faqs gradient-bg py-lg-1 py-md-4 py-3">
        <h2 className="section-heading  text-center">
          FAQ<span className="text-warning">s</span>
        </h2>

        <Container>
          <Row>
            <Col lg={6}>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>What are holiday loans?</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <b>Holiday loans</b> are a specific type of personal loan
                      designed for the holiday season. They are easy to borrow
                      and require no collateral. These loans are only provided
                      during the holiday season.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Are there any restrictions on how the travel loan amount is
                    spent?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      No, travel loans don't come with restrictions. They can
                      cover ticket expenses and be spent on accommodation, food,
                      or other expenses as needed by the borrower.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    When will I get the travel loan amount in my account?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Travel loans can be approved within a few minutes, with
                      funds transferred to your account within 24 hours.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    How much loan amount can I avail for a holiday loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The maximum amount for a holiday loan is Rs. 40 lakh, with
                      a repayment tenure ranging from 3 months to 5 years.
                      Various companies offer different tenures for repayment.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    What is the repayment process for a holiday loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      After loan disbursal, EMI payments start from the
                      following month. Repayment can be made through post-dated
                      cheques, cash, or online methods.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            <Col lg={6}>
              <Accordion>
                <Accordion.Item eventKey="11">
                  <Accordion.Header>
                    Why is income proof necessary to avail of a holiday loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Income proof confirms the borrower's capacity to repay the
                      loan. However, if the credit score is good, income proof
                      might not be required.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                    Which documents should I provide for the holiday loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Required documents for a holiday loan may include:
                      <ul>
                        <li>Identity proof (Aadhaar card or PAN card)</li>
                        <li>
                          Income proof (payslips for 3 consecutive months)
                        </li>
                        <li>Address proof</li>
                        <li>Borrower's photograph</li>
                      </ul>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                    Is a holiday loan tax-free?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      No, the holiday loan is not tax-free. A GST rate of 18% is
                      applied to all banking services.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                    What is the interest rate on a holiday loan?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Interest rates vary among lenders, typically starting from
                      11.99% per annum and going up to 30% p.a.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="15">
                  <Accordion.Header>
                    How do you get a travel loan easily at Rupeezo in India?
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Rupeezo offers travel loans with flexible repayment terms
                      and high approval rates. It is a leading platform
                      providing travel loans online. Just fill in the
                      application on the website or app to start the loan
                      process.
                    </p>
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

export default TravelLoan;
