// pages/delete-account.js
import React, { useState } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Typography,
  Alert,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: theme.palette.background.default,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  width: "100%",
  borderRadius: theme.shape.borderRadius * 2,
  textAlign: "center",
}));

const DeleteAccountForm = () => {
  const [phone, setPhone] = useState("");
  const [notification, setNotification] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/delete-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    });

    if (response.ok) {
      setNotification("Request sent successfully.");
      setPhone(""); // Clear the input field after submission
    } else {
      setNotification("Failed to send the Phone. Please try again.");
    }
  };

  return (
    <StyledContainer>
      <title>Request to delete your account</title>
      <StyledPaper>
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <PhoneIcon color="primary" fontSize="large" />
        </Box>
        <Typography variant="h5" gutterBottom color="textPrimary">
          Request Account Deletion
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Enter your Phone below to request the deletion of your
          account.
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            type="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{
              style: { borderRadius: 8 },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: 8,
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#115293" },
            }}
          >
            Submit Request
          </Button>
        </form>
        {notification && (
          <Alert severity="info" sx={{ marginTop: 2 }}>
            {notification}
          </Alert>
        )}
      </StyledPaper>
    </StyledContainer>
  );
};

export default DeleteAccountForm;
