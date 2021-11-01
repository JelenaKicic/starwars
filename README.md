# README #

Root repository for Star Wars fanclub project with frontend and api

### How do I get set up? ###

* Make sure you have installed:
  * Node v16.13.0, 
  * sequelize-cli (```npm install --save-dev sequelize-cli```) and 
  * expo-cli (```npm install -g expo-cli```)

### How to run the API? ###

* Navigate to server directory
* Run ```npm install```
* Add config.json file from bellow to server/config directory with local connection data for your postgres database
* Run ```npx sequelize-cli db:migrate```
* Run ```npx sequelize-cli db:seed:all```
* Run ```node index.js``` 

### How to run frontend Mobile app? ###

* Navigate to frontend directory
* Run ```npm install```
* Populate SERVER_ADDRESS variable in frontend/config/variables.js with the addres of the node server from above 
* Run ```npm start```
* You can now test the application using expo client on your mobile device

```
server/config/config.json
{
    "development": {
    "username": "postgres",
    "password": "",
    "database": "databaseName",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }, ...
} 
```