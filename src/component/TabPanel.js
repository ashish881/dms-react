import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import NewEntry from "./NewEntry";
import RenewalEntry from "./RenewalEntry";
import UpdateEntry from "./UpdateEntry";
import Reports from "./Reports";
import StatementReport from "./StatementReport";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const menuList = [
    "New Order Entry",
    "Renewal Details Entry",
    "Update Customer Info",
    "Reports",
  ];

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        width: "95%",
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          // style={{ backgroundColor: "#2a4880" }}
          aria-label="full width tabs examples"
        >
          {menuList.map((a, index) => (
            <Tab label={a} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        style={{ backgroundColor: "#ffffe3" }}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Typography
            variant="h5"
            component="h2"
            style={{
              marginBottom: 20,
              fontFamily: "Montserrat sans-serif",
              fontWeight: 400,
            }}
          >
            Customer Info:-
          </Typography>
          <NewEntry />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Typography
            variant="h5"
            component="h2"
            style={{
              marginBottom: 20,
              fontFamily: "Montserrat sans-serif",
              fontWeight: 400,
            }}
          >
            Customer Info:-
          </Typography>
          <RenewalEntry />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Typography
            variant="h5"
            component="h2"
            style={{
              marginBottom: 20,
              fontFamily: "Montserrat sans-serif",
              fontWeight: 400,
            }}
          >
            Customer Info:-
          </Typography>
          <UpdateEntry />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Typography
            variant="h5"
            component="h2"
            style={{
              marginBottom: 20,
              fontFamily: "Montserrat sans-serif",
              fontWeight: 400,
            }}
          >
            Expired Domain/Website Reports
          </Typography>
          <Reports />

          <Typography
            variant="h5"
            component="h2"
            style={{
              marginBottom: 20,
              marginTop: 20,
              fontFamily: "Montserrat sans-serif",
              fontWeight: 400,
            }}
          >
            Business Statement Reports
          </Typography>
          <StatementReport />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
