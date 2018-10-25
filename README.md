# Northwind App

## General Information
- Docker images used: *mongo:latest*
- Uses GNU make to simplify tasks
  - From the root directory, running `make all` will get everything going so you can visit `http://localhost:3000` to look around
  - To tear down, simply run `make clean` which is an alias for `make reset`
  - Check the other targets in the `Makefile` for more granular control

## Mongo Information - mongo_container
- Database instance runs in a Docker container and is published on the default port 27017
- Northwind sample data pulled from https://github.com/tmcnab/northwind-mongo

## Node/Express Information - node_container
- Uses a `.env` file but if it doesn't exist
  - Express will default to port `8000` in `app.js`
  - Mongoose will default to the following in `lib/database.js`:
    - Host `172.17.0.2`
    - Port `27017`
    - Database Name `Northwind`
- The defaults are to simplify network communication in bridged mode if running all components inside Docker containers (strictly for dev environments)

## React Information - react_container
- If you want to run the component in Docker with communication between containers, in `package.json` use `"proxy": "http://172.17.0.3:8000/"`
- If you are working on code, i.e. running the app locally, use `"proxy": "http://localhost:8000"` in `package.json` instead
  
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
  - [x] Customers
  - [ ] etc..

- Implement REST API with Spring Boot (to test modularity)
  - Details TBD

