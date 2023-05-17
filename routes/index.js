const routes = require("express").Router()
const notes = require("./notes")
const path = require("path")

routes.use("/api", notes)

routes.get("notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

module.exports = routes