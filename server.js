const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));
server.use(express.static('img'));

server.set("view engine", "njk");

nunjucks.configure("pages", {
    express: server,
    autoescape: false,
    noCache: true
});

server.get("/", function(req, res) {
    return res.render("index");
});

server.get("/sobre", function(req, res) {
    return res.render("sobre");
});

server.get("/receitas", function(req, res) {
    return res.render("receitas");
});

server.listen(5002, function() {
    console.log("Servidor ligado.");    
});