import React, { useState } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import HeroAnimation from "./heroAnimation";
import { Fade } from "react-awesome-reveal";
import Slide from "@mui/material/Slide";
import { Alert } from "@mui/material";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading indicator

    try {
      const response = await fetch("/api/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setNotification("Email sent successfully.");
        setEmail("");
        setMessage("");
      } else {
        setNotification("Failed to send the email. Please try again.");
      }
    } catch (error) {
      setNotification("An error occurred. Please try again.");
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        py: { xs: 2, sm: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 2, md: 4 }}
        
        >
          <Fade duration={3000}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                p: { xs: 2, sm: 3 },
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "24px", sm: "30px", md: "36px" },
                  fontWeight: 700,
                  color: "#CC2D3C",
                }}
              >
                {"Let's Fly With Technology!"}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px" },
                  mb: 2,
                }}
              >
                App Seba is a Bangladeshi software development company
                specializing in crafting innovative mobile and web applications.
              </Typography>
              <Button
                size="large"
                variant="contained"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  mt: 1,
                  borderRadius: "50px",
                  color: "white",
                  py: 1.5,
                }}
                color="customPrimary"
                onClick={handleOpen}
              >
                Hire Us Today!
              </Button>
            </Box>
          </Fade>

          <Box
            sx={{
              height: { xs: "300px", sm: "400px", md: "600px" },
              display: "grid",
              placeContent: "center",
              p: { xs: 2, sm: 3 },
            }}
          >
            <HeroAnimation />
          </Box>
        </Stack>
      </Container>

      {/* Dialog Component */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullScreen
        TransitionComponent={Slide}
        PaperProps={{
          sx: {
            borderRadius: { xs: "12px 12px 0 0", sm: "20px" },
            backgroundColor: "#F9F9F9",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            maxWidth: "sm",
            mx: "auto",
            p: 2,
            mt: { xs: "10px", sm: "20px" },
            mb: { xs: "10px", sm: "20px" },
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#333",
            pb: 0,
          }}
        >
          Contact Us
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2, backgroundColor: "#fff" }}
          />
          <TextField
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ backgroundColor: "#fff" }}
          />
          {notification && (
            <Alert severity="info" sx={{ marginTop: 2 }}>
              {notification}
            </Alert>
          )}
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            gap: 1.5,
            p: 2,
          }}
        >
          <Button
            onClick={handleClose}
            variant="text"
            sx={{ fontSize: "16px", color: "#666" }}
            disabled={loading} // Disable while loading
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{
              fontSize: "16px",
              backgroundColor: "#CC2D3C",
              color: "white",
              borderRadius: "50px",
              px: 3,
              display: "flex",
              alignItems: "center",
            }}
            disabled={loading} // Disable while loading
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: "white", ml: 1 }} />
            ) : (
              "Send"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
