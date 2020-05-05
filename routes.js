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

routes.get("/prato", function(req, res) {
    return res.render("prato", {items: receitas});
});

routes.get("/prato/:id", function(req, res) {

    const receitaIndex = req.params.id;
    
    // const receita = receitas.find(function(receita) {
    //     return receitaIndex == receita.receitaIndex;
    // });

    // const receita = receitas[receitaIndex];
  
    return res.render("prato", { items: receitas });
});

module.exports = routes;