# Northwind App

## General Information
- Docker images used: *mongo:latest*
- Uses GNU make to simplify tasks
  - From the root directory, running `make all` will get everything going so you can visit `http://localhost:3000` to look around
  - To tear down, simply run `make clean` which is an alias for `make reset`

## Mongo Information - mongo_container
- Database instance runs in a Docker container and is published on the default port 27017
- Northwind sample data pulled from https://github.com/tmcnab/northwind-mongo

## Node/Express Information - node_container
- Uses a `.env` file but if it doesn't exist
  - Express will default to port `8000` in `app.js`
  - Mongoose will default to host `172.17.0.2`, port `27017` with database name `Northwind` in `lib/database.js`
- The defaults are to simplify network communication if running all components inside Docker containers

## React Information - react_container
- In `package.json`, use `"proxy": "http://172.17.0.3:8000/"` if running component in a Docker container, or `"proxy": "http://localhost:8000"` if you are working on code, i.e. running the app locally.
  
## To Do
- Implement REST API with Node.js
  - [x] Database class for Mongoose
  - [x] Create data models
  - [x] Routing
  - [x] Service layer to simplify GETs
  - [ ] Service layer to simplify POSTs
  - [ ] Test API
  - [ ] \(Optional) Look into test libraries for experience
 
- Write front-end components - React
  - [x] NavigationBar
  - [x] Orders
  - [x] Order Details
  - [x] Product 
  - [x] Categories
  - [ ] Customers
  - [ ] etc..

- Implement REST API with Spring Boot (to test modularity)
  - Details TBD

