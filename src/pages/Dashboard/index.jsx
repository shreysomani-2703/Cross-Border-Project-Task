import { Grid, Typography, Box } from "@mui/material";

import DashboardStats from "../../components/DashboardStats/DashboardStats";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import ConnectionCard from "../../components/ConnectionCard/ConnectionCard";
import GatewayCard from "../../components/GatewayCard/GatewayCard";

import worlds from "../../data/worlds.json";
import agents from "../../data/agents.json";
import lockers from "../../data/lockers.json";
import connections from "../../data/connections.json";
import consents from "../../data/consents.json";
import transactions from "../../data/transactions.json";

import PublicIcon from "@mui/icons-material/Public";
import GroupIcon from "@mui/icons-material/Group";
import LockIcon from "@mui/icons-material/Lock";
import LinkIcon from "@mui/icons-material/Link";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

function Dashboard() {
  return (
    <Box>

      <Typography variant="h4" fontWeight="bold" mb={1}>
        Welcome 👋
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        mb={4}
      >
        Monitor Worlds, Gateways, Agents and Cross-Border Data Exchange.
      </Typography>

      {/* KPI Cards */}

      <Grid container spacing={3} mb={4}>

        <Grid item xs={12} md={4} lg={2}>
          <DashboardStats
            title="Worlds"
            value={worlds.length}
            icon={<PublicIcon />}
            color="#2563EB"
          />
        </Grid>

        <Grid item xs={12} md={4} lg={2}>
          <DashboardStats
            title="Agents"
            value={agents.length}
            icon={<GroupIcon />}
            color="#14B8A6"
          />
        </Grid>

        <Grid item xs={12} md={4} lg={2}>
          <DashboardStats
            title="Lockers"
            value={lockers.length}
            icon={<LockIcon />}
            color="#8B5CF6"
          />
        </Grid>

        <Grid item xs={12} md={4} lg={2}>
          <DashboardStats
            title="Connections"
            value={connections.length}
            icon={<LinkIcon />}
            color="#F97316"
          />
        </Grid>

        <Grid item xs={12} md={4} lg={2}>
          <DashboardStats
            title="Transactions"
            value={transactions.length}
            icon={<ReceiptLongIcon />}
            color="#22C55E"
          />
        </Grid>

        <Grid item xs={12} md={4} lg={2}>
          <DashboardStats
            title="Consents"
            value={consents.length}
            icon={<VerifiedUserIcon />}
            color="#EF4444"
          />
        </Grid>

      </Grid>

      {/* Bottom Section */}

      <Grid container spacing={3}>

        <Grid item xs={12} md={6}>

          <Typography variant="h6" mb={2}>
            Recent Transactions
          </Typography>

          {transactions.map((transaction) => (
            <TransactionCard
              key={transaction.id}
              transaction={transaction}
            />
          ))}

        </Grid>

        <Grid item xs={12} md={6}>

          <Typography variant="h6" mb={2}>
            Active Connections
          </Typography>

          {connections.map((connection) => (
            <ConnectionCard
              key={connection.id}
              connection={connection}
            />
          ))}

          <Typography
            variant="h6"
            mt={4}
            mb={2}
          >
            Gateway Status
          </Typography>

          {worlds
            .filter((world) => world.gateway)
            .map((world) => (
              <GatewayCard
                key={world.id}
                world={world}
              />
            ))}

        </Grid>

      </Grid>

    </Box>
  );
}

export default Dashboard;