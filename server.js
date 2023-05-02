const express = require('express');
const path = require('path');
// const api = require('./routes/index.js');

const PORT = 3001;

const app = express();

app.use(express.static('public'));

// GET Route for notes page
app.get('/notes', (req, res) =>
    res.redirect("/notes.html")
);


app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);