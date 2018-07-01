const express = require('express');
const hbs = require('hbs');

var app = express();

// middleware
hbs.registerPartial(__dirname + '/views/partials');
app.set('view engine', 'hbs');
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

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMessage: 'Hello bestia!',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/home', (req, res) => {
    res.send('Home page');
});

app.listen(3000, () => {
    console.log('App listeninng on port 3000');
});