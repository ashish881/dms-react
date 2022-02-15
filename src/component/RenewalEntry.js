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

export default function RenewalEntry() {
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
    transactionType: "",
    serverLocation: "",
    noOfId: "",
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
    transactionType,
    serverLocation,
    noOfId,
    webSpace,
    duration,
    amount,
  } = inputValue;

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

  const transactionData = [
    {
      type: "text",
      value: transactionType,
      placeholder: "Transaction Type",
      label: "Transaction Type",
      name: "transactionType",
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
  ];

  const RenewalData = [
    {
      type: "text",
      value: noOfId,
      placeholder: "No. of Id",
      label: "No. of Id",
      name: "noOfId",
      onChange: handleChange,
    },
    {
      type: "text",
      value: webSpace,
      placeholder: "Web Space",
      label: "Web Space",
      name: "webSpace",
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
          {transactionData.map((_, index) => (
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
            Enter the Details for Renewal:-
          </Typography>
        </div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
        >
          {RenewalData.map((_, index) => (
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
