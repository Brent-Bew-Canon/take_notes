const express = require("express")
const app = express()
const routes = require("./routes")
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.static("public"))
app.use(routes)



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`)
})