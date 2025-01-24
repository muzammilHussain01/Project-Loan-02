import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { FaDownload } from "react-icons/fa"; // For the download icon

const SingleCustomer = (props) => {
  const { show, fullscreen, onHide, selectedId } = props;
  const [response, setResponse] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const applicationData = await axios.get(
          "http://localhost:3000/api/client/getClintApplicationData",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setResponse(applicationData.data);
      } catch (error) {
        console.error("Error fetching application data", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (selectedId) {
      const customer = response.find((res) => res._id === selectedId);
      setSelectedCustomer(customer);
    }
  }, [selectedId, response]);

  const downloadPDF = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // Width of A4 paper in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("customer-details.pdf");
    });
  };

  return (
    <Modal
      size="lg"
      show={show}
      fullscreen={fullscreen}
      onHide={onHide}
      className="border-0 shadow-lg"
    >
      <Modal.Header closeButton className="bg-primary text-white">
        <Modal.Title className="text-white">
          <FaDownload
            className="text-white ml-2"
            onClick={downloadPDF}
            style={{ cursor: "pointer" }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-light" id="pdf-content">
        <div className="container">
          <div className="row">
            {/* Loan Details */}
            <div className="col-12 mb-4">
              <div className="border border-secondary rounded p-4">
                <h5 className="text-primary mb-3">Loan Details</h5>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">Loan Purpose:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.loanPurpose : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">Loan Amount:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.desiredLoan : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">Annual Income:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.annualIncome : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="col-12 mb-4">
              <div className="border border-secondary rounded p-4">
                <h5 className="text-primary mb-3">Personal Details</h5>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">Email:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.email : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">Contact Number:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.mobile : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">Address:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.address : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">City:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.city : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">State:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.state : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">Pincode:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.postCode : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Employment Details */}
            <div className="col-12 mb-4">
              <div className="border border-secondary rounded p-4">
                <h5 className="text-primary mb-3">Employment Details</h5>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">Work At:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.workAt : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">Occupation:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.occupation : "N/A"}
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-4">
                    <strong className="text-secondary">Experience:</strong>
                  </div>
                  <div className="col-sm-8">
                    <p className="form-control-plaintext">
                      {selectedCustomer ? selectedCustomer.experience : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="col-12 mb-4">
              <div className="border border-secondary rounded p-4">
                <h5 className="text-primary mb-3">Additional Information</h5>
                <div className="row">
                  <div className="col-sm-12">
                    <strong className="text-secondary">Comments:</strong>
                    <p className="form-control-plaintext">
                      {selectedCustomer
                        ? selectedCustomer.additionalComments
                        : "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SingleCustomer;
