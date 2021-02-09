# Node API 1 Guided Project

Guided project for **Node API 1** Module.

In this project we will learn how to create a simple Web API using `Node.js` and `Express`, and cover the basics of server-side routing using global middleware.

## Prerequisites

- an HTTP client like [Postman](https://www.getpostman.com/downloads/) or [Insomnia](https://insomnia.rest/download/)

## Project Setup

- [ ] Clone this repository
- [ ] **CD into the folder** where you cloned the repo
- [ ] Type `npm install` to download dependencies

## Assignment

Build a RESTful Web API to manage a basic list of users for your app.

A User has:

- a unique `id`
- a `name`

### Features

The Web API must provide a set of `endpoints` to fulfill the following needs:

- add a new user
- view a list of existing users
- view the details of a single user
- update the information of an existing user
- remove a user

Here is a table with the `endpoint` descriptions:

| Action                | URL                | Method | Response          |
| :-------------------- | :----------------- | :----- | :---------------- |
| Add a user            | /users             | POST   | the new user      |
| View list of users    | /users             | GET    | array of users    |
| View user details     | /users/{id}        | GET    | a single user     |
| Update user           | /users/{id}        | PUT    | updated user      |
| Remove a user         | /users/{id}        | DELETE | deleted user      |
