# React-adminka

Intended as admin panel based on React

## Installation

Create `.env` file in the root directory of the project and copy the next snippet there:

```bash
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
FIREBASE_MEASUREMENT_ID=
```
>**This snippet can be found in Firebase console or ask the administrator**

---

Run yarn to install dependencies

```bash
# install the dependencies
yarn

# start in the development environment
yarn start
```
---
## Deployment

To deploy to gh-pages, follow the steps:

1. git pull on master
2. git checkout to master-gh-pages
3. git rebase master
4. Make sure in App.jsx HashRouter component instead of BrowserRouter is used (only for gh-pages)

Run the deployment command:

```bash
yarn deploy
```

> The website is accessible on https://psychologistdeveloper.github.io/

---

## Firestore database import/export

>Use firestore-export-import library - https://github.com/jloosli/node-firestore-import-export

```bash
# help commands
firestore-export -h
firestore-import -h
firestore-clear -h

# export database
firestore-export -a '/path/to/apiKey.json' -b 'backupFilename.json' -p

# import database
firestore-import -a '/path/to/apiKey.json' -b 'backupFilename.json'

# clear database
firestore-clear -a '/path/to/apiKey.json'

```
>## !!! ATTENTION !!!

BEFORE CLEAR DATABASE MAKE SURE THAT YOU HAVE A BACKUP FILE
