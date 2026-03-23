export const gitCommands = [
  {
    name: "git init",
    category: "Basic",
    description: "Initialize a new Git repository",
    syntax: "git init",
    example: "git init",
    explanation:
      "This command creates a new .git folder which starts tracking your project. Without this, Git cannot track changes.",
  },

  {
    name: "git status",
    category: "Basic",
    description: "Check current state of repository",
    syntax: "git status",
    example: "git status",
    explanation:
      "Shows which files are modified, staged, or untracked. It helps you understand what will be committed next.",
  },

  {
    name: "git add",
    category: "Committing",
    description: "Add files to staging area",
    syntax: "git add <file>",
    example: "git add index.js",
    explanation:
      "Moves changes to staging area. Only staged changes will be included in the next commit.",
  },

  {
    name: "git commit",
    category: "Committing",
    description: "Save changes as a commit",
    syntax: "git commit -m 'message'",
    example: "git commit -m 'fix login bug'",
    explanation:
      "Creates a snapshot of staged changes and links it to the previous commit, forming a history chain.",
  },

  {
    name: "git branch",
    category: "Branching",
    description: "Create a new branch",
    syntax: "git branch <name>",
    example: "git branch feature",
    explanation:
      "Creates a new pointer to the current commit. It does NOT copy files, only creates a reference.",
  },

  {
    name: "git checkout",
    category: "Branching",
    description: "Switch branch",
    syntax: "git checkout <branch>",
    example: "git checkout feature",
    explanation:
      "Moves HEAD to another branch, changing your working directory to that branch's state.",
  },

  {
    name: "git merge",
    category: "Merging",
    description: "Merge one branch into another",
    syntax: "git merge <branch>",
    example: "git merge feature",
    explanation:
      "Combines histories of two branches by creating a new commit with two parents.",
  },
  {
  name: "git log",
  category: "Committing",
  description: "View commit history",
  syntax: "git log",
  example: "git log --oneline",
  explanation:
    "Shows history of commits. Useful for tracking changes and debugging issues.",
},

{
  name: "git reset",
  category: "Advanced",
  description: "Move HEAD to previous commit",
  syntax: "git reset --soft HEAD~1",
  example: "git reset --hard HEAD~1",
  explanation:
    "Moves HEAD to a previous commit. Soft keeps changes, hard deletes changes permanently.",
},

{
  name: "git revert",
  category: "Advanced",
  description: "Undo a commit safely",
  syntax: "git revert <commit-id>",
  example: "git revert c3",
  explanation:
    "Creates a new commit that reverses changes of a previous commit. Safe for shared history.",
},

{
  name: "git checkout (commit)",
  category: "Advanced",
  description: "Go to a previous commit",
  syntax: "git checkout <commit-id>",
  example: "git checkout c2",
  explanation:
    "Moves HEAD to a specific commit. This is called detached HEAD state.",
},

{
  name: "git switch",
  category: "Branching",
  description: "Switch branch (modern alternative)",
  syntax: "git switch <branch>",
  example: "git switch feature",
  explanation:
    "Switches between branches. Safer and clearer than checkout.",
},

{
  name: "git stash",
  category: "Advanced",
  description: "Temporarily save changes",
  syntax: "git stash",
  example: "git stash pop",
  explanation:
    "Stores uncommitted changes temporarily so you can switch branches safely.",
},

{
  name: "git rebase",
  category: "Merging",
  description: "Reapply commits on top of another base",
  syntax: "git rebase <branch>",
  example: "git rebase main",
  explanation:
    "Rewrites commit history by placing your changes on top of another branch.",
},

{
  name: "git cherry-pick",
  category: "Advanced",
  description: "Apply a specific commit to another branch",
  syntax: "git cherry-pick <commit-id>",
  example: "git cherry-pick c3",
  explanation:
    "Copies a specific commit from one branch to another.",
},

{
  name: "git pull",
  category: "Remote",
  description: "Fetch and merge changes from remote",
  syntax: "git pull",
  example: "git pull origin main",
  explanation:
    "Downloads changes from remote repository and merges them into current branch.",
},

{
  name: "git push",
  category: "Remote",
  description: "Upload commits to remote repository",
  syntax: "git push",
  example: "git push origin main",
  explanation:
    "Sends your local commits to remote repository.",
},

{
  name: "git clone",
  category: "Basic",
  description: "Copy a remote repository",
  syntax: "git clone <url>",
  example: "git clone https://github.com/user/repo.git",
  explanation:
    "Creates a local copy of a remote repository.",
},

{
  name: "git remote",
  category: "Remote",
  description: "Manage remote repositories",
  syntax: "git remote -v",
  example: "git remote add origin <url>",
  explanation:
    "Shows or manages remote repository connections.",
},
{
  name: "git reset --soft",
  category: "Advanced",
  description: "Undo commit but keep changes staged",
  syntax: "git reset --soft HEAD~1",
  example: "git reset --soft HEAD~1",
  explanation:
    "Moves HEAD to previous commit but keeps all changes staged. Useful when you want to edit last commit.",
  useCase: "Fix last commit message or add missing changes",
  danger: "medium",
},

{
  name: "git reset --hard",
  category: "Advanced",
  description: "Delete commits and changes permanently",
  syntax: "git reset --hard HEAD~1",
  example: "git reset --hard HEAD~1",
  explanation:
    "Moves HEAD and deletes all changes permanently. Cannot be recovered easily.",
  useCase: "Discard unwanted commits completely",
  danger: "high",
},

{
  name: "git revert",
  category: "Advanced",
  description: "Undo a commit safely",
  syntax: "git revert <commit-id>",
  example: "git revert c3",
  explanation:
    "Creates a new commit that reverses changes of a previous commit. Safe for shared repositories.",
  useCase: "Undo changes in team projects without breaking history",
  danger: "low",
},
{
  name: "git switch -c",
  category: "Branching",
  description: "Create and switch to new branch",
  syntax: "git switch -c <branch>",
  example: "git switch -c feature",
  explanation:
    "Creates a new branch and immediately switches to it.",
  useCase: "Start working on new feature quickly",
  danger: "low",
},

{
  name: "git branch -d",
  category: "Branching",
  description: "Delete a branch safely",
  syntax: "git branch -d <branch>",
  example: "git branch -d feature",
  explanation:
    "Deletes a branch only if it is fully merged.",
  useCase: "Clean up completed feature branches",
  danger: "low",
},

{
  name: "git branch -D",
  category: "Branching",
  description: "Force delete a branch",
  syntax: "git branch -D <branch>",
  example: "git branch -D feature",
  explanation:
    "Deletes a branch forcefully, even if not merged.",
  useCase: "Remove broken or unnecessary branch",
  danger: "high",
},
{
  name: "git stash",
  category: "Advanced",
  description: "Save changes temporarily",
  syntax: "git stash",
  example: "git stash",
  explanation:
    "Saves uncommitted changes so you can switch branches safely.",
  useCase: "Switch branch without committing incomplete work",
  danger: "low",
},

{
  name: "git stash pop",
  category: "Advanced",
  description: "Restore stashed changes",
  syntax: "git stash pop",
  example: "git stash pop",
  explanation:
    "Applies stashed changes and removes them from stash.",
  useCase: "Continue work after switching branch",
  danger: "low",
},
{
  name: "git push --force",
  category: "Remote",
  description: "Force push changes",
  syntax: "git push --force",
  example: "git push --force origin main",
  explanation:
    "Overwrites remote history. Dangerous in team environments.",
  useCase: "Fix commit history after rebase",
  danger: "high",
},

{
  name: "git fetch",
  category: "Remote",
  description: "Download changes without merging",
  syntax: "git fetch",
  example: "git fetch origin",
  explanation:
    "Fetches updates from remote without modifying local branch.",
  useCase: "Check updates before merging",
  danger: "low",
},
{
  name: "git diff",
  category: "Committing",
  description: "See changes between commits",
  syntax: "git diff",
  example: "git diff HEAD~1",
  explanation:
    "Shows line-by-line differences between commits or working directory.",
  useCase: "Review changes before committing",
  danger: "low",
},

{
  name: "git show",
  category: "Committing",
  description: "Show details of a commit",
  syntax: "git show <commit-id>",
  example: "git show c3",
  explanation:
    "Displays commit details including changes and message.",
  useCase: "Inspect what changed in a specific commit",
  danger: "low",
},
];