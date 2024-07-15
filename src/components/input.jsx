import { useState } from "react";

function Input({
  name = "defaultName",
  type = "text",
  placeholder = "enter something...",
  onChange,
  ...props
}) {

  return (
    <input
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      style={props.style}
    />
  );
}

export default Input;
