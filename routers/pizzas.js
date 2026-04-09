// richiamo libreria
const express = require('express')
// estrapolo e uso la parte di router
const router = express.Router();

// importo il controller della risorsa pizze
const pizzaController = require('./../controllers/pizzaController');

// importo il middleware di checkTime
const checkTime = require('./../middlewares/checkTime');

// registrazione globale di router specifico
// router.use(checkTime);

// definisco le varie rotte relative alla risorsa specifica
// index
router.get('/', pizzaController.index);

// show
router.get('/:id', checkTime, pizzaController.show);

// store
router.post('/', pizzaController.store);

// update
router.put('/:id', pizzaController.update);

// modify
router.patch('/:id', pizzaController.modify);

// destroy
router.delete('/:id', checkTime, pizzaController.destroy);

// esporto il router per poterlo usare i app
module.exports = router;
