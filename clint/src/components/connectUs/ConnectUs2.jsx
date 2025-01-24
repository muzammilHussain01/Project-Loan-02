import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import QueryForm from "./QueryForm";
import AddressMap from "./AddressMap";

const ConnectUs2 = () => {
  return (
    <>
      <Container>
        <Row md={12}>
          <Col md={6}>
            <QueryForm />
          </Col>
          <Col md={6}>
            <AddressMap />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ConnectUs2;
