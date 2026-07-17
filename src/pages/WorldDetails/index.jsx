import {
  Box,
  Divider,
  Paper,
  Typography,
} from "@mui/material";

import HubIcon from "@mui/icons-material/Hub";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PublicIcon from "@mui/icons-material/Public";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import InfoCard from "../../components/InfoCard/InfoCard";

function WorldDetails({
  selectedWorld,
  worldAgents,
  worldLockers,
}) {
  return (
    <Paper
      elevation={3}
      sx={{
        flex: 1,
        p: 4,
        overflowY: "auto",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
      >
        {selectedWorld.name}
      </Typography>

      <Typography
        color="text.secondary"
        mb={4}
      >
        World Information Dashboard
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 2,
          mb: 4,
        }}
      >
        <InfoCard
          title="Gateway"
          value={selectedWorld.gateway}
          icon={<HubIcon fontSize="large" />}
          color="#1976d2"
        />

        <InfoCard
          title="Status"
          value={selectedWorld.status}
          icon={<CheckCircleIcon fontSize="large" />}
          color="#2e7d32"
        />

        <InfoCard
          title="World Type"
          value={selectedWorld.type}
          icon={<PublicIcon fontSize="large" />}
          color="#7b1fa2"
        />

        <InfoCard
          title="Child Worlds"
          value={selectedWorld.children?.length || 0}
          icon={<AccountTreeIcon fontSize="large" />}
          color="#ed6c02"
        />
      </Box>

      <Divider sx={{ mb: 3 }} />

      <Typography variant="h6" fontWeight="bold" mb={2}>
        Child Worlds
      </Typography>

      {selectedWorld.children?.length ? (
        selectedWorld.children.map((child) => (
          <Paper
            key={child.id}
            variant="outlined"
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
            }}
          >
            <Typography fontWeight="bold">
              {child.name}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {child.type}
            </Typography>
          </Paper>
        ))
      ) : (
        <Typography color="text.secondary">
          No child worlds available.
        </Typography>
      )}

      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
      >
        👥 Agents
      </Typography>

      {worldAgents.length ? (
        worldAgents.map((agent) => (
          <Paper
            key={agent.id}
            variant="outlined"
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
            }}
          >
            <Typography fontWeight="bold">
              {agent.name}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {agent.role}
            </Typography>
          </Paper>
        ))
      ) : (
        <Typography color="text.secondary">
          No agents available.
        </Typography>
      )}

      <Divider sx={{ my: 4 }} />

      <Typography
        variant="h6"
        fontWeight="bold"
        mb={2}
      >
        🔒 Lockers
      </Typography>

      {worldLockers.length ? (
        worldLockers.map((locker) => (
          <Paper
            key={locker.id}
            variant="outlined"
            sx={{
              p: 2,
              mb: 2,
              borderRadius: 2,
            }}
          >
            <Typography fontWeight="bold">
              {locker.name}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {locker.type}
            </Typography>
          </Paper>
        ))
      ) : (
        <Typography color="text.secondary">
          No lockers available.
        </Typography>
      )}
    </Paper>
  );
}

export default WorldDetails;