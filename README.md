# React-adminka

Intended as admin panel based on React

## Installation

Run yarn to install module

```bash
yarn

# start in the development environment
yarn start

# make a production build
yarn build
```
## Firestore database import/export

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
## !!! ATTENTION !!!

BEFORE CLEAR DATABASE MAKE SURE THAT YOU HAVE A BACKUP FILE
