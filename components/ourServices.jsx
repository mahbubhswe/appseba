import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ourServices from "@/utils/ourServices";
import { useRouter } from "next/navigation";
export default function OurServices() {
  const router = useRouter();
  return (
    <Container maxWidth={"lg"} sx={{ py: "50px" }}>
      <Typography
        component={"h1"}
        sx={{ fontSize: "35px", color: "#009CFF" }}
        variant="bold"
        fontWeight={1000}
        align="center"
      >
        Services We Provide
      </Typography>
      <Typography align="center">We Provide Our Services With Love</Typography>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        sx={{ py: "50px" }}
      >
        {ourServices.map((item, index) => (
          <Box key={index}  className="serviceCard">
            <Typography
              component={"h2"}
              variant="bold"
              fontWeight={900}
              align="center"
            >
              {item.title}
            </Typography>
            <Typography>{item.des}</Typography>
            <Button
              variant="outlined"
              sx={{ mt: "7px", borderRadius: "50px" }}
              color="customPrimary"
              onClick={() => router.push(item.link)}
            >
              {item.btnText}
            </Button>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
