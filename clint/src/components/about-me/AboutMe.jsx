import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import aboutUs from "../img/aboutUs.jpg";
import Footer from "../footer/Footer";
import { Fade, Slide } from "react-awesome-reveal";
import "./AboutMe.css";
import MoveToTop from "../moveToTop/MoveToTop";

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs ";
const AboutMe = () => {
  return (
    <>
      <MoveToTop />
      <div style={{ height: "100px" }}></div>
      <div
        style={{
          position: "relative",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url(${aboutUs})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div>
          <Container>
            <Row>
              <Col>
                <Breadcrumbs />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div>
        <Container>
          <Row>
            <Col className="text-center fs-3 fw-bold pt-4">
              <Fade direction="down" duration={1000} triggerOnce>
                <p>
                  We’re changing the way{" "}
                  <section className="text-warning">
                    India builds wealth
                  </section>
                </p>
              </Fade>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                borderRight: "2px solid rgba(255, 193, 7, 1)",
                marginTop: "10px",
              }}
            >
              <Fade direction="left" duration={1000} triggerOnce>
                <p className="fontSize">
                  xxxxxxx(corporate name:- xxxx xxxx Private Limited) is a RBI
                  Registered NBFC-P2P(with COR number N.xx-xxxx) was founded in
                  November of 20xx with an aim to modernise the debt investments
                  industry - a business as old as time. Our three co-founders
                  are avid, adventurous investors and entrepreneurs. They
                  recognised the inherent legacy issues in the Indian investment
                  ecosystem, one of which is accessibility. This ecosystem is
                  built to make the rich richer, and by design, excludes regular
                  retail investors from accessing the main source of wealth for
                  institutional investors and banks - retail credit.
                </p>
                <p>
                  We hit the ground running in what was an unregulated space at
                  the time, and got our NBFC-P2P license from the RBI in 2018.
                  We remained a close-knit, bootstrapped start-up until then,
                  and raised our seed round in late 2018 from IvyCap ventures.
                </p>
              </Fade>
            </Col>
            <Col
              style={{
                borderLeft: "2px solid rgba(255, 193, 7, 1)",
                marginTop: "10px",
              }}
            >
              <Fade direction="right" duration={1000} triggerOnce>
                <p>
                  xxxx mission is to fractionalize debt investments and to make
                  them more liquid; accessible with smaller ticket sizes, and
                  devoid of any third-party intermediaries. We have built wealth
                  for lakhs of retail investors and HNIs, and onboarded
                  thousands of wealth partners (CAs, IFAs and wealth management
                  companies) using our seamless API-based partner integration
                  model.
                </p>
                <p>
                  xxxx is an investor-focused platform, our aim is to help our
                  investors earn stable, high quality, and consistent returns.
                  We continue to innovate with that ethos.
                </p>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="text-center fs-1 fw-bold mb-5">
          <Col>
            <Fade direction="up" duration={1000} triggerOnce>
              OUR <span className="text-warning">TEAM</span>
            </Fade>
          </Col>
        </Row>
        <Row className="text-center ">
          <Col>
            <Slide direction="left" duration={1000} triggerOnce>
              <PermIdentityIcon
                style={{
                  border: "2px solid black",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
              <p>Founder & CEO</p>
            </Slide>
          </Col>
        </Row>
        <Row className="text-center ">
          <Col>
            <Slide direction="right" duration={1000} triggerOnce>
              <PermIdentityIcon
                style={{
                  border: "2px solid black",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
              <p>Co-Founder</p>
            </Slide>
          </Col>
          <Col>
            <Slide direction="right" duration={1000} triggerOnce>
              <PermIdentityIcon
                style={{
                  border: "2px solid black",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
              <p>Technical Head</p>
            </Slide>
          </Col>
          <Col>
            <Slide direction="right" duration={1000} triggerOnce>
              <PermIdentityIcon
                style={{
                  border: "2px solid black",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
              <p>Marketing Head</p>
            </Slide>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutMe;
