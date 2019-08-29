import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
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
};

export default BookList;
