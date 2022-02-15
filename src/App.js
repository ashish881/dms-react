import "./App.css";
import React, { useEffect, useState } from "react";
import LoginScreen from "./screen/LoginScreen";
import HomeScreen from "./screen/HomeScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";

function App() {
  const [isClick, setClick] = useState(false);
  const [menuListIndex, setMenuListIndex] = useState(null);

  const frmLocal = localStorage.getItem("userInfo");
  const _frmLocal = JSON.parse(frmLocal);
  return (
    <div className="App">
      <Router>
        {!!_frmLocal && isClick && (
          <Header
            // isClick={isClick}
            title={"Domain Management System"}
            setMenuListIndex={setMenuListIndex}
          ></Header>
        )}
        <Route
          path="/login"
          component={(props) => <LoginScreen setClick={setClick} {...props} />}
        ></Route>
        <Route
          path="/"
          component={(props) => (
            <HomeScreen
              isClick={isClick}
              setClick={setClick}
              menuListIndex={menuListIndex}
              {...props}
            />
          )}
          exact
        ></Route>
      </Router>
    </div>
  );
}

export default App;
