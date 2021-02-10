const express = require("express")
const db = require("./database")

const server = express()

// This is installing some middleware to allow Express
// to parse incoming JSON request bodies
server.use(express.json())

server.get("/", (req, res) => {
	res.json({ message: "Hello, World" })
})

server.get("/users", (req, res) => {
	const users = db.getUsers()
	res.json(users)
})

server.get("/users/:id", (req, res) => {
	const user = db.getUserById(req.params.id)

	if (user) {
		res.json(user)
	} else {
		res.status(404).json({
			message: "User not found",
		})
	}
})

server.post("/users", (req, res) => {
	const newUser = db.createUser({
		name: req.body.name,
	})

	res.status(201).json(newUser)
})

server.put("/users/:id", (req, res) => {
	const user = db.getUserById(req.params.id)

	if (user) {
		const updatedUser = db.updateUser(user.id, {
			name: req.body.name,
		})

		res.json(updatedUser)
	} else {
		res.status(404).json({
			message: "User not found ",
		})
	}
})

server.delete("/users/:id", (req, res) => {
	const user = db.getUserById(req.params.id)

	if (user) {
		db.deleteUser(user.id)

		// 204 is the status code for successful empty response
		res.status(204).end()
	} else {
		res.status(404).json({
			message: "User not found",
		})
	}
})

module.exports = server
