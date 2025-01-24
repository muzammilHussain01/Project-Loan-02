import React from "react";
import { Container, Row, Col, Modal } from "react-bootstrap"; // Bootstrap components
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"; // Material UI icon for delete action
import axios from "axios";

const Employee3 = (props) => {
  // Function to handle task deletion
  const handleDeleteSingleTask = async (user_email) => {
    try {
      console.log("Deleting task for:", user_email);

      // Send the user_email to the server via axios
      const response = await axios.patch(
        "http://localhost:3000/api/taskRoute/deleteTask",
        {
          email: user_email, // Send the email as payload
        }
      );

      console.log("Task deleted successfully:", response.data);
      alert("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete the task. Please try again.");
    }
  };

  return (
    <>
      <Modal show={props.show} onHide={props.handleHideTaskModel}>
        <Modal.Header style={{ backgroundColor: "#007bff", color: "white" }}>
          <Modal.Title>
            {props.assignedTaskToSingleUser
              ? `${props.assignedTaskToSingleUser.user}'s Task`
              : ""}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ backgroundColor: "#f8f9fa" }}>
          <Container>
            {/* Table Header */}
            <Row
              style={{
                backgroundColor: "#e9ecef",
                marginBottom: "5px",
                padding: "10px 0",
              }}
            >
              <Col>
                <strong>Customer Email</strong>
              </Col>
              <Col>
                <strong>Remove</strong>
              </Col>
            </Row>

            {/* Task List */}
            {props.assignedTaskToSingleUser &&
            props.assignedTaskToSingleUser.customerEmail &&
            props.assignedTaskToSingleUser.customerEmail.length > 0 ? (
              props.assignedTaskToSingleUser.customerEmail.map(
                (email, index) => (
                  <Row
                    key={index}
                    style={{
                      backgroundColor: "#f1f3f5",
                      marginBottom: "5px",
                      padding: "10px 0",
                    }}
                  >
                    <Col>{email}</Col>
                    <Col>
                      <DeleteOutlinedIcon
                        style={{
                          color: "#dc3545",
                          cursor: "pointer",
                          width: "20px",
                        }}
                        onClick={() => handleDeleteSingleTask(email)} // Pass email to the function
                      />
                    </Col>
                  </Row>
                )
              )
            ) : (
              <h3
                style={{
                  backgroundColor: "#f1f3f5",
                  padding: "50px",
                  opacity: 0.5,
                  textAlign: "center",
                }}
              >
                No Task Assigned Yet
              </h3>
            )}
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Employee3;
