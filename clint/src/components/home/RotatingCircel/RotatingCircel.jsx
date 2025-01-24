import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const RotatingCircle = () => {
  return (
    <>
      <Container>
        <Row>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center", // Centers horizontally
            }}
          >
            <span
              style={{
                display: "inline-block", // Ensures smooth rotation
                animation: "rotate 10s linear infinite", // Apply the rotation animation
                text: "center",
                width: "50px",
                height: "50px",
                border: "5px solid red",
                borderRadius: "50%",
              }}
            >
              <span
                style={{
                  display: "inline-block", // Ensures smooth rotation
                  animation: "rotate 10s linear infinite", // Apply the rotation animation
                  text: "center",
                  width: "2px",
                  height: "2px",
                  border: "5px solid white",
                  borderRadius: "50%",
                }}
              ></span>
            </span>
          </Col>
        </Row>
      </Container>

      {/* Inline @keyframes */}
      <style>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </>
  );
};

export default RotatingCircle;
