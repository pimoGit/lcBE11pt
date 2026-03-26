const express = require('express')
const app = express()
const port = 3000

// importo il router della risorsa pizze
const pizzasRouter = require('./routers/pizzas');

app.use(express.static('public'));

// rotta di home
app.get('/', (req, res) => {
    res.send("Benvenuto nella API della mia pizzeria");
})

// rotte di CRUD per la risorsa pizze
app.use("/pizzas", pizzasRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})