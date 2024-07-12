function Input({
  name = "defaultName",
  value = "defaultValue",
  type = "text",
  placeholder = "enter something...",
}) {
  return (
    <input type={type} name={name} value={value} placeholder={placeholder} />
  );
}

export default Input;