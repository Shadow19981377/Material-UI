import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
// import InboxIcon from '@mui/icons-material/Inbox';
import { Home, Article, Groups, Storefront, AccountBox, Settings, Diversity1, Diversity2, ModeNight } from "@mui/icons-material";

import React from "react";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#pages">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#groups">
            <ListItemIcon>
              <Groups />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#marketplace">
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#friends">
            <ListItemIcon>
              <Diversity2 />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#profile">
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#switch">
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
