const routes = require("express").Router()
const notes = require("./notes")
const path = require("path")



routes.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

routes.use("/api", notes)

module.exports = routes