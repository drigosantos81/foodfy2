const fs = require('fs');
const receitas = require('../dados.js');
const newReceitas = require('../dados.json')

// Exibe a página inicial do Admin
exports.index = function(req, res) {
    return res.render("admin/index", { items: receitas });
};

// Exibe a página de detalhamento do prato
exports.exibe = function(req, res) {
    const receitaIndex = req.params.id;

    const receita = receitas.find(function(receita) {
        return receitaIndex == receita.id;
    });

    if (!receita) {
        return res.render("frontend/not-found");
    }

    return res.render("admin/prato", { item: receita });
};

// Exibe o formulário de edição com os campos preenchidos
exports.edita = function(req, res) {
    const receitaIndex = req.params.id;

    const receita = receitas.find(function(receita) {
        return receitaIndex == receita.id;
    });

    if (!receita) {
        return res.render("frontend/not-found");
    }

    return res.render("admin/editar", { item: receita });
};

// Executa o comando de atualizar os dados do registro
exports.put = function(req, res) {
    const { id } = req.body;
    let index = 0;

    const foundPrato = newReceitas.find(function(prato, foundIndex) {
        if (id == prato.id) {
            index = foundIndex;
            return true;
        };
    });
    
    if (!foundPrato){
        return res.send("Instructor não encontrado.");
    }

    const prato = {
        ...foundPrato,
        ...req.body,
        id: Number(req.body.id),
    }

    fs.writeFile("dados.js", JSON.stringify(data, null, 2), function(err) {
        if (err) {
            return res.send("Erro ao salvar a informação");
        }
        return res.redirect(`admin/prato`); // /${id}
    })
};



exports.criar = function(req, res) {
    return res.render("admin/criar");
};

exports.post = function(req, res) {
    return res.redirect("admin/index");
};

exports.delete = function(req, res) {
    return res.redirect("admin/index");
};

exports.notFound = function(req, res) {
    res.status(404).render("/frontend/not-found");
};