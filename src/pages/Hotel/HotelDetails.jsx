import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Stack, Typography, styled, useMediaQuery } from "@mui/material";
import { HotelRoomCards, PriceCard, Star } from "../../components";
import FacilitiesList from "../../utils/FacilitiesList";
import PropertyType from "../../utils/PropertyType";

const StyledTypo = styled(Typography)({
  color: "#000000",
  fontWeight: 800,
  fontSize: 30,
});

const HotelDetails = () => {
  const location = useLocation();
  const { state: hotel } = location;
  const isMobile = useMediaQuery("(max-width:400px)");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };
  {
    /* breaking  to the next line by iterating through the text start */
  }
  if (!hotel || !hotel.brief) {
    return <div>No hotel details available</div>;
  }
  let sentences = hotel.brief.split(". ");

  // Format each sentence as an unordered list item
  let listItems = sentences.map((sentence, index) => (
    <li key={index}>{sentence}.</li>
  ));

  {
    /* breaking  to the next line by iterating through the text end */
  }

  return (
    <Stack
      sx={{
        padding: isMobile ? "20px 5vw" : "20px 10vw",
        gap: 1,
        backgroundColor: "#f8f4ec",
      }}
    >
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"} gap={2}>
          <StyledTypo>{hotel.hotelName}</StyledTypo>
          <Stack direction={"row"}>
            {
              <Star
                hotelStar={hotel.hotelStar}
                color={"#f8d448"}
                fontSize={"16px"}
              />
            }
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <Typography
            sx={{
              fontSize: "16px",
            }}
          >
            From
          </Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
            }}
          >
            ${hotel.price}
          </Typography>
          <button
            style={{
              border: "none",
              padding: "20px",
              background: "#13357b",
              borderRadius: "10px",
              color: "#ffffff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Select Room
          </button>
        </Stack>
      </Stack>
      {/* images */}
      <Stack direction="row" gap={2}>
        <Stack
          flex={1}
          sx={{
            display: isMobile ? "none" : "flex",
          }}
        >
          <img
            src={hotel.images[0]}
            alt="hotel"
            Width="100%"
            style={{
              borderRadius: isMobile ? "0px" : "15px 0px 0px 15px",
            }}
          />
        </Stack>
        <Stack
          flex={1}
          direction="row"
          gap={2}
          flexWrap={isMobile ? "nowrap" : "wrap"} // Ensure images are displayed in a single row
          style={{
            borderRadius: isMobile ? "8px" : "0px 15px 15px 0px",
            overflowX: isMobile ? "auto" : "hidden",
            position: "relative",
          }}
          id="image-container"
        >
          {hotel.images.map((image, index) => (
            <img
              key={index + 1}
              src={image}
              alt="hotel"
              width={!isMobile ? "45%" : "100%"} // Show full width on mobile
              style={{ flexShrink: 0 }} // Ensure images don't shrink
              onClick={() => handleImageChange(index)}
            />
          ))}
          <Stack
            direction={"row"}
            sx={{
              position: "absolute",
              bottom: "5px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "5px",
            }}
          >
            {isMobile &&
              hotel.images.map((image, index) => (
                <span
                  key={index}
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor:
                      index === currentImageIndex ? "black" : "#ffffff",
                    cursor: "pointer",
                    fontWeight: index === currentImageIndex ? "bold" : "normal",
                  }}
                  onClick={() => handleImageChange(index)}
                />
              ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Stack gap={2} flex={isMobile ? 1 : 1.5}>
          {/* <Stack>
            <StyledTypo>{hotel.hotelName}</StyledTypo>
            <StyledTypo
              sx={{
                fontWeight: 400,
                fontSize: "16px",
              }}
            >
              3 guests, 2 bedroom
            </StyledTypo>
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              <StyledTypo
                sx={{
                  fontWeight: 400,
                  fontSize: "16px",
                }}
              >
                <Star />
              </StyledTypo>
              <StyledTypo
                sx={{
                  fontWeight: 300,
                  fontSize: "16px",
                }}
              >
                2k reviews
              </StyledTypo>
            </Stack>
          </Stack> */}
          {/* description */}
          <Stack>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Overview
            </Typography>
            <Typography>{hotel.description}</Typography>
          </Stack>
          {/* highlights */}
          <Stack>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Highlights
            </Typography>
            <Stack sx={{ padding: "5px 2vw" }}>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                }}
              >
                {listItems}
              </ul>
            </Stack>
          </Stack>
          <hr />
          {/* facility */}
          <Stack gap={3}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Property type
            </Typography>
            <Stack>
              <PropertyType properties={hotel.hash} />
            </Stack>
          </Stack>
          <hr />
          {/* facility */}
          <Stack gap={3}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Facilities
            </Typography>
            <Stack>
              <FacilitiesList facilities={hotel.facilities} />
            </Stack>
          </Stack>
          {/* Hotle service */}
          <hr />
          <Stack gap={3}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              Hotel Service
            </Typography>
            <Stack>
              <PropertyType properties={hotel.hotelServices} />
            </Stack>
            <hr />
          </Stack>
        </Stack>
        <Stack flex={1} gap={3} sx={{ marginTop: "5vh" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Available Rooms
          </Typography>
          <Stack>Available box</Stack>
          <HotelRoomCards rooms={hotel.room} />
          <PriceCard hotel={hotel} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HotelDetails;
