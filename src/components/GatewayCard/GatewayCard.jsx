import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
} from "@mui/material";

function GatewayCard({ world }) {
  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 2,
        mb: 2,
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <div>
            <Typography variant="h6" fontWeight={600}>
              {world.gateway}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {world.name}
            </Typography>
          </div>

          <Chip
            label={world.status}
            color="success"
          />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default GatewayCard;