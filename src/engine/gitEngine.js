import { createCommit } from "./commitModel";
import { createBranch } from "./branchModel";

class GitEngine {
  constructor() {
    this.commits = {};
    this.branches = {};
    this.currentBranch = null;
    this.commitCount = 0;
  }

  init() {
    const mainBranch = createBranch({ name: "main", head: null });
    this.branches["main"] = mainBranch;
    this.currentBranch = "main";
  }

  createCommit(message) {
    if (!this.currentBranch) {
      throw new Error("No active branch");
    }
    const branch = this.branches[this.currentBranch];
    const parent = branch.head ? [branch.head] : [];
    const id = "c" + (++this.commitCount);
    const newCommit = createCommit({
      id,
      message,
      parents: parent,
      branch: this.currentBranch,
    });

    this.commits[id] = newCommit;
    this.branches[this.currentBranch].head = id;

    return newCommit;
  }

  createBranch(name) {
    if (!this.currentBranch) {
      throw new Error("Initialize engine first");
    }

    if (this.branches[name]) {
      throw new Error("Branch already exists");
    }
    const currentHead = this.branches[this.currentBranch].head;
    const newBranch = createBranch({
      name,
      head: currentHead,
    });

    this.branches[name] = newBranch;
  }

  switchBranch(name) {
    if (!this.branches[name]) {
      throw new Error("Branch does not exist");
    }

    this.currentBranch = name;
  }

  mergeBranch(sourceBranch) {
    if (!this.branches[sourceBranch]) {
      throw new Error("Source branch does not exist");
    }

    if (sourceBranch === this.currentBranch) {
      throw new Error("Cannot merge same branch");
    }

    const targetBranch = this.currentBranch;

    const sourceHead = this.branches[sourceBranch].head;
    const targetHead = this.branches[targetBranch].head;

    if (!sourceHead || !targetHead) {
      throw new Error("Cannot merge empty branches");
    }

    const id = "c" + (++this.commitCount);

    const mergeCommit = createCommit({
      id,
      message: `Merge ${sourceBranch} into ${targetBranch}`,
      parents: [targetHead, sourceHead],
      branch: targetBranch,
    });

    this.commits[id] = mergeCommit;
    this.branches[targetBranch].head = id;

    return mergeCommit;
  }
  resetHard() {
  const branch = this.branches[this.currentBranch];
  const currentHead = branch.head;

  if (!currentHead) {
    throw new Error("No commits to reset");
  }

  const currentCommit = this.commits[currentHead];

  if (currentCommit.parents.length === 0) {
    // first commit case
    delete this.commits[currentHead];
    branch.head = null;
    return;
  }

  const prevCommitId = currentCommit.parents[0];

  // delete current commit
  delete this.commits[currentHead];

  // move HEAD back
  branch.head = prevCommitId;
}
}

export default GitEngine;