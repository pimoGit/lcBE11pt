const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.type("html")
        .send(`<h1>Titolo di una pagina HTML!<h1>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})