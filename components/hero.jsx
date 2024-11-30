import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HeroAnimation from "./heroAnimation";
import { useRouter } from "next/navigation";
import { Fade } from "react-awesome-reveal";

export default function Hero() {
  const router = useRouter();

  return (
    <Box
      sx={{
        backgroundColor: "#EEF3EF",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <Container maxWidth={"lg"}>
        <Stack
          direction={{ xs: "column-reverse", sm: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems={"center"}
          spacing={{ xs: 2, md: 4 }} // Adjust spacing for mobile and desktop
        >
          <Fade duration={3000}>
            <Box
              className="heroGlowEffect"
              sx={{
                height: { xs: "250px", sm: "400px", md: "600px" },
                display: "grid",
                placeContent: "center",
                p: { xs: "15px", sm: "25px" }, // Reduced padding for mobile
              }}
            >
              <Typography
                component={"h1"}
                sx={{ fontSize: { xs: "28px", sm: "35px" }, color: "#CC2D3C" }} // Adjusted font size for mobile
                variant="bold"
                fontWeight={1000}
              >
                {"Let's Fly With Technology!"}
              </Typography>
              <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
                {" "}
                {/* Adjusted font size for mobile */}
                App Seba is a Bangladeshi software development company
                specializing in crafting innovative mobile and web applications.
                Their team of skilled developers helps businesses bring their
                ideas to life, fostering growth and efficiency through
                custom-built software solutions.
              </Typography>
              <Button
                size="large"
                variant="contained"
                sx={{
                  width: "250px",
                  mt: "7px",
                  borderRadius: "50px",
                  color: "white",
                  py: "12px",
                }}
                color="customPrimary"
                onClick={() => router.push("mailto:appsebaxyz@gmail.com")}
              >
                Hire Us Today!
              </Button>
            </Box>
          </Fade>

          <Box
            sx={{
              height: { xs: "450px", sm: "500px", md: "600px" },
              display: "grid",
              placeContent: "center",
              p: { xs: "15px", sm: "25px" }, // Reduced padding for mobile
            }}
          >
            <HeroAnimation />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
