# Northwind App

## General Information
- Uses GNU make to simplify tasks (elaborate later)
- Docker images used: *mongo:latest*

## Mongo Information
- Database instance runs in a Docker container and is published on the default port 27017
- Northwind sample data pulled from https://github.com/tmcnab/northwind-mongo
  
## To Do
- Implement REST API with Node.js
  - [x] Database class for Mongoose
  - [x] Create data models
  - [x] Routing
  - [x] Service layer to simplify GETs
  - [ ] Service layer to simplify POSTs
  - [ ] Test API
  - [ ] \(Optional) Look into test libraries for experience

- Implement REST API with Spring Boot
  - Details TBD
    
- Write front-end components - React
  - [x] NavigationBar
  - [x] Orders
  - [x] Order Details
  - [x] Product 
  - [x] Categories
  - [ ] Customers
  - [ ] etc..
