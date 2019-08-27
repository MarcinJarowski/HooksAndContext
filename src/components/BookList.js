import React from "react";

class BookList extends React.Component {
  state = {};
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>Jak zdobyć przyjaciół i zjednać sobie ludzi</li>
          <li>Lord of the rings</li>
          <li>Song of Ice and Fire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
