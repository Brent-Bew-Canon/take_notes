const notes = require("express").Router()
const path = require('path');

// TODO: serve proper page
notes.get("/notes", function (req, res) {
    res.sendFile('C:/Users/babuc/bootcamp/take_notes/db/db.json')
})

module.exports = notes;