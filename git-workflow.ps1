param(
    [Parameter(Mandatory=$true)]
    [string]$BranchName,
    
    [Parameter(Mandatory=$true)]
    [string]$CommitMessage
)

# Apply stash if available
git stash apply

# Create and checkout new branch
git checkout -b $BranchName

# Stage all changes
git add .

# Commit with provided message
git commit -m $CommitMessage

# Push to remote
git push -u origin $BranchName

# Get repository remote URL
$remoteUrl = git config --get remote.origin.url

# Generate PR URL
if ($remoteUrl -match "github") {
    $repoPath = $remoteUrl -replace ".*github.com(:|\/)(.*)\.git", '$2'
    $prUrl = "https://github.com/$repoPath/compare/main...$BranchName?expand=1"
}
elseif ($remoteUrl -match "gitlab") {
    $repoPath = $remoteUrl -replace ".*gitlab.com(:|\/)(.*)\.git", '$2'
    $prUrl = "https://gitlab.com/$repoPath/-/merge_requests/new?merge_request[source_branch]=$BranchName"
}
else {
    Write-Host "Unsupported repository host: $remoteUrl"
    Write-Host "Please create PR manually"
    exit 1
}

# Open PR URL in browser
Start-Process $prUrl

Write-Host "Branch '$BranchName' pushed successfully"
Write-Host "PR creation page opened in your browser"
