import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

function TransactionCard({ transaction }) {
  return (
    <Card
      sx={{
        mb: 2,
        borderRadius: 3,
        boxShadow: 2,
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <Typography variant="h6" fontWeight="600">
              {transaction.type}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {transaction.from}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              ↓
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {transaction.to}
            </Typography>
          </div>

          <Chip
            label={transaction.status}
            color={
              transaction.status === "Completed"
                ? "success"
                : "warning"
            }
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default TransactionCard;