import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import { SocialIcon } from "react-social-icons";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  var today = new Date();
  return (
    <Box
      sx={{
        marginTop: "100px",
        background: "#FFFAF9",
        pt: "50px",
        pb: "20px",
        textAlign: "center",
        borderTopLeftRadius: { xs: "50px", sm: "120px", md: "120px" },
        borderTopRightRadius: { xs: "50px", sm: "120px", md: "120px" },
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
      }}
    >
      <Container maxWidth="lg">
        <SocialIcon url="www.youtube.com" style={{ margin: "6px" }} />
        <SocialIcon url="www.facebook.com" style={{ margin: "6px" }} />
        <SocialIcon url="www.linkedin.com" style={{ margin: "6px" }} />
        <SocialIcon url="www.vimeo.com" style={{ margin: "6px" }} />
        <br /> <br /> <Divider />
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%" },
              display: "grid",
              placeContent: "left",
            }}
          >
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#CC2D3C", padding: 2 }}>
                    <EmailIcon sx={{ color: "white" }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  secondary="info@appseba.com"
                  primary="Email"
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#CC2D3C", padding: 2 }}>
                    <PhoneIcon sx={{ color: "white" }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText secondary="+8801607415159" primary="Phone" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "#CC2D3C", padding: 2 }}>
                    <BusinessIcon sx={{ color: "white" }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  secondary="Mirpur 1, Dhaka Bangladesh"
                  primary="Address"
                />
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "50%" },
              display: "grid",
              placeContent: "right",
            }}
          >
            <div>
              <h1
                style={{
                  color: "#CC2D3C",
                  textShadow: "5px 5px 25px #CC2D3C",
                }}
              >
                Our Mobile App
              </h1>
              <p>
                {
                  "You can access our all services from a single touch point through mobile app. Just click on download button bellow.That's it."
                }
              </p>
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
              >
                Download Now
              </Button>
            </div>
          </Box>
        </Stack>
        <p>© {today.getFullYear()} App Seba All rights reserved</p>
      </Container>
    </Box>
  );
}
