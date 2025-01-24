import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";
import Cookies from "js-cookie";
import { Alert, Container, Dropdown, DropdownButton } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
const Employee2 = () => {
  const [taskInfoFromServer, setTaskInfoFromServer] = useState([]);
  const [taskEmail, setTaskEmail] = useState([]);
  const [taskCount, setTaskCount] = useState(0);
  const [pendingTaskCount, setPendingTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [dropdownValue, setDropdownValue] = useState("");
  const [clintData, setClintData] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    try {
      const fetchClintData = async () => {
        // if (!dropdownValue) {
        //   return;
        // }
        const applicationData = await axios.get(
          "http://localhost:3000/api/client/getClintApplicationData"
        );
        const clintsEmail = applicationData.data.map((data) => {
          return data.email;
        });
        const filteredClintsEmail = clintsEmail.filter((clintsEmail) => {
          return clintsEmail === dropdownValue;
        });

        const finalData = applicationData.data.filter((data) => {
          return data.email === filteredClintsEmail[0];
        });
        setClintData(finalData);
      };

      fetchClintData();
    } catch (error) {
      console.log(error);
    }
  }, [dropdownValue]);
  useEffect(() => {
    const fetchTaskData = async () => {
      try {
        const email = Cookies.get("email");
        const response = await axios.get(
          "http://localhost:3000/api/taskRoute/assignedTask"
        );

        const tasks = response.data.taskDataFromServer || [];

        setTaskInfoFromServer(tasks);

        if (email) {
          const userTasks = tasks.find((task) => task.user_email === email);

          if (userTasks) {
            setTaskEmail(userTasks.customerEmail || []);
            setTaskCount(userTasks.customerEmail.length || 0);
            setPendingTaskCount(userTasks.pendingTask || 0);
            setCompletedTaskCount(userTasks.completedTask || 0);
          }
        }
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    };

    fetchTaskData();
  }, [dropdownValue]);
  console.log(dropdownValue);
  console.log(clintData);

  return (
    <>
      {/* Task Emails Section */}
      <div id="worker-alerts" className="section mt-4">
        <Modal
          show={show}
          onHide={handleClose}
          animation={false}
          className="animate__animated animate__zoomIn"
          fullscreen
        >
          <Modal.Header closeButton>
            <Modal.Title>Client Details</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "lightGray", padding: "1rem" }}>
            {/* Container for Table */}
            <Container xs={12} sm={6} md={3}>
              {/* Header Row */}
              <Row
                className="mb-3 bg-primary text-white text-center"
                style={{ fontSize: "0.9rem", borderBottom: "1px solid black" }}
              >
                <Col xs={6} sm={6} md={3} lg={2}>
                  Name
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                  Mobile
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                  Loan Purpose
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                  Desired Loan
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                  City
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                  Occupation
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                  Address
                </Col>
                <Col xs={6} sm={6} md={3} lg={2}>
                  Comment
                </Col>
              </Row>

              {/* Data Rows */}
              {clintData.length > 0 ? (
                clintData.map((data, index) => (
                  <Row
                    key={index}
                    className="mb-3 text-black text-center"
                    style={{
                      fontSize: "0.9rem",
                      borderBottom: "1px solid white",
                    }}
                  >
                    <Col xs={6} sm={6} md={3} lg={2}>
                      {`${data.firstName} ${data.lastName}`}
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={2}>
                      {data.mobile}
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={2}>
                      {data.loanPurpose}
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={2}>
                      {data.desiredLoan} Rs.
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={2}>
                      {data.city}
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={2}>
                      {data.occupation}
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={2}>
                      {data.address}
                    </Col>
                    <Col
                      xs={6}
                      sm={6}
                      md={3}
                      lg={2}
                      style={{ textAlign: "center" }}
                    >
                      {data.additionalComments}
                    </Col>
                  </Row>
                ))
              ) : (
                <Row>
                  <Col>
                    <p className="text-center">No client data available.</p>
                  </Col>
                </Row>
              )}
            </Container>
          </Modal.Body>
        </Modal>

        <Container>
          <DropdownButton
            title=" Task "
            variant="primary"
            style={{
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
              fontWeight: "bold",
            }}
          >
            {taskEmail.length > 0 ? (
              taskEmail.map((email, index) => (
                <Dropdown.Item
                  key={index}
                  style={{
                    padding: "10px",
                    fontSize: "14px",
                    color: "#495057",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setDropdownValue(email);
                    handleShow();
                  }}
                >
                  {email}
                </Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item
                style={{
                  padding: "10px",
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#856404",
                }}
                disabled
              >
                No task emails found!
              </Dropdown.Item>
            )}
          </DropdownButton>
        </Container>
      </div>

      {/* Alerts Section */}
      <div id="worker-alerts" className="section mt-4">
        <Container>
          <Alert variant="info">
            <FaCheckCircle className="me-2" />
            <strong>{taskCount}</strong> tasks assigned this week. Keep up the
            good work!
          </Alert>
          <Alert variant="success">
            <FaCheckCircle className="me-2" />
            <strong>{completedTaskCount}</strong> tasks completed this week.
            Great job!
          </Alert>
          <Alert variant="warning">
            <FaExclamationTriangle className="me-2" />
            You have <strong>{pendingTaskCount}</strong> pending tasks. Don't
            forget to complete them.
          </Alert>
        </Container>
      </div>
    </>
  );
};

export default Employee2;
