// * MUI Components
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#E6F0FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 8,
      }}
    >
      <Box
        sx={{
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #ddd",
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          InfraPulse – Microservice Architecture Monitoring & Analysis
        </Typography>

        <Typography variant="body2" color="textSecondary">
          Contact Number:{" "}
          <Link href="tel:" color="inherit">
          </Link>
        </Typography>

        <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
          Project Team Emails:{" "}
          <Box component="span" sx={{ display: "block", mt: 0.5 }}>
            <Link href="mailto:sapumalwijekoon4@gmail.com" color="inherit">
              sapumalwijekoon4@gmail.com
            </Link>{", "}
            <Link href="mailto:shabinafarveen@gmail.com" color="inherit">
              shabinafarveen@gmail.com
            </Link>{", "}
            <Link href="mailto:heshanthzimmendra@gmail.com" color="inherit">
              heshanthzimmendra@gmail.com
            </Link>
          </Box>
        </Typography>

        <Typography
          variant="caption"
          color="textSecondary"
          sx={{ marginTop: "10px", display: "block" }}
        >
          © 2024 InfraPulse – All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
