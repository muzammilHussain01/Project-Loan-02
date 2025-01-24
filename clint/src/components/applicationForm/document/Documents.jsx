import React from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ErrorMessage } from "formik";

const Documents = ({ handleChange, values, touched, errors }) => {
  return (
    <Row>
      <Col md="6">
        <FormGroup className="pb-3">
          <FormLabel>Upload Documents</FormLabel>
          <FormControl
            type="file"
            name="documents"
            onChange={handleChange}
            isInvalid={touched.documents && !!errors.documents}
          />
          <ErrorMessage
            name="documents"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup className="pb-3">
          <FormLabel>Upload Photo</FormLabel>
          <FormControl
            type="file"
            name="photo"
            onChange={handleChange}
            isInvalid={touched.photo && !!errors.photo}
          />
          <ErrorMessage
            name="photo"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup className="pb-3">
          <FormLabel>Upload Signature</FormLabel>
          <FormControl
            type="file"
            name="signature"
            onChange={handleChange}
            isInvalid={touched.signature && !!errors.signature}
          />
          <ErrorMessage
            name="signature"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default Documents;
