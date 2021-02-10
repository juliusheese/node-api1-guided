const http = require("http")

const server = http.createServer((req, res) => {
	console.log("received a visitor")
	
	// tell the browser this is a successful response
	res.statusCode = 200

	// tell the browser to render the response as HTML
	res.setHeader("Content-Type", "text/html")

	// build out the response data
	res.write(`<h1>Hello, World. The current time is ${new Date()}.</h1>`)

	// we are done, send the response
	res.end()
})

server.listen(8080, () => {
	console.log("server started at http://localhost:8080")
})
