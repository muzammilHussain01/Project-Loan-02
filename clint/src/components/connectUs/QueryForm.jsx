import React from "react";
import { Container, Row, Col, Form, Button, Spinner } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // For validation

import axios from "axios";

// Validation schema for Formik
const validationSchema = Yup.object({
  first_name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters and spaces are allowed.")
    .max(50, "Maximum 50 characters allowed.")
    .required("First name is required."),
  last_name: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only letters and spaces are allowed.")
    .max(50, "Maximum 50 characters allowed.")
    .required("Last name is required."),
  mobile: Yup.string()
    .matches(/^[0-9]+$/, "Only digits are allowed.")
    .length(10, "Mobile number must be exactly 10 digits.")
    .required("Mobile number is required."),
  email: Yup.string()
    .email("Invalid email format.")
    .max(64, "Maximum 64 characters allowed.")
    .required("Email is required."),
  purpose: Yup.string().required("Please select a purpose."),
  comments: Yup.string(),
});

const QueryForm = () => {
  const handleSubmitQuery = async (values) => {
    try {
      console.log(values);
      const datas = await axios.post(
        "http://localhost:3000/api/query/postQuery",
        values
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container className="pt-5">
        <Row>
          <Col style={{ backgroundColor: "lightgray" }}>
            {/* Form Section with Formik */}
            <Formik
              initialValues={{
                first_name: "",
                last_name: "",
                mobile: "",
                email: "",
                purpose: "",
                comments: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmitQuery(values);
                setSubmitting(false);
              }}
            >
              {({ handleSubmit, isSubmitting }) => (
                <Form onSubmit={handleSubmit} className="p-3">
                  {/* Form Fields */}
                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="first_name">
                        <Form.Label>First Name</Form.Label>
                        <Field
                          name="first_name"
                          as={Form.Control}
                          placeholder="Enter First Name"
                        />
                        <ErrorMessage
                          name="first_name"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="last_name">
                        <Form.Label>Last Name</Form.Label>
                        <Field
                          name="last_name"
                          as={Form.Control}
                          placeholder="Enter Last Name"
                        />
                        <ErrorMessage
                          name="last_name"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="mobile">
                        <Form.Label>Mobile</Form.Label>
                        <Field
                          name="mobile"
                          as={Form.Control}
                          placeholder="Enter Mobile Number"
                        />
                        <ErrorMessage
                          name="mobile"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Field
                          name="email"
                          as={Form.Control}
                          placeholder="Enter Email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="purpose">
                        <Form.Label>Purpose</Form.Label>
                        <Field
                          name="purpose"
                          as="select"
                          className="w-100 form-control"
                        >
                          <option value="">Select Your Purpose</option>
                          <option value="Career With Us">Career With Us</option>
                          <option value="As business partner/Advertiser">
                            As Business Partner/Advertiser
                          </option>
                          <option value="other">Other</option>
                        </Field>
                        <ErrorMessage
                          name="purpose"
                          component="div"
                          className="text-danger"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="mb-3">
                    <Col>
                      <Form.Group controlId="comments">
                        <Field
                          name="comments"
                          as={Form.Control}
                          // as="textarea"
                          rows={4}
                          placeholder="Comments"
                          className="w-100"
                          style={{ borderRadius: "10px" }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      {isSubmitting ? (
                        <Spinner animation="border" variant="primary" />
                      ) : (
                        <Button
                          type="submit"
                          variant="primary"
                          disabled={isSubmitting}
                          onClick={handleSubmitQuery}
                        >
                          Submit
                        </Button>
                      )}
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default QueryForm;
