import { Stack, Typography, styled } from "@mui/material";
import React from "react";

const StyledTypo = styled(Typography)({
  color: "#000000",
  fontWeight: 800,
  fontSize: 20,
});

const ReserveCard = ({ price }) => {
  console.log(price);
  return (
    <Stack
      sx={{
        padding: "5px 10px",
      }}
      gap={1}
    >
      <StyledTypo>${price} / night</StyledTypo>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography>per person per night</Typography>
        <Typography>${price}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography>2 persons per night</Typography>
        <Typography>${price * 2}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography>2 persons for 3 days</Typography>
        <Typography>${price * 2 * 3}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <StyledTypo>Total</StyledTypo>
        <StyledTypo>${price * 2 * 3}</StyledTypo>
      </Stack>
      <button
        style={{
          padding: "10px 10px",
          border: "none",
          backgroundColor: "#051036",
          color:"#ffffff",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reserve
      </button>
    </Stack>
  );
};

export default ReserveCard;
