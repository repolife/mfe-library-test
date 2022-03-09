import React from "react";
import ReactDOM from "react-dom";
import { Loader } from "./Loader";
import MyUserMFE from "remote/MyUserMFE";
import amazonLogo from "./images/amazon.jpg";
import MyImporant from "remote/TestShared";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: host</div>
    {/* <MyUserMFE user="Hello" /> */}
    <Loader logo={amazonLogo} />
    <MyImporant user="David" age={37} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
