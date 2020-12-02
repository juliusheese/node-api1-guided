// this is pulling from node_modules now rather than the Node stdlib
const express = require("express")
const db = require("./database")

const server = express()

// some middleware that helps express parse incoming request bodies into a json object
server.use(express.json())

server.get("/", (req, res) => {
	res.json({ message: "Hello, World" })
})

server.get("/users", (req, res) => {
	const users = db.getUsers()
	res.json(users)
})

server.get("/users/:id", (req, res) => {
	// the param variable matches up to the name of our URL param above
	const id = req.params.id
	const user = db.getUserById(id)

	if (user) {
		res.json(user)
	} else {
		res.status(404).json({
			message: "User not found",
		})
	}
})

server.post("/users", (req, res) => {
	if (!req.body.name) {
		return res.status(400).json({
			message: "Need a user name",
		})
	}

	const newUser = db.createUser({
		name: req.body.name,
	})

	res.json(newUser)
})

server.put("/users/:id", (req, res) => {
	// make sure the user exists before trying to update it
	const user = db.getUserById(req.params.id)

	if (user) {
		// user exists, continue with updating it
		const updatedUser = db.updateUser(user.id, {
			// be specific with the values being updated,
			// rather than passing `req.body` directly
			name: req.body.name || user.name,
		})

		res.json(updatedUser)
	} else {
		res.status(404).json({
			message: "User not found",
		})
	}
})

server.delete("/users/:id", (req, res) => {
	// make sure the user exists before trying to update it
	const user = db.getUserById(req.params.id)

	if (user) {
		db.deleteUser(user.id)

		// send back an "empty" successful response
		res.status(204).end()

		// or a success message
		// res.json({
		// 	message: "User deleted",
		// })
	} else {
		res.status(404).json({
			message: "User not found",
		})
	}
})

server.listen(8080, () => {
	console.log("server started at http://localhost:8080")
})
