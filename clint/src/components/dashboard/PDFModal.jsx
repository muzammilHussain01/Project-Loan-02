import React from "react";
import Modal from "react-bootstrap/Modal";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { FaDownload } from "react-icons/fa"; // For the download icon

const PDFModal = (props) => {
  const {
    name,
    lgShow,
    loanPurpose,
    desiredLoan,
    annualIncome,
    email,
    mobile,
    address,
    city,
    state,
    postCode,
    workAt,
    occupation,
    experience,
    additionalComments,
    onClose,
  } = props;

  const downloadPDF = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("modal-content.pdf");
    });
  };

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        aria-labelledby="example-modal-sizes-title-lg"
        onHide={onClose}
        className="border-0 shadow-lg"
      >
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title id="example-modal-sizes-title-lg" className="text-white">
            <FaDownload onClick={downloadPDF} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-light" id="pdf-content">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-4">
                <div className="border border-secondary rounded p-4">
                  <h5 className="text-primary mb-3">Loan Details of {name}</h5>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">Loan Purpose:</strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{loanPurpose}</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">
                        Desired Loan Amount:
                      </strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{desiredLoan}</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">Annual Income:</strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{annualIncome}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-4">
                <div className="border border-secondary rounded p-4">
                  <h5 className="text-primary mb-3">Personal Details</h5>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">Email:</strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{email}</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">
                        Contact Number:
                      </strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{mobile}</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">Address:</strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{address}</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">City:</strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{city}</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">State:</strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{state}</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">Pincode:</strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{postCode}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-4">
                <div className="border border-secondary rounded p-4">
                  <h5 className="text-primary mb-3">Employment Details</h5>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">Work At:</strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{workAt}</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">Occupation:</strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{occupation}</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-4">
                      <strong className="text-secondary">Experience:</strong>
                    </div>
                    <div className="col-sm-8">
                      <p className="form-control-plaintext">{experience}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 mb-4">
                <div className="border border-secondary rounded p-4">
                  <h5 className="text-primary mb-3">Additional Information</h5>
                  <div className="row">
                    <div className="col-sm-12">
                      <strong className="text-secondary">Comments:</strong>
                      <p className="form-control-plaintext">
                        {additionalComments}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-primary">
          <button className="btn btn-light" onClick={onClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PDFModal;
