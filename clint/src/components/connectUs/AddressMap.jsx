import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PlaceIcon from "@mui/icons-material/Place";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const AddressMap = () => {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      <Container className="pt-5">
        <Col>
          {/* Google Map Section */}
          <Row className="mb-4">
            <Col>
              <div
                style={{
                  height: "300px",
                  width: "100%",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28465.801531373963!2d80.9760548!3d26.8963474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1732777630673!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>

          {/* Address Information */}
          <Row className="mb-3">
            <Col>
              <PlaceIcon style={{ width: "50px", color: "blue" }} />
              Jagdamba Complex, 10th Floor, Link Road, Landmark - Movietime
              Building, Malad West, Mumbai, Maharashtra 400064
            </Col>
          </Row>

          {/* Email Information */}
          <Row className="mb-3">
            <Col>
              <MailOutlineIcon style={{ width: "50px", color: "blue" }} />
              <a href="mailto:contactus@example.com">contactus@example.com</a>
            </Col>
          </Row>

          {/* Social Media Links */}
          <Row>
            <Col>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={iconVariants}
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookRoundedIcon
                    style={{ width: "50px", color: "blue" }}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon style={{ width: "50px", color: "blue" }} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon style={{ width: "50px", color: "blue" }} />
                </a>
              </motion.div>
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default AddressMap;
