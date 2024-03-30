import React, { useState } from "react";
import HotelCard from "../../components/cards/HotelCard";
import { Slider, Stack, Typography, useMediaQuery } from "@mui/material";
import HotelRoom from "../../assets/tobedeleted/room.jpg";
import HotelRoom2 from "../../assets/tobedeleted/hotelroom2.jpg";
import { useNavigate } from "react-router-dom";
import { Star } from "../../components";

const hotelsx = [
  {
    _id: 1,
    hotelName: "Hilton Hotel",
    images: [HotelRoom, HotelRoom2, HotelRoom],
    description:
      "A luxurious hotel with excellent amenities Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium soluta minima ex A luxurious hotel with excellent amenities Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium soluta minima ex A luxurious hotel with excellent amenities Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, accusantium soluta minima excepturi autem dolor maxime maiores. Eligendi, quos, minus id libero nesciunt numquam porro saepe dolorum rem unde ad.",
    brief:
      "Visit the Museum of Modern Art in Manhattan. See amazing works of contemporary art, including Vincent van Gogh's The Starry Night. Check out Campbell's Soup Cans by Warhol and The Dance (I) by Matisse. Behold masterpieces by Gauguin, Dali, Picasso, and Pollock. Enjoy free audio guides available in English, French, German, Italian, Spanish, Portuguese",

    hotelStar: 3,
    city: "New York",
    country: "USA",
    price: 10,
    hash: [
      "Lodges",
      "Holiday homes",
      "Cruises",
      "Lodges",
      "Holiday homes",
      "Cruises",
    ],
    hotelServices: [
      "Havana Lobby bar",
      "Fiesta Restaurant",
      "Hotel transport services",
      "Free luggage deposit",
      "Laundry Services",
      "Pets welcome",
      "Tickets",
    ],
    availability: {
      start: "2024-03-10T00:00:00.000Z",
      end: "2024-03-20T00:00:00.000Z",
    },
    latitude: 40.7128,
    longitude: -74.006,
    facilities: {
      Wifi: true,
      Kitchen: false,
      Sauna: true,
      Washer: false,
      Air_conditioning: true,
      Backyard: false,
    },
    reviews: [
      {
        _id: "65eb1289754e23db7a4545e0",
        author: "John Doe",
        hotel: "65eab8f719f90c1abe056d27",
        review: "Good hotel to have a good memory",
        rating: 4.3,
        user: {
          _id: "65e9a717aaffb14cad0e3e81",
          username: "abebe",
          profile: HotelRoom,
        },
      },
      {
        _id: "65eb1289754e23db7a4545e0",
        author: "John Doe",
        hotel: "65eab8f719f90c1abe056d27",
        review: "Good hotel to have a good memory",
        rating: 4.3,
        user: {
          _id: "65e9a717aaffb14cad0e3e81",
          username: "abebe",
          profile: HotelRoom,
        },
      },
      {
        _id: "65eb1289754e23db7a4545e0",
        author: "John Doe",
        hotel: "65eab8f719f90c1abe056d27",
        review: "Good hotel to have a good memory",
        rating: 4.3,
        user: {
          _id: "65e9a717aaffb14cad0e3e81",
          username: "abebe",
          profile: HotelRoom,
        },
      },
    ],
    room: [
      {
        roomName: "Standard Double Room",
        roomImg: [HotelRoom, HotelRoom2, HotelRoom],
        amenities: [
          "wake-up call",
          "Flat Tv",
          "Laundry and dry cleaning",
          "Internet - Wifi",
          "Coffee and tea",
        ],
        price: 350,
        extraServices: {
          ServiceVip: 200,
          Breakfast: 100,
        },
      },
      {
        roomName: "Room Kerama",
        roomImg: [HotelRoom, HotelRoom2, HotelRoom],
        amenities: [
          "wake-up call",
          "Flat Tv",
          "Laundry and dry cleaning",
          "Internet - Wifi",
          "Coffee and tea",
        ],
        price: 350,
        extraServices: {
          ServiceVip: 200,
          Breakfast: 100,
        },
      },
    ],
  },
  {
    _id: 2,
    hotelName: "Hilton Hotel",
    images: [HotelRoom, HotelRoom2, HotelRoom],
    description: "A luxurious hotel with excellent amenities",
    brief:
      "Visit the Museum of Modern Art in Manhattan. See amazing works of contemporary art, including Vincent van Gogh's The Starry Night. Check out Campbell's Soup Cans by Warhol and The Dance (I) by Matisse. Behold masterpieces by Gauguin, Dali, Picasso, and Pollock. Enjoy free audio guides available in English, French, German, Italian, Spanish, Portuguese",
    hotelStar: 4,
    city: "New York",
    country: "USA",
    price: 20,
    hash: ["Boats", "Motels", "Resorts"],
    hotelServices: [
      "Havana Lobby bar",
      "Fiesta Restaurant",
      "Hotel transport services",
      "Free luggage deposit",
      "Laundry Services",
      "Pets welcome",
      "Tickets",
    ],

    availability: {
      start: "2024-03-10T00:00:00.000Z",
      end: "2024-03-20T00:00:00.000Z",
    },
    latitude: 40.7128,
    longitude: -74.006,
    facilities: {
      Wifi: true,
      Kitchen: false,
      Sauna: true,
      Washer: false,
      Air_conditioning: true,
      Backyard: false,
    },
    reviews: [
      {
        _id: "65eb1289754e23db7a4545e0",
        author: "John Doe",
        hotel: "65eab8f719f90c1abe056d27",
        review: "Good hotel to have a good memory",
        rating: 4.3,
        user: {
          _id: "65e9a717aaffb14cad0e3e81",
          username: "abebe",
          profile: HotelRoom,
        },
      },
      {
        _id: "65eb1289754e23db7a4545e0",
        author: "John Doe",
        hotel: "65eab8f719f90c1abe056d27",
        review: "Good hotel to have a good memory",
        rating: 4.3,
        user: {
          _id: "65e9a717aaffb14cad0e3e81",
          username: "abebe",
          profile: HotelRoom2,
        },
      },
    ],
    room: [
      {
        roomName: "Standard Double Room",
        roomImg: [HotelRoom, HotelRoom2, HotelRoom],
        amenities: [
          "wake-up call",
          "Flat Tv",
          "Laundry and dry cleaning",
          "Internet - Wifi",
          "Coffee and tea",
        ],
        price: 350,
        extraServices: {
          ServiceVip: 200,
          Breakfast: 100,
        },
      },
      {
        roomName: "Room Kerama",
        roomImg: [HotelRoom, HotelRoom2, HotelRoom],
        amenities: [
          "wake-up call",
          "Flat Tv",
          "Laundry and dry cleaning",
          "Internet - Wifi",
          "Coffee and tea",
        ],
        price: 350,
        extraServices: {
          ServiceVip: 200,
          Breakfast: 100,
        },
      },
    ],
  },
  {
    _id: 3,
    hotelName: "Hilton Hotel",
    images: [HotelRoom, HotelRoom2, HotelRoom],
    description: "A luxurious hotel with excellent amenities",
    brief:
      "Visit the Museum of Modern Art in Manhattan. See amazing works of contemporary art, including Vincent van Gogh's The Starry Night. Check out Campbell's Soup Cans by Warhol and The Dance (I) by Matisse. Behold masterpieces by Gauguin, Dali, Picasso, and Pollock. Enjoy free audio guides available in English, French, German, Italian, Spanish, Portuguese",
    hotelStar: 5,
    city: "New York",
    country: "USA",
    price: 300,
    hotelServices: [
      "Havana Lobby bar",
      "Fiesta Restaurant",
      "Hotel transport services",
      "Free luggage deposit",
      "Laundry Services",
      "Pets welcome",
      "Tickets",
    ],
    hash: ["Apartments", "Hotels", "Villas"],
    availability: {
      start: "2024-03-10T00:00:00.000Z",
      end: "2024-03-20T00:00:00.000Z",
    },
    latitude: 40.7128,
    longitude: -74.006,
    facilities: {
      Wifi: true,
      Kitchen: true,
      Sauna: true,
      Washer: true,
      Air_conditioning: true,
      Backyard: false,
    },
    reviews: [
      {
        _id: "65eb1289754e23db7a4545e0",
        author: "John Doe",
        hotel: "65eab8f719f90c1abe056d27",
        review: "Good hotel to have a good memory",
        rating: 4.3,
        user: {
          _id: "65e9a717aaffb14cad0e3e81",
          username: "abebe",
          profile: HotelRoom,
        },
      },
      {
        _id: "65eb1289754e23db7a4545e0",
        author: "John Doe",
        hotel: "65eab8f719f90c1abe056d27",
        review: "Good hotel to have a good memory",
        rating: 4.3,
        user: {
          _id: "65e9a717aaffb14cad0e3e81",
          username: "abebe",
          profile: HotelRoom2,
        },
      },
    ],
    room: [
      {
        roomName: "Standard Double Room",
        roomImg: [HotelRoom, HotelRoom2, HotelRoom],
        amenities: [
          "wake-up call",
          "Flat Tv",
          "Laundry and dry cleaning",
          "Internet - Wifi",
          "Coffee and tea",
        ],
        price: 350,
        extraServices: {
          ServiceVip: 200,
          Breakfast: 100,
        },
      },
      {
        roomName: "Room Kerama",
        roomImg: [HotelRoom, HotelRoom2, HotelRoom],
        amenities: [
          "wake-up call",
          "Flat Tv",
          "Laundry and dry cleaning",
          "Internet - Wifi",
          "Coffee and tea",
        ],
        price: 350,
        extraServices: {
          ServiceVip: 200,
          Breakfast: 100,
        },
      },
    ],
  },
];

