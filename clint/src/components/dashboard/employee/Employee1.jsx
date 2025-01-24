import React from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  Table,
} from "react-bootstrap"; // Bootstrap components
const Employee1 = (props) => {
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    return currentHour < 12
      ? "Good Morning"
      : currentHour < 18
      ? "Good Afternoon"
      : "Good Evening";
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <img
              src="https://via.placeholder.com/150"
              style={{ width: "50px" }}
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </Col>
          <Col>
            <span style={{ color: "#17a2b8" }}>{getGreeting()}</span>,
            <span className="sm-fs-5" style={{ color: "black" }}>
              {props.userName?.toUpperCase()}
            </span>
          </Col>
          <Col>
            <h6 className="text-muted" style={{ float: "right" }}>
              {props.email}
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Employee1;
