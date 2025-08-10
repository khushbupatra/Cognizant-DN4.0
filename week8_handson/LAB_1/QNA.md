Lab 1: Create a Local Git Repository and Make Your First Commit
This lab demonstrates the essential steps to configure Git, initialize a local repository, stage changes, and make your first commit using Git Bash and Vim.

### Steps Completed
### 1. Configure Git User Information
-Started by setting  Git identity globally using the following commands:
-git config --global user.name "Your Name"
-git config --global user.email "your.email@example.com"

### 2. Check the Configured User Details
-To verify  Git user configuration, you used:
-git config --global user.name
-git config --global user.email

### 3. Unset Global Git Configuration (Optional)
-To remove previously set user details, used:
-git config --global --unset user.name
-git config --global --unset user.email
-Then reconfigured with the correct values:
-git config --global user.name "iaintnik"
-git config --global user.email "nitishbehera321@gmail.com"

### 4. Create a New Directory and Navigate into It
-You created and moved into a new project folder:
-mkdir GitDemo
-cd GitDemo

### 5. Initialize a Git Repository
-Initialized an empty Git repository using:
-git init
-This created a .git/ folder inside GitDemo, marking it as a Git-tracked repository.

### 6. Create a New File
-Created a file named welcome.txt with the following content:
-echo "Welcome to Git!" > welcome.txt

### 7. Check Git Status
-To see untracked files, used:
-git status
-Saw that welcome.txt was untracked.

### 8. Stage the File
-To add the file to the staging area, used:
-git add welcome.txt

### 9. Commit the File
-Committed the staged file using:
-git commit
-This opened the Vim editor to enter your commit message. typed:
-Add welcome.txt file
-Then saved and exited Vim by pressing Esc, typing :wq, and pressing Enter.

### 10. Dealing With Vim Swap File (Optional)
-Encountered the following Vim warning:
-E325: ATTENTION
-Found a swap file by the name "~/.COMMIT_EDITMSG.swp"
-Resolved it by either running :recover and then :wq or deleting the swap file manually:
-rm .git/.COMMIT_EDITMSG.swp

### 11. View Commit Log
-To confirm commit,  used:
-git log --oneline
-And saw the output:
-6afa0ea (HEAD -> master) Add welcome.txt file
