function Button({
  children,
  type = "button",
  name = "defaultButton",
  value = "defaultValue",
  disabled = false,
}) {

    // console.log(type);
    // console.log(children);
    // console.log(name);
    // console.log(value);
    // console.log(disabled);
  return (
    <button type={type} name={name} value={value} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
