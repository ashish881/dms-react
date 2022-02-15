import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal, Button } from "@mui/material";
import TextBox from "./TextBox";
import { emailValidationReg } from "../utils/config";
import { InfoAlert } from "../utils/alert";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  minHeight: "300",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  // justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  p: 4,
  borderRadius: 5,
};

export default function ForgotPassword({
  forgotScreenModal,
  setForgotScreenModal,
}) {
  const [email, setEmail] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(null);

  const forgotBtnPress = () => {
    if (!email) {
      setShowAlert(true);
    } else if (!emailValidationReg.test(email.trim())) {
      setShowAlert(true);
    }
  };

  React.useEffect(() => {
    if (!!email) {
      setShowAlert(false);
    }
  }, [email]);

  return (
    <div>
      <Modal
        open={forgotScreenModal}
        onClose={() => setForgotScreenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h4"
            style={{
              marginTop: 10,
              marginBottom: 10,
              textAlign: "center",
              fontFamily: "Montserrat sans-serif",
              fontWeight: 700,
            }}
          >
            Trouble Logging In?
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
          ) : null}
          <div
            style={{
              width: "80%",
              //   display: "flex",
              //   justifyContent: "center",
              //   backgroundColor: "red",
              marginTop: 20,
            }}
          >
            <TextBox
              type="text"
              value={email}
              placeholder="Enter your Email"
              label="Enter your Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            style={{
              // width: 150,
              display: "flex",
              alignSelf: "center",
              marginTop: 30,
            }}
            variant="contained"
            onClick={forgotBtnPress}
          >
            Reset Password
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
