function notFound(req, res, next) {
    // restituiamo il codice corretto per questa situazione
    res.status(404)

    //   restituiamo un messaggio di errore approprioato
    res.json({
        error: "Not Found",
        message: "Rotta non trovata"
    });
};

module.exports = notFound;