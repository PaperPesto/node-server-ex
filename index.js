const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

// middleware
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    // all requests are intercepted here
    // we can do any middleware we want (eg authentication, logging, etc)
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log); // backtick alt+096
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err){
            console.log('Unable to append to ServiceWorkerRegistration.log');
        }
    });
    next(); // continues program execution; next fires request to app handlers
});

// site under maintenance
//app.use((req, res, next) => {
//    res.render('maintenance.hbs');
//})
app.use(express.static(__dirname + '/public'));

// app handler
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

// app handler
app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home page',
        welcomeMessage: 'Hello bestia!',
        currentYear: new Date().getFullYear()
    });
});

// app handler
app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About page',
        currentYear: new Date().getFullYear()
    });
});

// app handler
app.get('/home', (req, res) => {
    res.send('Home page');
});

// ----
app.listen(3000, () => {
    console.log('App listeninng on port 3000');
});