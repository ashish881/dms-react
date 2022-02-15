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
  MenuItem,
} from "@mui/material";
import TextBox from "./TextBox";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function NewEntry() {
  const [inputValue, setInputValue] = React.useState({
    custId: "",
    custName: "",
    contactPerson: "",
    address: "",
    emaiId: "",
    phone: "",
    mobile: "",
    fax: "",
    transactionId: "",
    domainName: "",
    domainSelect: 50,
    applicationType: "",
    mailId: "",
    domainReg: "",
    nameServer: "",
    webSpace: "",
    serverLocation: "",
    startDate: "",
    duration: "",
    amount: "",
    renewalAmount: "",
    executiveName: "",
    ipAddress: "",
  });
  const {
    custId,
    custName,
    contactPerson,
    address,
    emailId,
    phone,
    mobile,
    fax,
    domainName,
    transactionId,
    domainSelect,
    applicationType,
    mailId,
    domainReg,
    nameServer,
    webSpace,
    serverLocation,
    startDate,
    duration,
    amount,
    renewalAmount,
    executiveName,
    ipAddress,
  } = inputValue;

  console.log("**********", domainSelect);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  const disabled = true;

  const textFeildArray = [
    {
      disabled: disabled,
      type: "text",
      value: custId,
      placeholder: "Customer Id",
      label: "Customer Id",
      name: "custId",
      onChange: handleChange,
    },
    {
      type: "text",
      value: custName,
      placeholder: "Customer Name",
      label: "Customer Name",
      name: "custName",
      onChange: handleChange,
    },
    {
      type: "text",
      value: contactPerson,
      placeholder: "Contact Person",
      label: "Contact Person",
      name: "contactPerson",
      onChange: handleChange,
    },
    {
      type: "text",
      value: emailId,
      placeholder: "Email Id",
      label: "Email Id",
      name: "emailId",
      onChange: handleChange,
    },
    {
      type: "text",
      value: address,
      placeholder: "Address",
      label: "Address",
      name: "address",
      onChange: handleChange,
    },
    {
      type: "text",
      value: phone,
      placeholder: "Phone",
      label: "Phone",
      name: "phone",
      onChange: handleChange,
    },
    {
      type: "text",
      value: mobile,
      placeholder: "Mobile",
      label: "Mobile",
      name: "mobile",
      onChange: handleChange,
    },
    {
      type: "text",
      value: fax,
      placeholder: "Fax",
      label: "Fax",
      name: "fax",
      onChange: handleChange,
    },
  ];

  const transactionTextBox = [
    {
      disabled: disabled,
      type: "text",
      value: transactionId,
      placeholder: "Transaction Id",
      label: "Transaction Id",
      name: "transactionId",
      onChange: handleChange,
    },
    {
      disabled: disabled,
      type: "text",
      value: custId,
      placeholder: "Customer Id",
      label: "Customer Id",
      name: "custId",
      onChange: handleChange,
    },
    {
      type: "text",
      value: domainName,
      placeholder: "Domain Name",
      label: "Domain Name",
      name: "domainName",
      onChange: handleChange,
    },
  ];

  const orderDetails = [
    {
      type: "text",
      value: applicationType,
      placeholder: "Application Type",
      label: "Application Type",
      name: "applicationType",
      onChange: handleChange,
    },
    {
      type: "text",
      value: mailId,
      placeholder: "Mail id",
      label: "Mail id",
      name: "mailId",
      onChange: handleChange,
    },
    {
      type: "text",
      value: domainReg,
      placeholder: "Domain Register",
      label: "Domain Register",
      name: "domainReg",
      onChange: handleChange,
    },
    {
      type: "text",
      value: nameServer,
      placeholder: "Name Server",
      label: "Name Server",
      name: "nameServer",
      onChange: handleChange,
    },
    {
      type: "text",
      value: webSpace,
      placeholder: "in MB",
      label: "Web Space",
      name: "webSpace",
      onChange: handleChange,
    },
    {
      type: "text",
      value: serverLocation,
      placeholder: "Server Location",
      label: "Server Location",
      name: "serverLocation",
      onChange: handleChange,
    },
    {
      type: "text",
      value: startDate,
      placeholder: "Started Date",
      label: "Started Date",
      name: "startDate",
      onChange: handleChange,
    },
    {
      type: "text",
      value: duration,
      placeholder: "Duration",
      label: "Duration",
      name: "duration",
      onChange: handleChange,
    },
    {
      type: "text",
      value: amount,
      placeholder: "Amount",
      label: "Amount",
      name: "amount",
      onChange: handleChange,
    },
    {
      type: "text",
      value: renewalAmount,
      placeholder: "Renewal Amount",
      label: "Renewal Amount",
      name: "renewalAmount",
      onChange: handleChange,
    },
    {
      type: "text",
      value: executiveName,
      placeholder: "Executive Name",
      label: "Executive Name",
      name: "executiveName",
      onChange: handleChange,
    },
    {
      type: "text",
      value: ipAddress,
      placeholder: "Ip Address",
      label: "Ip Address",
      name: "ipAddress",
      onChange: handleChange,
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
      >
        {textFeildArray.map((_, index) => (
          <Grid item xs={4} sm={4} md={4} lg={3} key={index}>
            <TextBox
              disabled={_.disabled}
              type={_.type}
              value={_.value}
              placeholder={_.placeholder}
              label={_.label}
              name={_.name}
              onChange={_.onChange}
            />
          </Grid>
        ))}
      </Grid>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          // marginTop: 10,
        }}
      >
        <div>
          <Typography
            variant="h5"
            component="h2"
            style={{
              marginTop: 50,
              marginBottom: 20,
              fontFamily: "Montserrat sans-serif",
              fontWeight: 400,
            }}
          >
            Transaction Info:-
          </Typography>
        </div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        >
          {transactionTextBox.map((_, index) => (
            <Grid item xs={4} sm={4} md={4} lg={3} key={index}>
              <TextBox
                disabled={_.disabled}
                type={_.type}
                value={_.value}
                placeholder={_.placeholder}
                label={_.label}
                name={_.name}
                onChange={_.onChange}
              />
            </Grid>
          ))}
          <Grid
            item
            xs={4}
            sm={4}
            md={4}
            lg={3}
            // style={{ backgroundColor: "red" }}
          >
            <Select
              labelId="demo-simple-select-label"
              style={{ width: "100%" }}
              id="demo-simple-select"
              value={domainSelect}
              label="domainSelect"
              name="domainSelect"
              onChange={handleChange}
            >
              <MenuItem value={10}>Domain Only</MenuItem>
              <MenuItem value={20}>Development Only</MenuItem>
              <MenuItem value={30}>Space Only</MenuItem>
              <MenuItem value={40}>Development and Space</MenuItem>
              <MenuItem value={50}>Domain, Space & Development</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <div>
          <Typography
            variant="h5"
            component="h2"
            style={{
              marginTop: 50,
              marginBottom: 20,
              fontFamily: "Montserrat sans-serif",
              fontWeight: 400,
            }}
          >
            Order Details:-
          </Typography>
        </div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        >
          {orderDetails.map((_, index) => (
            <Grid item xs={4} sm={4} md={4} lg={3} key={index}>
              <TextBox
                disabled={_.disabled}
                type={_.type}
                value={_.value}
                placeholder={_.placeholder}
                label={_.label}
                name={_.name}
                onChange={_.onChange}
              />
            </Grid>
          ))}
        </Grid>
        <div
          style={{
            display: "flex",
            // alignSelf: "flex-end",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <Button
            style={{
              width: "20%",
              marginTop: 30,
            }}
            variant="contained"
            // onClick={loginBtnPress}
          >
            Submit
          </Button>
        </div>
      </div>
    </Box>
  );
}
