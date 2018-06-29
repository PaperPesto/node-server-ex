const express = require("express");

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        name: "Leonardo",
        surname: "Bianchini",
        address: {
            state: "Italy",
            city: "Pontassieve"
        }
    });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/home', (req, res) => {
    res.send('Home page');
});

app.listen(3000, () => {
    console.log('App listeninng on port 3000');
});