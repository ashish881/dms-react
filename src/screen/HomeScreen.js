import React, { useEffect, useState } from "react";
import {
  Menu,
  Button,
  MenuItem,
  Fade,
  Typography,
  TextField,
} from "@mui/material";
import TextBox from "../component/TextBox";
import NewEntry from "../component/NewEntry";
import TabPanel from "../component/TabPanel";

function HomeScreen(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [inputValue, setInputValue] = useState({
    custId: "",
    custName: "",
    contactPerson: "",
    address: "",
    emaiId: "",
    phone: "",
    mobile: "",
    fax: "",
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
  } = inputValue;

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };

  useEffect(() => {
    // console.log("hom", props.isClick);
    const frmLocal = localStorage.getItem("userInfo");
    const _frmLocal = JSON.parse(frmLocal);
    if (props.location.pathname === "/") {
      props.history.push("/login");
    }

    if (!!_frmLocal) {
      props.history.push("/");
      props.setClick(true);
    }
  }, [props.history, props.location.pathname]);

  return (
    <div
      style={{
        padding: 30,
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <TabPanel />
      {props.menuListIndex == 0 ? (
        <>
          <Typography
            variant="h5"
            component="h2"
            style={{
              marginBottom: 10,
              textAlign: "center",
              fontFamily: "Montserrat sans-serif",
              fontWeight: 700,
            }}
          >
            New Order Entry
          </Typography>
          <div style={{ padding: 20 }}>
            <Typography
              variant="h5"
              component="h2"
              style={{
                marginBottom: 10,
                fontFamily: "Montserrat sans-serif",
                fontWeight: 400,
              }}
            >
              Customer Info:-
            </Typography>
            <div
              style={{
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <NewEntry></NewEntry>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default HomeScreen;
