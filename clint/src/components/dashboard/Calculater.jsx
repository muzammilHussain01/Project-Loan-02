import { React, useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";

const Calculater = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
    loanAmounts: yup.number().required("Loan Amount is required"),
    downPayment: yup.number().required("Down Payment is required"),
    interestRate: yup.number().required("Interest Rate is required"),
    loanTerm: yup.number().required("Loan Term is required"),
    propertyTax: yup.number().required("Property Tax is required"),
    insurance: yup.number().required("Insurance is required"),
    loanFees: yup.number().min(0, "Loan Fees should be a positive number"),
    otherCosts: yup.number().min(0, "Other Costs should be a positive number"),
  });

  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const calculateLoan = (values) => {
    const principal =
      parseFloat(values.loanAmounts) - parseFloat(values.downPayment || 0);
    const calculatedInterest = parseFloat(values.interestRate) / 100 / 12;
    const calculatedPayments = parseFloat(values.loanTerm) * 12;
    const calculatedPropertyTax = parseFloat(values.propertyTax) || 0;
    const calculatedInsurance = parseFloat(values.insurance) || 0;
    const loanFees = parseFloat(values.loanFees) || 0;
    const otherCosts = parseFloat(values.otherCosts) || 0;

    if (
      isNaN(principal) ||
      isNaN(calculatedInterest) ||
      isNaN(calculatedPayments)
    ) {
      return;
    }

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    let monthly = (principal * x * calculatedInterest) / (x - 1);
    const totalPayment = monthly * calculatedPayments;
    const totalInterest = totalPayment - principal;

    // Adding loan fees and other costs to the monthly payment
    const monthlyPaymentWithExtras =
      monthly +
      calculatedPropertyTax / 12 +
      calculatedInsurance / 12 +
      loanFees / 12 +
      otherCosts / 12;

    setMonthlyPayment(monthlyPaymentWithExtras.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
    setTotalAmount(totalPayment.toFixed(2));
  };

  return (
    <Container className="loan-calculator mt-5">
      <Card className="p-4 shadow-sm">
        <Formik
          validationSchema={schema}
          onSubmit={calculateLoan}
          initialValues={{
            loanAmounts: 0,
            downPayment: 0,
            interestRate: 0,
            loanTerm: 0,
            propertyTax: 0,
            insurance: 0,
            loanFees: 0,
            otherCosts: 0,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Loan Amount</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter loan amount"
                      name="loanAmounts"
                      value={values.loanAmounts}
                      onChange={handleChange}
                      isValid={touched.loanAmounts && !errors.loanAmounts}
                    />
                    {errors.loanAmounts && (
                      <Form.Text className="text-danger">
                        {errors.loanAmounts}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Down Payment</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter down payment"
                      name="downPayment"
                      value={values.downPayment}
                      onChange={handleChange}
                      isValid={touched.downPayment && !errors.downPayment}
                    />
                    {errors.downPayment && (
                      <Form.Text className="text-danger">
                        {errors.downPayment}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Interest Rate (%)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter interest rate"
                      name="interestRate"
                      value={values.interestRate}
                      onChange={handleChange}
                      isValid={touched.interestRate && !errors.interestRate}
                    />
                    {errors.interestRate && (
                      <Form.Text className="text-danger">
                        {errors.interestRate}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Loan Term (years)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter loan term"
                      name="loanTerm"
                      value={values.loanTerm}
                      onChange={handleChange}
                      isValid={touched.loanTerm && !errors.loanTerm}
                    />
                    {errors.loanTerm && (
                      <Form.Text className="text-danger">
                        {errors.loanTerm}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Property Tax (Annual)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter property tax"
                      name="propertyTax"
                      value={values.propertyTax}
                      onChange={handleChange}
                      isValid={touched.propertyTax && !errors.propertyTax}
                    />
                    {errors.propertyTax && (
                      <Form.Text className="text-danger">
                        {errors.propertyTax}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Insurance (Annual)</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter insurance"
                      name="insurance"
                      value={values.insurance}
                      onChange={handleChange}
                      isValid={touched.insurance && !errors.insurance}
                    />
                    {errors.insurance && (
                      <Form.Text className="text-danger">
                        {errors.insurance}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Loan Fees</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter loan fees"
                      name="loanFees"
                      value={values.loanFees}
                      onChange={handleChange}
                      isValid={touched.loanFees && !errors.loanFees}
                    />
                    {errors.loanFees && (
                      <Form.Text className="text-danger">
                        {errors.loanFees}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Other Costs</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter other costs"
                      name="otherCosts"
                      value={values.otherCosts}
                      onChange={handleChange}
                      isValid={touched.otherCosts && !errors.otherCosts}
                    />
                    {errors.otherCosts && (
                      <Form.Text className="text-danger">
                        {errors.otherCosts}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
              </Row>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Calculate
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        {monthlyPayment && (
          <Card className="mt-4 p-3">
            <h3 className="text-center">Loan Details</h3>
            <p>Monthly Payment: ${monthlyPayment}</p>
            <p>Total Interest: ${totalInterest}</p>
            <p>Total Amount: ${totalAmount}</p>
          </Card>
        )}
      </Card>
    </Container>
  );
};

export default Calculater;
