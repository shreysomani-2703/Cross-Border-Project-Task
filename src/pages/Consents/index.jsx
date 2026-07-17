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

import consents from "../../data/consents.json";

import ConsentCard from "../../components/ConsentCard/ConsentCard";

function Consents() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const statuses = [
    "All",
    ...new Set(
      consents.map((consent) => consent.status)
    ),
  ];

  const filteredConsents = consents.filter(
    (consent) => {
      const matchesSearch = consent.purpose
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" ||
        consent.status === status;

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
        Consents
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          label="Search Purpose"
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
        {filteredConsents.map((consent) => (
          <ConsentCard
            key={consent.id}
            consent={consent}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Consents;