import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FlareOutlinedIcon from "@mui/icons-material/FlareOutlined";
const SlidingStrip = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="animate__animated animate__infinite  animate__pulse">
            <FlareOutlinedIcon style={{ color: "red" }} />
            <FavoriteOutlinedIcon className="fs-5" style={{ color: "red" }} />
            <FlareOutlinedIcon style={{ color: "red" }} />
          </Col>
          <Col className="animate__animated animate__infinite  animate__pulse">
            <FlareOutlinedIcon style={{ color: "red" }} />
            <FlareOutlinedIcon style={{ color: "red" }} />
            <FavoriteOutlinedIcon className="fs-5" style={{ color: "red" }} />
            <FlareOutlinedIcon style={{ color: "red" }} />
            <FlareOutlinedIcon style={{ color: "red" }} />
          </Col>
          <Col className="animate__animated animate__infinite animate__pulse">
            <FlareOutlinedIcon style={{ color: "red" }} />

            <FavoriteOutlinedIcon className="fs-5" style={{ color: "red" }} />
            <FlareOutlinedIcon style={{ color: "red" }} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SlidingStrip;
