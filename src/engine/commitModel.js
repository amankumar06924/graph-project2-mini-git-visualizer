export function createCommit({ id, message, parents = [], branch }) {
  if (!id) throw new Error("Commit must have an id");
  if (!branch) throw new Error("Commit must have a branch");

  return {
    id,
    message: message || "",
    parents,
    branch,
    timestamp: Date.now(),
  };
}