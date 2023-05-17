const notes = require("express").Router()
const path = require('path');
const fs = require('fs');
const uuid = require('../helpers/uuid');

// Gets the notes from the db file
// notes.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, '../db/db.json'))
// })

//creates a note in the db file
notes.post("/notes", function (req, res) {
    const { title, text } = req.body;

    // If all the required properties are present
    if (title && text) {

        fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return;
            }

            oldNotes = JSON.parse(data);
            console.log(oldNotes.length);

            // Variable for the object we will save
            const newNote = {
                title,
                text,
                id: oldNotes.length + 1
            };

            oldNotes.push(newNote)

            // Write updated notes back to the file
            fs.writeFile(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify(oldNotes, null, 4),
                (writeErr) =>
                    writeErr
                        ? console.error(writeErr)
                        : console.info('Successfully updated notes!')
            );
        });

        res.status(201).json("Success!");
    }
})

//deletes a note from the db file
notes.delete("/notes/:id", (req, res) => {

    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        oldNotes = JSON.parse(data);

        if (req.params.id < 1 || req.params.id > oldNotes.length) {
            res.status(400).send("Id not found")
            return;
        }

        oldNotes.splice(req.params.id - 1, 1)

        //rewrite the id values of the notes
        for (let i = 0; i < oldNotes.length; i++) {
            oldNotes[i].id = i + 1
        }

        // Write updated notes back to the file
        fs.writeFile(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify(oldNotes, null, 4),
            (writeErr) =>
                writeErr
                    ? res.send.status(500).send(writeErr)
                    : res.status(200).send('Successfully deleted notes!')
        );

    })

})

module.exports = notes;