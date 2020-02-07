import { createContext } from "react";

// state and updater passed to createContext
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
