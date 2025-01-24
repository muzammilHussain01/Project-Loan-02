import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import axios from "axios";
import SingleCustomer from "./SingleCustomer";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PDFModal from "./PDFModal";
import LineGraph from "./lineGraph/LineGraph";

const Loan = () => {
  const [response, setResponse] = useState([]);
  const [filters, setFilters] = useState({
    _id: "",
    firstName: "",
    loanPurpose: "",
    desiredLoan: "",
    annualIncome: "",
    monthlyIncome: "",
    occupation: "",
    mobile: "",
    state: "",
    city: "",
    address: "",
    postCode: "",
    employerFirstName: "",
    experience: "",
    email: "",
    additionalComments: "",
    status: "",
  });
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);
  //

  useEffect(() => {
    const getApplicationData = async () => {
      try {
        const applicationData = await axios.get(
          "http://localhost:3000/api/client/getClintApplicationData"
        );
        setResponse(applicationData.data);
      } catch (error) {
        console.error("Error fetching application data", error);
      }
    };
    getApplicationData();
  }, []);
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Generate Report
    </Tooltip>
  );
  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };

  const handleMouseOver = (id) => {
    setHoveredId(id);
  };

  const handleMouseOut = () => {
    setHoveredId(null);
  };

  const downloadTable = () => {
    const ws = XLSX.utils.json_to_sheet(
      filteredLoans.map((loan) => ({
        ID: loan._id,
        Name: `${loan.firstName} ${loan.lastName}`,
        LoanPurpose: loan.loanPurpose,
        DesiredLoan: loan.desiredLoan,
        AnnualIncome: loan.annualIncome,
        MonthlyIncome: loan.monthlyIncome,
        Occupation: loan.occupation,
        Mobile: loan.mobile,
        State: loan.state,
        City: loan.city,
        Address: loan.address,
        PostalCode: loan.postCode,
        WorkAt: `${loan.employerFirstName} ${loan.employerLastName}`,
        Experience: loan.experience,
        Email: loan.email,
        AdditionalComments: loan.additionalComments,
        Status: loan.status,
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Loans");
    XLSX.writeFile(wb, "Loans.xlsx");
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredLoans = response.filter((loan) => {
    return Object.keys(filters).every((key) =>
      filters[key]
        ? loan[key]
            .toString()
            .toLowerCase()
            .includes(filters[key].toLowerCase())
        : true
    );
  });

  const handleStatusChange = (id, newStatus) => {
    setResponse((prevData) =>
      prevData.map((loan) =>
        loan._id === id ? { ...loan, status: newStatus } : loan
      )
    );
  };

  return (
    <>
      <SingleCustomer
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        selectedId={hoveredId}
      />
      <LineGraph />
      <div id="loans" className="section" style={{ width: "300%" }}>
        <div className="filter">
          <button onClick={downloadTable} style={{ float: "right" }}>
            Download Report
          </button>
        </div>

        <table className="loans-table">
          <thead>
            <tr style={{ fontSize: "small" }}>
              <th>Action</th>
              <th>
                Name <br />
                <input
                  type="text"
                  name="firstName"
                  value={filters.firstName}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                Loan Purpose <br />
                <input
                  type="text"
                  name="loanPurpose"
                  value={filters.loanPurpose}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                Loan Amount <br />
                <input
                  type="text"
                  name="desiredLoan"
                  value={filters.desiredLoan}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                Annual Income <br />
                <input
                  type="text"
                  name="annualIncome"
                  value={filters.annualIncome}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                Monthly Income <br />
                <input
                  type="text"
                  name="monthlyIncome"
                  value={filters.monthlyIncome}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                Occupation <br />
                <input
                  type="text"
                  name="occupation"
                  value={filters.occupation}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                Mobile No. <br />
                <input
                  type="text"
                  name="mobile"
                  value={filters.mobile}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                State <br />
                <input
                  type="text"
                  name="state"
                  value={filters.state}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                City <br />
                <input
                  type="text"
                  name="city"
                  value={filters.city}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                Address
                <input
                  type="text"
                  name="address"
                  value={filters.address}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                Postal Code <br />
                <input
                  type="text"
                  name="postCode"
                  value={filters.postCode}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                Work At <br />
                <input
                  type="text"
                  name="employerFirstName"
                  value={filters.employerFirstName}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                Experience <br />
                <input
                  type="text"
                  name="experience"
                  value={filters.experience}
                  onChange={handleFilterChange}
                />
              </th>
              <th>
                Email <br />
                <input
                  type="text"
                  name="email"
                  value={filters.email}
                  onChange={handleFilterChange}
                />
              </th>
              <th>Comments</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredLoans.map((loan) => (
              <tr
                key={loan._id}
                style={{ fontSize: "x-small", fontWeight: "bold" }}
              >
                <td>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <PictureAsPdfIcon
                      style={{
                        cursor: "pointer",
                        fontSize: "x-large",
                      }}
                      onClick={() => {
                        handleShow("xl-down");
                        handleMouseOver(loan._id);
                      }}
                      onMouseOver={() => handleMouseOver(loan._id)}
                      onMouseOut={handleMouseOut}
                    />
                  </OverlayTrigger>
                </td>

                <td>{`${loan.firstName} ${loan.lastName}`}</td>

                <td>{loan.loanPurpose}</td>
                <td>{loan.desiredLoan} rs</td>
                <td>{loan.annualIncome} rs</td>
                <td>{loan.monthlyIncome} rs</td>
                <td>{loan.occupation}</td>
                <td>{loan.mobile}</td>
                <td>{loan.state}</td>
                <td>{loan.city}</td>
                <td>{loan.address}</td>
                <td>{loan.postCode}</td>
                <td>{`${loan.employerFirstName} ${loan.employerLastName}`}</td>
                <td>{loan.experience}</td>
                <td>{loan.email}</td>
                <td>{loan.additionalComments}</td>
                <td>
                  <select
                    value={loan.status}
                    onChange={(e) =>
                      handleStatusChange(loan._id, e.target.value)
                    }
                  >
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                    <option value="Denied">Denied</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Loan;
