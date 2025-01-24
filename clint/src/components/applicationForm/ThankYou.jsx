import React from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";

const ThankYou = (props) => {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={false}
      centered // Ensures the modal is centered
    >
      <Modal.Header>
        <Modal.Title>Thank You!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container className="form-all">
          <Row className="thankyou-wrapper" style={{ textAlign: "center" }}>
            <Col xs={12}>
              <p className="thank-you-icon">
                <Image
                  src="https://cdn.jotfor.ms/img/Thankyou-iconV2.png?v=0.1"
                  alt="Thank you check icon"
                  width={153}
                  height={156}
                  fluid
                />
              </p>
            </Col>
            <Col xs={12}>
              <h1 className="thankyou-main-text ty-text">Thank You!</h1>
              <p className="thankyou-sub-text ty-text">
                Your submission has been received.
              </p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default ThankYou;
