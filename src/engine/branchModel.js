export function createBranch({ name, head }) {
  if (!name) throw new Error("Branch must have a name");
  return {
    name,
    head,
    base: head,
  };
}