const express = require("express")
const path = require("path")
const app = express()

const PORT = 3000

app.get('/', function (req, res) {
    res.send()
})

app.use("public", express.static(path.join(__dirname, "../public")))

app.listen(PORT, () => {
    console.log("se a creado el server en el puerto " + PORT)
})