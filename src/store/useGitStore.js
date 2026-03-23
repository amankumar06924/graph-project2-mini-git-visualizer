import { create } from "zustand";
import GitEngine from "../engine/gitEngine";

export const useGitStore = create((set, get) => {
  const engine = new GitEngine();
  engine.init();

  return {
    engine,
    commits: engine.commits,
    branches: engine.branches,
    currentBranch: engine.currentBranch,
    createCommit: (message) => {
      engine.createCommit(message);
      set({
        commits: { ...engine.commits },
        branches: { ...engine.branches },
        currentBranch: engine.currentBranch,
      });
    },
    createBranch: (name) => {
      const engine = get().engine;

      engine.createBranch(name);

      set({
        branches: { ...engine.branches },
      });
    },

    switchBranch: (name) => {
      const engine = get().engine;

      engine.switchBranch(name);

      set({
        currentBranch: engine.currentBranch,
      });
    },
    mergeBranch: (source) => {
      const engine = get().engine;

      engine.mergeBranch(source);

      set({
        commits: { ...engine.commits },
        branches: { ...engine.branches },
      });
    },
    resetHard: () => {
      const engine = get().engine;

      engine.resetHard();

      set({
        commits: { ...engine.commits },
        branches: { ...engine.branches },
        currentBranch: engine.currentBranch,
      });
    },
  };
});
