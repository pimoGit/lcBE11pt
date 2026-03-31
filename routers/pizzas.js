// richiamo libreria
const express = require('express')
// estrapolo e uso la parte di router
const router = express.Router();

// importo dati del menu pizze
const menuPizze = require('./../data/menu');

// definisco le varie rotte relative alla risorsa specifica
// index
router.get('/', function (req, res) {

    //Inizialmente, il menu filtrato corrisponde a quello originale
    let filteredMenu = menuPizze;

    // Se la richiesta contiene un filtro, allora filtriamo il menu
    if (req.query.ingredient) {
        filteredMenu = menuPizze.filter(
            pizza => pizza.ingredients.includes(req.query.ingredient)
        );
    }

    // creo oggetto nuovo per la formattazione completa della risposta
    const menuPizzeCompleto = {
        numeroPizze: filteredMenu.length,
        listaPizze: filteredMenu
    }

    res.json(menuPizzeCompleto);
});

// show
router.get('/:id', function (req, res) {
    res.send('Dettagli della pizza ' + req.params.id);
});

// store
router.post('/', function (req, res) {
    res.send('Creazione nuova pizza');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione della pizza ' + req.params.id);
});

// esporto il router per poterlo usare i app
module.exports = router;
