import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import pLoanbracket from "../../img/pLoanbracket.png";

import arrowDirection from "../../img/arrowDirection.svg";
const Content = () => {
  return (
    <>
      <div>
        <Container>
          <moveToTop />
          <Row className="pt-4">
            <Col>
              <h2 className="section-heading text-center pb-4">
                <span className="light-font">
                  Apply for Pre Approved Instant Loan at{" "}
                </span>
                <br />
                <strong>Rupeezo in India</strong>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col lg={8} md={8} sm={6}>
              <h3 className="sec-sub-heading pt-2">What is a Loan in India?</h3>
              <p className="pt-3 fontWait">
                In simple terms, a loan is a sum of money that one party lends
                to another, with the expectation of full repayment plus interest
                in the future. Loans are typically granted for a fixed period,
                and the principal amount with added interest must be repaid upon
                maturity.
                <br />
                In India, many financial institutions and commercial banks offer
                a variety of loan products, categorized into secured and
                unsecured loans. While secured loans (such as home loans)
                require collateral, unsecured loans (such as personal loans ) do
                not.
              </p>
            </Col>
            <Col lg={4} md={4} sm={6}>
              <img
                src={pLoanbracket}
                alt="pLoanbracket"
                style={{ width: "100%", maxWidth: "450px" }}
              />
            </Col>
          </Row>
          {/* 123 */}
          <Row>
            <Col lg={4} md={4} sm={6}>
              <img
                src={arrowDirection}
                alt="pLoanbracket"
                style={{ width: "100%", maxWidth: "450px" }}
              />
            </Col>
            <Col lg={8} md={8} sm={6}>
              <p className="pt-3 fontWait">
                Being one of the pre-eminent loan aggregation platforms, we deal
                in providing a hassle-free environment to ease out the loan
                application process and accommodates varied other elements that
                add to this charm. The following attributes are sure to make us
                your one-stop solution to all your loan-related complications:
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Content;
