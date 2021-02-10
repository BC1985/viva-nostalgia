import React from "react";
import "./ToggleButton.css";

const ToggleButton = props => {
  const { isNavOpen, openNav } = props;
  const styles = {
    hamburgerIcon: {
      position: "absolute",
      zIndex: 2,
      cursor: "pointer"
    },
    line: {
      height: "3px",
      width: "20px",
      background: "gray",
      transition: "all 0.3s ease"
    },
    lineTop: {
      transform: isNavOpen ? "rotate(50deg)" : "none",
      transformOrigin: "top left",
      marginBottom: "5px"
    },
    lineMiddle: {
      opacity: isNavOpen ? 0 : 1,
      transform: isNavOpen ? "translateX(-16px)" : "none"
    },
    lineBottom: {
      transform: isNavOpen ? "translateX(-1px) rotate(-50deg)" : "none",
      transformOrigin: "top left",
      marginTop: "5px"
    }
  };
  return (
    <div>
      <div id="hamburger-icon" onClick={openNav}>
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    </div>
  );
};

export default ToggleButton;