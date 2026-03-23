import { useState } from "react";
import { useGitStore } from "./store/useGitStore";
import CommitGraph from "./components/graph/commitGraph";
import GitDocs from "./components/GitDocs/GitDocs";

function App() {
  const [branchName, setBranchName] = useState("");
  const [showDocs, setShowDocs] = useState(false);
  const { resetHard } = useGitStore();
  const {
    createCommit,
    createBranch,
    switchBranch,
    mergeBranch,
    commits,
    branches,
    currentBranch,
  } = useGitStore();

  return (
    <div style={{ padding: 20 }}>
      {/* 🔹 Toggle Button */}
      <button onClick={() => setShowDocs(!showDocs)}>
        {showDocs ? "Back to Visualizer" : "Git Commands"}
      </button>
      {/* 🔹 Conditional Rendering */}
      {showDocs ? (
        <GitDocs />
      ) : (
        <>
          <h2 style={{ textAlign: "center", color: "#00ffcc" }}>
            Mini Git Visualizer
          </h2>
          {/* <button onClick={() => resetHard()}>Reset (HEAD~1)</button> */}
          <h3>Current Branch: {currentBranch}</h3>

          <button onClick={() => createCommit("new commit")}>Commit</button>

          <hr />

          <input
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            placeholder="branch name"
          />

          <button
            onClick={() => {
              if (!branchName.trim()) return;
              createBranch(branchName);
              setBranchName(""); // ✅ clear input
            }}
          >
            Create Branch
          </button>

          <hr />

          <h3>Branches</h3>
          {Object.keys(branches).map((b) => (
            <button key={b} onClick={() => switchBranch(b)}>
              Switch to {b}
            </button>
          ))}

          <hr />

          <h3>Merge</h3>
          {Object.keys(branches)
            .filter((b) => b !== currentBranch)
            .map((b) => (
              <button key={b} onClick={() => mergeBranch(b)}>
                Merge {b} → {currentBranch}
              </button>
            ))}

          <hr />
          <button onClick={() => resetHard()}>Reset (HEAD~1)</button>
          <hr/>

          <CommitGraph
            commits={commits}
            branches={branches}
            currentBranch={currentBranch}
          />
        </>
      )}
    </div>
  );
}

export default App;
