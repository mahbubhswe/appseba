import React from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import CountUp from "react-countup";
import { Zoom } from "react-awesome-reveal";

export default function ProjectCompleted() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        py: "100px",
        borderRadius: "12px",
        backgroundColor: "#EEF3EF",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        textAlign: "center",
      }}
    >
      <Typography
        component={"h1"}
        sx={{ fontSize: "35px", color: "#009CFF" }}
        variant="bold"
        fontWeight={1000}
      >
        Projects Completed
      </Typography>
      <Typography sx={{ width: "80%", m: "auto" }}>
        We have served customer by providing our services and love. We are
        continuously working to improve our services more smooth and clean by
        our technology experters.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent={"space-around"}
        sx={{ pt: "50px" }}
      >
        <Zoom>
          <Box
            className="serviceCard"
            sx={{
              display: "grid",
              placeContent: "center",
            }}
          >
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src={"/web.png"}
                height={150}
                width={150}
                quality={100}
                style={{
                  padding: "25px",
                  borderRadius: "50%",
                  border: "3px solid #009CFF",
                }}
              />
              <h2>Web Applications</h2>
              <h1
                style={{
                  fontSize: "35px",
                  color: "#009CFF",
                  textAlign: "center",
                  textShadow: "5px 5px 25px #009CFF",
                }}
              >
                <CountUp end={25} />+
              </h1>
            </Stack>
          </Box>
        </Zoom>
        <Zoom>
          <Box
            className="serviceCard"
            sx={{
              display: "grid",
              placeContent: "center",
            }}
          >
            <Stack
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Image
                src={"/mobile.png"}
                height={150}
                width={150}
                quality={100}
                style={{
                  padding: "25px",
                  borderRadius: "50%",
                  border: "3px solid #009CFF",
                }}
              />
              <h2>Mobile Applications</h2>
              <h1
                style={{
                  fontSize: "35px",
                  color: "#009CFF",
                  textAlign: "center",
                  textShadow: "5px 5px 25px #009CFF",
                }}
              >
                <CountUp end={15} />+
              </h1>
            </Stack>
          </Box>
        </Zoom>
      </Stack>
    </Container>
  );
}
