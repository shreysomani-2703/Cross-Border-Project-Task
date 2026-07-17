import {
  Box,
  Paper,
  Typography,
  Divider,
  Stack,
} from "@mui/material";

function Settings() {
  const sections = [
    {
      title: "Application",
      items: [
        { label: "Project", value: "P3DX Dashboard" },
        { label: "Version", value: "1.0.0" },
        { label: "Environment", value: "Development" },
      ],
    },
    {
      title: "Appearance",
      items: [
        { label: "Theme", value: "Light" },
        { label: "Primary Color", value: "Blue" },
      ],
    },
    {
      title: "About",
      items: [
        { label: "Framework", value: "React 18" },
        { label: "UI Library", value: "Material UI" },
        { label: "Charts", value: "Recharts" },
      ],
    },
  ];

  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Settings
      </Typography>

      <Stack spacing={3}>
        {sections.map((section) => (
          <Paper
            key={section.title}
            sx={{
              p: 3,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {section.title}
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Stack spacing={2}>
              {section.items.map((item) => (
                <Box
                  key={item.label}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography color="text.secondary">
                    {item.label}
                  </Typography>

                  <Typography fontWeight={500}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

export default Settings;