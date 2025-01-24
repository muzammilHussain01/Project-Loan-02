import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import Cookies from "js-cookie";
import axios from "axios";
import Employee2 from "./employee/Employee2";
import Employee1 from "./employee/Employee1";
import Employee3 from "./employee/Employee3";
import Employee4 from "./employee/Employee4";
import Employee5 from "./employee/Employee5";
import { Container, Row, Col } from "react-bootstrap";

const Employee = () => {
  // User data from cookies
  const userName = Cookies.get("userName");
  const email = Cookies.get("email");
  const userAccess = Cookies.get("userAccess");

  // States
  const [allUsers, setAllUsers] = useState([]);
  const [taskInfoFromServer, setTaskInfoFromServer] = useState([]);
  const [assignedTaskToSingleUser, setAssignedTaskToSingleUser] = useState({});
  const [tasks, setTasks] = useState([]);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [show, setShow] = useState(false);
  const [userInfo, setUserInfo] = useState({ user: "", user_email: "" });
  const [newTask, setNewTask] = useState({
    customerEmail: "",
    status: "Pending",
  });

  // Fetch tasks from the server
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/taskRoute/assignedTask"
        );
        setTaskInfoFromServer(response.data.taskDataFromServer);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);
  console.log(taskInfoFromServer);
  // Fetch verified users (admin only)
  useEffect(() => {
    const fetchUsersData = async () => {
      if (userAccess === "1") {
        try {
          const response = await axios.get(
            "http://localhost:3000/api/user/getVarifiedUser"
          );
          setAllUsers(response.data.users);
        } catch (error) {
          console.error("Error fetching verified users:", error);
        }
      }
    };
    fetchUsersData();
  }, [userAccess]);
  // Open task modal for a specific user
  const handleOpenTaskModel = (user, index) => {
    setAssignedTaskToSingleUser(taskInfoFromServer[index]);
    setShow(true);
  };

  // Close task modal
  const handleHideTaskModel = () => setShow(false);

  // Submit new task
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const taskDetails = { ...newTask, ...userInfo };
    setTasks([...tasks, taskDetails]);
    setNewTask({ customerEmail: "", status: "Pending" });
    setShowTaskModal(false);

    // Send task data to server
    const sendTaskData = async () => {
      try {
        await axios.patch(
          "http://localhost:3000/api/taskRoute/task",
          taskDetails
        );
      } catch (error) {
        console.error("Error submitting task:", error);
      }
    };
    sendTaskData();
  };

  // Assign user info for a new task
  const handleUserInfo = (user, user_email) =>
    setUserInfo({ user, user_email });

  return (
    <>
      {/* Task Modal */}
      <Employee3
        show={show}
        assignedTaskToSingleUser={assignedTaskToSingleUser}
        handleHideTaskModel={handleHideTaskModel}
      />

      <div id="worker-info" className="section container">
        <Employee1 userName={userName} email={email} />
      </div>

      {userAccess === "1" ? (
        <>
          <Container className="mt-4">
            <Row className="border-bottom pb-2 mb-3">
              <Col xs={3} className="fw-bold">
                User
              </Col>
              <Col xs={2} className="fw-bold">
                Assigned
              </Col>
              <Col xs={2} className="fw-bold">
                Pending
              </Col>
              <Col xs={2} className="fw-bold">
                Completed
              </Col>
              <Col xs={3} className="fw-bold">
                Assign New Task
              </Col>
            </Row>

            {allUsers.map((userData, index) => (
              <Employee5
                key={index}
                userData={userData}
                taskInfoFromServer={taskInfoFromServer}
                index={index}
                onOpenTaskModal={handleOpenTaskModel}
                onAssignNewTask={(user) => {
                  setShowTaskModal(true);
                  setNewTask({ customerEmail: "", status: "Pending" });
                  handleUserInfo(user.name, user.email);
                }}
              />
            ))}
          </Container>

          {/* Assign New Task Modal */}
          <Employee4
            onHide={() => setShowTaskModal(false)}
            showTaskModal={showTaskModal}
            handleTaskSubmit={handleTaskSubmit}
            value={newTask.customerEmail}
            onChange={(e) =>
              setNewTask({ ...newTask, customerEmail: e.target.value })
            }
          />
        </>
      ) : (
        <Employee2 />
      )}
    </>
  );
};

export default Employee;
