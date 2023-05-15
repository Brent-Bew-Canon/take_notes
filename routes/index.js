const routes = require("express").Router()
const notes = require("./notes")

routes.use("/notes", notes)


module.exports = routes