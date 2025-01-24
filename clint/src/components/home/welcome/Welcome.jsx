import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import welcomeLadyImg from "../../img/welcomeLadyImg.png";

const Welcome = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Set a timeout to close the modal after 5 seconds
    const timer = setTimeout(() => setShow(false), 900);

    // Cleanup timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal
      show={show}
      centered
      style={{
        background: "black",
      }}
    >
      <Modal.Body
        style={{
          textAlign: "center",
          background: "black",
          border: "none",
          boxShadow: "none",
        }}
      >
        <img
          src={welcomeLadyImg}
          alt="Welcome"
          style={{
            width: "100%",
            maxWidth: "250px",
          }}
        />
      </Modal.Body>
    </Modal>
  );
};

export default Welcome;
