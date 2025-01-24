import React, { useEffect, useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx"; // Import XLSX for Excel file handling
import Cookies from "js-cookie";
import "animate.css/animate.min.css"; // Import Animate.css
import "./Dashboard.css";

const Queries = () => {
  const [queries, setQueries] = useState([]);
  const userAccess = Cookies.get("userAccess");

  useEffect(() => {
    const getResponse = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/query/queryData"
      );
      setQueries(response.data);
    };
    getResponse();
  }, []);

  const downloadTable = () => {
    const ws = XLSX.utils.json_to_sheet(
      queries.map((query) => ({
        "Full Name": `${query.first_name} ${query.last_name}`,
        "Mobile Number": query.mobile,
        Email: query.email,
        Purpose: query.purpose,
        Comments: query.comments,
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Queries");
    XLSX.writeFile(wb, "Queries.xlsx");
  };

  return (
    <>
      {userAccess == 1 ? (
        <div id="queries" className="section">
          <button
            className="filter section query-btn mb-3"
            onClick={downloadTable}
            style={{ float: "left", padding: "10px", fontSize: "x-small" }}
          >
            Download Excel
          </button>
          <table className="queries-table">
            <thead>
              <tr className="userRow">
                <th>Full Name</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Purpose</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {queries.map((query, index) => (
                <tr key={index} className="userRow">
                  <td>{`${query.first_name} ${query.last_name}`}</td>
                  <td>{query.mobile}</td>
                  <td>{query.email}</td>
                  <td>{query.purpose}</td>
                  <td>{query.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default Queries;
