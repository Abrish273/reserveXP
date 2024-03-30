import { Stack, Typography } from "@mui/material";
import React from "react";
// import OrganizedButton from "../../Buttons/OrganizedButton";
import {  useNavigate } from "react-router-dom";

const PriceCard = ({ hotel }) => {
  // const location = useLocation();
  const navigate = useNavigate()
   const handleClick = () => {
     navigate("/checkOut", { state: hotel });
     console.log("clicked")
   };

  return (
    <Stack
      sx={{
        border: "1px solid gray",
        borderRadius: "3px",
      }}
      //   gap={2}
    >
      <Stack sx={{ padding: "2vh 3vw" }} gap={2}>
        <Typography>Extra prices:</Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack justifyContent={"space-between"}>
            <div>
              <input
                type="checkbox"
                id="service"
                //   checked={isChecked}
                //   onChange={handleCheckboxChange}
              />
              <label htmlFor="service">Service VIP</label>
            </div>
          </Stack>
          $200
          <Stack justifyContent={"space-between"}>
            <div>
              <input
                type="checkbox"
                id="service"
                //   checked={isChecked}
                //   onChange={handleCheckboxChange}
              />
              <label htmlFor="service">Service VIP</label>
            </div>
          </Stack>
          $200
        </Stack>
      </Stack>
      <hr />
      <Stack
        sx={{ padding: "2vh 3vw" }}
        direction={"row"}
        justifyContent={"space-between"}
        gap={1}
      >
        <Stack flex={1} gap={1}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography>Total Room:</Typography>
            <Typography>10</Typography>
          </Stack>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography>Service fee</Typography>
            <Typography>$110</Typography>
          </Stack>
        </Stack>
        <hr />
        <Stack flex={1} alignItems={"flex-end"} gap={1}>
          <Stack direction={"row"} alignItems={"flex-end"}>
            <Typography>Total Price:</Typography>
            <Typography
              sx={{
                color: "red",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
            >
              $3,70
            </Typography>
          </Stack>
          {/* navigate(`/hotelList/${id}`, { state: hotel }); */}

          {/* <OrganizedButton
            text={"Book Now"}
            to="/checkOut"
            state={{ from: location.pathname, hotel }}
          /> */}
          <button
            style={{
              backgroundColor: "#3554d1",
              color: "#ffffff",
              fontSize: "16px",
              padding: "15px 25px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleClick}
          >
            Book Now
          </button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PriceCard;
