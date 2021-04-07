const express = require("express")

const server = express()

const db = require("./database")


server.get("/", (req, res) => {
    res.json({message :"Hello, Welt" })
})
server.get("/users", (req,res) => {
    const users = db.getUsers()
    res.json(users)
})
server.get("/users/:id", (req,res) => {
    const users = db.getUserById(req.params.id)

    if 
        (res.json(user))  
        
      else {
        res.status(404).json({
            messege: "user not found",
        })
    }
})
server.post("/users", (req,res) =>{
    const newUser = db.createUser({
        name: req.body.name,
    })
    res.json(newUser);
})


module.exports = server