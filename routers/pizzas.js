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
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const pizzaTrovata = menuPizze.find(pizza => pizza.id === id);

    // Facciamo il controllo
    if (!pizzaTrovata) {

        //Imposto lo status 404
        res.status(404)

        // Restituisco un JSON con le altre informazioni
        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }


    // Restituiamolo sotto forma di JSON   
    res.json(pizzaTrovata);
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
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const pizza = menuPizze.find(pizza => pizza.id === id);

    // Piccolo controllo
    if (!pizza) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    // Rimuoviamo la pizza dal menu
    menuPizze.splice(menuPizze.indexOf(pizza), 1);

    // Restituiamo lo status corretto
    res.sendStatus(204)
});

// esporto il router per poterlo usare i app
module.exports = router;
