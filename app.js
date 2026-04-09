const express = require('express')
const app = express()
const port = 3000

// importo il router della risorsa pizze
const pizzasRouter = require('./routers/pizzas');

// importo il middleware di checkTime
const checkTime = require('./middlewares/checkTime');

// importo middleware di gestione errore interno server 500
const errorsHandler = require('./middlewares/errorsHandler');

app.use(express.static('public'));

// attivazione body parser per formato json per tutte le rotte	
app.use(express.json());

// registrazione globale
// app.use(checkTime);

// registrazione per router
// app.use("/pizzas", checkTime)

// rotta di home
app.get('/', (req, res) => {
    res.send("Benvenuto nella API della mia pizzeria");
})

// rotte di CRUD per la risorsa pizze
app.use("/pizzas", pizzasRouter)


// registra globalmente il middleware di gestione errore interno server 500
app.use(errorsHandler);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})