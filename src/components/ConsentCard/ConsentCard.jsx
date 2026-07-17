import {
  Paper,
  Typography,
  Chip,
  Box,
} from "@mui/material";

import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

function ConsentCard({ consent }) {
  const chipColor =
    consent.status === "Granted"
      ? "success"
      : "warning";

  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        borderRadius: 2,
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          Consent #{consent.id}
        </Typography>

        <VerifiedUserIcon color="primary" />
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 2 }}
      >
        Purpose
      </Typography>

      <Typography fontWeight="medium">
        {consent.purpose}
      </Typography>

      <Box mt={2}>
        <Chip
          label={consent.status}
          color={chipColor}
        />
      </Box>
    </Paper>
  );
}

export default ConsentCard;