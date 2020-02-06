import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";
import SearchParams from "./SearchParams";

// We create a component called App
const App = () => {
  // 1st parameter is tag
  // 2nd parameter is attributes like id
  // 3rd one is children
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

// When you say render it blows away anything inside of it so not rendered is gone
render(<App />, document.getElementById("root"));
