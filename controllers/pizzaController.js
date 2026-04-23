// importo dati del menu pizze
const menuPizze = require('./../data/menu');

// Importiamo il file di connessione al database
const connection = require('../data/db');

// elenco funzioni relative alle rotte della risorsa pizze

function index(req, res) {
    // prepariamo la query
    const sql = 'SELECT * FROM pizzas';

    // eseguiamo la query!
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        res.json(results);
    });
}

function show(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // errore a caso
    // ciao();

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
}

function store(req, res) {
    // Creiamo un nuovo id incrementando l'ultimo id presente
    const newId = Date.now();

    // Creiamo un nuovo oggetto pizza
    const newPizza = {
        id: newId,
        name: req.body.name,
        image: req.body.image,
        ingredients: req.body.ingredients
    }

    // Aggiungiamo la nuova pizza al menu
    menuPizze.push(newPizza);

    // controlliamo
    console.log(menuPizze);


    // Restituiamo lo status corretto e la pizza appena creata
    res.status(201);
    res.json(newPizza);
}

function update(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const pizza = menuPizze.find(pizza => pizza.id === id);

    // Piccolo controllo
    if (!pizza) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    // Aggiorniamo la pizza
    pizza.name = req.body.name;
    pizza.image = req.body.image;
    pizza.ingredients = req.body.ingredients;

    // Controlliamo il menu
    console.log(menuPizze)

    // Restituiamo la pizza appena aggiornata
    res.json(pizza);
}

function modify(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const pizza = menuPizze.find(pizza => pizza.id === id);

    // Piccolo controllo
    if (!pizza) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    const pizzaInviata = req.body;

    // Aggiorniamo la pizza
    pizzaInviata.name ? pizza.name = pizzaInviata.name : pizza.name = pizza.name;

    // versione estesa 
    // if(pizzaInviata.name !== undefined) {
    //     pizza.name = pizzaInviata.name
    // } else {
    //      pizza.name = pizza.name
    // }

    pizzaInviata.image ? pizza.image = pizzaInviata.image : pizza.image = pizza.image;
    pizzaInviata.ingredients ? pizza.ingredients = pizzaInviata.ingredients : pizza.ingredients = pizza.ingredients;

    // Controlliamo il menu
    console.log(menuPizze)

    // Restituiamo la pizza appena aggiornata
    res.json(pizza);
}

function destroy(req, res) {
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

    console.log(menuPizze);


    // Restituiamo lo status corretto
    res.sendStatus(204)
}

// esportiamo le funzioni per il router
module.exports = { index, show, store, update, modify, destroy }