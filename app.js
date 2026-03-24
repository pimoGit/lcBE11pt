const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

// rotta di home
app.get('/', (req, res) => {
    res.send("Benvenuto nella API della mia pizzeria");
})

// rotta menù pizze
app.get('/menu', (req, res) => {
    const menuPizze = [
        {
            name: "Margherita",
            image: "imgs/pizze/margherita.webp",
            ingredients: ["pomodoro", "mozzarella"],
        }, {
            name: "Marinara",
            image: "imgs/pizze/marinara.jpeg",
            ingredients: ["pomodoro", "aglio", "origano"],
        }, {
            name: "Diavola",
            image: "imgs/pizze/diavola.jpeg",
            ingredients: ["pomodoro", "mozzarella", "salame piccante"],
        }, {
            name: "Bufalina",
            image: "imgs/pizze/bufalina.jpeg",
            ingredients: ["pomodoro", "mozzarella di bufala"],
        }, {
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