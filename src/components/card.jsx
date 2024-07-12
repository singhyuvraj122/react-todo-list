function Card({ title = "defaulTitle", content = "defaultContent", children }) {
  return (
    <div style={{
        margin: "auto",
        padding: "10px 20px",
        border: "2px solid red",
        borderRadius: "10px",
        width: "max-content",
        display: "flex",
        flexDirection: "column",
    }}>
      <div style={{
        borderBottom:"2px solid red",
      }}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Card;
