const notes = require("express").Router()
const path = require('path');

// TODO: serve proper page
notes.get("/", function (req, res) {
    res.json(`${req.method} request received`);
})

module.exports = notes;