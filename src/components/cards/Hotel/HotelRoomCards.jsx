import { Stack, Typography, styled } from "@mui/material";
import React from "react";
import FacilitiesList from "../../../utils/FacilitiesList";
import PropertyType from "../../../utils/PropertyType";
import Dropdown from "../../../utils/Dropdown";
import { Link } from "react-router-dom";

const StyledTypo = styled(Typography)({
  fontWeight: "bold",
  color: "#ffffff",
  fontSize: "16px",
});

const HotelRoomCards = ({ rooms }) => {
     const roomsx = [
       { number: 1, price: 100 },
       { number: 2, price: 120 },
       { number: 3, price: 110 },
       { number: 4, price: 100 },
       { number: 5, price: 120 },
       { number: 6, price: 110 },
     ];
  return (
    <Stack gap={2}>
      {rooms.map(
        (room, index) => (
          // console.log(room.amenities),
          (
            <Stack
              key={index}
              sx={{
                padding: "2vh 3vw",
                border: "1px solid gray",
                borderRadius: "3px",
              }}
              gap={2}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                {room.roomName}
              </Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                sx={{
                  backgroundColor: "#13357b",
                  padding: "2vh 2vw",
                }}
              >
                <Stack direction={"row"} gap={37}>
                  <StyledTypo>Room Type</StyledTypo>
                  <StyledTypo>Benefits</StyledTypo>
                </Stack>
                <StyledTypo>Select Rooms</StyledTypo>
              </Stack>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Stack direction={"row"} gap={18}>
                  <img src={room.roomImg[0]} width={"250px"} alt="logo" />
                  <PropertyType
                    gap={"2px"}
                    justifyContent={"flex-start"}
                    flexDirection={"column"}
                    properties={room.amenities}
                  />
                </Stack>
                <Stack>
                  <Stack direction={"row"}>
                    <Typography
                      sx={{
                        fontSize: "22px",
                      }}
                    >
                      $350
                    </Typography>
                    <span style={{ color: "gray", textAlign: "center" }}>
                      /night
                    </span>
                  </Stack>
                  <Dropdown rooms={roomsx} />
                </Stack>
              </Stack>

              <Link to="">Show Room Information</Link>
            </Stack>
          )
        )
      )}
    </Stack>
  );
};

export default HotelRoomCards;
