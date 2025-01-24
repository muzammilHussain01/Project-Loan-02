import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled, { keyframes } from "styled-components";
import login from "../img/login.avif";
import axios from "axios";

const signupValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("required *"),
  middleName: Yup.string().required("required *"),
  lastName: Yup.string().required("required *"),
  email: Yup.string().email("Invalid email address").required("required *"),
  reEnterEmail: Yup.string()
    .oneOf([Yup.ref("email"), null], "Emails must match")
    .required("required *"),
  password: Yup.string().required("required *"),
  dob: Yup.string().required("required *"),
  department: Yup.string().required("required *"),
});

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalContent = styled(Modal.Body)`
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 10px;
  font-weight: bold;
`;

const SignupModal = ({ show, handleClose, setIsLogIn }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSignup = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/generalSignup",
        values
      );

      setPopupMessage(response.data.message);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 1000);
      handleClose(); // Close the signup modal
      setIsLogIn(true); // Update login state
    } catch (error) {
      if (error.response.status === 400) {
        setPopupMessage(error.response.data.message);
        setShowSuccessModal(true);
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 5000);
        handleClose(); // Close the signup modal
      } else if (error.response.status === 500)
        setPopupMessage(error.response.data.message);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 5000);
      handleClose(); // Close the signup modal
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {showSuccessModal && (
        <div
          className="modal show"
          style={{
            display: "block",
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -10%)",
            textAlign: "center",
            zIndex: "1050",
          }}
        >
          <p className="fs-5 fw-medium text-success">{popupMessage}</p>
        </div>
      )}
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        style={{ marginTop: "50px" }}
        centered
      >
        <ModalContent>
          <Formik
            initialValues={{
              firstName: "",
              middleName: "",
              lastName: "",
              email: "",
              reEnterEmail: "",
              password: "",
              dob: "",
              department: "",
            }}
            validationSchema={signupValidationSchema}
            onSubmit={handleSignup}
          >
            {({ handleSubmit, isSubmitting }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Container>
                  <Row>
                    <Col lg={4} md={4}>
                      <img
                        src={login}
                        alt=""
                        style={{ width: "100%", paddingTop: "120px" }}
                      />
                    </Col>
                    <Col lg={8} md={8}>
                      <Row className="mb-3">
                        <Col lg={12}>
                          <Field
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col lg={12}>
                          <Field
                            type="text"
                            name="middleName"
                            placeholder="Middle name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="middleName"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col lg={12}>
                          <Field
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col lg={12}>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col lg={12}>
                          <Field
                            type="email"
                            name="reEnterEmail"
                            placeholder="Re-enter email"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="reEnterEmail"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col lg={12}>
                          <Field
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col lg={12}>
                          <Field
                            type="date"
                            name="dob"
                            placeholder="Date of Birth"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="dob"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col lg={12}>
                          <Field
                            type="text"
                            name="department"
                            placeholder="Department"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="department"
                            component="div"
                            className="text-danger"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <StyledButton
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                          >
                            Signup
                          </StyledButton>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Form>
            )}
          </Formik>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignupModal;
