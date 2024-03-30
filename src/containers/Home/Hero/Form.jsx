import { Stack } from "@mui/material";
import React, { useState } from "react";
import HotelForm from "./Form/HotelForm";
import SpaceForm from "./Form/SpaceForm";
import ToursForm from "./Form/ToursForm";
import CarsForm from "./Form/CarsForm";
import EventForm from "./Form/EventForm";
import FlightForm from "./Form/FlightForm";
import BoatForm from "./Form/BoatForm";
import CustomButtonTwo from "../../../components/Buttons/CustomButtonTwo";

const Form = () => {
  const [toggle, setToggle] = useState(0);
  return (
    <Stack
      gap={6}
      sx={{
        margin: { xs: "15px 20px", sm: "0x 300px", md: "30px" },
      }}
    >
      <Stack direction={"row"} gap={4} alignItems={"center"}>
        <CustomButtonTwo text={"Flights"} onClick={(e) => setToggle(0)} />
        <CustomButtonTwo text={"Hotels"} onClick={() => setToggle(1)} />
        <CustomButtonTwo text={"Tours"} onClick={() => setToggle(2)} />
        <CustomButtonTwo text={"Cars"} onClick={() => setToggle(3)} />
        <CustomButtonTwo text={"Bundles"} onClick={() => setToggle(4)} />
      </Stack>
      <Stack>
        {toggle === 0 && <HotelForm />}
        {toggle === 1 && <SpaceForm />}
        {toggle === 2 && <ToursForm />}
        {toggle === 3 && <CarsForm />}
        {toggle === 4 && <EventForm />}
        {toggle === 5 && <FlightForm />}
        {toggle === 6 && <BoatForm />}
      </Stack>
    </Stack>
  );
};

export default Form;
