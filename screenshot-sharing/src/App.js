import React, { useState } from "react";
import CardContainer from "./Components/Card/CardContainer";
import Header from "./Components/Header";
//  font awesome things
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const icons = require("@fortawesome/free-solid-svg-icons");

const App = () => {
  const [headerTitle, setHeaderTitle] = useState("Screenshots");

  return (
    <div id="page">
      <Header
        title={headerTitle}
        FontAwesomeIcon={FontAwesomeIcon}
        icons={icons}
        setHeaderTitle={setHeaderTitle}
      />
      <main id="main-content" className="main-content">
        <CardContainer fa={FontAwesomeIcon} icons={icons} />
      </main>
    </div>
  );
};

export default App;
