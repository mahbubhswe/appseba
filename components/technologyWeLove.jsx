import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import technologySvg from "../utils/technologySvg";
import Marquee from "react-fast-marquee";
export default function TechnologyWeLove() {
  return (
    <Container
      className="glowEffect"
      maxWidth="lg"
      sx={{ py: "50px", textAlign: "center" }}
    >
      <Typography
        component={"h1"}
        sx={{ fontSize: "35px", color: "#CC2D3C" }}
        variant="bold"
        fontWeight={1000}
      >
        Technology We Love
      </Typography>
      <Typography align="center">
        Technology We Use to Develop Applications
      </Typography>
      <Box sx={{ paddingY: "50px" }}>
        <Marquee>
          {technologySvg.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              alt={item.title}
              quality={100}
              height={50}
              width={150}
            />
          ))}
        </Marquee>
      </Box>
    </Container>
  );
}
