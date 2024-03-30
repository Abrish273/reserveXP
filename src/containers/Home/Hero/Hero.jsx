import React from "react";
import { Stack } from "@mui/material";
import HeroImg from "../../../assets/static/heroimg.webp";
import Form from "./Form";

const Hero = () => {
  return (
    <Stack
      sx={{
        position: "relative", // Set position to relative to allow absolute positioning of text
        backgroundImage: `url(${HeroImg})`, // Apply the background image
        backgroundSize: "cover", // Ensure the image covers the entire area
        backgroundPosition: "center", // Center the image
        minHeight: "85vh", // Set a minimum height for the Stack
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white", // Text color
        textAlign: "center", // Center align text
      }}
    >
      {/* Transparent blue overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 100, 0.6)", // Transparent blue color
        }}
      ></div>
      <Stack sx={{ zIndex: 1 }}>
        <h1 style={{ fontSize: "5rem", fontWeight: "300" }}>
          Plan your Holiday with ReserveXP
        </h1>
        <h3 style={{ fontSize: "1.3rem", fontWeight: "500" }}>
          Discover amazing places at exclusive deals
        </h3>
        <Stack><Form /></Stack>
      </Stack>
    </Stack>
  );
};

export default Hero;
