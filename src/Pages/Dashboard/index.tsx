import { Box, Card, CardContent, Typography } from "@mui/material";
import { MdOutlineDashboard, MdOutlineSettingsCell } from "react-icons/md";

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome to Dashboard
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          "& > *": {
            flex: "1 1 300px",
            maxWidth: "100%",
          },
        }}
      >
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <MdOutlineDashboard size={24} style={{ marginRight: 8 }} />
              <Typography variant="h6">Overview</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Get a quick overview of your account status and recent activities.
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Box display="flex" alignItems="center" mb={2}>
              <MdOutlineSettingsCell size={24} style={{ marginRight: 8 }} />
              <Typography variant="h6">Settings</Typography>
            </Box>
            <Typography variant="body2" color="text.secondary">
              Manage your account settings and preferences.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
