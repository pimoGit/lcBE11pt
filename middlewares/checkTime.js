function checkTime(req, res, next) {

    // predniamo data e ora specifica di user
    const currenTime = new Date().toLocaleString;

    console.log("sei passato dal middleware di checkTime a:", currenTime);

    // procediamo con risoluzione della richiesta
    next();
}