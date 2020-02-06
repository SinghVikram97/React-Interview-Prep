import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";

// We create a component called App
const App = () => {
  // 1st parameter is tag
  // 2nd parameter is attributes like id
  // 3rd one is children
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Maltese" }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Eagle"
    }),
    React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mixed" })
  ]);
};

// When you say render it blows away anything inside of it so not rendered is gone
render(React.createElement(App), document.getElementById("root"));
