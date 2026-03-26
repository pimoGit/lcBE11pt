const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

// rotta di home
app.get('/', (req, res) => {
    res.send("Benvenuto nella API della mia pizzeria");
})

// rotta di prova per parametro dinamico
app.get('/pizze/:id', function (req, res) {
    console.log("Hai cercato la pizza con id: " + req.params.id)
    res.send("Hai cercato la pizza con id: " + req.params.id)
})

// rotta menù pizze
app.get('/menu', (req, res) => {
    const menuPizze = [
        {
            id: 1,
            name: "Margherita",
            image: "imgs/pizze/margherita.webp",
            ingredients: ["pomodoro", "mozzarella"],
        }, {
            id: 2,
            name: "Marinara",
            image: "imgs/pizze/marinara.jpeg",
            ingredients: ["pomodoro", "aglio", "origano"],
        }, {
            id: 3,
            name: "Diavola",
            image: "imgs/pizze/diavola.jpeg",
            ingredients: ["pomodoro", "mozzarella", "salame piccante"],
        }, {
            id: 4,
            name: "Bufalina",
            image: "imgs/pizze/bufalina.jpeg",
            ingredients: ["pomodoro", "mozzarella di bufala"],
        }, {
            id: 5,
            name: "4 formaggi",
            image: "imgs/pizze/4_formaggi.jpeg",
            ingredients: ["pomodoro", "mozzarella", "gorgonzola", "parmigiano", "ricotta"],
        }
    ];

    // ritorna il menù in formato json come res alla rotta specifica
    res.json(menuPizze);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})