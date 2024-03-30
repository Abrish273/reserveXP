import React from "react";
import Stack from "@mui/material/Stack";
import { Typography, styled } from "@mui/material";

const StyledFooter = styled(Typography)({
  fontWeight: "bold",
  fontSize: "18px",
});

const footer = [
  {
    title: "Other Services",
    lists: ["Car Hire", "Activity Finder", "Tour List", "Flight List"],
  },
  {
    title: "Support",
    lists: [
      "Contact",
      "Legal Notice",
      "Privacy Policy",
      "Terms and Conditions",
      "Sitemap",
    ],
  },
  {
    title: "Company",
    lists: ["About Us", "Careers", "Blog", "Press", "Gift Cards", "Magazine"],
  },
];

const Footers = () => {
  return (
    <Stack flex={1} gap={3} sx={{ paddingTop: "20px" }}>
      <Stack direction={"row"} justifyContent={"space-around"}>
        <Stack>
          <StyledFooter>Contact US</StyledFooter>
          <Stack gap={2}>
            <Stack>
              <Typography>Toll Free Customer Care</Typography>
              <Typography
                sx={{
                  color: "blue",
                }}
              >
                +(1) 123 456 7890
              </Typography>
            </Stack>
            <Stack>
              <Typography>Need live support?</Typography>
              <Typography
                sx={{
                  color: "blue",
                }}
              >
                hi@gotrip.com
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack direction={"row"} gap={30}>
          {footer.map((foot, index) => (
            <Stack key={index}>
              <StyledFooter>{foot.title}</StyledFooter>
              {/* Render lists under each title */}
              <Stack>
                {foot.lists.map((item, idx) => (
                  <Typography key={idx}>{item}</Typography>
                ))}
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack>
          <StyledFooter>Mobile</StyledFooter>
          <Stack>app/ play store</Stack>
        </Stack>
      </Stack>
      <hr />
      <Stack direction={"row"} justifyContent={"space-around"}>
        lower
      </Stack>
    </Stack>
  );
};

export default Footers;
