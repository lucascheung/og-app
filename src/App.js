import React, { Component } from "react";
import logo from "./logo.svg";
import Main from "./components/main.jsx";
import WhatYouWant from "./components/whatyouwant.jsx";
import WhatWeDo from "./components/whatwedo.jsx";
import OurTeam from "./components/ourteam.jsx";
import ContactUs from "./components/contactus.jsx";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <WhatYouWant />
        <WhatWeDo />
        <OurTeam />
        <ContactUs />
      </div>
    );
  }
}

export default App;
