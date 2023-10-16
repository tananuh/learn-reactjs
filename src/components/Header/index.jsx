import React from "react";
import PropTypes from "prop-types";
import { NavLink} from "react-router-dom";
import {AppBar, Box, Button, Typography, Toolbar, ListItemText, ListItemButton, ListItem, List, IconButton, CssBaseline, Divider, Drawer} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

Header.propTypes = {
  window: PropTypes.func,
};

const drawerWidth = 240;
const navItems = [
  {
    name: "Home",
    code: "/"
  }, {
    name: "Product",
    code: "/products/"
  }
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Shoping Cart
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.code} disablePadding>
            <NavLink to={item.code} className={(navData) => (navData.isActive ? "current-page" : 'none')}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Shoping Cart
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink key={item.code} to={item.code} className={(navData) => (navData.isActive ? "current-page" : 'none')}>
                <Button sx={{ color: "#fff" }}>
                  {item.name}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
}

export default Header;
