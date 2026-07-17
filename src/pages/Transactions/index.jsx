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

import transactions from "../../data/transactions.json";

import TransactionCard from "../../components/TransactionCard/TransactionCard";

function Transactions() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  const statuses = [
    "All",
    ...new Set(
      transactions.map((transaction) => transaction.status)
    ),
  ];

  const filteredTransactions = transactions.filter(
    (transaction) => {
      const matchesSearch =
        transaction.type
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        transaction.from
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        transaction.to
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "All" ||
        transaction.status === status;

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
        Transactions
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 3,
        }}
      >
        <TextField
          label="Search Transaction"
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
            "repeat(auto-fill,minmax(340px,1fr))",
          gap: 3,
        }}
      >
        {filteredTransactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Transactions;