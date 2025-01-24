import React from "react";
import { Modal, Button, Form } from "react-bootstrap"; // Bootstrap components
const Employee4 = (props) => {
  return (
    <>
      <Modal show={props.showTaskModal} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Assign New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.handleTaskSubmit}>
            <Form.Group>
              <Form.Label>Customer's email</Form.Label>
              <Form.Control
                type="text"
                placeholder="@email"
                value={props.value}
                onChange={props.onChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Add Task
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Employee4;