function valuetext(value) {
  return `${value}`;
}

const HotelList = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:400px)");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 500]); // Default price range
  const [filteredHotels, setFilteredHotels] = useState(hotelsx); // State to hold filtered hotels
  const [selectedHotelStars, setSelectedHotelStars] = useState([]);
  const [selectedReviewRatings, setSelectedReviewRatings] = useState([]);
  const [reviewRatingRange, setReviewRatingRange] = useState([0, 5]);
  const [noResults, setNoResults] = useState(false);

  const handleClick = (id) => {
    const hotel = hotelsx.find((hotel) => hotel._id === id);
    navigate(`/hotelList/${id}`, { state: hotel });
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleHotelStarChange = (star) => {
    if (selectedHotelStars.includes(star)) {
      setSelectedHotelStars(selectedHotelStars.filter((s) => s !== star));
    } else {
      setSelectedHotelStars([...selectedHotelStars, star]);
    }
  };

  const handleReviewRatingChange = (rating) => {
    if (selectedReviewRatings.includes(rating)) {
      setSelectedReviewRatings(
        selectedReviewRatings.filter((r) => r !== rating)
      );
    } else {
      setSelectedReviewRatings([...selectedReviewRatings, rating]);
    }
  };

  const handleApplyFilters = () => {
    const filtered = hotelsx
      .filter((hotel) =>
        selectedFilters.every((filter) => hotel.hash.includes(filter))
      )
      .filter(
        (hotel) => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
      )
      .filter((hotel) => {
        // Filter based on selected hotel star ratings
        if (selectedHotelStars.length === 0) {
          return true; // If no star ratings are selected, include all hotels
        } else {
          return selectedHotelStars.includes(hotel.hotelStar); // Filter based on selected hotel stars
        }
      })
      .filter((hotel) =>
        selectedFilters.every((filter) => hotel.hash.includes(filter))
      )
      .filter((hotel) =>
        // Filter based on review rating range
        hotel.reviews.some(
          (review) =>
            review.rating >= reviewRatingRange[0] &&
            review.rating <= reviewRatingRange[1]
        )
      );

    if (filtered.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
    setFilteredHotels(filtered);
  };
  const hashValues = [...new Set(hotelsx.flatMap((hotel) => hotel.hash))];
  const handleHashChange = (hashValue) => {
    if (selectedFilters.includes(hashValue)) {
      setSelectedFilters(
        selectedFilters.filter((filter) => filter !== hashValue)
      );
    } else {
      setSelectedFilters([...selectedFilters, hashValue]);
    }
  };
  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;
    const sumOfRatings = reviews.reduce(
      (total, review) => total + review.rating,
      0
    );
    return sumOfRatings / reviews.length;
  };
  const handleClearFilters = () => {
    setSelectedFilters([]);
    setPriceRange([0, 500]);
    setFilteredHotels(hotelsx);
    setNoResults(false);
    setSelectedHotelStars([]);
    setReviewRatingRange([0, 5]);
  };

  return (
    <Stack
      sx={{
        backgroundColor: "#ebe9e4",
      }}
    >
      search for
      <Stack
        direction={"row"}
        sx={{
          padding: "50px 5px",
          backgroundColor: "#ffffff",
        }}
        gap={5}
      >
        <Stack
          flex={1}
          sx={{
            display: isMobile ? "none" : "block",
            // width: "300px",
          }}

          // justifyContent={"center"}
        >
          <Stack
            gap={1}
            sx={{
              padding: "5px 15px",
            }}
          >
            <Typography>map</Typography>
            <hr />

            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Price
            </Typography>

            <Stack gap={2} alignItems={"flex-start"}>
              <Stack direction="row">
                ${priceRange[0]} - ${priceRange[1]}
              </Stack>
              <Slider
                value={priceRange}
                onChange={handlePriceRangeChange}
                valueLabelDisplay="auto"
                min={0}
                max={500}
                step={10}
                getAriaValueText={valuetext}
              />
              <button
                style={{
                  padding: "10px",
                  color: "#ffffff",
                  backgroundColor: "#13357b",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "5px",
                }}
                onClick={handleApplyFilters}
              >
                Apply
              </button>
            </Stack>

            <Stack>
              <br />
              <hr />
              <br />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Hotel Star
              </Typography>
              <br />
              {[5, 4, 3, 2, 1].map((starValue) => (
                <div key={starValue}>
                  <input
                    type="checkbox"
                    id={`star-${starValue}`}
                    checked={selectedHotelStars.includes(starValue)}
                    onChange={() => handleHotelStarChange(starValue)}
                    onClick={handleApplyFilters}
                  />
                  <label
                    htmlFor={`star-${starValue}`}
                    style={{ paddingLeft: "10px" }}
                  >
                    <Star hotelStar={starValue} color={"#fa5839"} />
                  </label>
                </div>
              ))}
            </Stack>
            <hr />
            <Stack>
              <br />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Review Score
              </Typography>
              <br />
              {[5, 4, 3, 2, 1].map((starValue) => (
                <div key={starValue}>
                  <input
                    type="checkbox"
                    id={`rating-${starValue}`}
                    checked={selectedReviewRatings.includes(starValue)}
                    onChange={() => handleReviewRatingChange(starValue)}
                    onClick={handleApplyFilters}
                  />
                  <label
                    htmlFor={`star-${starValue}`}
                    style={{ paddingLeft: "10px" }}
                  >
                    <Star hotelStar={starValue} color={"#ffff00"} />
                  </label>
                </div>
              ))}
            </Stack>
            <hr />
            <Stack>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                property type
              </Typography>
              <br />
              {hashValues.map((hashValue) => (
                <div key={hashValue}>
                  <input
                    type="checkbox"
                    id={`hash-${hashValue}`}
                    checked={selectedFilters.includes(hashValue)}
                    onChange={() => handleHashChange(hashValue)}
                    onClick={handleApplyFilters}
                  />
                  <label
                    htmlFor={`hash-${hashValue}`}
                    style={{ paddingLeft: "10px" }}
                  >
                    {hashValue}
                  </label>
                </div>
              ))}
            </Stack>
            {/* <hr /> */}
            {/* <Typography>facilities</Typography>
            <Typography>hotel service</Typography> */}
            <button
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "10px",
                color: "#ffffff",
                backgroundColor: "#13357b",
                cursor: "pointer",
              }}
              onClick={handleClearFilters}
            >
              Clear
            </button>
          </Stack>
        </Stack>
        <Stack
          flex={2.5}
          direction={"column"}
          gap={2}
          // flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {noResults ? (
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              No hotels match the selected filters.
            </Typography>
          ) : (
            filteredHotels.map((hotel, index) => {
              const averageRating = calculateAverageRating(hotel.reviews);
              const selectedFacilities = Object.entries(hotel.facilities)
                .filter(([key, value]) => value === true)
                .map(([key]) => key)
                .join(", ");

              return (
                <Stack key={index}>
                  <HotelCard
                    images={hotel.images[0]}
                    hotelName={hotel.hotelName}
                    contentText={hotel.contentText}
                    price={hotel.price}
                    hotelStar={hotel.hotelStar}
                    city={hotel.city}
                    country={hotel.country}
                    num_reviews={hotel.reviews.length}
                    averageRating={averageRating}
                    selectedFacilities={selectedFacilities}
                    hash={hotel.hash}
                    onClick={() => handleClick(hotel._id)}
                  />
                </Stack>
              );
            })
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HotelList;
