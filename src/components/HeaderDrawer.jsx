import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { DrawerIcon } from "./DrawerIcon";
import { DrawerItem } from "./DrawerItem";
import { CssBaseline } from '@mui/material';
import { Typography } from '@mui/material';
import { List } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export function HeaderDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
    <CssBaseline/>
      <Typography onClick={toggleDrawer}>
        <MenuOutlinedIcon sx={{cursor:'pointer'}} />
      </Typography>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="HeaderDrawer"
      >
        <DrawerIcon />
        <List>
          {DrawerItem.map((item, id) => {
            return (
              <>
              <ListItemButton
              key={id}        
              sx={{textAlign:'center', m:2, }}    
              onClick={() => {
                window.location.pathname = item.link;
              }}
              >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText id="title" >
                    {item.title}
                  </ListItemText>
                </ListItemButton>
              </>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default HeaderDrawer;
