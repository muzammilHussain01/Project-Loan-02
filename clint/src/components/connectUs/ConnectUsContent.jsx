import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ConnectUsContent = () => {
  return (
    <>
      <Container
        style={{
          boxShadow: "2px 2px 10px black",
          marginTop: "10px",
          fontWeight: "lighter",
        }}
      >
        <Row>
          <Col>
            Have a question, feedback, or need support? Reach out to us—we’d
            love to hear from you! Our team is dedicated to providing you with
            the best service and ensuring your experience is seamless.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConnectUsContent;
