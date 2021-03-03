# Develop a new feature

## Create a new git branch

First create a new git branch for this feature from the `develop` branch:  

$ git checkout -b feature-main-page develop

## Develop the feature

Write the code for this feature

## Checkin, merge and delete the branch

Use GitHub pull requests to merge the branch into develop

```
$ git add .
$ git commit -m "Main page initial code"
$ git push origin feature-main-page
```

Use GitHub to create a pull request, review, approve and merge `feature-main-page` into `develop`

To use SSH:

```
$ git remote set-url origin git@github.com:dinu-merca/my-web-site.git
```

