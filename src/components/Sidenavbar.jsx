import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
// import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useLocation, NavLink } from "react-router-dom";
import { useContext } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PeopleIcon from "@mui/icons-material/People";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import MoreIcon from "@mui/icons-material/MoreVert";
import CategoryIcon from "@mui/icons-material/Category";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import { useState } from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PersonIcon from "@mui/icons-material/Person";
import {
  Link,
  Button,
  Avatar,
  Stack,
  TextField,
  Badge,
  Select,
  MenuItem,
  TableRow,
  TableBody,
} from "@mui/material";
import account from "../_mock/account";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import Alert from "@mui/material";
import SnackbarContent from "@mui/material/SnackbarContent";
import AddCardIcon from "@mui/icons-material/AddCard";
import GroupIcon from "@mui/icons-material/Group";
import TableCell from "@mui/material/TableCell";
import SoapIcon from "@mui/icons-material/Soap";
import StoreIcon from "@mui/icons-material/Store";

const drawerWidth = "15%";

const columns = [
  {
    id: "Name",
    label: "Name",
  },
];

function createData(Name) {
  return { Name };
}

const rows = [
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
  createData("Kushal sent you a friend request"),
];

function Sidenavbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      sx={{ marginTop: "2%" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => navigate("/profile")}>
        Profile
        <PersonIcon sx={{ marginLeft: "30px" }} />
      </MenuItem>
      <MenuItem onClick={() => navigate("/login")}>
        Log Out
        <LogoutIcon sx={{ marginLeft: "20px" }} />
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      sx={{ marginTop: "2%" }}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem sx={{ paddingTop: "0%" }}>
        <TableBody sx={{ fontFamily: "Poppins", fontWeight: "600" }}>
          QUERIES
          {rows.map((row) => {
            return (
              <TableRow role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === "number"
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MenuItem>
    </Menu>
  );

  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const LinkItems = [
    { name: "Dashboard", icon: DashboardIcon, route: "/" },
    {
      name: "Products",
      icon: ProductionQuantityLimitsIcon,
      route: "/products",
    },
    { name: "Customers", icon: PeopleIcon, route: "/customers" },
    { name: "Queries", icon: AddShoppingCartIcon, route: "/queries" },
    //   { name: 'Shipments',icon: LocalShippingIcon , route: "/shipments" },
    { name: "Transactions", icon: AccountBalanceIcon, route: "/transaction" },
    { name: "Finance Query", icon: CreditCardIcon, route: "/finance" },
    { name: "Blog", icon: ContentPasteGoIcon, route: "blog" },
    { name: "News", icon: NewspaperIcon, route: "/news" },
    { name: "Finance", icon: AddCardIcon, route: "/financeMain" },
    { name: "Collections", icon: StoreIcon, route: "/collection" },
    { name: "Grant", icon: SoapIcon, route: "/grant" },
    { name: "Staffs", icon: GroupIcon, route: "/staff" },
    { name: "Categories", icon: CategoryIcon, route: "/categories" },
    { name: "Logout", icon: LogoutIcon, route: "/login" },
  ];
  const NavItem = ({ icon, route, children, ...rest }) => {
    return (
      <NavLink to={route} style={{ textDecoration: "none" }}>
        <ListItem style={{ position: "relative" }} disablePadding>
          <ListItemButton
            align="center"
            p="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            {...rest}
          >
            {icon && <ListItemIcon mr="4" fontSize="30" as={icon} />}
            {children}
          </ListItemButton>
        </ListItem>
      </NavLink>
    );
  };

  const drawer = (
    <Box>
      <h2
        style={{
          color: "#34A853",
          display: "flex",
          justifyContent: "center",
          paddingTop: "8%",
        }}
      >
        पौरखी नेपाली{" "}
      </h2>

      <List
        style={{ position: "relative", paddingTop: "20%", paddingBottom: "0%" }}
      >
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon} route={link.route}>
            {link.name}
          </NavItem>
        ))}

        {/* <ListItem  style={{position:'relative'}} disablePadding onClick={() => navigate('/')} >
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon  style={{width:'100%'}}/>
                        </ListItemIcon>
                        <ListItemText  primary='Dashboard'/>
                    </ListItemButton>
                </ListItem>
                
        
              
                <ListItem style={{position:'relative'}} disablePadding onClick={() => navigate('/logout')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon style={{width:'100%'}}/>
                        </ListItemIcon>
                        <ListItemText primary='Logout' />

                    </ListItemButton>
                </ListItem> */}

        <Button
          color="success"
          variant="contained"
          onClick={() => navigate("/createuser")}
          sx={{
            width: "70%",
            height: "10%",
            display: "flex",
            marginLeft: "12%",
            marginTop: "15%",
          }}
        >
          Add Staff
        </Button>
        <Button
          color="success"
          variant="contained"
          onClick={() => navigate("/tickets")}
          sx={{
            width: "70%",
            height: "10%",
            display: "flex",
            marginLeft: "12%",
            marginTop: "10%",
          }}
        >
          View Ticket
        </Button>
      </List>
    </Box>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      {/* <StyledAccount /> */}
      <AppBar
        style={{
          background: "#f4f4f4",
          borderRadius: "none",
          borderBottom: "none",
          boxShadow: "none",
        }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          {/* <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton> */}
          <Box style={{ width: "65%", display: "flex" }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                fontSize: "26px",
                color: "#535353",
                fontWeight: "bold",
                position: "relative",
                marginLeft: "24%",
              }}
            >
              Overview
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Badge badgeContent={rows.length} color="error">
                <NotificationsIcon sx={{ color: "black" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle sx={{ color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Box
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

        {/* <Drawer

                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    
                >
                    {drawer}
                </Drawer> */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidenavbar;
