import { Drafts } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";
import OrganizedButton from "../Buttons/OrganizedButton";

const PromoCard = () => {
  return (
    <Stack
      sx={{
        background: "#0d2857",
        color: "#ffffff",
        padding: "6vh 0px",
      }}
      justifyContent={"space-around"}
      alignItems={"center"}
      direction={"row"}
    >
      <Stack direction="row" alignItems={"center"} gap={1}>
        <Stack>
          <Drafts sx={{ color: "#ffffff", fontSize: "50px" }} />
        </Stack>
        <Stack>
          <Typography sx={{
            fontSize: "24px",
            fontWeight: "bold",
          }}>Your Travel Journey Starts Here</Typography>
          <Typography>Sign up and we'll send the best deals to you</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" gap={2}>
        <input 
          type="text"
          placeholder="Your Email"
          style={{
            width: "400px",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
          }}
        />
        <OrganizedButton text={"Subscribe"} />
      </Stack>
    </Stack>
  );
};

export default PromoCard;
