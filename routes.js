const express = require('express');
const routes = express.Router();
const front = require('./controllers/front');

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

// routes.use(function(req, res) {
//     res.status(404).render("/frontend/not-found");
// });

//ADMIN
routes.get("/admin", function(req, res) {
    return res.render("admin/index");
});

module.exports = routes;