import { IconButton, Stack } from "@mui/material";
import React, { useState } from "react";

const PassengerAdjustment = ({ onUpdatePassengers }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const handleIncrement = (type) => {
    switch (type) {
      case "adults":
        setAdults(adults + 1);
        break;
      case "children":
        setChildren(children + 1);
        break;
      case "rooms":
        setRooms(rooms + 1);
        break;
      default:
        break;
    }
    handleUpdate(); 
  };

  const handleDecrement = (type) => {
    switch (type) {
      case "adults":
        setAdults(adults > 1 ? adults - 1 : 1);
        break;
      case "children":
        setChildren(children > 0 ? children - 1 : 0);
        break;
      case "rooms":
        setRooms(rooms > 0 ? rooms - 1 : 0);
        break;
      default:
        break;
    }
    handleUpdate(); // Call handleUpdate on decrement
  };

  const handleUpdate = () => {
    const updatedPassengers = {
      adults,
      children,
      rooms,
    };
    onUpdatePassengers(updatedPassengers);
    console.log("Updated Passengers component:", updatedPassengers);
  };

  return (
    <Stack sx={{ padding: "2px 5px" }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <IconButton onClick={() => handleDecrement("adults")}>-</IconButton>
        <span>
          Adults <b>{adults}</b>
        </span>
        <IconButton onClick={() => handleIncrement("adults")}>+</IconButton>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <IconButton onClick={() => handleDecrement("children")}>-</IconButton>
        <span>
          Children <b>{children}</b>
        </span>
        <IconButton onClick={() => handleIncrement("children")}>+</IconButton>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <IconButton onClick={() => handleDecrement("rooms")}>-</IconButton>
        <span>
          Rooms <b>{rooms}</b>
        </span>
        <IconButton onClick={() => handleIncrement("rooms")}>+</IconButton>
      </Stack>
    </Stack>
  );
};

export default PassengerAdjustment;
