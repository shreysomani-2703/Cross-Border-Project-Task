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

import connections from "../../data/connections.json";

import ConnectionCard from "../../components/ConnectionCard/ConnectionCard";

function Connections() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const statuses = [
    "All",
    ...new Set(
      connections.map((connection) => connection.status)
    ),
  ];

  const filteredConnections = connections.filter(
    (connection) => {
      const matchesSearch =
        connection.from
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        connection.to
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" ||
        connection.status === status;

      return matchesSearch && matchesStatus;
    }
  );

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Connections
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          label="Search Connection"
          fullWidth
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel>Status</InputLabel>

          <Select
            value={status}
            label="Status"
            onChange={(e) =>
              setStatus(e.target.value)
            }
          >
            {statuses.map((item) => (
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
            "repeat(auto-fill,minmax(320px,1fr))",
          gap: 3,
        }}
      >
        {filteredConnections.map((connection) => (
          <ConnectionCard
            key={connection.id}
            connection={connection}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Connections;