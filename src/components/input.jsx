import { useState, useEffect } from "react";

function Input({
  name = "defaultName",
  type = "text",
  placeholder = "enter something...",
  value = "",
  onChange,
  ...props
}) {
  const [inputValue, setInputValue] = useState("" || value);

  console.log(value);
  console.log(inputValue);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  function handleOnChange(e) {
    // console.log(e.target.value);
    setInputValue(e.target.value);
    // console.log("state not changed, old value = ", inputValue);
    // console.log(e.target);
    // onChange(e);
  }

  useEffect(() => {
    // console.log("state changed, new value = ", inputValue);
    onChange({[name]: inputValue});
    // setInputValue("");
  }, [inputValue]);

  return (
    <input
      onChange={handleOnChange}
      type={type}
      name={name}
      placeholder={placeholder}
      style={props.style}
      value={inputValue}
    />
  );
}

export default Input;
