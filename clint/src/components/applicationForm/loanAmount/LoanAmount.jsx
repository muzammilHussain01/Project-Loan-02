import React from "react";
import { FormGroup, FormControl, FormLabel, FormSelect } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ErrorMessage } from "formik";

const LoanAmount = ({ handleChange, values, touched, errors }) => {
  return (
    <Row>
      <Col md="6">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="desiredLoan"
            placeholder="Desired Loan Amount ($)"
            value={values.desiredLoan}
            onChange={handleChange}
            isInvalid={touched.desiredLoan && !!errors.desiredLoan}
          />
          <ErrorMessage
            name="desiredLoan"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="annualIncome"
            placeholder="Annual Income ($)"
            value={values.annualIncome}
            onChange={handleChange}
            isInvalid={touched.annualIncome && !!errors.annualIncome}
          />
          <ErrorMessage
            name="annualIncome"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="12">
        <FormGroup className="pb-3">
          <FormLabel>Purpose of Loan</FormLabel>
          <FormSelect
            name="loanPurpose"
            value={values.loanPurpose}
            onChange={handleChange}
            isInvalid={touched.loanPurpose && !!errors.loanPurpose}
          >
            <option value="">Select Purpose</option>
            <option value="Home">Home</option>
            <option value="Car">Car</option>
            <option value="Education">Education</option>
            <option value="Business">Business</option>
            <option value="Other">Other</option>
          </FormSelect>
          <ErrorMessage
            name="loanPurpose"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default LoanAmount;
