import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import PlaylistAddCheckCircleOutlinedIcon from "@mui/icons-material/PlaylistAddCheckCircleOutlined";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const ActiveMembers = () => {
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [team, setTeam] = useState(0);

  useEffect(() => {
    // Initialize AOS library
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation happens only once when scrolled into view
    });

    const fetchData = async () => {
      try {
        const response_1 = await axios.get(
          "http://localhost:3000/api/client/getClintApplicationData"
        );
        const response_2 = await axios.get(
          "http://localhost:3000/api/user/getVarifiedUser"
        );

        setHappyCustomers(response_1.data.length);
        setTeam(response_2.data.users.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Container style={{ marginBottom: "15px" }}>
        <Row>
          <Col data-aos="fade-up">
            <Diversity1OutlinedIcon
              className="text-warning animate__animated animate__infinite animate__pulse"
              style={{ fontSize: "100px" }}
            />
            <span
              style={{
                marginLeft: "20px",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              {happyCustomers}+
            </span>
            <br />
            Happy Customers
          </Col>
          <Col data-aos="fade-up" data-aos-delay="200">
            <VolunteerActivismOutlinedIcon
              className="text-danger animate__animated animate__infinite animate__pulse"
              style={{ fontSize: "100px" }}
            />
            <span
              style={{
                marginLeft: "20px",
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              {team}+
            </span>
            <br />
            Support Team
          </Col>
          <Col data-aos="fade-up" data-aos-delay="400">
            <PlaylistAddCheckCircleOutlinedIcon
              className="text-success animate__animated animate__infinite animate__pulse"
              style={{ fontSize: "100px" }}
            />
            <br />
            Verified by Gov.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ActiveMembers;
