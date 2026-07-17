import { useState } from "react";

import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import agents from "../../data/agents.json";
import worlds from "../../data/worlds.json";

import AgentCard from "../../components/AgentCard/AgentCard";

function Agents() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All");

  const getWorldName = (worldId) => {
    const world = worlds.find((w) => w.id === worldId);
    return world ? world.name : "Unknown";
  };

  const roles = [
    "All",
    ...new Set(agents.map((agent) => agent.role)),
  ];

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch = agent.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRole =
      role === "All" || agent.role === role;

    return matchesSearch && matchesRole;
  });

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Agents
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          label="Search Agent"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Role</InputLabel>

          <Select
            value={role}
            label="Role"
            onChange={(e) => setRole(e.target.value)}
          >
            {roles.map((item) => (
              <MenuItem
                key={item}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(300px,1fr))",
          gap: 3,
        }}
      >
        {filteredAgents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            worldName={getWorldName(agent.worldId)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Agents;