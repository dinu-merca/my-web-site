# How to setup your development environment

## Create git branch

```
$ git checkout -b feature-initial-template develop
```

## Initialize the application

(Note: I should update this to create the react app directly in this repository)

from a template folder created with:
```
npx create-react-app my app
```

copy to this folder the following:
package.json
src folder
public folder

run
```
npm install
```

## Test the application

Run:
```
$ npm start
```

browser to http://localhost:3000

## Checkin, merge and deletre the branch

```
$ git add .
$ git checkin -m "Initial setup"
$ git checkout develop
$ git merge --no-ff feature-initial-template
$ git branch -d feature-initial-template
$ git push origin develop
```

Note: the feature branches are usually only in my local repo

