import React, { useEffect, useState } from "react";
import { Menu, Button, MenuItem, Fade, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";

function Header(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  let history = useHistory();

  const handleClick = (event) => {
    console.log("777", event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    // props.setMenuListIndex(index);
  };

  const menuList = [
    "New Order Entry",
    "Renewal Details Entry",
    "Update Customer Info",
    "Reports",
  ];

  const logoutHandler = () => {
    localStorage.clear();
    setAnchorEl(null);
    history.push("/login");
  };
  const frmLocal = localStorage.getItem("userInfo");
  const _frmLocal = JSON.parse(frmLocal);

  return (
    <div
      style={{
        height: "10%",
        backgroundColor: "#2e0630",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        style={{
          color: "#fff",
          fontFamily: "Montserrat sans-serif",
          fontWeight: 400,
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          letterSpacing: 3,
        }}
      >
        {props.title}
      </Typography>
      {!!_frmLocal ? (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            // flex: 1,
            // backgroundColor: "red",
            marginRight: 15,
          }}
        >
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Typography
              variant="h4"
              component="h4"
              style={{
                fontFamily: "Montserrat sans-serif",
                fontWeight: 400,
                color: "#fff",
                fontSize: 20,
                letterSpacing: 3,
              }}
            >
              {_frmLocal?.name}
            </Typography>
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            {/* {menuList.map((_, index) => (
              <MenuItem onClick={() => handleClose(index)}>{_}</MenuItem>
            ))} */}
            <MenuItem onClick={() => logoutHandler()}>Logout</MenuItem>
          </Menu>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
