import { Paper, Typography, Chip, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function AgentCard({ agent, worldName }) {
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
          {agent.name}
        </Typography>

        <PersonIcon color="primary" />
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mt: 1 }}
      >
        Role
      </Typography>

      <Chip
        label={agent.role}
        color="primary"
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

export default AgentCard;