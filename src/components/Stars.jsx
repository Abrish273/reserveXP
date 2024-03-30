import React from "react";
import StarIcon from "@mui/icons-material/Star";

const Star = ({ hotelStar, color, fontSize }) => {
  let stars = [];
  for (let i = 0; i < hotelStar; i++) {
    stars.push(
      <StarIcon style={{ color: color, fontSize: fontSize }} key={i} />
    );
  }
  return <>{stars}</>;
};

export default Star;


