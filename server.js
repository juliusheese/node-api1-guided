const http = require("http")

const server = http.createServer((req, res) => {
    res.statusCode = 200

    res.setHeader("Content-Type", "text/html")
    res.write(`<h1>Hello, World</h1>`)

    res.end()
})

server.listen(8080, () => {
    console.log("strt on p 8080")
})