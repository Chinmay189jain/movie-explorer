# Movie Explorer 🎬

This is a React.js mini project that fetches and displays movie data using public APIs.

## Features

- Search movies
- View movie details
- Responsive UI

## Tech Stack

- React
- CSS Modules
- React Router
- Context API

## Git Workflow Scripts

We provide a PowerShell script (`git-workflow.ps1`) and a batch file (`git-workflow.bat`) to automate the following Git workflow:

1. Apply existing stash (if any)
2. Create and checkout a new branch
3. Stage all changes
4. Commit with a provided message
5. Push the new branch to remote
6. Open a PR creation page (GitHub/GitLab) in your browser

### Usage

#### PowerShell
```powershell
.\git-workflow.ps1 -BranchName "your-branch-name" -CommitMessage "Your commit message"
```

Note: If you get an execution policy error, you may need to set the execution policy to allow the script to run:
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### Batch (Windows CMD)
```batch
git-workflow.bat "your-branch-name" "Your commit message"
```

### Notes
- The script assumes your remote is set to a GitHub or GitLab repository.
- For GitHub, the PR URL will be pre-filled to merge into the `main` branch. Adjust the script if your base branch is different.
