# Rails API + VueJS application for art collections

### What?
A test task: create an app for artworks using Rails and VueJS.
These are two applications: Rails API in the backend and VueJS in the frontend.

### Why?
To find out how to integrate Rails API with VueJS app.

### Where?
I managed to deploy it to Heroku so the results are all [here](https://artfinder-rails.herokuapp.com/). Heroku doesn't work well with pictures served from Asset Pipeline, so no pictures, sorry.

---

## Setup
#### Prerequisites
* Ruby 2.4.0
* Node and npm
* **imagemagick** for paperclip attachments:

```bash
$ sudo apt-get install imagemagick libmagickwand-dev
```

#### Install
```bash
$ bin/setup
```
This will install gems and npm packages, create *database.yml* file for you and will fail at creating the DB.
You will have to change the *database.yml* and then rerun `bin/setup`.

## Run
```bash
$ npm run dev
```
This will launch a Puma instance at http://localhost:3000 and a Webpack-dev-server at http://localhost:9000 for you.
