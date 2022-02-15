import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

export function InfoAlert({ setShowAlert, info }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="info" onClose={() => setShowAlert(null)}>
        <AlertTitle>Info</AlertTitle>
        {info}
      </Alert>
    </Stack>
  );
}

export function ErrorAlert() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}

export function WarningAlert() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}

export function SuccessAlert() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is an info alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}
