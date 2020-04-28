const express = require('express');

const server = express();

server.use(express.static('public'));
server.use(express.static('img'));

server.set("view engine", "html");

server.get("/", function(req, res) {
    return res.render("/index");
});

server.listen(5002, function() {
    console.log("Servidor ligado.");    
});