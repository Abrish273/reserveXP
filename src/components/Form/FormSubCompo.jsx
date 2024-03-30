import { Stack, Typography, styled } from "@mui/material";
import React from "react";

const StyledStack = styled(Stack)({
  color: "#000000",
  padding: "5px 20px",
});
const StyledTypo = styled(Typography)({
  color: "#000000",
  fontWeight: "bold",
});
const FormSubCompo = ({ typo, placeholder, value, onChange, min }) => {
  return (
    <StyledStack alignItems={"flex-start"} gap={1}>
      <StyledTypo>{typo}</StyledTypo>
      <input
        type={
          typo === "From where" ||
          typo === "To where" ||
          typo === "Location" ||
          typo === "Travelers"
            ? "text"
            : typo === "Check In" ||
              typo === "Check Out" ||
              typo === "From - To" ||
              typo === "Depart" ||
              typo === "Start Date"
            ? "Date"
            : ""
        }
        placeholder={placeholder}
        style={{
          border: "none",
          width: "100%",
          padding: "10px",
          "&:active": {
            border: "none",
          },
        }}
        min={typo === ("Check In" || typo === "Check Out") && min}
        value={value}
        onChange={onChange}
      />
    </StyledStack>
  );
};

export default FormSubCompo;
