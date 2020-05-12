const receitas = require('../dados.js');

exports.index = function(req, res) {
    return res.render("admin/index", { items: receitas });
};

exports.exibe = function(req, res) {
    const receitaIndex = req.params.id;

    const receita = receitas.find(function(receita) {
        return receitaIndex == receita.id;
    });

    if (!receita) {
        return res.render("frontend/not-found");
    }

    return res.render("admin/prato", { item: receita });
}

exports.notFound = function(req, res) {
    res.status(404).render("/frontend/not-found");
};