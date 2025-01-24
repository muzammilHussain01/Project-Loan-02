import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import {
  LocalPhone as LocalPhoneIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  PhoneEnabled as PhoneEnabledIcon,
} from "@mui/icons-material";

const ContactUsModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true);

  // Auto-close modal after 10 seconds
  useEffect(() => {
    if (show) {
      const timer = setTimeout(handleClose, 10000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={handleOpen} className="shadow fw-bold bg-transparent">
        <PhoneEnabledIcon style={{ fontSize: "28px", color: "#000" }} />
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <Container>
            {/* Phone contact */}
            <Row className="mt-3">
              <Col>
                <a href="tel:7291029298">
                  <Row>
                    <Col xs="auto">
                      <LocalPhoneIcon
                        style={{ fontSize: "28px", color: "#000" }}
                      />
                    </Col>
                    <Col>
                      <p className="font-600 text-16">+91-7291029298</p>
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>

            {/* Email contact */}
            <Row className="mt-3">
              <Col>
                <a href="mailto:support@lendbox.in">
                  <Row>
                    <Col xs="auto">
                      <EmailIcon style={{ fontSize: "28px", color: "#000" }} />
                    </Col>
                    <Col>
                      <p className="font-600 text-16">support@lendbox.in</p>
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>

            {/* Social media contacts */}
            <Row className="mt-3">
              <Col>
                <a href="https://www.facebook.com/LendBox">
                  <Row>
                    <Col xs="auto">
                      <FacebookIcon style={{ fontSize: "28px" }} />
                    </Col>
                    <Col>
                      <p className="font-600 text-16">Follow us on Facebook</p>
                    </Col>
                  </Row>
                </a>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactUsModal;
