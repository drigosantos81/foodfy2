const express = require('express');
const routes = express.Router();

routes.get("/", function(req, res) {
    return res.render("index");
});

routes.get("/sobre", function(req, res) {
    return res.render("sobre");
});

routes.get("/receitas", function(req, res) {
    return res.render("receitas");
});

module.exports = routes;