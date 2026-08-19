/* ============================================================
   SkillRun - "From Code to Internet" series (V2)
   Practical Web missions: Git, GitHub, Vercel, domains.
   JS-eval missions that simulate real tooling.
   ============================================================ */

registerMissions([
  {
    id: "git-init",
    num: 11,
    title: "Git Init",
    tagline: "Start your first repository and make your first commit.",
    skill: "Backend",
    xp: 160,
    type: "js",
    icon: '<circle cx="12" cy="12" r="10"/><path d="M8 9l-3 3 3 3M16 9l3 3-3 3"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 1 },
    briefing: {
      objective: "Create a repository, add files, and commit your first change.",
      body: "Git is how developers track their code over time. A repository (repo) holds your files and the full history of every change. A commit saves a snapshot you can always return to. This mission builds a tiny model of exactly that: a repo with files and a commit log.",
      terminal: [
        "mkdir my-site && cd my-site",
        "git init",
        "echo \"# Hello\" > readme.md",
        "git add .",
        "git commit -m \"first commit\"",
        "",
        "# your repo lives at github.com/YOU/my-site"
      ]
    },
    challenges: [
      {
        id: "ch1",
        title: "Create a repository",
        instructions: "Write initRepo() that returns an object with files: {} and commits: [].",
        learning: "A repo starts empty. files stores your file names and contents. commits stores the history.",
        example: "function initRepo() {\n  return { files: {}, commits: [] };\n}",
        starter: "function initRepo() {\n  // return { files: {}, commits: [] }\n  return null;\n}",
        test: "function testInit() {\n  var r = initRepo();\n  if (!r || typeof r !== 'object') return { passed: false, message: 'initRepo should return an object.' };\n  if (!r.files || typeof r.files !== 'object') return { passed: false, message: 'The repo needs a files object.' };\n  if (!Array.isArray(r.commits)) return { passed: false, message: 'The repo needs a commits array.' };\n  return { passed: true, message: 'Repository created!' };\n}",
        hints: [
          "Return an object literal: { files: {}, commits: [] }",
          "files is a plain object, commits is an array.",
          "That is the whole solution."
        ],
        solution: "function initRepo() {\n  return { files: {}, commits: [] };\n}"
      },
      {
        id: "ch2",
        title: "Add a file",
        instructions: "Write addFile(repo, name, content) that stores the file in repo.files and returns repo.",
        learning: "Adding a file means storing its content under its name in the repo.files object.",
        example: "function addFile(repo, name, content) {\n  repo.files[name] = content;\n  return repo;\n}",
        starter: "function addFile(repo, name, content) {\n  // store the file and return repo\n  return repo;\n}",
        test: "function testAdd() {\n  var r = initRepo();\n  addFile(r, 'index.html', '<h1>Hi</h1>');\n  if (r.files['index.html'] !== '<h1>Hi</h1>') return { passed: false, message: 'The file should be stored under its name.' };\n  return { passed: true, message: 'File added to the repo!' };\n}",
        hints: [
          "Use bracket or dot notation: repo.files[name] = content",
          "Return repo at the end.",
          "Two lines total."
        ],
        solution: "function addFile(repo, name, content) {\n  repo.files[name] = content;\n  return repo;\n}"
      },
      {
        id: "ch3",
        title: "Make a commit",
        instructions: "Write commit(repo, msg) that pushes { msg: msg, snapshot: { ...repo.files } } into repo.commits and returns repo.",
        learning: "A commit records a message and a snapshot of the files at that moment. Spread ({ ...repo.files }) copies the object so the snapshot won't change later.",
        example: "function commit(repo, msg) {\n  repo.commits.push({ msg: msg, snapshot: { ...repo.files } });\n  return repo;\n}",
        starter: "function commit(repo, msg) {\n  // record a commit with a snapshot\n  return repo;\n}",
        test: "function testCommit() {\n  var r = initRepo();\n  addFile(r, 'a.txt', 'v1');\n  commit(r, 'first');\n  if (r.commits.length !== 1) return { passed: false, message: 'commit should add one entry to commits.' };\n  if (r.commits[0].msg !== 'first') return { passed: false, message: 'The commit should store the message.' };\n  if (!r.commits[0].snapshot || r.commits[0].snapshot['a.txt'] !== 'v1') return { passed: false, message: 'The commit needs a snapshot of the files.' };\n  r.files['a.txt'] = 'v2';\n  if (r.commits[0].snapshot['a.txt'] !== 'v1') return { passed: false, message: 'The snapshot should be a copy, not a reference.' };\n  return { passed: true, message: 'Your first commit is in the log!' };\n}",
        hints: [
          "push an object with msg and snapshot into repo.commits.",
          "Copy files with the spread operator: { ...repo.files }.",
          "Return repo."
        ],
        solution: "function commit(repo, msg) {\n  repo.commits.push({ msg: msg, snapshot: { ...repo.files } });\n  return repo;\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write initAndCommit() that creates a repo, adds a file named 'readme.md' with the text '# SkillRun', commits it with message 'init', and returns the repo.",
      starter: "function initAndCommit() {\n  // repo + file + commit\n  return null;\n}",
      test: "function testBuild() {\n  var r = initAndCommit();\n  if (!r || !r.files || r.files['readme.md'] !== '# SkillRun') return { passed: false, message: 'Should have readme.md with \"# SkillRun\".' };\n  if (!Array.isArray(r.commits) || r.commits.length !== 1) return { passed: false, message: 'Should have exactly one commit.' };\n  if (r.commits[0].msg !== 'init') return { passed: false, message: 'Commit message should be \"init\".' };\n  return { passed: true, message: 'Version control unlocked!' };\n}",
      hints: [
        "Call initRepo, addFile, commit in order.",
        "readme.md content is exactly '# SkillRun'.",
        "Return the repo from all three steps."
      ],
      solution: "function initAndCommit() {\n  var r = initRepo();\n  addFile(r, 'readme.md', '# SkillRun');\n  commit(r, 'init');\n  return r;\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "git-branch",
    num: 12,
    title: "Git Branch",
    tagline: "Work on features without breaking the main line.",
    skill: "Backend",
    xp: 170,
    type: "js",
    icon: '<path d="M6 3v12M6 15a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM18 3v8M18 11a4 4 0 0 1 0 8"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 2 },
    briefing: {
      objective: "Create branches, switch between them, and merge changes.",
      body: "Branches let you try new ideas without breaking the working version. The main branch is the safe line; feature branches are experiments. This mission models branches as saved copies of your files.",
      terminal: [
        "git branch feature   # create a branch",
        "git checkout feature # switch to it",
        "# edit files...",
        "git checkout main",
        "git merge feature",
        "",
        "# try `git branch -a` to list every branch"
      ]
    },
    challenges: [
      {
        id: "ch1",
        title: "Create a branch",
        instructions: "Write createBranch(repo, name) that adds repo.branches[name] = { ...repo.files } and sets repo.current = name. Returns repo.",
        learning: "A branch stores a snapshot of files under its name. repo.current remembers which branch is active.",
        example: "function createBranch(repo, name) {\n  repo.branches = repo.branches || {};\n  repo.branches[name] = { ...repo.files };\n  repo.current = name;\n  return repo;\n}",
        starter: "function createBranch(repo, name) {\n  // store a snapshot of files under the branch name\n  return repo;\n}",
        test: "function testBranch() {\n  var r = initRepo();\n  addFile(r, 'app.js', 'v1');\n  createBranch(r, 'feature');\n  if (!r.branches || !r.branches['feature']) return { passed: false, message: 'Should store a snapshot under repo.branches[\"feature\"].' };\n  if (r.branches['feature']['app.js'] !== 'v1') return { passed: false, message: 'The branch snapshot should copy the current files.' };\n  if (r.current !== 'feature') return { passed: false, message: 'Should set repo.current to the branch name.' };\n  return { passed: true, message: 'Branch created and checked out!' };\n}",
        hints: [
          "Init branches with {} if missing.",
          "Snapshot files with the spread operator.",
          "Set repo.current = name."
        ],
        solution: "function createBranch(repo, name) {\n  repo.branches = repo.branches || {};\n  repo.branches[name] = { ...repo.files };\n  repo.current = name;\n  return repo;\n}"
      },
      {
        id: "ch2",
        title: "Switch branches",
        instructions: "Write switchBranch(repo, name) that sets repo.current = name and, if the branch exists, loads its files into repo.files. Returns repo.",
        learning: "Checking out a branch replaces the working files with the branch snapshot.",
        example: "function switchBranch(repo, name) {\n  repo.current = name;\n  if (repo.branches && repo.branches[name]) {\n    repo.files = { ...repo.branches[name] };\n  }\n  return repo;\n}",
        starter: "function switchBranch(repo, name) {\n  // switch current and load branch files\n  return repo;\n}",
        test: "function testSwitch() {\n  var r = initRepo();\n  addFile(r, 'a.txt', 'main-v');\n  createBranch(r, 'main');\n  createBranch(r, 'feature');\n  addFile(r, 'a.txt', 'feature-v');\n  switchBranch(r, 'main');\n  if (r.current !== 'main') return { passed: false, message: 'Should set current to \"main\".' };\n  if (r.files['a.txt'] !== 'main-v') return { passed: false, message: 'Switching should restore the branch snapshot (main-v).' };\n  return { passed: true, message: 'Checked out the main branch!' };\n}",
      hints: [
        "Set repo.current first.",
        "If repo.branches[name] exists, copy it into repo.files.",
        "Use spread: repo.files = { ...repo.branches[name] }."
      ],
      solution: "function switchBranch(repo, name) {\n  repo.current = name;\n  if (repo.branches && repo.branches[name]) {\n    repo.files = { ...repo.branches[name] };\n  }\n  return repo;\n}"
      },
      {
        id: "ch3",
        title: "Merge a branch",
        instructions: "Write mergeBranch(repo, from) that copies repo.branches[from] over repo.files and returns repo.",
        learning: "Merging brings a feature branch's changes into the current files.",
        example: "function mergeBranch(repo, from) {\n  if (repo.branches && repo.branches[from]) {\n    repo.files = { ...repo.branches[from] };\n  }\n  return repo;\n}",
        starter: "function mergeBranch(repo, from) {\n  // bring the branch files into the current files\n  return repo;\n}",
        test: "function testMerge() {\n  var r = initRepo();\n  addFile(r, 'a.txt', 'base');\n  createBranch(r, 'main');\n  addFile(r, 'feature.txt', 'new');\n  createBranch(r, 'feature');\n  switchBranch(r, 'main');\n  mergeBranch(r, 'feature');\n  if (r.files['feature.txt'] !== 'new') return { passed: false, message: 'Merging should bring the feature files over.' };\n  return { passed: true, message: 'Feature merged into main!' };\n}",
      hints: [
        "Copy repo.branches[from] into repo.files.",
        "Guard against missing branch.",
        "Spread operator again."
      ],
      solution: "function mergeBranch(repo, from) {\n  if (repo.branches && repo.branches[from]) {\n    repo.files = { ...repo.branches[from] };\n  }\n  return repo;\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write featureFlow() that: creates a repo, adds 'index.html' = '<h1>v1</h1>', creates branch 'main', edits the file to '<h1 class=\"dark\">v1</h1>', creates branch 'dark-mode', switches back to main, merges 'dark-mode', and returns the repo where current === 'main' and files have the dark version.",
      starter: "function featureFlow() {\n  // branch, edit, merge\n  return null;\n}",
      test: "function testFlow() {\n  var r = featureFlow();\n  if (!r || !r.files) return { passed: false, message: 'Should return a repo.' };\n  if (r.files['index.html'] !== '<h1 class=\"dark\">v1</h1>') return { passed: false, message: 'The merged file should be the dark version.' };\n  if (r.current !== 'main') return { passed: false, message: 'Current branch should be main after the merge.' };\n  return { passed: true, message: 'Feature branches mastered!' };\n}",
      hints: [
        "initRepo, addFile v1, then createBranch('main').",
        "Edit the file, then createBranch('dark-mode') to snapshot your work.",
        "switchBranch('main') then mergeBranch('dark-mode')."
      ],
      solution: "function featureFlow() {\n  var r = initRepo();\n  addFile(r, 'index.html', '<h1>v1</h1>');\n  createBranch(r, 'main');\n  addFile(r, 'index.html', '<h1 class=\"dark\">v1</h1>');\n  createBranch(r, 'dark-mode');\n  switchBranch(r, 'main');\n  mergeBranch(r, 'dark-mode');\n  return r;\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "git-history",
    num: 13,
    title: "Git History",
    tagline: "Read the log, see what changed, and roll back.",
    skill: "Backend",
    xp: 170,
    type: "js",
    icon: '<path d="M12 8v4l3 3M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 3 },
    briefing: {
      objective: "Explore a repo's history and undo mistakes.",
      body: "The commit log is the repo's memory. You can read it, check what's changed since the last commit, and travel back in time to fix mistakes.",
      terminal: [
        "git log --oneline   # read the history",
        "git status          # what changed since last commit",
        "git diff            # see the exact edits",
        "git reset --hard HEAD~1  # undo the last commit",
        "",
        "# undo just one file: git checkout -- file.txt"
      ]
    },
    challenges: [
      {
        id: "ch1",
        title: "Read the log",
        instructions: "Write log(repo) that returns an array of all commit messages.",
        learning: "The log is the list of commit messages, oldest first.",
        example: "function log(repo) {\n  return repo.commits.map(function (c) { return c.msg; });\n}",
        starter: "function log(repo) {\n  // return the commit messages\n  return [];\n}",
        test: "function testLog() {\n  var r = initRepo();\n  addFile(r, 'a', '1'); commit(r, 'first');\n  addFile(r, 'b', '2'); commit(r, 'second');\n  var l = log(r);\n  if (!Array.isArray(l) || l.length !== 2) return { passed: false, message: 'Should return two messages.' };\n  if (l[0] !== 'first' || l[1] !== 'second') return { passed: false, message: 'Messages should be in order.' };\n  return { passed: true, message: 'History reads clearly!' };\n}",
        hints: [
          "Map over repo.commits.",
          "Return c.msg for each.",
          "One line with .map."
        ],
        solution: "function log(repo) {\n  return repo.commits.map(function (c) { return c.msg; });\n}"
      },
      {
        id: "ch2",
        title: "Check status",
        instructions: "Write status(repo) that returns how many files differ from the last commit snapshot (compare each file's content, count differences; if no commits, count all files).",
        learning: "git status shows uncommitted work. Compare current files with the last snapshot.",
        example: "function status(repo) {\n  var last = repo.commits.length ? repo.commits[repo.commits.length - 1].snapshot : {};\n  var count = 0;\n  var names = new Set(Object.keys(repo.files).concat(Object.keys(last)));\n  names.forEach(function (n) { if (repo.files[n] !== last[n]) count++; });\n  return count;\n}",
        starter: "function status(repo) {\n  // count changed files vs last commit\n  return 0;\n}",
        test: "function testStatus() {\n  var r = initRepo();\n  addFile(r, 'a.txt', 'v1');\n  commit(r, 'c1');\n  if (status(r) !== 0) return { passed: false, message: 'No changes since commit gives 0.' };\n  addFile(r, 'a.txt', 'v2');\n  if (status(r) !== 1) return { passed: false, message: 'One edited file gives 1.' };\n  addFile(r, 'b.txt', 'new');\n  if (status(r) !== 2) return { passed: false, message: 'A new file counts too (2).' };\n  return { passed: true, message: 'Status reports cleanly!' };\n}",
      hints: [
        "Last snapshot: repo.commits[len-1].snapshot (or {} if none).",
        "Union of file names from both objects.",
        "Count where repo.files[n] !== last[n]."
      ],
      solution: "function status(repo) {\n  var last = repo.commits.length ? repo.commits[repo.commits.length - 1].snapshot : {};\n  var count = 0;\n  var names = {};\n  for (var n in repo.files) { names[n] = true; }\n  for (var m in last) { names[m] = true; }\n  for (var k in names) { if (repo.files[k] !== last[k]) count++; }\n  return count;\n}"
      },
      {
        id: "ch3",
        title: "Roll back",
        instructions: "Write revert(repo, index) that restores repo.files from repo.commits[index].snapshot and returns repo.",
        learning: "Reverting restores the files to how they were at an older commit.",
        example: "function revert(repo, index) {\n  repo.files = { ...repo.commits[index].snapshot };\n  return repo;\n}",
        starter: "function revert(repo, index) {\n  // restore files from that commit snapshot\n  return repo;\n}",
        test: "function testRevert() {\n  var r = initRepo();\n  addFile(r, 'a.txt', 'v1'); commit(r, 'c1');\n  addFile(r, 'a.txt', 'v2'); commit(r, 'c2');\n  revert(r, 0);\n  if (r.files['a.txt'] !== 'v1') return { passed: false, message: 'revert to index 0 should restore v1.' };\n  return { passed: true, message: 'Time travel works!' };\n}",
      hints: [
        "Copy repo.commits[index].snapshot into repo.files.",
        "Spread operator.",
        "Return repo."
      ],
      solution: "function revert(repo, index) {\n  repo.files = { ...repo.commits[index].snapshot };\n  return repo;\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write lastCommit(repo) that returns the message of the most recent commit, or 'no commits' when empty.",
      starter: "function lastCommit(repo) {\n  // return latest commit message or 'no commits'\n  return '';\n}",
      test: "function testLast() {\n  var r = initRepo();\n  if (lastCommit(r) !== 'no commits') return { passed: false, message: 'Empty repo says \"no commits\".' };\n  addFile(r, 'a', '1'); commit(r, 'init');\n  if (lastCommit(r) !== 'init') return { passed: false, message: 'Should return the latest message.' };\n  return { passed: true, message: 'History reads like a pro!' };\n}",
      hints: [
        "Empty when commits.length === 0.",
        "Otherwise return the last commit's msg.",
        "Three lines max."
      ],
      solution: "function lastCommit(repo) {\n  if (repo.commits.length === 0) return 'no commits';\n  return repo.commits[repo.commits.length - 1].msg;\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "github-push",
    num: 14,
    title: "GitHub Push",
    tagline: "Push your repo to a remote so it lives online.",
    skill: "Backend",
    xp: 180,
    type: "js",
    icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c2.8-.3 5.7-1.4 5.7-6.2a4.8 4.8 0 0 0-1.3-3.4 4.5 4.5 0 0 0-.1-3.4s-1-.3-3.5 1.3a12 12 0 0 0-6.4 0C6.5 2 5.5 2.3 5.5 2.3a4.5 4.5 0 0 0-.1 3.4 4.8 4.8 0 0 0-1.3 3.4c0 4.8 2.9 5.9 5.7 6.2a3.4 3.4 0 0 0-.9 2.6V22"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 4 },
    briefing: {
      objective: "Push commits to a remote repository on GitHub.",
      body: "A remote is a copy of your repo living somewhere else - like GitHub. Pushing sends your commits up so the code is online, backed up, and shareable.",
      terminal: [
        "git remote add origin git@github.com:YOU/my-site.git",
        "git push -u origin main",
        "git clone git@github.com:YOU/my-site.git  # copy it anywhere",
        "",
        "# your public page: https://github.com/YOU/my-site"
      ]
    },
    challenges: [
      {
        id: "ch1",
        title: "Create a remote",
        instructions: "Write createRemote() that returns { repos: {} }.",
        learning: "Our GitHub model is an object holding many repos by name.",
        example: "function createRemote() {\n  return { repos: {} };\n}",
        starter: "function createRemote() {\n  // return { repos: {} }\n  return null;\n}",
        test: "function testRemote() {\n  var rem = createRemote();\n  if (!rem || !rem.repos || typeof rem.repos !== 'object') return { passed: false, message: 'Should return { repos: {} }.' };\n  return { passed: true, message: 'Remote ready!' };\n}",
        hints: [
          "Return { repos: {} }",
          "That is all."
        ],
        solution: "function createRemote() {\n  return { repos: {} };\n}"
      },
      {
        id: "ch2",
        title: "Push your work",
        instructions: "Write push(remote, repo) that copies repo.commits and repo.files into remote.repos[repo.name] (give the repo a name property first). Returns remote.",
        learning: "Pushing uploads your commits and files to the remote under the repo's name.",
        example: "function push(remote, repo) {\n  remote.repos[repo.name] = {\n    commits: repo.commits.slice(),\n    files: { ...repo.files }\n  };\n  return remote;\n}",
        starter: "function push(remote, repo) {\n  // store the repo on the remote by its name\n  return remote;\n}",
        test: "function testPush() {\n  var r = initRepo(); r.name = 'skillrun';\n  addFile(r, 'index.html', '<h1>Go</h1>');\n  commit(r, 'push me');\n  var rem = createRemote();\n  push(rem, r);\n  if (!rem.repos['skillrun']) return { passed: false, message: 'The remote should store a repo named \"skillrun\".' };\n  if (rem.repos['skillrun'].commits.length !== 1) return { passed: false, message: 'The pushed repo should keep its commits.' };\n  if (rem.repos['skillrun'].files['index.html'] !== '<h1>Go</h1>') return { passed: false, message: 'The pushed repo should keep its files.' };\n  r.files['index.html'] = 'changed';\n  if (rem.repos['skillrun'].files['index.html'] !== '<h1>Go</h1>') return { passed: false, message: 'Push should copy files, not reference them.' };\n  return { passed: true, message: 'Pushed to the remote!' };\n}",
      hints: [
        "Copy commits with .slice() and files with spread.",
        "Store under remote.repos[repo.name].",
        "Return remote."
      ],
      solution: "function push(remote, repo) {\n  remote.repos[repo.name] = {\n    commits: repo.commits.slice(),\n    files: { ...repo.files }\n  };\n  return remote;\n}"
      },
      {
        id: "ch3",
        title: "Pull it down",
        instructions: "Write pull(remote, name) that returns the stored repo object from the remote.",
        learning: "Pulling downloads a repo from the remote.",
        example: "function pull(remote, name) {\n  return remote.repos[name];\n}",
        starter: "function pull(remote, name) {\n  // return the stored repo\n  return null;\n}",
        test: "function testPull() {\n  var r = initRepo(); r.name = 'x';\n  var rem = createRemote();\n  push(rem, r);\n  var got = pull(rem, 'x');\n  if (!got || got.commits.length !== 0) return { passed: false, message: 'Should return the repo stored on the remote.' };\n  return { passed: true, message: 'Pulled it back down!' };\n}",
      hints: [
        "Return remote.repos[name].",
        "One line."
      ],
      solution: "function pull(remote, name) {\n  return remote.repos[name];\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write sync() that creates a repo named 'my-app', adds 'app.js' = 'console.log(1)', commits 'first', pushes to a new remote, and returns the remote.",
      starter: "function sync() {\n  // repo + push + return remote\n  return null;\n}",
      test: "function testSync() {\n  var rem = sync();\n  if (!rem || !rem.repos['my-app']) return { passed: false, message: 'Remote should contain \"my-app\".' };\n  if (rem.repos['my-app'].commits.length !== 1) return { passed: false, message: 'Should be one commit.' };\n  if (rem.repos['my-app'].files['app.js'] !== 'console.log(1)') return { passed: false, message: 'app.js content should be \"console.log(1)\".' };\n  return { passed: true, message: 'Code is online!' };\n}",
      hints: [
        "initRepo, set name, addFile, commit, createRemote, push.",
        "Return the remote.",
        "Reuse the helpers you already wrote."
      ],
      solution: "function sync() {\n  var r = initRepo(); r.name = 'my-app';\n  addFile(r, 'app.js', 'console.log(1)');\n  commit(r, 'first');\n  var rem = createRemote();\n  push(rem, r);\n  return rem;\n}",
      unlock: "Version Control"
    },
    unlock: "Version Control"
  },

  {
    id: "github-issues",
    num: 15,
    title: "GitHub Issues",
    tagline: "Track bugs and tasks with issues.",
    skill: "Backend",
    xp: 150,
    type: "js",
    icon: '<path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/><path d="M12 11v4M12 7h.01"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 5 },
    briefing: {
      objective: "Model issues: create, close, and count open work.",
      body: "Issues are how teams track bugs and ideas. Each has a title and an open/closed state.",
      terminal: [
        "gh issue create --title \"button broken\"",
        "gh issue close 12",
        "gh issue list --state=open",
        "",
        "# issues live on the repo page: github.com/YOU/my-site/issues"
      ]
    },
    challenges: [
      {
        id: "ch1",
        title: "Open an issue",
        instructions: "Write newIssue(repo, title) that pushes { title: title, open: true } into repo.issues (init if missing) and returns repo.",
        learning: "An issue is an object with a title and an open flag.",
        example: "function newIssue(repo, title) {\n  repo.issues = repo.issues || [];\n  repo.issues.push({ title: title, open: true });\n  return repo;\n}",
        starter: "function newIssue(repo, title) {\n  // add an open issue\n  return repo;\n}",
        test: "function testIssue() {\n  var r = initRepo();\n  newIssue(r, 'button broken');\n  if (!r.issues || r.issues.length !== 1) return { passed: false, message: 'Should add an issue to repo.issues.' };\n  if (r.issues[0].title !== 'button broken' || r.issues[0].open !== true) return { passed: false, message: 'Issue should have the title and open: true.' };\n  return { passed: true, message: 'Issue filed!' };\n}",
        hints: [
          "Init repo.issues if missing.",
          "push { title, open: true }.",
          "Return repo."
        ],
        solution: "function newIssue(repo, title) {\n  repo.issues = repo.issues || [];\n  repo.issues.push({ title: title, open: true });\n  return repo;\n}"
      },
      {
        id: "ch2",
        title: "Close an issue",
        instructions: "Write closeIssue(repo, index) that sets repo.issues[index].open = false and returns repo.",
        learning: "Closing an issue flips its open flag to false.",
        example: "function closeIssue(repo, index) {\n  repo.issues[index].open = false;\n  return repo;\n}",
        starter: "function closeIssue(repo, index) {\n  // mark the issue closed\n  return repo;\n}",
        test: "function testClose() {\n  var r = initRepo();\n  newIssue(r, 'bug');\n  closeIssue(r, 0);\n  if (r.issues[0].open !== false) return { passed: false, message: 'closeIssue should set open to false.' };\n  return { passed: true, message: 'Issue closed!' };\n}",
        hints: [
          "Set repo.issues[index].open = false.",
          "Return repo."
        ],
        solution: "function closeIssue(repo, index) {\n  repo.issues[index].open = false;\n  return repo;\n}"
      },
      {
        id: "ch3",
        title: "Count open issues",
        instructions: "Write openIssues(repo) that returns how many issues have open === true.",
        learning: "Filter the issues for ones still open and count them.",
        example: "function openIssues(repo) {\n  return (repo.issues || []).filter(function (i) { return i.open; }).length;\n}",
        starter: "function openIssues(repo) {\n  // count open issues\n  return 0;\n}",
        test: "function testOpen() {\n  var r = initRepo();\n  if (openIssues(r) !== 0) return { passed: false, message: 'No issues gives 0.' };\n  newIssue(r, 'a'); newIssue(r, 'b');\n  closeIssue(r, 0);\n  if (openIssues(r) !== 1) return { passed: false, message: 'One closed, one open -> 1.' };\n  return { passed: true, message: 'Backlog under control!' };\n}",
      hints: [
        "Guard empty: (repo.issues || []).filter(...).length",
        "Count i.open === true.",
        "One line."
      ],
      solution: "function openIssues(repo) {\n  return (repo.issues || []).filter(function (i) { return i.open; }).length;\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write cleanSlate() that creates a repo, adds three issues ('a','b','c'), closes the second one, and returns openIssues(repo).",
      starter: "function cleanSlate() {\n  // three issues, close #2, return open count\n  return 0;\n}",
      test: "function testSlate() {\n  if (cleanSlate() !== 2) return { passed: false, message: 'Three issues minus one closed = 2 open.' };\n  return { passed: true, message: 'Issue tracking nailed!' };\n}",
      hints: [
        "initRepo, newIssue x3 (indices 0,1,2).",
        "closeIssue(r, 1) closes the second.",
        "Return openIssues(r)."
      ],
      solution: "function cleanSlate() {\n  var r = initRepo();\n  newIssue(r, 'a'); newIssue(r, 'b'); newIssue(r, 'c');\n  closeIssue(r, 1);\n  return openIssues(r);\n}",
      unlock: "Collaboration"
    },
    unlock: "Collaboration"
  },

  {
    id: "vercel-deploy",
    num: 16,
    title: "Vercel Deploy",
    tagline: "Ship your app to a live URL in seconds.",
    skill: "Backend",
    xp: 190,
    type: "js",
    icon: '<path d="M3 17l9-13 9 13H3z"/><path d="M12 9v4M12 17h.01"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 6 },
    briefing: {
      objective: "Deploy a project to Vercel and manage environment variables.",
      body: "Vercel turns a repo into a live website. You connect your repo, it builds, and you get a public URL. Secrets like API keys live in environment variables, not in your code.",
      terminal: [
        "npm i -g vercel",
        "vercel            # deploy the current folder",
        "vercel --prod     # ship to production",
        "vercel env add API_KEY   # add a secret",
        "",
        "# every deploy gets a URL like my-site.vercel.app"
      ]
    },
    challenges: [
      {
        id: "ch1",
        title: "Deploy a project",
        instructions: "Write deploy(config) that returns { url: 'https://' + config.name + '.vercel.app', status: 'ready', builds: 1 }.",
        learning: "Deploying gives your project a public URL and marks it ready.",
        example: "function deploy(config) {\n  return { url: 'https://' + config.name + '.vercel.app', status: 'ready', builds: 1 };\n}",
        starter: "function deploy(config) {\n  // return the live deployment\n  return null;\n}",
        test: "function testDeploy() {\n  var d = deploy({ name: 'my-app' });\n  if (!d || d.url !== 'https://my-app.vercel.app') return { passed: false, message: 'URL should be https://my-app.vercel.app' };\n  if (d.status !== 'ready') return { passed: false, message: 'Status should be \"ready\".' };\n  if (d.builds !== 1) return { passed: false, message: 'First deploy = 1 build.' };\n  return { passed: true, message: 'Live on the internet!' };\n}",
      hints: [
        "Build the URL with string concatenation.",
        "status: 'ready', builds: 1.",
        "Return the object."
      ],
      solution: "function deploy(config) {\n  return { url: 'https://' + config.name + '.vercel.app', status: 'ready', builds: 1 };\n}"
      },
      {
        id: "ch2",
        title: "Set an env var",
        instructions: "Write setEnv(config, key, value) that stores config.env = config.env || {} and config.env[key] = value. Returns config.",
        learning: "Environment variables hold secrets and config. Never put them in committed code.",
        example: "function setEnv(config, key, value) {\n  config.env = config.env || {};\n  config.env[key] = value;\n  return config;\n}",
        starter: "function setEnv(config, key, value) {\n  // store the env variable\n  return config;\n}",
        test: "function testEnv() {\n  var c = { name: 'x' };\n  setEnv(c, 'API_KEY', 'secret');\n  if (!c.env || c.env['API_KEY'] !== 'secret') return { passed: false, message: 'Should store env vars in config.env.' };\n  return { passed: true, message: 'Secret stored safely!' };\n}",
      hints: [
        "Init config.env = {} first.",
        "config.env[key] = value.",
        "Return config."
      ],
      solution: "function setEnv(config, key, value) {\n  config.env = config.env || {};\n  config.env[key] = value;\n  return config;\n}"
      },
      {
        id: "ch3",
        title: "Redeploy",
        instructions: "Write redeploy(previous) that returns a copy with builds incremented and status 'ready'.",
        learning: "Redeploys create a new build number.",
        example: "function redeploy(previous) {\n  return { url: previous.url, status: 'ready', builds: previous.builds + 1 };\n}",
        starter: "function redeploy(previous) {\n  // return the next deployment\n  return null;\n}",
        test: "function testRedeploy() {\n  var d = deploy({ name: 'a' });\n  var r = redeploy(d);\n  if (r.builds !== 2) return { passed: false, message: 'Redeploy should bump builds to 2.' };\n  if (r.status !== 'ready') return { passed: false, message: 'Status should be ready.' };\n  return { passed: true, message: 'New build shipped!' };\n}",
      hints: [
        "Copy url, set status ready, builds + 1.",
        "Return a new object."
      ],
      solution: "function redeploy(previous) {\n  return { url: previous.url, status: 'ready', builds: previous.builds + 1 };\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write launch() that deploys { name: 'skillrun' }, sets env 'SECRET' to 's3cr3t', redeploys once, and returns the final deployment with builds === 2.",
      starter: "function launch() {\n  // deploy + env + redeploy\n  return null;\n}",
      test: "function testLaunch() {\n  var d = launch();\n  if (!d || d.builds !== 2) return { passed: false, message: 'Should be the second build.' };\n  if (!d.url || d.url.indexOf('skillrun') === -1) return { passed: false, message: 'URL should mention skillrun.' };\n  if (d.env && d.env['SECRET'] !== 's3cr3t') return { passed: false, message: 'SECRET env var should be s3cr3t.' };\n  return { passed: true, message: 'Deployed, configured, shipped!' };\n}",
      hints: [
        "deploy, setEnv (on a config object), redeploy.",
        "The redeploy result is what you return.",
        "Keep env on the config, then carry it or ignore it in the final object."
      ],
      solution: "function launch() {\n  var c = deploy({ name: 'skillrun' });\n  setEnv(c, 'SECRET', 's3cr3t');\n  var d = redeploy(c);\n  d.env = c.env;\n  return d;\n}",
      unlock: "Deploy"
    },
    unlock: "Deploy"
  },

  {
    id: "domain-dns",
    num: 17,
    title: "Domain & DNS",
    tagline: "Connect a custom domain to your site.",
    skill: "Backend",
    xp: 170,
    type: "js",
    icon: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 7 },
    briefing: {
      objective: "Manage DNS records and point a domain at a project.",
      body: "A domain name is your address on the internet. DNS records tell browsers where that address leads - the web app, email, or a redirect."
    },
    challenges: [
      {
        id: "ch1",
        title: "Add a DNS record",
        instructions: "Write addRecord(domain, type, value) that stores domain.records = domain.records || [] and pushes { type: type, value: value }. Returns domain.",
        learning: "A record maps a type (like 'CNAME') to a value (the target).",
        example: "function addRecord(domain, type, value) {\n  domain.records = domain.records || [];\n  domain.records.push({ type: type, value: value });\n  return domain;\n}",
        starter: "function addRecord(domain, type, value) {\n  // push a { type, value } record\n  return domain;\n}",
        test: "function testRecord() {\n  var d = { name: 'skillrun.com' };\n  addRecord(d, 'CNAME', 'skillrun.vercel.app');\n  if (!d.records || d.records.length !== 1) return { passed: false, message: 'Should add a record to domain.records.' };\n  if (d.records[0].type !== 'CNAME' || d.records[0].value !== 'skillrun.vercel.app') return { passed: false, message: 'Record should store type and value.' };\n  return { passed: true, message: 'DNS record added!' };\n}",
        hints: [
          "Init domain.records array.",
          "push { type, value }.",
          "Return domain."
        ],
        solution: "function addRecord(domain, type, value) {\n  domain.records = domain.records || [];\n  domain.records.push({ type: type, value: value });\n  return domain;\n}"
      },
      {
        id: "ch2",
        title: "Look up records",
        instructions: "Write resolve(domain, type) that returns an array of values for records of that type.",
        learning: "Resolving filters records by type and returns their values.",
        example: "function resolve(domain, type) {\n  return (domain.records || []).filter(function (r) { return r.type === type; }).map(function (r) { return r.value; });\n}",
        starter: "function resolve(domain, type) {\n  // return the values for that type\n  return [];\n}",
        test: "function testResolve() {\n  var d = { name: 'x' };\n  addRecord(d, 'CNAME', 'a');\n  addRecord(d, 'CNAME', 'b');\n  addRecord(d, 'TXT', 'token');\n  var c = resolve(d, 'CNAME');\n  if (!Array.isArray(c) || c.length !== 2 || c[0] !== 'a') return { passed: false, message: 'Should return all CNAME values.' };\n  if (resolve(d, 'TXT')[0] !== 'token') return { passed: false, message: 'Should return TXT values too.' };\n  return { passed: true, message: 'DNS resolves correctly!' };\n}",
      hints: [
        "filter for r.type === type.",
        "map to r.value.",
        "Guard empty with (domain.records || [])."
      ],
      solution: "function resolve(domain, type) {\n  return (domain.records || []).filter(function (r) { return r.type === type; }).map(function (r) { return r.value; });\n}"
      },
      {
        id: "ch3",
        title: "Connect the domain",
        instructions: "Write connectDomain(domain, project) that sets project.domain = domain.name and adds a CNAME record for domain. Returns project.",
        learning: "Connecting points the domain at your project so visitors reach the app.",
        example: "function connectDomain(domain, project) {\n  project.domain = domain.name;\n  addRecord(domain, 'CNAME', project.url);\n  return project;\n}",
        starter: "function connectDomain(domain, project) {\n  // attach the domain to the project\n  return project;\n}",
        test: "function testConnect() {\n  var d = { name: 'skillrun.com', records: [] };\n  var p = { url: 'skillrun.vercel.app' };\n  connectDomain(d, p);\n  if (p.domain !== 'skillrun.com') return { passed: false, message: 'The project should point at the domain.' };\n  if (resolve(d, 'CNAME').indexOf(p.url) === -1) return { passed: false, message: 'Should add a CNAME record for the project url.' };\n  return { passed: true, message: 'Domain connected!' };\n}",
      hints: [
        "Set project.domain = domain.name.",
        "addRecord(domain, 'CNAME', project.url).",
        "Return project."
      ],
      solution: "function connectDomain(domain, project) {\n  project.domain = domain.name;\n  addRecord(domain, 'CNAME', project.url);\n  return project;\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write setupSite() that creates a domain 'my.dev', adds a CNAME 'app.vercel.app', creates a project { url: 'app.vercel.app' }, connects the domain, and returns the project.",
      starter: "function setupSite() {\n  // domain + record + connect\n  return null;\n}",
      test: "function testSite() {\n  var p = setupSite();\n  if (!p || p.domain !== 'my.dev') return { passed: false, message: 'Project should have domain \"my.dev\".' };\n  return { passed: true, message: 'Custom domain live!' };\n}",
      hints: [
        "domain = { name: 'my.dev', records: [] }.",
        "addRecord, then connectDomain.",
        "Return the project."
      ],
      solution: "function setupSite() {\n  var d = { name: 'my.dev', records: [] };\n  addRecord(d, 'CNAME', 'app.vercel.app');\n  var p = { url: 'app.vercel.app' };\n  connectDomain(d, p);\n  return p;\n}",
      unlock: "Deploy"
    },
    unlock: "Deploy"
  },

  {
    id: "https-ssl",
    num: 18,
    title: "HTTPS & SSL",
    tagline: "Encrypt the connection between the browser and your site.",
    skill: "Backend",
    xp: 160,
    type: "js",
    icon: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
    meta: { kind: "normal", series: "code-to-internet", order: 8 },
    briefing: {
      objective: "Understand HTTPS, certificates, and mixed content.",
      body: "HTTPS encrypts traffic so nobody can read it in between. A certificate proves your site is who it claims to be. Mixed content - loading insecure resources on a secure page - breaks that protection."
    },
    challenges: [
      {
        id: "ch1",
        title: "Check for HTTPS",
        instructions: "Write isSecure(url) that returns true when the URL starts with 'https://'.",
        learning: "Secure URLs begin with https:// .",
        example: "function isSecure(url) {\n  return url.indexOf('https://') === 0;\n}",
        starter: "function isSecure(url) {\n  // true for https://\n  return false;\n}",
        test: "function testSecure() {\n  if (!isSecure('https://skillrun.com')) return { passed: false, message: 'https:// is secure.' };\n  if (isSecure('http://skillrun.com')) return { passed: false, message: 'http:// is not secure.' };\n  return { passed: true, message: 'HTTPS detected!' };\n}",
        hints: [
          "Check the prefix with indexOf.",
          "https:// exactly."
        ],
        solution: "function isSecure(url) {\n  return url.indexOf('https://') === 0;\n}"
      },
      {
        id: "ch2",
        title: "Issue a certificate",
        instructions: "Write issueCert(domain) that returns { domain: domain, valid: true, daysLeft: 90 }.",
        learning: "A certificate covers a domain and expires after about 90 days (Let's Encrypt auto-renews).",
        example: "function issueCert(domain) {\n  return { domain: domain, valid: true, daysLeft: 90 };\n}",
        starter: "function issueCert(domain) {\n  // return the certificate\n  return null;\n}",
        test: "function testCert() {\n  var c = issueCert('skillrun.com');\n  if (!c || c.domain !== 'skillrun.com' || c.valid !== true || c.daysLeft !== 90) return { passed: false, message: 'Certificate fields are wrong.' };\n  return { passed: true, message: 'Certificate issued!' };\n}",
        hints: [
          "Return the three fields exactly.",
          "domain, valid, daysLeft."
        ],
        solution: "function issueCert(domain) {\n  return { domain: domain, valid: true, daysLeft: 90 };\n}"
      },
      {
        id: "ch3",
        title: "Find mixed content",
        instructions: "Write mixedContent(resources) that returns an array of the resource URLs that are NOT secure (don't start with https://).",
        learning: "Mixed content is any insecure resource loaded by a secure page.",
        example: "function mixedContent(resources) {\n  return resources.filter(function (r) { return r.indexOf('https://') !== 0; });\n}",
        starter: "function mixedContent(resources) {\n  // return the insecure URLs\n  return [];\n}",
        test: "function testMixed() {\n  var out = mixedContent(['https://a.com/x', 'http://b.com/y', '//c.com/z']);\n  if (out.length !== 2) return { passed: false, message: 'Only the http:// and // URLs are mixed content.' };\n  if (mixedContent(['https://ok.com']).length !== 0) return { passed: false, message: 'All-secure returns empty.' };\n  return { passed: true, message: 'Mixed content caught!' };\n}",
      hints: [
        "filter where indexOf('https://') !== 0.",
        "//c.com/z has no https prefix, so it counts."
      ],
      solution: "function mixedContent(resources) {\n  return resources.filter(function (r) { return r.indexOf('https://') !== 0; });\n}"
      },
    ],
    build: {
      title: "Build It Yourself",
      prompt: "Write audit() that issues a cert for 'skillrun.com', then returns { secure: isSecure('https://skillrun.com'), mixed: mixedContent(['https://skillrun.com/app.js','http://skillrun.com/api']).length }.",
      starter: "function audit() {\n  // cert + checks\n  return null;\n}",
      test: "function testAudit() {\n  var a = audit();\n  if (!a || a.secure !== true) return { passed: false, message: 'The site should be secure.' };\n  if (a.mixed !== 1) return { passed: false, message: 'One http:// resource is mixed content (1).' };\n  return { passed: true, message: 'Connection locked down!' };\n}",
      hints: [
        "Reuse issueCert, isSecure, mixedContent.",
        "mixed.length === 1.",
        "Return the object."
      ],
      solution: "function audit() {\n  issueCert('skillrun.com');\n  return {\n    secure: isSecure('https://skillrun.com'),\n    mixed: mixedContent(['https://skillrun.com/app.js', 'http://skillrun.com/api']).length\n  };\n}",
      unlock: "Deploy"
    },
    unlock: "Deploy"
      },
]);