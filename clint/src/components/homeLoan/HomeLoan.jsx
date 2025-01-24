import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loanPath from "../img/loanPath.png";

import ApplicationForm from "../applicationForm/ApplicationForm";
const HomeLoan = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundColor: "black",
          position: "relative",
          backgroundImage: `url(${loanPath})`,
          // Adjusted to prevent cropping
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          fontFamily: "monospace",
          height: "50vh", // Increased height for more visibility
        }}
      ></div>

      <div>
        <div
          style={{
            width: "100%",
            backgroundSize: "cover",
            backgroundColor: "skyblue",
            height: "350vh", // Increased height for more visibility
          }}
        >
          <Container>
            <Row>
              <Col xs={12}>
                <ApplicationForm />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HomeLoan;
