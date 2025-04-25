import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  MdBusiness,
  MdInventory,
  MdLogout,
  MdOutlineDashboard,
  MdOutlineSettingsCell,
  MdPeople,
  MdSettings,
  MdSubscriptions,
  MdVerifiedUser,
  MdWeb,
} from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import { theme } from "../Utils/theme";
import zvdLogo from "../assets/zvLogo.svg";

const drawerWidth = 240;

const DashboardLayout: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "Dashboard", icon: MdOutlineDashboard, path: "/dashboard" },
    { text: "Stocks", icon: MdInventory, path: "/stock" },
    { text: "Admin Users", icon: MdPeople, path: "/adminUser" },
    { text: "Company Master", icon: MdBusiness, path: "/company" },
    { text: "Client Master", icon: MdPeople, path: "/clients" },
    { text: "Web Tracking", icon: MdWeb, path: "/web-tracking" },
    { text: "Subscription", icon: MdSubscriptions, path: "/subscription" },
    { text: "Settings", icon: MdOutlineSettingsCell, path: "/settings" },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <Toolbar>
          <img src={zvdLogo} width={"10%"} />
          <IconButton onClick={handleMenuOpen} size="small" sx={{ ml: "auto" }}>
            <Avatar sx={{ width: 50, height: 50 }}>JD</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <MdVerifiedUser fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <MdSettings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <MdLogout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#123449",
            borderRadius: "0",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: theme.palette.primary.main,
                    display: "flex",
                    gap: 2,
                  }}
                >
                  {<item.icon color={theme.palette.primary.main} />}
                  <Typography>{item.text}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          background: theme.palette.primary.main,
          minHeight: "calc(100vh)",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
