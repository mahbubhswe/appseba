import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fade } from "react-awesome-reveal";

export default function Appseba() {
  const router=useRouter()
  return (
    <Container
      className="glowEffect"
      maxWidth={"lg"}
      sx={{
        height: "500px",
        display: "grid",
        placeContent: "center",
        textAlign: "center",
      }}
    >
      <Fade direction="left">
        <Typography align="center">
          <Image
            src={"/logo.png"}
            alt="AppSeba logo"
            height={150}
            width={150}
            quality={100}
          />
        </Typography>

        <Typography
          component={"h1"}
          sx={{ fontSize: "35px", color: "#009CFF" }}
          variant="bold"
          fontWeight={1000}
        >
          Try App Seba Today!
        </Typography>
        <Typography>Your Trusted Friend - Software Company</Typography>
      </Fade>
      <Fade direction="right">
        <Button
          size="large"
          variant="contained"
          sx={{
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
      </Fade>
    </Container>
  );
}
