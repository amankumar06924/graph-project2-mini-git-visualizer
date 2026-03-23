import { useState } from "react";
import { gitCommands } from "../../data/gitCommands";
import CommandCard from "./CommandCard";

const GitDocs = () => {
  const [search, setSearch] = useState("");
  const filtered = gitCommands.filter((cmd) =>
    cmd.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Git Command Explorer</h2>

      <input
        type="text"
        placeholder="Search command..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
        }}
      />

      {filtered.map((cmd, index) => (
        <CommandCard key={index} cmd={cmd} />
      ))}
    </div>
  );
};

export default GitDocs;