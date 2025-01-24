import React from "react";

import PercentIcon from "@mui/icons-material/Percent";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Container, Col, Row } from "react-bootstrap";
const ChooseUsCard = () => {
  return (
    <>
      <div className="bg-transparent">
        <Container className=" pt-2">
          <Row className=" justify-content-center">
            <Col xs={12} className="text-center">
              <div className="heading-block">
                <h3
                  style={{
                    marginBottom: 0,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    color: "#000",
                    fontFamily: "initial",
                  }}
                >
                  Why choose <span style={{ color: "orange" }}>us</span>
                </h3>
              </div>
            </Col>
          </Row>

          <Row className="pt-3">
            <Col xs={3} md={3} className="text-center">
              <div className="feature-box fbox-center fbox-light fbox-effect nobottomborder">
                <PercentIcon
                  style={{
                    border: "1px solid #ffc107",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#ffc107",
                  }}
                />
                <p className="fw-bold text-warning">No cost EMIs</p>
              </div>
            </Col>

            <Col xs={3} md={3} className="text-center">
              <div className="feature-box fbox-center fbox-light fbox-effect nobottomborder">
                <PriceCheckIcon
                  style={{
                    border: "1px solid #ffc107",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#ffc107",
                    //
                  }}
                />
                <p className="fw-bold text-warning">Higher Approvals</p>
              </div>
            </Col>

            <Col xs={3} md={3} className="text-center">
              <div className="feature-box fbox-center fbox-light fbox-effect nobottomborder">
                <AvTimerIcon
                  style={{
                    border: "1px solid #ffc107",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#ffc107",
                  }}
                />
                <p className="fw-bold text-warning">Quick Disbursals</p>
              </div>
            </Col>

            <Col xs={3} md={3} className="text-center">
              <div className="feature-box fbox-center fbox-light fbox-effect nobottomborder">
                <Diversity3Icon
                  style={{
                    border: "1px solid #ffc107",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#ffc107",
                  }}
                />
                <p className="fw-bold text-warning">Industry Specialists</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ChooseUsCard;
