import React, { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Box,
  Button,
  Checkbox,
  Typography,
} from "@mui/material";
import { ThemeProvider, makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { emailValidationReg, passwordValidationReg } from "../utils/config";
import { InfoAlert } from "../utils/alert";
import ForgotPassword from "../component/ForgotPassword";
import TextBox from "../component/TextBox";
import Background from "../assets/image/domain-background.jpg";
import { loginAuth } from "../utils/func";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    background: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // opacity: 0.8,
    // flex: 1,
    // backgroundColor: "green",
  },
  containerBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  BoxInput: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: "40%",
    height: "55%",
    padding: 20,
    flexDirection: "column",
  },
}));

function LoginScreen(props) {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState(null);
  const [checkbox, setCheckBox] = useState(false);
  const [forgotScreenModal, setForgotScreenModal] = useState(false);
  const { email, password } = inputValue;
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const classes = useStyles();

  console.log("-----", checkbox);
  const loginBtnPress = () => {
    if (!email) {
      setShowAlert(true);
    } else if (!emailValidationReg.test(email.trim())) {
      setShowAlert(true);
    } else if (!password) {
      setShowAlert(true);
      // } else if (!passwordValidationReg.test(password.trim())) {
      //   // setShowAlert(true);
    } else {
      const res = loginAuth(email, password);

      if (Array.isArray(res) && res.length && checkbox) {
        // append two object
        const finalResult = Object.assign(...res, { checkbox: true });

        delete finalResult.password;
        console.log("%%%%%%%%%%%%%%%%%%", finalResult);
        localStorage.setItem("userInfo", JSON.stringify(finalResult));
        console.log("got-login", res);
        props.history.push("/");
        props.setClick(true);
      } else if (Array.isArray(res) && res.length) {
        // props.history.push("/");
        const _res = Object.assign({}, ...res);
        delete _res.password;
        localStorage.setItem("userInfo", JSON.stringify(_res));
        props.history.push("/");
        props.setClick(true);
      } else {
        setShowAlert(true);
      }
    }
  };

  const loginBtnHandler = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(name, value, "--");
  };

  useEffect(() => {
    if (!!email) {
      setShowAlert(null);
    } else if (!!password) {
      setShowAlert(null);
    }
    return props.setClick(false);
  }, [email, password]);

  useEffect(() => {
    const frmLocal = localStorage.getItem("userInfo");
    const _frmLocal = JSON.parse(frmLocal);

    if (!!_frmLocal && _frmLocal?.checkbox) {
      setCheckBox(true);
      setInputValue({
        ...inputValue,
        email: _frmLocal?.email,
        password: _frmLocal?.password,
      });
    }

    // if (_frmLocal) {
    //   props.history.push("/");
    // }
  }, []);

  return (
    <div className={classes.container} maxWidth="xs">
      <Box className="box">
        <Typography
          variant="h4"
          component="h4"
          style={{
            textAlign: "center",
            fontFamily: "Montserrat sans-serif",
            fontWeight: 400,
          }}
        >
          Welcome To,
        </Typography>
        <Typography
          variant="h4"
          component="h4"
          style={{
            textAlign: "center",
            color: "#030f4a",
            fontFamily: "Montserrat sans-serif",
            fontWeight: 700,
          }}
        >
          DMS
        </Typography>

        {!email && showAlert ? (
          <InfoAlert
            setShowAlert={setShowAlert}
            info={"Please Enter Your Email"}
          />
        ) : !emailValidationReg.test(email.trim()) && showAlert ? (
          <InfoAlert
            setShowAlert={setShowAlert}
            info={"Email must be valid format"}
          />
        ) : !password && showAlert ? (
          <InfoAlert
            setShowAlert={setShowAlert}
            info={"Please Enter Your Password"}
          />
        ) : showAlert ? (
          <InfoAlert
            setShowAlert={setShowAlert}
            info={"Email or Password Incorrect"}
          />
        ) : null}
        <Box style={{ marginTop: 10 }}>
          <TextBox
            type="text"
            // id="outlined-password-input"
            error={
              (!email && showAlert) ||
              (!emailValidationReg.test(email.trim()) && showAlert)
                ? "error"
                : ""
            }
            value={email}
            placeholder="Enter your Email"
            label="Email"
            name="email"
            onChange={loginBtnHandler}
          />
        </Box>
        <Box style={{ marginTop: 10, marginBottom: 5 }}>
          <TextBox
            type="password"
            error={
              !password && showAlert && emailValidationReg.test(email.trim())
                ? "error"
                : ""
            }
            id="outlined-password-input"
            // placeholder="Enter your Email"
            label="Password"
            name="password"
            value={password}
            onChange={loginBtnHandler}
            autoComplete="current-password"
          />
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "red",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // backgroundColor: "red",
            }}
          >
            <Checkbox
              {...label}
              checked={checkbox}
              onChange={(e) => setCheckBox(e.target.checked)}
            />
            <Typography
              variant="h6"
              component="h6"
              style={{
                fontSize: 14,
                fontFamily: "Montserrat sans-serif",
                fontWeight: 500,
                fontSize: 18,
              }}
            >
              Remember Me
            </Typography>
          </div>
          <div>
            <Typography
              variant="h6"
              component="h6"
              style={{
                fontSize: 18,
                color: "#e01709",
                cursor: "pointer",
                fontFamily: "Montserrat sans-serif",
                fontWeight: 500,
              }}
              onClick={() => setForgotScreenModal(true)}
            >
              Forgot Password?
            </Typography>
          </div>
        </div>

        <Button
          style={{ width: "30%", alignSelf: "center" }}
          variant="contained"
          onClick={loginBtnPress}
        >
          Login
        </Button>
        {forgotScreenModal && (
          <ForgotPassword
            forgotScreenModal={forgotScreenModal}
            setForgotScreenModal={setForgotScreenModal}
          />
        )}
      </Box>
    </div>
  );
}

export default LoginScreen;

{
  /* : !passwordValidationReg.test(password.trim()) && showAlert ? (
    <InfoAlert
    setShowAlert={setShowAlert}
    info={
      "Password must be uppercase , lowercase , number and special characters"
    }
  />
)  */
}
