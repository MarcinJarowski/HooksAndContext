import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "name of the wind", id: 1 },
    { title: "the way of kings", id: 2 },
    { title: "codemasters", id: 3 },
    { title: "from zero to hero developer", id: 4 }
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
