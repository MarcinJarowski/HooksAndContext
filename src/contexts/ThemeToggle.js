import React from "react";
import { ThemeContext } from "./ThemeContext";

class ThemeToggle extends React.Component {
  state = {};
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle theme</button>;
  }
}

export default ThemeToggle;
