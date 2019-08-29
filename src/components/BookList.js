import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends React.Component {
  static contextType = ThemeContext;

  state = {};

  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>
            Jak zdobyć przyjaciół i zjednać sobie ludzi
          </li>
          <li style={{ background: theme.ui }}>Lord of the rings</li>
          <li style={{ background: theme.ui }}>Song of Ice and Fire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
