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

import lockers from "../../data/lockers.json";
import worlds from "../../data/worlds.json";

import LockerCard from "../../components/LockerCard/LockerCard";

function Lockers() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const getWorldName = (worldId) => {
    const world = worlds.find((w) => w.id === worldId);
    return world ? world.name : "Unknown";
  };

  const types = [
    "All",
    ...new Set(lockers.map((locker) => locker.type)),
  ];

  const filteredLockers = lockers.filter((locker) => {
    const matchesSearch = locker.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      type === "All" || locker.type === type;

    return matchesSearch && matchesType;
  });

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Lockers
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          label="Search Locker"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Type</InputLabel>

          <Select
            value={type}
            label="Type"
            onChange={(e) => setType(e.target.value)}
          >
            {types.map((item) => (
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
        {filteredLockers.map((locker) => (
          <LockerCard
            key={locker.id}
            locker={locker}
            worldName={getWorldName(locker.worldId)}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Lockers;