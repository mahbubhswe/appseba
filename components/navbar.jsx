import React, { Fragment, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import navItems from "@/utils/navItems";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Fragment>
      <AppBar
        position="fixed"
        sx={{ bgcolor: "#FFFFFF", color: "grey", py: "8px" }}
        elevation={1}
      >
        <Container maxWidth={"lg"}>
          <Toolbar>
            <Image src={"/logo.png"} height={50} width={50} quality={100} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              APPSEBA
            </Typography>
            <Box
              sx={{
                ml: "auto",
                display: { xs: "none", sm: "none", md: "block" },
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  sx={{ color: "grey" }}
                  key={index}
                  onClick={() => router.push(item.link)}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <Button
              sx={{
                border: "2px solid grey",
                borderRadius: "7px",
                ml: "auto",
                display: { xs: "flex", md: "none" },
              }}
              onClick={() => setOpenDrawer(true)}
            >
              <MenuIcon sx={{ color: "grey", fontWeight: "bold" }} />
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        open={openDrawer}
        elevation={1}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ height: "100vh", width: "100vw", p: "20px" }}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            sx={{
              backgroundColor: "white",
              p: "25px",
              borderRadius: "12px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            }}
          >
            <h2
              style={{
                width: "100%",
                color: "#009CFF",
                textShadow: "5px 5px 25px #009CFF",
                borderBottom: "2px solid #009CFF",
              }}
            >
              Menu
            </h2>
            {navItems.map((item, index) => (
              <Button
                sx={{ color: "grey" }}
                key={index}
                onClick={() => {
                  router.push(item.link);
                  setOpenDrawer(false);
                }}
              >
                {item.title}
              </Button>
            ))}
            <Button
              variant="outlined"
              color="error"
              sx={{ borderRadius: "50px" }}
              size="small"
              onClick={() => setOpenDrawer(false)}
              startIcon={<CloseIcon />}
            >
              Close
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </Fragment>
  );
}
