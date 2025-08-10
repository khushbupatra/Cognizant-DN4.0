# Git Labs Summary

This document provides a summary of the key focus areas and commands used in each Git lab session.

| Lab | Key Focus              | Commands Used                                          |
|-----|------------------------|--------------------------------------------------------|
| 1   | Git setup & push       | `git init`, `git add`, `git commit`, `git push`, `git config` |
| 2   | .gitignore usage       | `.gitignore`, `git status`                            |
| 3   | Branch & Merge         | `git checkout -b`, `git merge`, `git diff`, `git branch -d` |
| 4   | Conflict Resolution    | Manual conflict resolution, `.gitignore`              |
# Resolving Merge Conflicts in Git

## What is a Merge Conflict?

A merge conflict occurs when Git is unable to automatically resolve differences between two branches. This typically happens when changes to the same line of a file have been made in both branches or when a file is deleted in one branch and modified in another.

---

## Steps to Resolve a Merge Conflict

1. Perform the Merge
Start by merging the branches:
```bash
git checkout main
git merge feature-branch
If there are conflicts, Git will pause the merge and indicate the files that have conflicts.

2. View Conflict Status
git status

Files with merge conflicts will be marked as "both modified".

3. Open the Conflicted File
<<<<<<< HEAD
Changes from the current branch (e.g., main)
=======
Changes from the branch being merged (e.g., feature-branch)
>>>>>>> feature-branch
Need to manually edit the file to choose or combine the changes, and then remove these markers (<<<<<<<, =======, >>>>>>>).

4. Stage the Resolved File
git add filename
Repeat this for all conflicted files.

5. Complete the Merge
git commit
Git will finalize the merge.

6. Abort the Merge (Optional)
If you want to cancel the merge entirely:
git merge --abort

Lab 4: Conflict Resolution in Git
This lab demonstrates how to handle merge conflicts in Git when multiple branches modify the same file differently. You will also learn how to resolve conflicts manually and update `.gitignore` as needed.

---
Objectives
- Understand how merge conflicts occur
- Learn to resolve conflicts manually using Git and optionally with a merge tool
- Practice basic Git commands to manage branches and commits
---
Steps Performed
1. Verify if master is in a clean state
Check for uncommitted changes:
```bash
git status

2. Create a branch named GitWork and add a file
git checkout -b GitWork
echo "<note><body>Hello from GitWork</body></note>" > hello.xml

3. Update the content of hello.xml in GitWork
echo "<note><body>Hello modified from GitWork</body></note>" > hello.xml
git status

4. Commit the changes in GitWork branch
git add hello.xml
git commit -m "Update hello.xml in GitWork branch"

5. Switch back to master branch
git checkout master

6. Create a different version of hello.xml in master
echo "<note><body>Hello from master branch</body></note>" > hello.xml

7. Commit the changes in master
git add hello.xml
git commit -m "Add hello.xml in master with different content"

8. Visualize commit history with graph
git log --oneline --graph --decorate --all

9. Check the difference between branches
git diff GitWork

10. (Optional) Use a diff tool like p4merge for visual comparison
If configured:
git difftool GitWork

11. Merge the GitWork branch into master
git merge GitWork
This will result in a merge conflict because both branches modified hello.xml differently.

12. Inspect the conflict markers in hello.xml
The file will look like:
<<<<<<< HEAD
<note><body>Hello from master branch</body></note>
=======
<note><body>Hello modified from GitWork</body></note>
>>>>>>> GitWork

13. Manually resolve the conflict
Edit the file to finalize the content, for example:
<note><body>Hello merged content</body></note>

Then stage it:
git add hello.xml

14. Commit the resolved changes
git commit -m "Resolve merge conflict in hello.xml"

15. Add backup file to .gitignore (if generated)
If backup files like hello.xml~ exist:
echo "*.xml~" >> .gitignore

16. Commit the updated .gitignore
git add .gitignore
git commit -m "Add .gitignore entry for backup files"

17. List all branches
git branch

18. Delete the merged GitWork branch
git branch -d GitWork

19. View final commit log in graph format
git log --oneline --graph --decorate

Summary
Merge conflicts occur when two branches modify the same lines differently.
Git uses conflict markers to indicate where conflicts occur.
Conflicts must be resolved manually or using a merge tool.
Resolved files are staged and committed to complete the merge.
Branch cleanup and .gitignore maintenance are important post-merge steps.
