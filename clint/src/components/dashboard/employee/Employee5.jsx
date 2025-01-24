import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const Employee5 = ({
  userData,
  taskInfoFromServer,
  index,
  onOpenTaskModal,
  onAssignNewTask,
}) => {
  const { user } = userData;

  // Extract user's task info
  const taskInfo = taskInfoFromServer.find(
    (task) => task.user_email === user.email
  );

  return (
    <Row
      className="align-items-center border-bottom py-2"
      style={{
        cursor: "pointer",
        fontSize: "12px",
        color: "#495057",
      }}
    >
      <Col
        xs={3}
        onClick={() =>
          onOpenTaskModal(
            `${user.firstName} ${user.middleName} ${user.lastName}`,
            index
          )
        }
      >
        {`${user.firstName} ${user.middleName} ${user.lastName}`}
      </Col>

      {taskInfo ? (
        <>
          <Col xs={2}>{taskInfo.assignedTask}</Col>
          <Col xs={2}>{taskInfo.pendingTask}</Col>
          <Col xs={2}>{taskInfo.completedTask}</Col>
        </>
      ) : (
        <>
          <Col xs={2}>Not Assigned</Col>
          <Col xs={2}>Not Assigned</Col>
          <Col xs={2}>Not Assigned</Col>
        </>
      )}

      <Col xs={3}>
        <FaPlus
          className="me-2"
          onClick={() =>
            onAssignNewTask({
              name: `${user.firstName} ${user.middleName} ${user.lastName}`,
              email: user.email,
            })
          }
          style={{ cursor: "pointer", color: "#17a2b8" }}
        />
      </Col>
    </Row>
  );
};

export default Employee5;
