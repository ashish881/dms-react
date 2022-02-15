import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import {
  Box,
  Paper,
  Grid,
  TextField,
  Button,
  Typography,
  Select,
  Menu,
  MenuItem,
} from "@mui/material";
import TextBox from "./TextBox";
import { DateRangePicker } from "react-date-range";
import ReportTabel from "./ReportTabel";
import DatePicker from "./DatePicker";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Reports() {
  const [reportSelect, setReportSelect] = React.useState();
  const [isDatePicker, setDatePicker] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setDatePicker(false);
  };

  const handleSelect = (ranges) => {
    console.log(ranges, "range");
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  };

  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  const selectDateHandler = () => {
    setAnchorEl(null);
    setDatePicker(true);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignSelf: "flex-end",
          width: "100%",
          marginBottom: 30,
        }}
      >
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Add Filter
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Customer Id</MenuItem>
          <MenuItem onClick={selectDateHandler}>Select Date</MenuItem>
        </Menu>
        {isDatePicker && <DatePicker />}
      </div>
      <ReportTabel />
    </>
  );
}
