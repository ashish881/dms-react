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
  TablePagination,
} from "@mui/material";
import TextBox from "./TextBox";
import { DateRangePicker } from "react-date-range";
import DatePicker from "./DatePicker";
import ReportTabel from "./ReportTabel";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function StatementReport() {
  const [domainSelect, setDomainSelect] = React.useState(10);
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

  const handleChange = (e) => {
    setDomainSelect(e.target.value);
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
          flexDirection: "column",
          alignSelf: "flex-end",
          width: "100%",
          marginBottom: 30,
        }}
      >
        <Grid item xs={4} sm={4} md={4} lg={3} style={{ marginBottom: 20 }}>
          <Select
            labelId="demo-simple-select-label"
            style={{ width: "80%" }}
            id="demo-simple-select"
            value={domainSelect}
            label="domainSelect"
            name="domainSelect"
            onChange={handleChange}
          >
            <MenuItem value={10}>Select</MenuItem>
            <MenuItem value={20}>Monthly</MenuItem>
            <MenuItem value={30}>Weekly</MenuItem>
          </Select>
        </Grid>
        <ReportTabel />
      </div>
    </>
  );
}
