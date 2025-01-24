import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard"; // Adjust the import path if needed
import Cookies from "js-cookie"; // Import the js-cookie library

const ProtectedRoute = () => {
  const [show, setShow] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const isAuthenticated = Cookies.get("jwt_token"); // Get the token from cookies

  useEffect(() => {
    if (!isAuthenticated) {
      setShow(true); // Show the modal if not authenticated
      const timer = setTimeout(() => {
        setShow(false); // Close the modal after 1 second
        setIsRedirecting(true); // Trigger redirect
      }, 2000);
      return () => clearTimeout(timer); // Clean up the timeout
    }
  }, [isAuthenticated]);

  if (isRedirecting) {
    return <Navigate to="/" />; // Redirect to login page
  }

  return (
    <>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <>
          {/* Modal shown to unauthenticated users */}
          <Modal show={show} centered>
            <Modal.Header closeButton>
              <Modal.Title>Unauthorized Access</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              You are not authenticated. Redirecting to the home page...
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default ProtectedRoute;
