import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// We create a component called App
const App = () => {
  // 1st parameter is tag
  // 2nd parameter is attributes like id
  // 3rd one is children
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

// When you say render it blows away anything inside of it so not rendered is gone
render(<App />, document.getElementById("root"));
