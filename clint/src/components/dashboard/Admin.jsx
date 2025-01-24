import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import PDFModal from "./PDFModal";
import GrantAccess from "./GrantAccess";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import NotificationAddOutlinedIcon from "@mui/icons-material/NotificationAddOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Admin = () => {
  const [email, setMail] = useState("");
  const [emailUser, setMailUser] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [singleUserData, setSingleUserData] = useState({});
  const [shows, setShows] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [notification, setNotification] = useState(false);
  const [addIconStyles, setAddIconStyles] = useState({});
  const [removeIconStyles, setRemoveIconStyles] = useState({});
  const [notificationIconStyles, setNotificationIconStyles] = useState({});

  // Fetching all users
  useEffect(() => {
    const users = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/user/getUser"
      );
      setUsersData(response.data.users);
    };
    users();
  }, []);

  const handleNotification = () => {
    setNotification(!notification);
  };

  const handleMouseOver = (index) => {
    setAddIconStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: "scale(1.2)",
        transition: "transform 0.2s ease",
        cursor: "pointer",
      },
    }));
  };

  const handleMouseOut = (index) => {
    setAddIconStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: "scale(1)",
        transition: "transform 0.1s ease",
      },
    }));
  };

  const handleDeleteMouseOver = (index) => {
    setRemoveIconStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: "scale(1.2)",
        transition: "transform 0.2s ease",
        cursor: "pointer",
      },
    }));
  };

  const handleDeleteMouseOut = (index) => {
    setRemoveIconStyles((prevStyles) => ({
      ...prevStyles,
      [index]: {
        transform: "scale(1)",
        transition: "transform 0.1s ease",
      },
    }));
  };

  const handleNotificationMouseOver = () => {
    setNotificationIconStyles({
      transform: "scale(1.2)",
      transition: "transform 0.2s ease",
      cursor: "pointer",
    });
  };

  const handleNotificationMouseOut = () => {
    setNotificationIconStyles({
      transform: "scale(1)",
      transition: "transform 0.2s ease",
    });
  };

  // Close PDF Modal
  const closeModal = () => {
    setShows(false);
  };

  // Handle user deletion
  const handleDeleteUser = async () => {
    try {
      const userDeleted = await axios.delete(
        "http://localhost:3000/api/user/deleteVarifiedUser",
        { data: { email } }
      );
      console.log(userDeleted);

      setMessage(userDeleted.data.message);
      setMail("");
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 1000);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setMessage("User not found.");
        setMail("");
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 1000);
      }
    }
  };

  // Handle finding a single user
  const handleFindSingleUser = async () => {
    const response = await axios.post(
      "http://localhost:3000/api/user/singleUser",
      {
        emailUser,
      }
    );
    setSingleUserData(response.data.user);
    setShows(true);
  };

  // Handle user verification and hiding the row
  const handleVarifyUser = async (user) => {
    try {
      await axios.post("http://localhost:3000/api/auth/varifiedSignup", {
        message: "Access granted",
        user,
      });
      setUsersData((prevUsers) =>
        prevUsers.filter((u) => u.email !== user.email)
      );
      const userDeleted = await axios.delete(
        "http://localhost:3000/api/user/deleteUser",
        {
          data: user,
        }
      );
      setMessage(userDeleted.data.message);
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };
  const removeUserFromAdmin = async (user) => {
    await axios.delete("http://localhost:3000/api/user/deleteUser", {
      data: user,
    });
    setUsersData((prevUsers) =>
      prevUsers.filter((u) => u.email !== user.email)
    );
  };

  return (
    <>
      <div className={notification ? "showNotification" : "hideNotification"}>
        <Container className="notificationContainer mb-5">
          {usersData.length === 0 ? (
            <h3
              style={{
                textAlign: "center",
                opacity: "0.5",
              }}
            >
              Empty
            </h3>
          ) : (
            usersData.map((user, index) => (
              <Row key={index} className="notificationRow">
                <Col>
                  {user.firstName} {user.middleName} {user.lastName}
                </Col>
                <Col>{user.email}</Col>
                <Col>{user.department}</Col>
                <Col>
                  <Button variant="transparent">
                    <PersonAddOutlinedIcon
                      className="text-success"
                      style={addIconStyles[index]}
                      onClick={() => handleVarifyUser(user)}
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseOut={() => handleMouseOut(index)}
                    />
                  </Button>

                  <DeleteOutlinedIcon
                    style={removeIconStyles[index]}
                    className="text-danger"
                    onClick={() => removeUserFromAdmin(user)}
                    onMouseOver={() => handleDeleteMouseOver(index)}
                    onMouseOut={() => handleDeleteMouseOut(index)}
                  />
                </Col>
              </Row>
            ))
          )}
        </Container>
      </div>

      <PDFModal
        name={singleUserData.firstName + " " + singleUserData.lastName}
        loanPurpose={singleUserData.loanPurpose}
        desiredLoan={singleUserData.desiredLoan}
        annualIncome={singleUserData.annualIncome}
        email={singleUserData.email}
        mobile={singleUserData.mobile}
        address={singleUserData.address}
        city={singleUserData.city}
        state={singleUserData.state}
        workAt={
          singleUserData.employerFirstName +
          " " +
          singleUserData.employerLastName
        }
        postCode={singleUserData.postCode}
        occupation={singleUserData.occupation}
        experience={singleUserData.experience}
        additionalComments={singleUserData.additionalComments}
        lgShow={shows}
        onClose={closeModal}
      />

      <Modal show={show}>
        <Modal.Body>{message}</Modal.Body>
      </Modal>

      <div
        style={{
          float: "right",
          color: "red",
          fontSize: "small",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        <NotificationAddOutlinedIcon
          style={notificationIconStyles}
          onClick={handleNotification}
          onMouseOver={handleNotificationMouseOver}
          onMouseOut={handleNotificationMouseOut}
        />
        {usersData.length}
      </div>

      <div id="admin" className="section admin-section">
        {/* Search User by Email */}
        <div className="remove-user">
          <div className="remove-user-form">
            <input
              type="text"
              placeholder="Enter customer's email"
              name="emailUser"
              value={emailUser}
              className="search-box"
              onChange={(event) => {
                setMailUser(event.target.value);
              }}
            />
            <button
              className="delete-btn bg-warning"
              onClick={handleFindSingleUser}
            >
              <PersonSearchIcon />
            </button>
          </div>
        </div>

        {/* Remove User Functionality */}
        <div className="remove-user">
          <div className="remove-user-form">
            <input
              type="text"
              placeholder="Enter user's email"
              name="email"
              value={email}
              className="search-box"
              onChange={(event) => {
                setMail(event.target.value);
              }}
            />
            <button className="delete-btn" onClick={handleDeleteUser}>
              <PersonRemoveIcon />
            </button>
          </div>
        </div>
        <GrantAccess />
      </div>
    </>
  );
};

export default Admin;
