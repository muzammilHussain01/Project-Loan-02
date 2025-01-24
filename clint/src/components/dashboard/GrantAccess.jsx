import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import axios from "axios";

const GrantAccess = () => {
  const [access, setAccess] = useState([]); // Array to track access for each user
  const [userName, setUserName] = useState([]);
  const [accessContainerVisible, setAccessContainerVisible] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(
    userName.map(() => ({
      option1: false,
      option2: false,
      option3: false,
    }))
  );
  const [searchTerm, setSearchTerm] = useState(""); // State to track the search input

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/user/getVarifiedUser"
      );
      setUserName(response.data.users);
      // Initialize access and checkbox values state with false for each user
      setAccess(new Array(response.data.users.length).fill(false));
      setCheckboxValue(
        response.data.users.map(() => ({
          option1: false,
          option2: false,
          option3: false,
        }))
      );
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const accessGranted = (index) => {
    console.log(
      "Checkbox values for user at index",
      index,
      checkboxValue[index]
    );

    // Toggle the icon
    setAccess((prevTempAccess) => {
      const newAccess = prevTempAccess.map((item, i) =>
        i === index ? !item : item
      );
      return newAccess;
    });

    setTimeout(() => {
      setAccess((prevTempAccess) =>
        prevTempAccess.map((item, i) => (i === index ? !item : item))
      );
    }, 500);

    // Optionally reset the checkbox values after logging
    setCheckboxValue((prevValues) =>
      prevValues.map((item, i) =>
        i === index ? { option1: false, option2: false, option3: false } : item
      )
    );
  };

  const handleCheckboxChange = (e, index) => {
    const { name, checked } = e.target;
    setCheckboxValue((prevValues) =>
      prevValues.map((item, i) =>
        i === index
          ? {
              ...item,
              [name]: checked, // Update the specific checkbox's value for the specific user
            }
          : item
      )
    );
  };

  const userPermissionsButton = () => {
    setAccessContainerVisible(!accessContainerVisible);
  };

  // Filter the users based on the search term using the filter method
  const filteredUsers = userName.filter((userData) => {
    const fullName = `${userData.user.firstName} ${userData.user.middleName} ${userData.user.lastName}`;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <Button
        style={{ backgroundImage: "linear-gradient(0deg, #1a535c, #4ecdc4)" }}
        variant="outline-warning"
        className="mt-3"
        onClick={userPermissionsButton}
      >
        {accessContainerVisible ? (
          <KeyboardArrowUpOutlinedIcon />
        ) : (
          "Grant Access"
        )}
      </Button>
      <div
        className={`accessContainer 
        ${accessContainerVisible ? "show" : "hide"}`}
      >
        <Container>
          {/* Search Input */}
          <Row className="my-3">
            <Col>
              <Form.Control
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
          </Row>

          {/* User Access Table */}
          <Row className="userRow">
            <Col>User</Col>
            <Col>
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Read
              </label>
            </Col>
            <Col>
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                Read and Write
              </label>
            </Col>
            <Col>
              <label className="form-check-label" htmlFor="inlineCheckbox1">
                All
              </label>
            </Col>
            <Col></Col>
          </Row>

          {filteredUsers.map((userData, index) => (
            <Row key={index} className="mt-2 userRow">
              <Col>
                {userData.user.firstName} {userData.user.middleName}{" "}
                {userData.user.lastName}
              </Col>
              <Col>
                <input
                  className="form-check-input checkbox"
                  type="checkbox"
                  id={`inlineCheckbox1-${index}`}
                  name="option1"
                  checked={checkboxValue[index]?.option1}
                  onChange={(e) => handleCheckboxChange(e, index)}
                />
              </Col>
              <Col>
                <input
                  className="form-check-input checkbox"
                  type="checkbox"
                  id={`inlineCheckbox2-${index}`}
                  name="option2"
                  checked={checkboxValue[index]?.option2}
                  onChange={(e) => handleCheckboxChange(e, index)}
                />
              </Col>
              <Col>
                <input
                  className="form-check-input checkbox"
                  type="checkbox"
                  id={`inlineCheckbox3-${index}`}
                  name="option3"
                  checked={checkboxValue[index]?.option3}
                  onChange={(e) => handleCheckboxChange(e, index)}
                />
              </Col>
              <Col>
                {access[index] ? (
                  <ThumbUpOffAltIcon className="text-success" />
                ) : (
                  <ModeEditOutlineOutlinedIcon
                    className="text-danger"
                    onClick={() => accessGranted(index)}
                  />
                )}
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
};

export default GrantAccess;
