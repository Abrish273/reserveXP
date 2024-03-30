import React from "react";
import { useNavigate } from "react-router-dom";

const OrganizedButton = ({ text, to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button
      style={{
        backgroundColor: "#3554d1",
        color: "#ffffff",
        fontSize: "16px",
        padding: "15px 25px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default OrganizedButton;
