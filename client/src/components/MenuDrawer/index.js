import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import { useQuery } from "@apollo/client";
// import { QUERY_ITEMS } from "../../utils/queries";
import ItemsList from '../ItemsList';

const drawerWidth = "30vw";
const tabStyles = {
  color: "rgb(239, 235, 239)",
  "& span": {
    color: "rgb(191, 171, 171)!important",
  },
};

function MenuDrawer(props) {
  // import useState function to toggle drawer visibility
  const { openDrawer, setDrawerOpen, items, loading, deleteItemHandler } = props;
  const handleDrawerClose = () => setDrawerOpen(false);
  // toggle Tabs
  const [tabValue, setTabValue] = useState("1");
  const handleChange = (event, newValue) => setTabValue(newValue);

  // query items

  return (
    <div className="drawer-container">
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "rgb(194, 228, 255)",
          },
        }}
        variant="persistent"
        anchor="left"
        open={openDrawer}
      >
        <div className="drawer-header">
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Box sx={{ width: "100%" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <div className="tablist-container">
                <TabList onChange={handleChange} aria-label="Pin descriptions">
                  <Tab id="tab-list" label="View All" value="1" sx={tabStyles} />
                  <Tab id="tab-list" label="Your Pins" value="2" sx={tabStyles} />
                  <Tab id="tab-list" label="Saved Pins" value="3" sx={tabStyles} />
                </TabList>
              </div>
            </Box>
            {/* maybe use map function here */}
            <TabPanel value="1">
                {loading ? (
                    <div className="view-text">Loading...</div>
                ) : (
                    <ItemsList 
                    items={items}
                    deleteItemHandler={deleteItemHandler}
                    />
                )}
            </TabPanel>
            <TabPanel id="item-title" value="2">directions for future development</TabPanel>
            <TabPanel id="item-title" value="3">directions for future development</TabPanel>
          </TabContext >
        </Box>
        <Divider />
      </Drawer>
    </div>
  );
}

export default MenuDrawer;
