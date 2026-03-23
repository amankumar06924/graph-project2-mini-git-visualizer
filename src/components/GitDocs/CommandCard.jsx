const CommandCard = ({ cmd }) => {
  return (
    <div style={{
      border: "1px solid #333",
      padding: "15px",
      marginBottom: "10px",
      borderRadius: "8px",
      background: "#1e1e1e",
      color: "#fff"
    }}>
      <h3>{cmd.name}</h3>
      <p><strong>Description:</strong> {cmd.description}</p>
      <p><strong>Syntax:</strong> {cmd.syntax}</p>
      <p><strong>Example:</strong> {cmd.example}</p>
      <p><strong>Explanation:</strong> {cmd.explanation}</p>
    </div>
  );
};

export default CommandCard;