import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { Container, Button } from "react-bootstrap";
import BasicInfo from "./basicInfo/BasicInfo";
import LoanAmount from "./loanAmount/LoanAmount";
import OccupationInfo from "./occupationInfo/OccupationInfo";
import Documents from "./document/Documents";
import "./ApplicationForm.css";
import ThankYou from "./ThankYou";
import axios from "axios";
import "./ApplicationForm.css";

// Validation Schema
const schema = yup.object().shape({
  // Loan Amount
  desiredLoan: yup
    .number()
    .required("Desired loan amount is required")
    .positive("Must be a positive number"),
  annualIncome: yup
    .number()
    .required("Annual income is required")
    .positive("Must be a positive number"),
  loanPurpose: yup.string().required("Loan purpose is required"),

  // Basic Info
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  mobile: yup.string().required("Contact is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  postCode: yup.string().required("Postal Code is required"),

  // Occupation Info
  employerFirstName: yup.string().required("First name is required"),
  employerLastName: yup.string().required("Last name is required"),
  occupation: yup.string().required("Occupation is required"),
  experience: yup.string().required("Experience is required"),
  monthlyIncome: yup.string().required("Monthly Income is required"),
  additionalComments: yup.string().required("Comments are required"),

  // Documents
  photo: yup.mixed().required("Photo is required"),
  signature: yup.mixed().required("Signature is required"),
  documents: yup.mixed().required("Documents is required"),
});

const ApplicationForm = () => {
  const [show, setShow] = useState(false);
  const handleSubmit = async (values, { resetForm }) => {
    const clintApplicationData = await axios.post(
      "http://localhost:3000/api/client/setClintApplicationData",
      values
    );
    setShow(true);
    resetForm();
  };
  setTimeout(() => {
    setShow(false);
  }, 2000);

  return (
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{
        // Loan Amount
        desiredLoan: "",
        annualIncome: "",
        loanPurpose: "",

        // Basic Info
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        postCode: "",

        // Occupation Info
        employerFirstName: "",
        employerLastName: "",
        occupation: "",
        experience: "",
        monthlyIncome: "",
        additionalComments: "",

        // Documents
        photo: null,
        signature: null,
        documents: null,
      }}
    >
      {({
        handleSubmit,
        handleChange,

        values,
        touched,
        errors,
      }) => (
        <div style={{}}>
          <Container
            style={{
              marginTop: "120px",
              boxShadow: "0px 0px 10px black",
              padding: "20px",
            }}
          >
            <ThankYou show={show} />
            <div
              style={{
                height: "30px",
                backgroundColor: "#0d6efd",
                marginBottom: "20px",
              }}
            ></div>
            <h5 className="text-center pb-2 bg-primary">Loan Amount</h5>
            <Form onSubmit={handleSubmit}>
              <LoanAmount
                handleChange={handleChange}
                values={values}
                touched={touched}
                errors={errors}
              />
              <h5 className="text-center pb-2 bg-primary">Basic Info</h5>
              <BasicInfo
                handleChange={handleChange}
                values={values}
                touched={touched}
                errors={errors}
              />
              <h5 className="text-center pb-2 bg-primary">Occupation Info</h5>
              <OccupationInfo
                handleChange={handleChange}
                values={values}
                touched={touched}
                errors={errors}
              />
              <h5 className="text-center pb-2 bg-primary">Documents</h5>
              <Documents
                handleChange={handleChange}
                values={values}
                touched={touched}
                errors={errors}
              />
              <Button
                type="submit"
                variant="primary"
                style={{ width: "100%", marginBottom: "20px" }}
              >
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      )}
    </Formik>
  );
};

export default ApplicationForm;
