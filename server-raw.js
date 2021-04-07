const http = require("http")

const server = http.createServer((req, res) => {
    console.log("recieved a new visit")
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.write(`<h1>Hello, World</h1> ${new Date()}`)

    res.end()
})

server.listen(8080, () => {
    console.log("strt on p 8080")
})