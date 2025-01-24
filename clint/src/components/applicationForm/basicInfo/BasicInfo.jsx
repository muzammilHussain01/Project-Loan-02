import React from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ErrorMessage } from "formik";

const BasicInfo = ({ handleChange, values, touched, errors }) => {
  return (
    <Row>
      <Col md="6">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange}
            isInvalid={touched.firstName && !!errors.firstName}
          />
          <ErrorMessage
            name="firstName"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="6">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
            isInvalid={touched.lastName && !!errors.lastName}
          />
          <ErrorMessage
            name="lastName"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="12">
        <FormGroup className="pb-3">
          <FormControl
            type="email"
            name="email"
            placeholder="your@email.com"
            value={values.email}
            onChange={handleChange}
            isInvalid={touched.email && !!errors.email}
          />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="12">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="mobile"
            placeholder="Contact Number"
            value={values.mobile}
            onChange={handleChange}
            isInvalid={touched.mobile && !!errors.mobile}
          />
          <ErrorMessage
            name="mobile"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="12">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="address"
            placeholder="Address"
            value={values.address}
            onChange={handleChange}
            isInvalid={touched.address && !!errors.address}
          />
          <ErrorMessage
            name="address"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="12">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="city"
            placeholder="City"
            value={values.city}
            onChange={handleChange}
            isInvalid={touched.city && !!errors.city}
          />
          <ErrorMessage name="city" component="div" className="error-message" />
        </FormGroup>
      </Col>
      <Col md="12">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="state"
            placeholder="State"
            value={values.state}
            onChange={handleChange}
            isInvalid={touched.state && !!errors.state}
          />
          <ErrorMessage
            name="state"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
      <Col md="12">
        <FormGroup className="pb-3">
          <FormControl
            type="text"
            name="postCode"
            placeholder="Post Code"
            value={values.postCode}
            onChange={handleChange}
            isInvalid={touched.postCode && !!errors.postCode}
          />
          <ErrorMessage
            name="postCode"
            component="div"
            className="error-message"
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default BasicInfo;
