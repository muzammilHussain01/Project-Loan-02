import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import connectUs from "../img/contactUs.png";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs ";
import ConnectUsContent from "./ConnectUsContent";

const ConnectUs1 = () => {
  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <Breadcrumbs />
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          backgroundImage: `url(${connectUs})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "50vh",
          marginTop: "50px",
        }}
        className="bg-info"
      >
        <Container className="mt-5">
          <Row>
            <Col>
              <Breadcrumbs />
            </Col>
          </Row>
          <Row className="p-5 text-center">
            <Col className="p-5">
              <h1>
                Connect With <span className="text-warning">Us</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
      <ConnectUsContent />
    </>
  );
};

export default ConnectUs1;
