import { Popover, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import FormSubCompo from "../../../../components/Form/FormSubCompo";
import { Search } from "@mui/icons-material";
import PassengerAdjustment from "../../../../components/Buttons/PassengerAdjustment";
import CustomButton from "../../../../components/Buttons/CustomButton";
import { useNavigate } from "react-router-dom";

const StyledStack = styled(Stack)({
  backgroundColor: "#ffffff",
  borderRadius: 50,
  padding: "10px 20px",
});

const HotelForm = () => {
  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState();
  // const [location, setLocation] = useState()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleOpenPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleUpdatePassengers = (updatedPassengers) => {
    setPassengers(updatedPassengers);
    // Do any additional processing or state updates as needed
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const handleSubmit = () => {
    navigate("hotelList");
    // console.log("Location:", location);
    // console.log("CheckIn:", checkIn);
    // console.log("CheckOut:", checkOut);
    // console.log("Passengers:", passengers);
  };
  return (
    <StyledStack direction={"row"} justifyContent={"space-between"}>
      <FormSubCompo
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        typo={"From where"}
        placeholder={"where you want to stay"}
      />
      <FormSubCompo
        typo={"Check In"}
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        min={today}
      />
      <FormSubCompo
        typo={"Check Out"}
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        min={checkIn}
      />
      <Stack alignItems={"flex-start"} gap={1}>
        <Stack>
          <Typography style={{ color: "#000000", textAlign: "flex-start" }}>
            Travelers
          </Typography>
        </Stack>
        <Stack
          style={{
            padding: "5px 8px",
            borderRadius: "8px",
            border: "1px solid #191919",
            color: "#000000",
          }}
          onClick={handleOpenPopover}
        >
          Adults: {passengers.adults} Children: {passengers.children} Rooms:{" "}
          {passengers.rooms}
        </Stack>
      </Stack>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <PassengerAdjustment onUpdatePassengers={handleUpdatePassengers} />
        <Stack alignItems={"right"}>
          <CustomButton onClick={handleClosePopover} text={"Done"} />
        </Stack>
      </Popover>
      {/* </Stack> */}
      <button
        style={{
          background: "#051036",
          color: "#ffffff",
          padding: "5px 30px",
          borderRadius: "50px",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
        onClick={handleSubmit}
      >
        <Search />
        <Typography style={{ fontSize: "14px" }}>Search</Typography>
      </button>
    </StyledStack>
  );
};

export default HotelForm;
