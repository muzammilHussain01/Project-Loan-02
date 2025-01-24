import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analysis = () => {
  useEffect(() => {
    const fetchData = async () => {
      const getClintApplicationData = await axios.get(
        "http://localhost:3000/api/client/getClintApplicationData"
      );
      console.log(getClintApplicationData.data);
    };
    fetchData();
  }, []);
  // State for modal visibility
  const [show, setShow] = useState(false);

  // Modal handlers
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // State to hold filter values
  const [filters, setFilters] = useState({
    id: "",
    name: "",
    amount: "",
    status: "",
    dateApplied: "",
    dateApproved: "",
    repaymentSchedule: "",
    remainingBalance: "",
  });

  // Sample loan data (replace with your actual data)
  const loanData = [
    {
      id: 1,
      name: "John Doe",
      amount: "$5000",
      status: "Approved",
      dateApplied: "2024-01-15",
      dateApproved: "2024-01-20",
      repaymentSchedule: "Monthly",
      remainingBalance: "$2000",
    },
    {
      id: 2,
      name: "Jane Smith",
      amount: "$3000",
      status: "Pending",
      dateApplied: "2024-02-10",
      dateApproved: "",
      repaymentSchedule: "Monthly",
      remainingBalance: "$3000",
    },
    // Add more loan data here
  ];

  // Filter loans based on filter criteria
  const filteredLoans = loanData.filter((loan) => {
    return Object.keys(filters).every((key) =>
      loan[key]
        .toString()
        .toLowerCase()
        .includes(filters[key].toString().toLowerCase())
    );
  });

  // Line Graph Data: Number of loans over time
  const appliedLoansByMonth = filteredLoans.reduce((acc, loan) => {
    const month = loan.dateApplied.substring(0, 7); // Extract YYYY-MM format
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  const lineData = {
    labels: Object.keys(appliedLoansByMonth), // Months
    datasets: [
      {
        label: "Loans Applied",
        data: Object.values(appliedLoansByMonth), // Number of loans for each month
        fill: false,
        borderColor: "#42A5F5",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      <div id="analysis" className="text-center">
        <Button
          onClick={handleShow}
          style={{
            backgroundColor: "#009879",
            border: "2px solid #009879",
            height: "30px",
          }}
        >
          <ArrowDropDownOutlinedIcon />
        </Button>

        {/* Modal */}
        <Modal show={show} onHide={handleClose} fullscreen>
          <Modal.Header closeButton>
            <Modal.Title> Number of Loans Over Time</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Line data={lineData} />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Analysis;
