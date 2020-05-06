const express = require('express');
const routes = express.Router();
const receitas = require('./dados');

routes.get("/", function(req, res) {
    return res.render("index", {items: receitas});
});

routes.get("/sobre", function(req, res) {
    return res.render("sobre");
});

routes.get("/receitas", function(req, res) {
    return res.render("receitas", {items: receitas});
});

routes.get("/prato/:id", function(req, res) {
    const receitaIndex = req.params.id;

    const receita = receitas.find(function(receita) {
        return receitaIndex == receita.id;
    });

    if (!receita) {
        return res.render("not-found");
    }
    return res.render("prato", { item: receita });
});

routes.use(function(req, res) {
    res.status(404).render("not-found");
});


module.exports = routes;