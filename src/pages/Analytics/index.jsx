import {
  Box,
  Paper,
  Typography,
} from "@mui/material";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import agents from "../../data/agents.json";
import lockers from "../../data/lockers.json";
import connections from "../../data/connections.json";
import transactions from "../../data/transactions.json";
import worlds from "../../data/worlds.json";

function Analytics() {
  // World lookup
  const worldMap = Object.fromEntries(
    worlds.map((world) => [world.id, world.name])
  );

  // Agents by World
  const agentsByWorld = Object.values(
    agents.reduce((acc, agent) => {
      const worldName =
        worldMap[agent.worldId] || "Unknown";

      if (!acc[worldName]) {
        acc[worldName] = {
          name: worldName,
          count: 0,
        };
      }

      acc[worldName].count++;

      return acc;
    }, {})
  );

  // Lockers by Type
  const lockersByType = Object.values(
    lockers.reduce((acc, locker) => {
      if (!acc[locker.type]) {
        acc[locker.type] = {
          name: locker.type,
          value: 0,
        };
      }

      acc[locker.type].value++;

      return acc;
    }, {})
  );

  // Connections by Status
  const connectionsByStatus = Object.values(
    connections.reduce((acc, connection) => {
      if (!acc[connection.status]) {
        acc[connection.status] = {
          name: connection.status,
          value: 0,
        };
      }

      acc[connection.status].value++;

      return acc;
    }, {})
  );

  // Transactions by Status
  const transactionsByStatus = Object.values(
    transactions.reduce((acc, transaction) => {
      if (!acc[transaction.status]) {
        acc[transaction.status] = {
          name: transaction.status,
          count: 0,
        };
      }

      acc[transaction.status].count++;

      return acc;
    }, {})
  );

  const COLORS = [
    "#1976d2",
    "#2e7d32",
    "#ed6c02",
    "#9c27b0",
    "#d32f2f",
  ];

  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Analytics
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(450px,1fr))",
          gap: 3,
        }}
      >
        {/* Agents */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" mb={2}>
            Agents by World
          </Typography>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart data={agentsByWorld}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>

        {/* Lockers */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" mb={2}>
            Lockers by Type
          </Typography>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>
              <Pie
                data={lockersByType}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {lockersByType.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[index % COLORS.length]
                    }
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Paper>

        {/* Connections */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" mb={2}>
            Connections by Status
          </Typography>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>
              <Pie
                data={connectionsByStatus}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {connectionsByStatus.map(
                  (entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index % COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Paper>

        {/* Transactions */}
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" mb={2}>
            Transactions by Status
          </Typography>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart
              data={transactionsByStatus}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </Paper>
      </Box>
    </Box>
  );
}

export default Analytics;