import React from "react";
import { Container, Typography, Box, Divider } from "@mui/material";

const CourtDiary = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Box>
        <Typography variant="h3" gutterBottom>
          Privacy Policy
        </Typography>

        <Typography variant="h6" gutterBottom>
          Last Updated: December 21, 2024
        </Typography>

        <Typography paragraph>
          <strong>Court Diary</strong> is a mobile application developed by{" "}
          <strong>App Seba</strong> to help lawyers manage their cases, parties,
          costs, schedules, notifications, and payments effectively. We value
          your privacy and are committed to protecting your personal data. This
          Privacy Policy outlines how we collect, use, and safeguard your
          information.
        </Typography>

        <Typography variant="h6" gutterBottom>
          1. Information We Collect
        </Typography>
        <Typography paragraph>
          When you use the **Court Diary** app, we may collect the following
          information:
        </Typography>
        <Typography paragraph>
          <strong>a. Account Information:</strong> To use the app, you must sign
          in using your Google account. We collect your name, email address, and
          Google profile picture for authentication purposes.
        </Typography>
        <Typography paragraph>
          <strong>b. User-Generated Data:</strong> Information related to
          parties, cases, costs, schedules, notifications, and payment records
          that you add to the app.
        </Typography>
        <Typography paragraph>
          <strong>c. Device Information:</strong> Non-personal information such
          as your device model, operating system, and app usage statistics may
          be collected to improve app functionality and performance.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h6" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography paragraph>We use the information collected to:</Typography>
        <Typography paragraph>
          - Provide and improve the app’s functionality.
        </Typography>
        <Typography paragraph>
          - Allow you to manage your cases, parties, payments, and schedules
          efficiently.
        </Typography>
        <Typography paragraph>
          - Send notifications and reminders based on your input.
        </Typography>
        <Typography paragraph>
          - Ensure the security and reliability of the app.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h6" gutterBottom>
          3. Data Storage and Security
        </Typography>
        <Typography paragraph>
          Your data is securely stored in **Firebase**, a Google Cloud-hosted
          platform that complies with industry-standard security practices. We
          implement encryption and access controls to protect your data from
          unauthorized access.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h6" gutterBottom>
          4. Sharing Your Information
        </Typography>
        <Typography paragraph>
          We do not share, sell, or rent your personal data to third parties.
          However, your information may be shared in the following
          circumstances:
        </Typography>
        <Typography paragraph>
          - <strong>With your consent</strong>: If you explicitly authorize us
          to share data.
        </Typography>
        <Typography paragraph>
          - <strong>For legal compliance</strong>: If required by law,
          regulation, or legal process.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h6" gutterBottom>
          5. Your Data Rights
        </Typography>
        <Typography paragraph>
          You have the following rights regarding your data:
        </Typography>
        <Typography paragraph>
          - <strong>Access and update:</strong> You can update or delete your
          account information and case details directly through the app.
        </Typography>
        <Typography paragraph>
          - <strong>Account deletion:</strong> You can request to delete your
          account and associated data by contacting us at the email address
          below.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h6" gutterBottom>
          6. Notifications and Communication
        </Typography>
        <Typography paragraph>
          The app sends notifications and reminders based on the schedules and
          cases you create. You can manage notification preferences through your
          device settings.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h6" gutterBottom>
          7. Changes to This Privacy Policy
        </Typography>
        <Typography paragraph>
          We may update this Privacy Policy periodically to reflect changes in
          our practices or for other operational, legal, or regulatory reasons.
          Updates will be published within the app and on our website, where
          applicable.
        </Typography>

        <Divider sx={{ marginY: 2 }} />

        <Typography variant="h6" gutterBottom>
          8. Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions or concerns about this Privacy Policy or
          your data, please contact us:
        </Typography>
        <Typography paragraph>
          <strong>Email:</strong> support.appseba@gmail.com
        </Typography>
        <Typography paragraph>
          <strong>Phone:</strong> +8801623218618
        </Typography>

        <Typography paragraph>
          <em>
            By using the Court Diary app, you agree to this Privacy Policy.
          </em>
        </Typography>
      </Box>
    </Container>
  );
};

export default CourtDiary;
