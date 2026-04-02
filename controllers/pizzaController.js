// importo dati del menu pizze
const menuPizze = require('./../data/menu');

// elenco funzioni relative alle rotte della risorsa pizze

function index(req, res) {
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
}

function show(req, res) {
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
}

function store(req, res) {
    console.log(req.body);
    res.send('Creazione nuova pizza');
}

function update(req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
}

function modify(req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
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