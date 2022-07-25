import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <input
      type={"text"}
      placeholder={"Search"}
      onChange={searchChange}
      style={{ margin: "1rem", padding: ".5rem" }}
    />
  );
};

export default SearchBox;
