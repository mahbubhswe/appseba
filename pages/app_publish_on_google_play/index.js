import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Link,
  IconButton,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Appseba from "@/components/appseba";

export default function AppPublication  ()  {
 
  return (
    <Container maxWidth="lg">
      <Appseba />
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h3" color="primary" gutterBottom>
          App Publication Process on Google Play
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          We offer the following services for your app publication process on
          Google Play.
        </Typography>
      </Box>
      {/* WhatsApp Contact with Pulsating Effect */}
      <Box sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="body1" color="textSecondary">
          For more details, contact us on{" "}
          <Link
            href="https://wa.me/8801607415159"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            sx={{
              display: "inline-block",
              animation: "pulseAnimation 1.5s infinite", // Apply pulsating effect
            }}
          >
            <IconButton>
              <WhatsAppIcon fontSize="large" color="primary" />
            </IconButton>
            WhatsApp: 01607415159
          </Link>
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" mb={10}>
        {/* Annual Charge Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="serviceCard" sx={{ height: "100%" }}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Annual Charge
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              2500 BDT / Year
            </Typography>
            <Typography
              variant="body1"
              sx={{ flexGrow: 1, color: "textSecondary" }}
            >
              This is the recurring charge for keeping your app live on Google
              Play every year.
            </Typography>
          </Paper>
        </Grid>

        {/* One-Time Publishing Charge Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="serviceCard" sx={{ height: "100%" }}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              One-Time Publishing Charge
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              1500 BDT
            </Typography>
            <Typography
              variant="body1"
              sx={{ flexGrow: 1, color: "textSecondary" }}
            >
              A one-time charge for publishing your app on Google Play.
            </Typography>
          </Paper>
        </Grid>

        {/* On-Demand App Assets Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper className="serviceCard" sx={{ height: "100%" }}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              On-Demand App Assets
            </Typography>
            <Typography
              variant="h4"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              1000 BDT
            </Typography>
            <Typography
              variant="body1"
              sx={{ flexGrow: 1, color: "textSecondary" }}
            >
              Charge for assets such as app screenshots, feature graphics, and
              logo design.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* Pulsating Animation Style */}
      <style jsx>{`
        @keyframes pulseAnimation {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </Container>
  );
};


