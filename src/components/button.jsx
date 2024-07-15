function Button({
  children,
  type = "button",
  name = "defaultButton",
  disabled = false,
  onClick,
}) {
  return (
    <button type={type} name={name} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
