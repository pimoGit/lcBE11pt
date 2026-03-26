const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

// rotta di home
app.get('/', (req, res) => {
    res.send("Benvenuto nella API della mia pizzeria");
})

// rotte di CRUD per la risorsa pizze


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})