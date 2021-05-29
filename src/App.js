import "./styles.css";
import React, { useState } from "react";
import ListView from "./ListView";
import InputField from "./InputField";
import SearchBar from "./SearchBar";

function App() {
  const [list, setList] = useState({
    items: [
      { text: "Rachel", isFav: false },
      { text: "Chandler", isFav: false },
      { text: "Phoebe", isFav: false }
    ],
    searchString: ""
  });

  function handleSubmit(value) {
    let newItem = { text: value, isFav: false };
    setList({ ...list, items: list.items.concat(newItem) });
  }

  function handleFav(id) {
    if (list.items[id].isFav) {
      let temp = { text: list.items[id].text, isFav: false };
      setList({
        ...list,
        items: [...list.items.slice(0, id), ...list.items.slice(id + 1), temp]
      });
    } else {
      let temp = { text: list.items[id].text, isFav: true };
      setList({
        ...list,
        items: [temp, ...list.items.slice(0, id), ...list.items.slice(id + 1)]
      });
    }
  }
  function handleDelete(id) {
    setList({
      ...list,
      items: [...list.items.slice(0, id), ...list.items.slice(id + 1)]
    });
  }
  function handleSearchChange(value) {
    setList({ ...list, searchString: value });
  }

  return (
    <div style={{ borderStyle: "solid", width: "20%", margin: "0 auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Friends List</h2>
        <hr />
      </div>
      <div>
        <div style={{ textAlign: "center" }}>
          <InputField handleSubmit={handleSubmit} />
          <br />
          <SearchBar handleSearchChange={handleSearchChange} />
        </div>
        <div>
          <ListView
            list={list}
            handleDelete={handleDelete}
            handleFav={handleFav}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
