const receitas = require('../dados.js');

exports.index = function(req, res) {
    return res.render("admin/index", {items: receitas});
};