import { Paper, Typography, Chip, Box } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

function LockerCard({ locker, worldName }) {
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
        <Typography variant="h6" fontWeight="bold">
          {locker.name}
        </Typography>

        <LockIcon color="primary" />
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 1 }}
      >
        Type
      </Typography>

      <Chip
        label={locker.type}
        color="secondary"
        size="small"
        sx={{ mt: 1 }}
      />

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 2 }}
      >
        World
      </Typography>

      <Typography fontWeight="medium">
        {worldName}
      </Typography>
    </Paper>
  );
}

export default LockerCard;