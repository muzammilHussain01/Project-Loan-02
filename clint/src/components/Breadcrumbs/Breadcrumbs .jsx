import React, { useEffect, useState } from "react";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { NavLink, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

const Breadcrumbs = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    console.log("Current location:", location.pathname);
    if (location.pathname === "/") {
      setItems([{ name: "Home", path: "/", icon: <HomeOutlinedIcon /> }]);
    } else if (location.pathname === "/dashboard") {
      setItems([
        { name: "Home", path: "/", icon: <HomeOutlinedIcon /> },
        {
          name: "Dashboard",
          path: "/dashboard",
          icon: <DashboardOutlinedIcon />,
        },
      ]);
    } else if (location.pathname === "/about-me") {
      setItems([
        { name: "Home", path: "/", icon: <HomeOutlinedIcon /> },
        {
          name: "Dashboard",
          path: "/dashboard",
          icon: <DashboardOutlinedIcon />,
        },
        { name: "About", path: "/about-me", icon: <Diversity3OutlinedIcon /> },
      ]);
    } else if (location.pathname === "/ourservices") {
      setItems([
        { name: "Home", path: "/", icon: <HomeOutlinedIcon /> },
        {
          name: "Dashboard",
          path: "/dashboard",
          icon: <DashboardOutlinedIcon />,
        },
        { name: "About", path: "/about-me", icon: <Diversity3OutlinedIcon /> },
        {
          name: "Services",
          path: "/ourservices",
          icon: <SupportAgentOutlinedIcon />,
        },
      ]);
    } else if (location.pathname === "/connect-us") {
      setItems([
        { name: "Home", path: "/", icon: <HomeOutlinedIcon /> },
        {
          name: "Dashboard",
          path: "/dashboard",
          icon: <DashboardOutlinedIcon />,
        },
        { name: "About", path: "/about-me", icon: <Diversity3OutlinedIcon /> },
        {
          name: "Services",
          path: "/ourservices",
          icon: <SupportAgentOutlinedIcon />,
        },
        {
          name: "Contact",
          path: "/connect-us",
          icon: <ContactPhoneOutlinedIcon />,
        },
      ]);
    }
  }, [location.pathname]);

  return (
    <>
      <ul style={{ float: "right" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              listStyle: "none",
              float: "left",
              color: "white",
              paddingRight: "20px",
              cursor: "pointer",
            }}
          >
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "red" : "white",
                textDecoration: isActive ? "underline" : "none",
              })}
              to={item.path}
            >
              {item.icon}

              {index < items.length - 1 && (
                <KeyboardArrowRightOutlinedIcon style={{ color: "white" }} />
              )}
              <br />
              <span style={{ fontSize: "xx-small" }}>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Breadcrumbs;
