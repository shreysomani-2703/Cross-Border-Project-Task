import {
  Paper,
  Typography,
  Chip,
  Box,
} from "@mui/material";

import HubIcon from "@mui/icons-material/Hub";

function ConnectionCard({ connection }) {
  const chipColor =
    connection.status === "Established"
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
          {connection.from}
        </Typography>

        <HubIcon color="primary" />
      </Box>

      <Typography
        align="center"
        sx={{
          my: 2,
          fontSize: 24,
        }}
      >
        ↕
      </Typography>

      <Typography
        variant="h6"
        fontWeight="bold"
      >
        {connection.to}
      </Typography>

      <Box mt={2}>
        <Chip
          label={connection.status}
          color={chipColor}
        />
      </Box>
    </Paper>
  );
}

export default ConnectionCard;