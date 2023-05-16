const routes = require("express").Router()
const notes = require("./notes")

routes.use("/api", notes)


module.exports = routes