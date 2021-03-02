# Project Documentation

How to use this project

## GitHub Setup

The repository is using git flow for development, with two permanent branches (infinite lifetime): `develop` and `master`  
  
* `origin/master` is always the production version of the code
* `origin/develop` is the integration branch from where the next release will be created
  
Additionaly there will be non-permanent supporting branches (finite lifetime), such as:  
  
* feature branches
* release branches
* hotfix branches
  
All new code will developed in a feature branch, that will be eventually merged back into `develop`

To start a new feature development create the new feature branch, and switch to it:

```
$ git checkout -b feature-newfeature develop
```

After finishing development merge the code back into the development branch, delete the feature branch, and push the code to GitHub:

```
$ git checkout develop
$ git merge --no-ff feature-newfeature
$ git branch -d feature-newfeature
$ git push origin develop
```

You can find more information here:
https://nvie.com/posts/a-successful-git-branching-model/


