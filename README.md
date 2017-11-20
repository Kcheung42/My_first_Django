# A Boilerplate Example for a Dockerized Django/ReactJS web application with Postgres database
#### Adapted from https://gist.github.com/genomics-geek/98929a9e7ba9602fed7bfa4a5a1c5c4e#file-step09-md

## This is an example project using the following technologies:
* Docker with Docker Compose
* Django REST APIs
* ReactJS
* Webpack module bundler and Hot Reloading (Hot Reloader 3)

# Setup Local Environment

1. Create .env file
2. npm install
3. Create first webpack
 
##### ./node_modules/.bin/webpack --config webpack/webpack.local.config.js

4. make docker-build-dev
5. make docker-up-dev


#### Visit http://localhost:8000
 
# Development How To:

### DATABASE
##### To access Containers Database

 docker-compose exec [service-name] bash
 psql [database-name] -U [user]
 
 ##### service-name: as defined in docker-compose file
 ##### database-name: as defined in .env
 
## Django
#### make Migrations

docker-compose exec [service-name] python manage.py makemigrations
docker-compose exec [service-name] python manage.py migrate

##### service-name = django

## Webpack

## Why Django + React

1. Turn your site into a single page web app. Faster.
2. Use the same codebase for iOS and Android (with React Native)
3. Manage complicated state more easily
4. React is Backend Agnostic
