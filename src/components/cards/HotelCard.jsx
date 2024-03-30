import React from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import Star from "../Stars";

const HotelCard = ({
  images,
  hotelName,
  price,
  onClick,
  hotelStar,
  city,
  country,
  num_reviews,
  averageRating,
  selectedFacilities,
  hash,
}) => {
  // console.log(hotelStar);

  const isMobile = useMediaQuery("(max-width:400px)");
  return (
    <Stack
      sx={{
        width: !isMobile ? "90%" : "280px",
        padding: "5px",
        borderRadius: !isMobile ? "0px" : "10px",
        backgroundColor: "#ffffff",
      }}
      direction={isMobile ? "column" : "row"}
      gap={1}
    >
      <Stack flex={1}>
        <img
          src={images}
          Width={isMobile ? "100%" : "80%"}
          style={{
            borderRadius: isMobile ? "10px" : "5px",
          }}
          alt="logo"
        />
      </Stack>
      <Stack
        flex={1}
        justifyContent={"space-between"}
        sx={{
          padding: "10px",
        }}
      >
        <Stack
          sx={{ width: "100%" }}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
          >
            <Stack>
              <Stack direction={"row"} gap={1}>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "18px",
                  }}
                >
                  {hotelName}
                </Typography>
                <Stack direction={"row"}>
                  {
                    <Star
                      hotelStar={hotelStar}
                      color={"#ffff00"}
                      fontSize={"16px"}
                    />
                  }
                </Stack>
              </Stack>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                {city}, {country}
              </Typography>
            </Stack>
            <Stack>
              <Stack direction={"row"} gap={1} alignItems={"center"}>
                <Stack>
                  <Typography>Excellent</Typography>
                  <Typography
                    sx={{
                      color: "gray",
                    }}
                  >
                    {num_reviews} Reviews
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      backgroundColor: "#3554d1",
                      padding: "8px ",
                      // paddingBottom: "-5px ",
                      color: "#ffffff",
                      borderRadius: "5px",
                      textAlign: "center",
                    }}
                  >
                    {averageRating}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack justifyContent={"space-between"} direction={"row"}>
          <Stack alignItems={"flex-start"}>
            <Typography style={{ color: "gray", fontWeight: 500 }}>
              Facilities: {selectedFacilities}
            </Typography>
            <Typography></Typography>
          </Stack>
          <Stack alignItems={"flex-end"}>
            <Stack>
              <Typography
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                }}
              >
                ${price}
              </Typography>
            </Stack>

            <Typography style={{ color: "gray" }}>/night</Typography>
          </Stack>
        </Stack>
        {/* <Stack justifyContent={"space-between"} sx={{width:"100%"}}> */}
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction="row" gap={1}>
            {hash.map((item) => (
              <Stack
                sx={{
                  color: "black",
                  border: "1px solid gray",
                  borderRadius: "20px",
                  padding: "8px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                {item}
              </Stack>
            ))}
          </Stack>
          <Stack alignItems={"flex-end"}>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "18px",
                background: "#3554d1",
                color: "#ffffff",
                padding: "10px 8px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={onClick}
            >
              See Availability
            </Typography>
          </Stack>
        </Stack>
        {/* </Stack> */}
      </Stack>
    </Stack>
  );
};

export default HotelCard;
