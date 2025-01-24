import React, { useEffect, useRef } from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import "./MoveToTop.css";
function MoveToTop() {
  const arrowRef = useRef();

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (
      (arrowRef.current &&
        arrowRef.current.style &&
        document.body.scrollTop >= 70) ||
      document.documentElement.scrollTop >= 70
    ) {
      arrowRef.current.style.display = "block";
    } else {
      arrowRef.current.style.display = "none";
    }
  };

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const style = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
    display: "none",
  };

  return (
    <>
      <ArrowUpwardOutlinedIcon
        style={style}
        ref={arrowRef}
        className="MoveToTop"
        onClick={handleMoveToTop}
      />
    </>
  );
}

export default MoveToTop;
