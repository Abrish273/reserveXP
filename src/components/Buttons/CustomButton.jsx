import React from "react";
import { styled } from "@mui/system";

const StyledButton = styled("button")({
  padding: "15px",
  //   color: "#fff",
  borderRadius: (props) => props.borderRadius || "5px",
  border: "none",
  width: (props) => props.width || "auto", // Use a function to handle props
  cursor: "pointer",

  transition: "transform 0.3s ease-in-out",

  "&:hover": {
    transform: "scale(1.04)",
  },

  "&:active": {
    transform: "scale(0.96)",
  },
});

const CustomButton = ({
  backgroundColor,
  onClick,
  text,
  width,
  type,
  disabled,
  color,
  border,
  borderRadius,
}) => {
  return (
    <StyledButton
      sx={{
        backgroundColor: backgroundColor ? backgroundColor : "#000",
        color: { color },
        border: border,
      }}
      type={type && type}
      borderRadius={borderRadius}
      disabled={disabled && disabled}
      onClick={onClick && onClick}
      width={width && width}
    >
      {text}
    </StyledButton>
  );
};

export default CustomButton;
