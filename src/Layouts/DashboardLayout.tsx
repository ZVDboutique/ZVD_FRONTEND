import {
  AppBar,
  Avatar,
  Box,
  Button,
  Drawer,
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
  MdDiamond,
  MdInventory,
  MdLogout,
  MdOutlineDashboard,
  MdPeople,
  MdShoppingCart,
} from "react-icons/md";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { theme } from "../Utils/theme";
import zvdLogo from "../assets/zvLogo.svg";
import { useAppContext } from "../Utils/appContext";

const drawerWidth = 240;

const DashboardLayout: React.FC = () => {
  const { pathname } = useLocation();

  const { userData } = useAppContext();

  console.log("userData", userData);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    localStorage.clear();
    window.location.reload();
  };

  const menuItems = [
    {
      text: "Dashboard",
      icon: MdOutlineDashboard,
      path: "/dashboard",
      isActive: pathname === "/dashboard",
      userType: ["Admin", "Supplier"],
    },
    {
      text: "Stocks",
      icon: MdInventory,
      path: "/stock",
      isActive: pathname === "/stock",
      userType: ["Admin"],
    },
    {
      text: "Admin Users",
      icon: MdPeople,
      path: "/adminUser",
      isActive: pathname === "/adminUser",
      userType: ["Admin"],
    },
    {
      text: "Company Master",
      icon: MdBusiness,
      path: "/company",
      isActive: pathname === "/company",
      userType: ["Admin"],
    },
    {
      text: "Client Master",
      icon: MdPeople,
      path: "/clients",
      isActive: pathname === "/clients",
      userType: ["Admin"],
    },
    {
      text: "Diamond Listing",
      icon: MdDiamond,
      path: "/diamond-listing",
      isActive: pathname === "/diamond-listing",
      userType: ["Supplier"],
    },
    {
      text: "Orders & Transactions",
      icon: MdShoppingCart,
      path: "/orders-transactions",
      isActive: pathname === "/orders-transactions",
      userType: ["Supplier"],
    },
  ];
  const userType = localStorage.getItem("userType") || "";
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
          <Button
            onClick={handleMenuOpen}
            size="small"
            sx={{ ml: "auto" }}
            color="dark"
          >
            <Box display={"flex"} alignItems={"center"} gap={1}>
              <Avatar
                sx={{
                  borderRadius: 2,
                  textTransform: "uppercase",
                  color: theme.palette.primary.main,
                  background: theme.palette.secondary.main,
                }}
              >
                {userData?.first_name?.charAt(0)}
                {userData?.last_name?.charAt(0)}
              </Avatar>
              <Box display={"flex"} flexDirection={"column"}>
                <Typography
                  textAlign={"left"}
                  lineHeight={1}
                  textTransform={"capitalize"}
                  fontSize={12}
                  fontWeight={600}
                >
                  {userData?.first_name}
                </Typography>
                <Typography
                  textAlign={"left"}
                  lineHeight={1}
                  textTransform={"capitalize"}
                  fontSize={12}
                  fontWeight={600}
                >
                  {userData?.last_name}
                </Typography>
              </Box>
            </Box>
          </Button>
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
            {menuItems
              .filter((item) => item.userType.includes(userType))
              .map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    onClick={() => navigate(item.path)}
                    sx={{
                      background: item.isActive
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main,
                      color: item.isActive
                        ? theme.palette.secondary.main
                        : theme.palette.primary.main,
                      display: "flex",
                      gap: 2,
                    }}
                  >
                    {
                      <item.icon
                        color={
                          item.isActive
                            ? theme.palette.secondary.main
                            : theme.palette.primary.main
                        }
                      />
                    }
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
