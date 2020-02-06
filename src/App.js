import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";

// We create a component called App
const App = () => {
  // 1st parameter is tag
  // 2nd parameter is attributes like id
  // 3rd one is children
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Maltese" />
      <Pet name="Pepper" animal="Bird" breed="Eagle" />
      <Pet name="Doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

// When you say render it blows away anything inside of it so not rendered is gone
render(<App />, document.getElementById("root"));
