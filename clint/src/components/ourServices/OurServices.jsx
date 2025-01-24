import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import ourServices from "../img/ourServices.jpg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./OurServices.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Col, Row } from "react-bootstrap";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";
import MoveToTop from "../moveToTop/MoveToTop";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs ";
const OurServices = () => {
  const cardHeight = 200;

  // Define content for each card
  const cardContent = [
    { step: 1, text: "Log on to our website or open our app." },
    { step: 2, text: "Choose which loan you want." },
    { step: 3, text: "Decide the amount of your loan." },
    {
      step: 4,
      text: "Provide your information like mobile number, email, PAN card, etc.",
    },
    { step: 5, text: "Receive a notification from us in minutes." },
  ];
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <Container></Container>
      </div>
      <div
        style={{
          position: "relative",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url(${ourServices})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Breadcrumbs />
        <Container>
          <Row className="p-5">
            {/* <Col xs={6}></Col> */}
            <Col className="text-end pl-5 pt-5 fw-bold fs-5">
              <h1 className="pt-5">
                <span className="text-danger">Happy</span> To
                <span className="text-warning"> Help Reducing</span>
                <span className="text-black"> </span>Your
                <span className="text-black"> Debt!</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container>
          <Row>
            <Col className="text-center text-primary">
              <h1>Online Marketplace for Loan in India</h1>
            </Col>
          </Row>
          <Row>
            <Col className=" text-primary">
              <h3>Who We Are:</h3>
              <p className=" text-black">
                We are one of the top loan providers in India. We help our
                clients get instant loans. Our expertise of 20 years allowed us
                to make loan provision efficient and seamless. Our affiliation
                with all the leading banks and Non-Banking Financial Companies
                (NBFCs) is ideal for our customers from all over the country.
              </p>
              <h3>What We Offer:</h3>
              <p className=" text-black">
                We act as an intermediary between you and financial
                institutions. So our platform is your one-stop solution to get
                the following loans:
              </p>
            </Col>
            <ol>
              <li>
                <Link to="/p-loan">Personal Loan</Link>
              </li>
              <li>
                <Link to="/business-loan">Business Loan</Link>
              </li>
              <li>
                <Link to="/vehicle-loan">Vehicle Loan</Link>
              </li>
              <li>
                <Link to="/medical-loan">Medical Loan</Link>
              </li>
              <li>
                <Link to="/wedding-loan">Wedding Loan</Link>
              </li>
              <li>
                <Link to="/education-loan">Education Loan</Link>
              </li>
              <li>
                <Link to="/travel-loan">Travel Loan</Link>
              </li>
            </ol>
            <p>
              Our highest loan approval rate sets us apart from other loan
              providers. All you need is a decent credit score and the necessary
              documentation. Then, we will assist you in getting quick loan
              sanctions from the most suitable lender.
            </p>
            <p>
              Another pillar of our foundation is customer transparency. In
              today’s day and age, we understand your privacy concerns. Your
              data and information are encrypted and thus secure. Our loans are
              collateral-free and provided at a low rate of interest. Our
              flexible eligibility criteria combined with simple documentation
              make us the best loan company in India.
            </p>
            <h3 className=" text-primary">Our Mission:</h3>
            <p>
              Our mission is to make loan provision hassle-free and accessible
              for all. Our flexible tenures and modes of repayment are a
              testament to our dedication.
            </p>
            <h3 className=" text-primary">Our Vision:</h3>
            <p>
              Our vision is to keep increasing transparency to establish our
              credibility and trustworthiness. At the centre of the drive for
              our customer growth is transparency. Technology is one such tool
              for achieving our goals. For instance, our Artificial Intelligence
              (AI) engine equipped us to erase physical documentation from our
              equation. We hope to keep advancing and finding more innovative
              ways to serve our customers.
            </p>
            <h3 className=" text-primary">Our Core Values:</h3>
            <p>
              We follow a customer-first policy at Rupeezo. Our core values
              concentrate on assisting our customers by prioritizing them over
              our profits. In more than 20 years of business, we have recorded
              more than 10k satisfied customers. We have assisted in securing ₹
              37,16,86,000 + worth of loan approvals. Besides making loan
              acquisition simple, we also pay close attention to our customers'
              financial requirements and strive to meet them to the best of our
              ability. Customers are our brand ambassadors, and we make every
              effort not to disillusion them.
            </p>
            <p>
              Rupeezo does not require any pledge of security as we trust our
              clients. We give adjustable tenures and keep them collateral-free.
              After all, you should not lose your car while buying your home!
            </p>
            <p>
              Banking in India is infamous for its cumbersome paperwork. As a
              loan service provider, we believe in keeping documentation to a
              minimum. This saves time and effort and promotes eco-friendliness.
              Moreover, it plays a role in the safekeeping of your private
              information.
            </p>
            <p>
              Another step towards sustainability is online disbursal. Not only
              is the application and processing online, but so is the
              transaction. After your loan gets approved, your amount will be
              credited to your bank account directly.
            </p>
            <h3 className=" text-primary">
              Rupeezo Online Process for Loans in India
            </h3>
            <p>
              Our application processing is easy and quick. You need to follow
              these steps:
            </p>
          </Row>
          <Container>
            <Row className="justify-content-center">
              {cardContent.map((content, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="d-flex align-items-stretch mb-3"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: "100%" }}
                  >
                    <Card
                      style={{
                        height: `${cardHeight}px`,
                        backgroundColor:
                          index % 2 === 0 ? "#f0f0f0" : "#e0e0e0",
                      }}
                      className="text-center"
                    >
                      <Card.Header>
                        <strong>Step-{content.step}</strong>
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>{content.text}</Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>

          <p>
            After these steps, you are all set to get your loan! Rupeezo has
            worked hard to create a user-friendly platform for loan aggregation.
            We understand your concerns and difficulties, which makes us the
            best choice in the market. So why wait? Simply apply for a loan at
            our site/app and let us make your dreams come true! For Loan Related
            information, Click on Blogs
          </p>
        </Container>
      </div>
      <MoveToTop />
      <Footer />
    </>
  );
};

export default OurServices;
