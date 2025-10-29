import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ReactComponent as BgCircle } from "../assets/circlesvg.svg";
import CenterIcon from "../assets/center-icon.png";

const Accomplish = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 20px",
    background: "linear-gradient(135deg, #f1f5f9 0%, #d1d5db 100%)", // Darker gradient
    fontFamily: "'Segoe UI', sans-serif",
    color: "#1a202c", // Darker text color
    textAlign: "center",
    boxSizing: "border-box",
  };

  const headingStyle = {
    fontSize: "4.5rem", 
    fontWeight: 600, 
    lineHeight: "1.1",
    margin: "5px 0",
    color: "#1a202c", // Darker heading color
    textAlign: "center",
  };

  const titleStyle = {
    maxWidth: "800px",
    fontSize: "18px",
    lineHeight: "1.6",
    margin: "30px 0 50px 0",
    color: "#4a5568", // Darker subtitle color
    textAlign: "center",
  };

  const contentStyle = {
    display: "flex",
    justifyContent: "space-between", 
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    marginTop: "40px",
  };

  const listStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    color: "#1a202c", // Darker text color
  };

  const leftListStyle = {
    ...listStyle,
    alignItems: "flex-start", 
    marginLeft: "0",
  };

  const rightListStyle = {
    ...listStyle,
    alignItems: "flex-end", 
    marginRight: "0",
  };

  const listItemStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    fontSize: "20px", 
    color: "#1a202c", // Darker text color
    fontWeight: "500",
  };

  const checkIconStyle = {
    color: "#0d9669", // Slightly darker green
    fontSize: "22px",
  };

  const underlineStyle = {
    width: "100%",
    height: "1px",
    backgroundColor: "#9ca3af", // Darker underline
    marginTop: "8px",
  };

  const centerWrapperStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 1 auto",
  };

  const svgStyle = {
    width: "400px",
    height: "400px",
    maxWidth: "80vw",
    maxHeight: "80vw",
    opacity: 0.8,
  };

  const iconWrapperStyle = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)", // Slightly darker shadow
    background: "#f8fafc", // Slightly darker white
  };

  const iconStyle = {
    width: "60px",
    height: "60px",
  };

  const buttonWrapperStyle = {
    marginTop: "60px",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "14px 45px",
    backgroundColor: "#0d9669", // Slightly darker green
    color: "white",
    fontWeight: 600,
    fontSize: "16px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "0.3s",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(13, 150, 105, 0.4)", // Darker shadow
  };

  return (
    <div style={containerStyle}>
      <div style={{ textAlign: "center" }}>
        <h1 style={headingStyle}>Accomplish Anything</h1>
        <h1 style={headingStyle}>in Developing</h1>
      </div>

      <p style={titleStyle}>
        This is the space to introduce the Services section. Briefly describe
        the types of services offered and highlight any special benefits or
        features.
      </p>

      <div style={contentStyle}>
        <div style={leftListStyle}>
          {["Sample Text 1", "Sample Text", "Sample Text"].map((text, index) => (
            <div key={index} style={listItemStyle}>
              <FaCheckCircle style={checkIconStyle} />
              <span>{text}</span>
              <div style={underlineStyle}></div>
            </div>
          ))}
        </div>

        <div style={centerWrapperStyle}>
          <BgCircle style={svgStyle} />
          <div style={iconWrapperStyle}>
            <img src={CenterIcon} alt="icon" style={iconStyle} />
          </div>
        </div>

        <div style={rightListStyle}>
          {["Sample Text", "Sample Text", "Sample Text"].map((text, index) => (
            <div key={index} style={listItemStyle}>
              <FaCheckCircle style={checkIconStyle} />
              <span>{text}</span>
              <div style={underlineStyle}></div>
            </div>
          ))}
        </div>
      </div>

      <div style={buttonWrapperStyle}>
        <a
          href="https://www.brington.in/"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#047857";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#0d9669";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Create Now!
        </a>
      </div>
    </div>
  );
};

export default Accomplish;