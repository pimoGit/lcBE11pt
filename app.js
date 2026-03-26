const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

// rotta di home
app.get('/', (req, res) => {
    res.send("Benvenuto nella API della mia pizzeria");
})

// rotte di CRUD per la risorsa pizze

// index
app.get('/pizzas', function (req, res) {
    res.send('Lista delle pizze');
});

// show
app.get('/pizzas/:id', function (req, res) {
    res.send('Dettagli della pizza ' + req.params.id);
});

// store
app.post('/pizzas', function (req, res) {
    res.send('Creazione nuova pizza');
});

// update
app.put('/pizzas/:id', function (req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
});

// modify
app.patch('/pizzas/:id', function (req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
});

// destroy
app.delete('/pizzas/:id', function (req, res) {
    res.send('Eliminazione della pizza ' + req.params.id);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})