import React from "react";

export default function SearchBar(props) {
  function handleSearchChange(e) {
    props.handleSearchChange(e.target.value);
  }
  return (
    <input
      type="text"
      placeholder="Type to search..."
      onChange={(e) => handleSearchChange(e)}
    />
  );
}
