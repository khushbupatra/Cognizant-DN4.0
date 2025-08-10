#  Understanding `.gitignore` in Git

##  What is `.gitignore`?
The `.gitignore` file tells Git which files (or file patterns) it should **ignore** and **not track** in version control.
This is useful when you have:
- Temporary files (e.g., `*.log`, `*.tmp`)
- Build artifacts (e.g., `dist/`, `build/`)
- OS-generated files (e.g., `.DS_Store`, `Thumbs.db`)
- Sensitive data (e.g., `*.env`, `secrets.json`)

Git will **skip staging or committing** any file or folder that matches a pattern listed in `.gitignore`.

## Benefits of .gitignore
- Keeps your repository clean.
- Prevents committing unnecessary files.
- Protects sensitive or environment-specific data.
  
## Steps Performed
1. Navigate to Project Directory
```cmd
cd C:\Users\KIIT\GitDemo

2. Create .gitignore File
echo *.log >> .gitignore
echo build/ >> .gitignore
echo node_modules/ >> .gitignore
echo .env >> .gitignore

This tells Git to ignore:
All .log files (e.g., debug.log)
build/ directory and its contents
node_modules/ directory
.env file containing environment variables

3. Verified .gitignore Contents
notepad .gitignore

4. Created Unwanted Files for Testing
echo "Log file" > debug.log
mkdir build
echo "test" > build/output.txt
These files matched .gitignore patterns and were therefore not tracked by Git.

5. Checked Git Status
git status

6. Staged and Committed .gitignore
git add .gitignore
git commit -m "Add .gitignore to ignore logs, build files, and environment variables"

Git responded:
[master c7ab98d] Add .gitignore to ignore logs, build files, and environment variables
 1 file changed, 5 insertions(+)
 create mode 100644 .gitignore
---

## 🛠️ How to Use `.gitignore` to Ignore Unwanted Files

### 1. Create a `.gitignore` File
Manually create the file in your Git repository’s root folder:
```bash
touch .gitignore

2. Add File Patterns to Ignore
Example .gitignore file:

gitignore

# Ignore all .log files
*.log
# Ignore the build folder
build/
# Ignore all .env files (environment variables)
.env
# Ignore node_modules folder (commonly used in JS projects)
node_modules/
# Ignore all .tmp files
*.tmp

3. Commit the .gitignore File
git add .gitignore
git commit -m "Add .gitignore to exclude unwanted files"

4. Note: Already Tracked Files Aren't Affected
If you already committed a file and then added it to .gitignore, it will still be tracked by Git.
To stop tracking it:
git rm --cached filename

# 🧪 Lab 2: Ignore Unwanted Files Using `.gitignore`

This lab demonstrates how to use a `.gitignore` file to prevent unwanted files and folders (such as logs, build outputs, and environment variables) from being tracked by Git.

---



