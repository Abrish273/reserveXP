import React from "react";
import { Stack } from "@mui/material";
import Wifi from "@mui/icons-material/Wifi";
import Bathtub from "@mui/icons-material/Bathtub";
import AcUnit from "@mui/icons-material/AcUnit";
import LocalLaundryService from "@mui/icons-material/LocalLaundryService";
import Grass from "@mui/icons-material/Grass";
import SoupKitchen from "@mui/icons-material/SoupKitchen";

function FacilitiesList({ facilities, display }) {
  const facilityIcons = {
    Wifi: <Wifi />,
    Sauna: <Bathtub />,
    Air_conditioning: <AcUnit />,
    Washer: <LocalLaundryService />,
    Backyard: <Grass />,
    Kitchen: <SoupKitchen />,
  };

  const trueFacilities = Object.keys(facilities).filter(
    (facility) => facilities[facility]
  );

  return (
    <Stack>
      <ul
        style={{
          listStyle: "none",
          display: display ? display : "flex",
          justifyContent: "space-between",
        }}
      >
        {trueFacilities.map((facility, index) => (
          <li key={index}>
            {facilityIcons[facility]} {facility}
          </li>
        ))}
      </ul>
    </Stack>
  );
}

export default FacilitiesList;
