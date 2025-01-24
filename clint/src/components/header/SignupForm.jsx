import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Modal from "react-bootstrap/Modal";
const SignupForm = () => {
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [isLogIn, setIsLogIn] = useState();
  const [cookies, setCookies] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("jwt_token");

    if (token) {
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
    setCookies(token);
  }, [isLogIn]);

  const handleShowMobileModal = () => setShowMobileModal(true);
  const handleCloseMobileModal = () => setShowMobileModal(false);
  const handleShowSignupModal = () => setShowSignupModal(true);
  const handleCloseSignupModal = () => setShowSignupModal(false);

  const handleLogout = async () => {
    try {
      Cookies.remove("jwt_token");
      Cookies.remove("userAccess");
      Cookies.remove("userName");
      Cookies.remove("email");
      setPopupMessage("Logout Successfully");
      setIsLogIn(false);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
      navigate("/");
    } catch (error) {
      console.log("Please login first.");
    }
  };

  return (
    <>
      <Modal show={show}>
        <Modal.Body
          style={{
            textAlign: "center",
            color: "green",
          }}
        >
          {popupMessage}
        </Modal.Body>
      </Modal>

      {isLogIn ? (
        <Button
          variant="outline-danger"
          className="text-transparent fw-bold"
          onClick={handleLogout}
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="outline-success"
          className="text-transparent fw-bold"
          onClick={handleShowMobileModal}
        >
          Login
        </Button>
      )}

      <LoginModal
        show={showMobileModal}
        handleClose={handleCloseMobileModal}
        handleShowSignup={handleShowSignupModal}
      />
      <SignupModal
        show={showSignupModal}
        handleClose={handleCloseSignupModal}
        setIsLogIn={setIsLogIn} // Passing setIsLogIn for login state update
      />
    </>
  );
};

export default SignupForm;
