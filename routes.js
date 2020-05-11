const express = require('express');
const routes = express.Router();
const receitas = require('./dados');

// FRONTEND
routes.get("/", function(req, res) {
    return res.render("frontend/index", {items: receitas});
});

routes.get("/sobre", function(req, res) {
    return res.render("frontend/sobre");
});

routes.get("/receitas", function(req, res) {
    return res.render("frontend/receitas", {items: receitas});
});

routes.get("/prato/:id", function(req, res) {
    const receitaIndex = req.params.id;

    const receita = receitas.find(function(receita) {
        return receitaIndex == receita.id;
    });

    if (!receita) {
        return res.render("not-found");
    }
    return res.render("frontend/prato", { item: receita });
});

//ADMIN
routes.get("/admin", function(req, res) {
    return res.render("admin/index");
});

routes.use(function(req, res) {
    res.status(404).render("not-found");
});


module.exports = routes;