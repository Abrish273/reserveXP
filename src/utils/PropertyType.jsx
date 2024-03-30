import React from "react";
import { Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function PropertyType({ properties, flexDirection, gap, justifyContent }) {
  // Check if properties is defined and is an array
  if (!properties || !Array.isArray(properties)) {
    return null; // or handle the case where properties is undefined or not an array
  }

  return (
    <Stack>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: gap ? gap : "30px",
          justifyContent: "space-between",
          flexDirection: flexDirection ? flexDirection : "row",
          flexWrap: "wrap",
        }}
      >
        {properties.map((property, index) => (
          <li
            style={{
              display: "flex",
              justifyContent: justifyContent ? justifyContent : "space-between",
              alignItems: "center",
            }}
            key={index}
          >
            <CheckIcon />
            {property}
          </li>
        ))}
      </ul>
    </Stack>
  );
}

export default PropertyType;
