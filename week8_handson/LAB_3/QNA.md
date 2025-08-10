# Lab 3: Branching, Merging, and GitLab Merge Requests
This lab explains the key concepts of Git branching and merging, and how to create branch and merge requests in GitLab.

---
## Branching and Merging in Git
### What is Branching?
Branching in Git allows you to diverge from the main line of development and continue to work independently without affecting the main codebase (usually named `main` or `master`). Each branch serves as an isolated workspace to develop features, fix bugs, or experiment.

### Common Use Cases for Branching:
- Feature development
- Bug fixes
- Experiments

### How to Create and Use a Branch
Create a new branch:
```bash
git branch feature-xyz
Switch to the branch:
git checkout feature-xyz
Or create and switch in one command:
git checkout -b feature-xyz

Merge the branch back into master:
git checkout master
git merge feature-xyz

Creating a Branch in GitLab
To create a new branch in GitLab:
1.Go to your GitLab project repository.
2.Navigate to the Repository > Branches section.
3.Click on "New Branch".
4.Enter a branch name (e.g., feature-xyz) and select the base branch (typically main or master).
5.Click "Create Branch" to finalize.

Creating a Merge Request in GitLab
A Merge Request (MR) in GitLab is a way to request that your changes in one branch (e.g., feature-xyz) be merged into another (e.g., main).
Steps to Create a Merge Request:
1.Push your local changes to the feature branch on GitLab.
2.Go to the Merge Requests section in your GitLab project.
3.Click on "New Merge Request".
4.Select the source branch (e.g., feature-xyz) and the target branch (e.g., main).
5.Click "Compare branches and continue".
6.Add a title and description, and assign reviewers if necessary.
7.Click "Submit Merge Request".
8.The merge request will then be visible for review, discussion, and approval by team members.

Summary
Git branching allows developers to work on isolated features or fixes without affecting the main project.
Merging is used to integrate changes from one branch into another.
GitLab provides a user-friendly interface for creating branches and submitting merge requests, simplifying team collaboration and code review workflows.
