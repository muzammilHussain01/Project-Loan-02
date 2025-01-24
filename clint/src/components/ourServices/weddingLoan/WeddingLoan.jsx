import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import weddingLoan from "../../img/weddingLoan.jpg";
import Footer from "../../footer/Footer";
import Accordion from "react-bootstrap/Accordion";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import MoveToTop from "../../moveToTop/MoveToTop";
const WeddingLoan = () => {
  return (
    <>
      <MoveToTop />
      <div
        style={{
          backgroundImage: `url(${weddingLoan})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "60vh",
          marginTop: "70px",
        }}
      >
        <Container fluid>
          <Row>
            <Col></Col>

            <Col className="pt-5 text-center">
              <h1 className="pt-5">
                Enjoy Your <br />
                <span className="text-warning fw-bold fs-1">
                  {" "}
                  MARRIAGE DAY{" "}
                </span>
                <br /> with a Big Smile
              </h1>
              <Link to="/application-form">
                <Button variant="warning" className="text-white fw-bold">
                  Apply Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col className="text-center mt-4">
              <h3>
                Apply for Instant Wedding Loan & Make Your Days Memorable!
              </h3>
            </Col>
          </Row>
          <Row>
            <Col className=" mt-4">
              <h4>
                What is a wedding loan? What is the importance of a personal
                loan for marriage?
              </h4>
              <p>
                Wedding loans are loans provided specifically for weddings and
                all the functions that lead up to the event. Planning and
                budgeting a wedding can be difficult since an Indian wedding has
                many functions leading up to the event. To ensure the bride and
                groom’s desire for a perfect wedding is not limited by their
                budget, many banks and non-banking financial institutions
                provide marriage loans.
              </p>
              <p>
                The biggest advantage of the loan is that they allow the
                borrower to plan their dream wedding. These are minimal document
                loans that are approved and accredited in the account with a
                short duration, ensuring the wedding planning can continue.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <h3 className="text-center ">Marriage loan eligibility</h3>
            </Col>
            <Row>
              {" "}
              <Col>
                It is a critical criterion to understand when planning to seek
                out a wedding loan:
              </Col>
            </Row>
          </Row>{" "}
          <Row>
            <Col>
              <ul>
                <li>
                  <strong>Age:</strong>
                  <p>
                    The applicant's age must be between 24 and 60 years old.
                    While this is not a hard-and-fast rule, it is followed by
                    many lending institutions.
                  </p>
                </li>
                <li>
                  <strong>Basic income:</strong>
                  <p>
                    Most lending institutions have a basic income requirement.
                    Under this eligibility requirement, you must show that you
                    earn at least INR 20,000 per month to be eligible for a
                    loan.
                  </p>
                </li>
                <li>
                  <strong>CIBIL Score:</strong>
                  <p>
                    The CIBIL Score is an eligibility criterion by almost all
                    lending institutions. This marriage loan eligibility
                    criterion dictates that you should have a CIBIL Score
                    between 700 and 900 to be eligible.
                  </p>
                </li>
                <li>
                  <strong>Nationality:</strong>
                  <p>
                    Several lending institutions provide marriage loans only for
                    Indian nationals. Therefore, you must be a citizen of India
                    or a non-resident Indian (NRI) to be eligible for the loan.
                  </p>
                </li>
                <li>
                  <strong>Credit history:</strong>
                  <p>
                    Credit history is also considered by some lending
                    institutions. If your credit history is good, you may be
                    eligible for a lower interest rate. Credit history may also
                    influence the loan amount you are eligible for.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col className="text-center ">
              <h3>
                Documents required for{" "}
                <span className="text-warning"> Wedding loan</span>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <ol>
                <li>
                  <strong>ID proof:</strong>
                  <p>
                    Applicants are required to submit at least two identity
                    proofs during the process. These can be PAN card, Aadhar
                    card, driving licence, voter ID, passport, ration card,
                    National Rural Employment Guarantee Act (NEGRA) job card,
                    etc.
                  </p>
                </li>
                <li>
                  <strong>Proof of address:</strong>
                  <p>
                    Applicants must also submit at least one proof of address
                    during the process. This can be an Aadhar card, driving
                    licence, voter ID, passport, ration card, utility bill
                    (electricity, water, internet, etc.) or rental agreement.
                    However, the same document cannot be used as ID proof and
                    proof of address.
                  </p>
                </li>
                <li>
                  <strong>Age proof:</strong>
                  <p>
                    It is given to show the applicant is eligible for the loan.
                    This includes a school leaving certificate, birth
                    certificate or PAN card.
                  </p>
                </li>
                <li>
                  <strong>Repayment can be done in monthly instalments</strong>
                  <p>
                    This can be shown as pay slips (for salaried) and bank
                    statements (for self-employed or business owners).
                  </p>
                </li>
                <li>
                  <strong>Proof of income:</strong>
                  <p>
                    There are never any specified terms regarding where you can
                    use the loan funds. These days, everyone prefers advanced
                    hospitals to get the best for themselves and their families.
                    But as we all know, more advanced treatments come
                    hand-in-hand with higher prices. Getting an emergency loan
                    in these situations can enable you to smoothly receive
                    medical treatment at any reputed hospital of your choice.
                  </p>
                </li>
              </ol>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col>
              <h3 className="text-center">
                How does <span className="text-warning">Rupeezo</span> help
                people to take a marriage loan in India?
              </h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Rupeezo is an online lending aggregator platform with
                connections with some of the best lending institutions in the
                world. Ruppezo allows users to browse through a range of loans
                for any particular category and select the best loan for their
                requirements.
              </p>
              <p>
                Many banking institutions accept Rupeezo’s streamlined
                application process; therefore, people can complete applications
                on Rupeezo and have various loan options open to them. The
                process is hassle-free, requires minimal documentation, and
                applicants receive constant updates on the processing of their
                applications. Marriage loans on Rupeezo start at 11.99% and
                require only basic documentation.
              </p>
              <p>
                Wedding loans are among the most common loans available but are
                unused because many people are unaware of the benefits. Marriage
                loans in India have low-interest rates, require minimum
                documentation and provide a range of benefits that can help the
                bride and groom have their dream wedding.
              </p>
            </Col>
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
                      What is a marriage loan in India?{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                      It is a personal loan provided by many banking and
                      financial institutions. The loan serves to provide
                      financial support for any couple getting married. The
                      amount received under a marriage loan can be used to plan
                      any wedding-related function including, but not limited to
                      Mehendi, sangeet, haldi, wedding ceremony, reception, etc.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Why should I take a personal loan for my marriage?
                    </Accordion.Header>
                    <Accordion.Body>
                      Personal loans for a wedding can help you celebrate this
                      milestone without any financial barriers. Wedding loans
                      serve to provide financial assistance. The amount can also
                      be used to pay for wedding-related expenses, including
                      caterers, wedding halls, gifts, wedding shopping, clothes,
                      venues, etc. This ensures you can have your dream wedding
                      without any barriers.
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
                      How do you calculate a marriage loan’s EMI?
                    </Accordion.Header>
                    <Accordion.Body>
                      EMI is calculated as the principal amount + interest paid
                      on loan. You can use an online EMI calculator to calculate
                      the monthly instalment you need to pay. The formula is:
                      <p>
                        <strong>EMI = [P ✕ R ✕ (1+R)^N] / [(1+R)^N-1]</strong>
                      </p>
                      Where P = principal amount, R = interest rate, and N =
                      number of monthly instalments you need to pay. N is
                      calculated as:
                      <p>
                        <strong>N = Loan tenure ✕ 12</strong>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What is the eligibility criteria of a marriage loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      The eligibility depends on the applicant’s age, monthly
                      income and CIBIL Score. Ideally, the applicant should be
                      between 24-60 years old, have a minimum monthly income of
                      INR 20,000 per month, and a CIBIL score of 700-900. Some
                      lending institutions also require applicants to be
                      citizens of India or NRIs and have a good credit history.
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
                      What are the documents required when applying for a
                      marriage loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      Only four documents are required: Proof of ID, address,
                      age and income. Applicants can use a PAN card, Aadhar
                      card, driving licence, voter ID, passport, ration card,
                      National Rural Employment Guarantee Act (NEGRA) job card,
                      utility bill (electricity, water, internet, etc.) or
                      rental agreement for proof of ID, address and age. Proof
                      of Income is given in the form of 3 recent payslips (for
                      salaried) and three recent months’ bank statements (for
                      self-employed/business owners).
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What are processing fees for a marriage loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      The processing fees for a marriage loan are up to 2.50% of
                      the total loan amount. The processing fee may change from
                      institution to institution.
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
                      What is the marriage loan interest rate at Rupeezo?
                    </Accordion.Header>
                    <Accordion.Body>
                      The marriage loan interest rate at Rupeezo starts from
                      11.99%.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How fast are the marriage loans approved at Rupeezo?
                    </Accordion.Header>
                    <Accordion.Body>
                      We provide swift approvals for marriage loans. The
                      approval can take from 24 hours to one week, depending
                      upon the case and the documents provided by the applicant.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            {/* fifth row */}
            <Row className="mb-5">
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How can I complete the repayment of my marriage loan?
                    </Accordion.Header>
                    <Accordion.Body>
                      Repayment of the same in India can be made using cheques,
                      wire transfers, UPI payment, bank transfer (NEFT and
                      IMPS), and digital wallets, including GPay, PhonePe,
                      PayTM, etc.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={6}>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      What are the factors that affect marriage loans?
                    </Accordion.Header>
                    <Accordion.Body>
                      Marriage loan amounts depend upon your age, credit
                      history, CIBIL score and monthly income. Some institutions
                      may also consider salary history or earning history when
                      deciding the loan amount, you receive.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Stack>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default WeddingLoan;
