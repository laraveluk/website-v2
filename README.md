## LaravelUK Community Website Development V2
### Introduction

Thank you for your interest in contributing to the LaravelUK community website project! This is the second iteration of this project. The intial project was built using the Laravel/Vue stack but since we launched 5 years ago, there has been majpr changes to Laravel and other library versions which has necessitated a rebuild. 

The intial project served as platform for building the LaravelUK website and also a platform to help other members learn technologies that they are not familiar with; irrespective of their level of experience. We believe the project has served it's purpose and therefore we have decided switch to implmenting a static website route which will make updating their website quick and easy without the need for unnecesary overheads. We are therefore building the new website with [Nuxt] (https://nuxt.com/) (V3) and deploying to Netlify.

## Setup
Clone the project

Install the dependencies:

```bash
# yarn
yarn install

## Development Server
Start the development server on http://localhost:3000

```bash
yarn dev
```

### Contribution Instructions
If you are new to contibuting to open source projects, please follow the steps below
- Fork the repository
- Clone the forked repository to your local system
- Add a git remote to the original repository. Example `git remote add upstream https://github.com/laraveluk/website.git`
- Check `git remote -v` to ensure you can see both remotes
- Create a feature branch in which to make your changes `git checkout -b <new branch name>`
- Make changes and commit to the branch
- Push the branch to Github
- Submit Pull request

### Etiquette
As this is a community project, selected reviewers will go through your code to ascertain if the quality is sufficient for it to be merged. You are however free to choose any member of the community to review your code however only specifically assigned members can merge your Pull Requests. Please be considerate towards reviewers/maintainers when raising issues or presenting pull requests. Let's show the world that LaravelUK members are civilized and great people to work with.

## Submission Requirements
Before submitting a pull request:
- Check the codebase to ensure that your feature doesn't already exist.
- Check the pull requests to ensure that another person hasn't already submitted the feature or fix.
- Send coherent history - Make sure each individual commit in your pull request is meaningful. If you had to make multiple intermediate - commits while developing, please [squash] (http://www.git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages) them before submitting.
- It is important to add tests to your functionality, even if it is a very simple feature. If it is a UI change, it will be helpful to add a simple screenshot with a brief note so others will know what has changed
- If you want to do more than one thing, send multiple pull requests.

### Feedback Policy
We will strive for a "Zero Pull Request Pending" policy. This means, that if the pull request is good, it will be merged as soon as review is completed and if it does not meet the requirements, the contributor will be advised to make changes and re-submit.