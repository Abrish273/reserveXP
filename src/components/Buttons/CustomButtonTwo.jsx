import React from "react";
import { styled } from "@mui/system";

const StyledButton = styled("button")({
  paddingBottom: "15px",
  fontWeight: "600",
  fontSize: "16px",
  border: "none",
  width: (props) => props.width || "auto", // Use a function to handle props
  cursor: "pointer",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.04)",
    color: "#051036",
    borderBottom: "3px solid #051036",
  },
  "&:active": {
    transform: "scale(0.96)",
    color: "#051036", // Change color on active
    borderBottom: "3px solid #051036",
  },
});

const CustomButtonTwo = ({ onClick, text }) => {
  return (
    <StyledButton
      sx={{
        color: "#ffffff",
        borderBottom: "3px solid #ffffff",
        background: "none",
      }}
      onClick={onClick && onClick}
    >
      {text}
    </StyledButton>
  );
};

export default CustomButtonTwo;
