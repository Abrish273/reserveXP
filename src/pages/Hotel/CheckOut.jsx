import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import { Button, Modal, TextField, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Info,
  LocationOn,
  DisplaySettings,
  ArrowOutward,
  Close,
} from "@mui/icons-material";
import { Footers, PromoCard } from "../../components";

const CheckOut = () => {
  const location = useLocation();
  const { state: hotel } = location;
  const [toggle, setToggle] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setToggle(1);

    // setOpenTwo(false); // Close openTwo when open is opened
  };
  const handleClose = () => setOpen(false);
  const handleOpenTwo = () => {
    setOpenTwo(true);
    setToggle(1);
    // setOpen(false); // Close open when openTwo is opened
  };
  const handleCloseTwo = () => setOpenTwo(false);
  // console.log("additionalData:", hotel);
  return (
    <Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        sx={{ margin: "8vh 5vw" }}
        gap={5}
      >
        {/* left */}
        <Stack flex={1.5} gap={1}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Let us Know who you are
          </Typography>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            gap={2}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 2fr",
              gap: "20px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="First Name *"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Last Name *"
              variant="outlined"
            />
            <TextField id="outlined-basic" label="Email *" variant="outlined" />
            <TextField id="outlined-basic" label="Phone *" variant="outlined" />
            <TextField
              id="outlined-basic"
              label="Address line 1 "
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Address line 2 "
              variant="outlined"
            />
            <TextField id="outlined-basic" label="City " variant="outlined" />
            <TextField
              id="outlined-basic"
              label="State/Province/Region"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="State/Province/Region"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="ZIP code/Postal code"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Country *"
              variant="outlined"
            />
          </Stack>
          <TextField
            id="outlined-multiline-flexible"
            label="Special Requirements"
            multiline
            rows={4}
          />
          <Stack gap={2}>
            <Typography>How do you want to pay?</Typography>
            <TextField label="Offline Payment" />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Stack direction="row" alignItems={"center"} gap={1}>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  // value="checkbox"
                  // style={{width:"20px", height:"20px"}}
                />
                <label>I have read and accept the terms and conditons</label>
              </Stack>
              <Button
                variant="contained"
                sx={{
                  background: "#3554d1",
                  color: "#ffffff",
                  padding: "10px 20px",
                }}
              >
                <Stack direction="row">
                  <Typography onClick={handleOpen}>Book Now</Typography>
                  <ArrowOutward />
                </Stack>
              </Button>
              <Modal open={open} onClose={handleClose}>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "400px",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Log in
                    </Typography>
                    <Close onClick={handleClose} />
                  </Stack>
                  <hr />
                  <Typography>Welcome Back</Typography>
                  <Stack direction={"row"}>
                    <Typography>Don't have an account?</Typography>
                    <Typography onClick={handleOpenTwo}>Sign Up</Typography>
                  </Stack>

                  <TextField label="Email" />
                  <TextField label="Password" />
                  <Stack direction="row" justifyContent={"space-between"}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input type="checkbox" />
                    </div>
                    <Typography>Forgot Password?</Typography>
                  </Stack>
                  <Button variant="contained">Sign In</Button>
                </div>
              </Modal>
              <Modal open={openTwo} onClose={handleCloseTwo}>
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "400px",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Stack
                    direction="row"
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "20px",
                      }}
                    >
                      Log in
                    </Typography>
                    <Close onClick={handleCloseTwo} />
                  </Stack>
                  <hr />
                  <Typography>Welcome Back</Typography>
                  <Stack direction={"row"}>
                    <Typography>Don't have an account?</Typography>
                    <Typography onClick={handleOpenTwo}>
                      Sign up for free
                    </Typography>
                  </Stack>
                  <TextField label="Email" />
                  <TextField label="Password" />
                  <Stack direction="row" justifyContent={"space-between"}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input type="checkbox" />
                    </div>
                    <Typography>Forgot Password?</Typography>
                  </Stack>
                  <Button variant="contained">Sign In</Button>
                </div>
              </Modal>
            </Stack>
          </Stack>
        </Stack>
        {/* right */}
        <Stack flex={1} gap={1}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Your Booking
          </Typography>
          <Stack
            sx={{
              border: "1px solid gray",
              borderRadius: "2px",
              // padding: "10px",
            }}
          >
            <Stack
              sx={{
                padding: "2.5vw",
              }}
              gap={1}
            >
              <Typography>{hotel.hotelName}</Typography>
              <Stack direction={"row"} gap={1}>
                <LocationOn />
                <Typography>
                  {hotel.city}, {hotel.country}
                </Typography>
              </Stack>
              <img src={hotel.images[0]} alt="hotel" width={"250px"} />
              <Stack direction={"row"} gap={1}>
                <Info />
                <Typography>Vendor: Elise Aarohi</Typography>
              </Stack>
            </Stack>
            <hr />
            <Stack sx={{ padding: "2.5vw" }} gap={1}>
              <Stack justifyContent={"space-between"} direction={"row"}>
                <Typography>Check in</Typography>
                <Typography>03/12/2024</Typography>
              </Stack>
              <Stack justifyContent={"space-between"} direction={"row"}>
                <Typography>Check out</Typography>
                <Typography>03/12/2024</Typography>
              </Stack>
              <Stack justifyContent={"space-between"} direction={"row"}>
                <Typography>Nights</Typography>
                <Typography>28</Typography>
              </Stack>
              <Stack justifyContent={"space-between"} direction={"row"}>
                <Typography>Adults</Typography>
                <Typography>2</Typography>
              </Stack>
              <hr />
              <Stack justifyContent={"space-between"} direction={"row"}>
                <Typography>Standard Double Room * 1</Typography>
                <Typography>$9,800</Typography>
              </Stack>
              <Stack justifyContent={"center"} direction={"row"}>
                <DisplaySettings />
                <Typography>Detail</Typography>
              </Stack>
              <Stack justifyContent={"space-between"} direction={"row"}>
                <Stack direction={"row"}>
                  <Typography>Service fee</Typography>
                  <Info />
                </Stack>
                <Typography>$800</Typography>
              </Stack>
              <hr />
              <Stack gap={2} alignItems={"flex-start"}>
                <Typography>Do you have a promo code?</Typography>
                <TextField
                  sx={{
                    width: "100%",
                  }}
                  label="Enter promo code"
                />
                <Button variant="outlined">Apply</Button>
              </Stack>
              <hr />
              <Stack justifyContent={"space-between"} direction={"row"}>
                <Typography>Total</Typography>
                <Typography>$9,800</Typography>
              </Stack>
              <hr />
              <Stack>
                <Typography>Credit want to pay?</Typography>
                <Stack
                  direction={"row"}
                  sx={{
                    border: "1px solid gray",
                  }}
                  justifyContent={"space-between"}
                >
                  <Typography
                    sx={{
                      padding: "10px",
                      background: "#e9ecef",
                    }}
                  >
                    Credit 250000
                  </Typography>
                  <hr />
                  <Typography
                    sx={{
                      padding: "10px",
                    }}
                  >
                    0
                  </Typography>
                  <hr />
                  <Typography
                    sx={{
                      padding: "10px",
                      background: "#e9ecef",
                    }}
                  >
                    $0
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                justifyContent={"space-between"}
                sx={{
                  padding: "1.9vh 2vw",
                  background: "#ebfcea",
                }}
                direction={"row"}
              >
                <Typography>Pay now</Typography>
                <Typography>$9,900</Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      {/* */}
      <PromoCard />
      <Footers />
    </Stack>
  );
};

export default CheckOut;
