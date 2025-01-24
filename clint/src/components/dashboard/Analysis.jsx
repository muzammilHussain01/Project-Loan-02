import React, { useState } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import Cookies from "js-cookie";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "bootstrap/dist/css/bootstrap.min.css";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
import "./Dashboard.css";
const Analysis = () => {
  const userAccess = Cookies.get("userAccess");
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

  // Line Graph Data: Number of loans over time (example)
  const lineData = {
    labels: [
      ...new Set(filteredLoans.map((loan) => loan.dateApplied.substring(0, 7))),
    ],
    datasets: [
      {
        label: "Loans Applied",
        data: filteredLoans.reduce((acc, loan) => {
          const month = loan.dateApplied.substring(0, 7);
          if (!acc[month]) acc[month] = 0;
          acc[month]++;
          return acc;
        }, {}),
        fill: false,
        borderColor: "#42A5F5",
        tension: 0.1,
      },
    ],
  };

  // Bar Graph Data: Total loan amounts by status
  const statusAmounts = filteredLoans.reduce((acc, loan) => {
    acc[loan.status] =
      (acc[loan.status] || 0) + parseFloat(loan.amount.replace("$", ""));
    return acc;
  }, {});

  const barData = {
    labels: Object.keys(statusAmounts),
    datasets: [
      {
        label: "Total Loan Amount",
        data: Object.values(statusAmounts),
        backgroundColor: "#FF6384",
        borderColor: "#FF6384",
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart Data: Distribution of loan amounts by status
  const pieData = {
    labels: Object.keys(statusAmounts),
    datasets: [
      {
        data: Object.values(statusAmounts),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      {userAccess === 1 ? (
        <div id="analysis" className="section container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <div className="chart">
                <h3>Line Graph: Number of Loans Over Time</h3>
                <Line data={lineData} />
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="chart">
                <h3>Bar Graph: Total Loan Amounts by Status</h3>
                <Bar data={barData} />
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="chart">
                <h3>Pie Chart: Distribution of Loan Amounts by Status</h3>
                <Pie data={pieData} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="text-white text-center animate__animated animate__pulse p-5"
            style={{
              borderRadius: "10px",
              border: "1px solid red",
              backgroundColor: "lightpink",
            }}
          >
            <h1 className="text-danger  animate__animated animate__pulse animate__infinite">
              Access Denied
            </h1>
            <h4 className="text-danger  animate__animated animate__pulse  animate__bounceInUp">
              You are not authorized to view this section.
            </h4>
          </div>
        </>
      )}
    </>
  );
};

export default Analysis;
