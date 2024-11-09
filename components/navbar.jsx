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
import { bgcolor, keyframes } from "@mui/system";

export default function Navbar() {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState(false);

  const slideIn = keyframes`
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  `;

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
        anchor="left"
        PaperProps={{
          sx: {
            backgroundColor: "grey",
            backdropFilter: "blur(10px)",
            animation: `${slideIn} 0.5s ease`,
            height: "100vh",
            width: "80vw",
            maxWidth: "280px",
            p: "20px",
            borderTopRightRadius: "16px",
            borderBottomRightRadius: "16px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Stack
            spacing={2}
            sx={{
              width: "100%",
              mt: 1,
              mb: 2,
            }}
          >
            <div
              style={{
            
                display: "grid",
                placeItems: "center",
                textAlign: "center", // Ensures text is centered within the grid
              }}
            >
              <Image
                src={"/logo.png"}
                style={{ borderRadius: "50px" }}
                height={80}
                width={80}
                quality={100}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  color: "white",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  textDecoration: "none",
                }}
              >
                APPSEBA
              </Typography>
            </div>

            {navItems.map((item, index) => (
              <Button
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  justifyContent: "flex-start",
                  width: "100%",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
                  px: 2,
                }}
                key={index}
                onClick={() => {
                  router.push(item.link);
                  setOpenDrawer(false);
                }}
                startIcon={item.icon}
              >
                {item.title}
              </Button>
            ))}
          </Stack>
          <Button
            variant="outlined"
            color="error"
            sx={{
              borderRadius: "50px",
              mt: "auto",
              mb: 2,
              width: "100%",
              textTransform: "none",
              color: "white",
              borderColor: "white",
            }}
            size="medium"
            onClick={() => setOpenDrawer(false)}
            startIcon={<CloseIcon />}
          >
            Close
          </Button>
        </Box>
      </Drawer>
    </Fragment>
  );
}
