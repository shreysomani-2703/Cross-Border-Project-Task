import { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";

import worlds from "../../data/worlds.json";
import agents from "../../data/agents.json";
import lockers from "../../data/lockers.json";

import WorldTree from "../../components/WorldTree/WorldTree";
import WorldDetails from "../WorldDetails";

function Worlds() {
  const [selectedWorld, setSelectedWorld] = useState(worlds[0]);

  const worldAgents = agents.filter(
    (agent) => agent.worldId === selectedWorld.id
  );

  const worldLockers = lockers.filter(
    (locker) => locker.worldId === selectedWorld.id
  );

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        World Explorer
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          height: "80vh",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: 350,
            p: 2,
            overflowY: "auto",
            flexShrink: 0,
          }}
        >
          <WorldTree
            worlds={worlds}
            onSelect={setSelectedWorld}
          />
        </Paper>

        <WorldDetails
          selectedWorld={selectedWorld}
          worldAgents={worldAgents}
          worldLockers={worldLockers}
        />
      </Box>
    </Box>
  );
}

export default Worlds;