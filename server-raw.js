const http = require("http")

const server = http.createServer((req, res) => {
	// status code of 200 means "success"
	res.statusCode = 200

	// tell the client we're sending back some HTML
	res.setHeader("Content-Type", "text/html")

	res.write(`<h1>Hello, World</h1>`)
	res.write(`<h2>The current time is ${new Date()}</h2>`)

	// close it out and send the response back to the client
	res.end()
})

// web servers need to be coninuously listening for incoming requests
server.listen(8080, () => {
	console.log("server started at http://localhost:8080")
})
