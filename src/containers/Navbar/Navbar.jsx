import { Stack, Typography, styled } from "@mui/material";
import React from "react";
import Logo from "../../assets/static/logo-light.png";
import { Link, Outlet } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton";

const StyledTypo = styled(Typography)({
  color: "#ffffff",
  fontWeight: "bold",
});

const Navbar = () => {
  const navlists = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Service",
      url: "service",
    },
    {
      name: "Experience",
      url: "experience",
    },
    {
      name: "Destination",
      url: "destination",
    },
    {
      name: "Contact",
      url: "contact",
    },
  ];
  return (
    <Stack>
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        style={{ background: "#13357b", padding: "0px 10px" }}
      >
        <Stack direction={"row"} gap={15} alignItems={"center"}>
          <Stack
            sx={{
              width: "40px",
              height: "100px",
            }}
          >
            <img src={Logo} alt="logo" width="100px" height="100%" />
          </Stack>
          <Stack direction={"row"} gap={3}>
            {navlists.map((navlist) => (
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={navlist.url}
              >
                <StyledTypo>{navlist.name}</StyledTypo>
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={4}>
          <CustomButton
            backgroundColor={"#FFFFFF"}
            //   onClick={}
            borderRadius
            text={"AI Trip Planner"}
            width={"100%"}
            color={"#000000"}
            //   type={}
            //   disabled={}
          />
          <CustomButton
            backgroundColor={"transparent"}
            //   onClick={}
            text={"Sign In"}
            width={"100%"}
            color={"#ffffff"}
            border={" 1px solid #ffffff"}
            //   type={}
            //   disabled={}
          />
        </Stack>
      </Stack>
      <Stack>{<Outlet />}</Stack>
    </Stack>
  );
};

export default Navbar;
