import React, { useState } from "react";

export default function InputField(props) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(value);
    setValue("");
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter your friend's name"
        name="firstName"
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}
