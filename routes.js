const express = require('express');
const routes = express.Router();
const front = require('./controllers/front');
const admin = require('./controllers/admin');

// HOME/START
routes.get("/", function(req, res) {
    return res.redirect("/frontend");
});

// FRONTEND
routes.get("/frontend", front.index);
routes.get("/sobre", front.sobre);
routes.get("/receitas", front.receitas);
routes.get("/prato/:id", front.prato);
routes.use("/not-found", front.notFound);

//ADMIN
routes.get("/admin", admin.index);
routes.get("/admin/prato/:id", admin.exibe);

// routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
// routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes;

// routes.use(function(req, res) {
//     res.status(404).render("/frontend/not-found");
// });
