const express = require("express");

var app = express();

app.get('/', (req, res) => {
    res.send({
        name: "Leonardo",
        surname: "Bianchini",
        address: {
            state: "Italy",
            city: "Pontassieve"
        }
    })
})