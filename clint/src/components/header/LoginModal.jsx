import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import login from "../img/login.avif";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setAccess } from "../redux/slices/userSlice";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("required *"),
  password: Yup.string().required("required *"),
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

const LoginModal = ({ show, handleClose, handleShowSignup, setIsLogIn }) => {
  const [popupMessage, setPopupMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogIn = async (values) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        values
      );
      if (response.data.userData.user.email === "access@gmail.com") {
        Cookies.set("userAccess", 1);
        Cookies.set("email", "access@gmail.com");
        Cookies.set("userName", "access");
      } else {
        const userAccess = response.data.userData.user.access;
        Cookies.set("userAccess", userAccess);
        const firstName = response.data.userData.user.firstName;
        const middleName = response.data.userData.user.middleName;
        const lastName = response.data.userData.user.lastName;
        Cookies.set("userName", `${firstName}  ${middleName}  ${lastName}`);
        const email = response.data.userData.user.email;
        Cookies.set("email", email);
      }
      const userAccess = response.data.userData.user.access;

      if (response.data.message === "Login Successful.") {
        Cookies.set("jwt_token", response.data.token);
        setPopupMessage(response.data.message);
        setShowSuccessModal(true);

        // Dispatch the access data to the Redux store
        dispatch(setAccess(userAccess));

        setTimeout(() => {
          setShowSuccessModal(false);
        }, 1000);
        navigate("/dashboard");
        window.location.reload();
      }
    } catch (error) {
      setPopupMessage(error.response.data.message);
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 1000);
      setShowSuccessModal(true);
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
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <ModalContent>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginValidationSchema}
            onSubmit={handleLogIn}
          >
            {({ handleSubmit }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Container>
                  <Row>
                    <Col lg={4} md={4}>
                      <img src={login} alt="" style={{ width: "100%" }} />
                    </Col>
                    <Col lg={8} md={8}>
                      <Row className="mb-3">
                        <Col lg={12}>
                          <Field
                            type="text"
                            name="email"
                            placeholder="Username/email"
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
                      <Row>
                        <Col lg={12}>
                          <StyledButton
                            variant="primary"
                            type="submit"
                            onClick={() => {
                              handleSubmit();
                              handleClose();
                            }}
                          >
                            Login
                          </StyledButton>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <StyledButton
                            variant="danger"
                            onClick={() => {
                              handleClose();
                              handleShowSignup();
                            }}
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

export default LoginModal;
