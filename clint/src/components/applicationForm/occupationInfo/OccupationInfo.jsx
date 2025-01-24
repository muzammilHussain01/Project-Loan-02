import React from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ErrorMessage } from "formik";

const OccupationInfo = ({ handleChange, values, touched, errors }) => {
  return (
    <Row>
      <Col md="6">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="employerFirstName"
            placeholder="Employer's First Name"
            value={values.employerFirstName}
            onChange={handleChange}
            isInvalid={touched.employerFirstName && !!errors.employerFirstName}
          />
          <ErrorMessage
            name="employerFirstName"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="employerLastName"
            placeholder="Employer's Last Name"
            value={values.employerLastName}
            onChange={handleChange}
            isInvalid={touched.employerLastName && !!errors.employerLastName}
          />
          <ErrorMessage
            name="employerLastName"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="12">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={values.occupation}
            onChange={handleChange}
            isInvalid={touched.occupation && !!errors.occupation}
          />
          <ErrorMessage
            name="occupation"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="12">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="experience"
            placeholder="Experience"
            value={values.experience}
            onChange={handleChange}
            isInvalid={touched.experience && !!errors.experience}
          />
          <ErrorMessage
            name="experience"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="12">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="monthlyIncome"
            placeholder="Monthly Income ($)"
            value={values.monthlyIncome}
            onChange={handleChange}
            isInvalid={touched.monthlyIncome && !!errors.monthlyIncome}
          />
          <ErrorMessage
            name="monthlyIncome"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="12">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="additionalComments"
            placeholder="Additional Comments"
            value={values.additionalComments}
            onChange={handleChange}
            isInvalid={
              touched.additionalComments && !!errors.additionalComments
            }
          />
          <ErrorMessage
            name="additionalComments"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default OccupationInfo;
