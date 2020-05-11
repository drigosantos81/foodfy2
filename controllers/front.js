const receitas = require('../dados.js');

exports.index = function(req, res) {
    return res.render("frontend/index", {items: receitas});
};

exports.sobre = function(req, res) {
    return res.render("frontend/sobre");
};

exports.receitas = function(req, res) {
    return res.render("frontend/receitas", {items: receitas});
};

exports.prato = function(req, res) {
    const receitaIndex = req.params.id;

    const receita = receitas.find(function(receita) {
        return receitaIndex == receita.id;
    });

    if (!receita) {
        return res.render("frontend/not-found");
    }
    return res.render("frontend/prato", { item: receita });
};

exports.notFound = function(req, res) {
    res.status(404).render("/frontend/not-found");
};