const express = require("express")

const app = express()

const routes = require("./routes")

app.use(express.json())
app.use(express.static("public"))
app.use(routes)

app.listen(3001, () => {
    console.log("App running on port 3001...")
})