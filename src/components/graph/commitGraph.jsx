import React from "react";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

const CommitGraph = ({ commits = {}, branches = {}, currentBranch }) => {
  const branchMap = {};
  let branchIndex = 0;
  const nodeMap = {};
  const commitList = Object.values(commits);

  const nodes = commitList.map((commit) => {
    if (!(commit.branch in branchMap)) {
      branchMap[commit.branch] = branchIndex++;
    }
    let x = 0;
    if (commit.parents.length > 0) {
      const parentNode = nodeMap[commit.parents[0]];
      if (parentNode) {
        x = parentNode.x + 120;
      }
    }
    const y = branchMap[commit.branch] * 120;

    nodeMap[commit.id] = { x, y };

    return {
      id: commit.id,
      data: {
        label: `${commit.id} (${commit.branch})`,
      },
      position: { x, y },
      style: {
        background: commit.branch === "main" ? "#1e90ff" : "#2ecc71",
        color: "white",
        borderRadius: "6px",
        padding: "6px",
        border:
          commit.branch === currentBranch
            ? "3px solid yellow"
            : "1px solid #333",
      },
    };
  });

  const edges = commitList.flatMap((commit) =>
    commit.parents.map((parent, index) => ({
      id: `${parent}-${commit.id}`,
      source: parent,
      target: commit.id,
      type: "smoothstep",
      animated: true,
      label: index === 1 ? "merge" : "",
      style: {
        stroke: index === 0 ? "#00ffcc" : "#ff5555",
        strokeWidth: 2.5,
        strokeDasharray: index === 1 ? "6,4" : "0",
      },
    })),
  );

  // 🔹 Fork Edges (branch origin)
  const forkEdges = Object.values(branches)
    .filter((b) => b.base && b.head && b.base !== b.head)
    .map((b) => ({
      id: `fork-${b.name}`,
      source: b.base,
      target: b.head,
      animated: true,
      style: {
        stroke: "#ff00ff",
        strokeDasharray: "4,4",
      },
    }));

  const allEdges = [...edges, ...forkEdges];

  return (
    <div style={{ height: 500, border: "1px solid #333" }}>
      <ReactFlow nodes={nodes} edges={allEdges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default CommitGraph;
