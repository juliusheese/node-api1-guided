# Node API 1 Guided Project

Guided project for **Node API 1** Module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover the basics of `server-side routing` and using global `middleware`.

The code for the guided project will be written in a single file for simplicity. We'll see ways to structure an API to make it more maintainable in upcoming lectures.

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
| Add a user            | /api/users         | POST   | the new user      |
| View list of users    | /api/users         | GET    | array of users    |
| View user details     | /api/users/{id}    | GET    | a single user     |
| Update user           | /api/users/{id}    | PUT    | updated user      |
| Remove a user         | /api/users/{id}    | DELETE | deleted user      |
