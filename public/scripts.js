const currentPage = location.pathname;
const menuItens = document.querySelectorAll(".links a");

for (item of menuItens) {
    if (currentPage.includes(item.getAttribute("href"))) {
        item.classList.add("active");
    }
}

function modal() {
    const modal = document.querySelector('.modal');
    const grids = document.querySelectorAll('.receita');
    for (let grid of grids) {
        grid.addEventListener("click", function() {
            const imageId = grid.getAttribute("id");
            const titulo = grid.querySelector("h3").innerHTML;
            const dono = grid.querySelector("p").innerHTML;

            modal.classList.add("active");
            
            modal.querySelector("img").src = imageId;
            modal.querySelector("h3").innerHTML = titulo;
            modal.querySelector("p").innerHTML = dono;
        });
    }

    document.querySelector(".close").addEventListener("click", function(event) {
        event.preventDefault(event);
        modal.classList.remove("active");
    });
}

    document.getAttribute("id").addEventListener("click", function() {
    window.location.href = `/prato/${imageId}`;
});

function descPrato() {
    const grids = document.querySelectorAll('.receita');
    for (let grid of grids) {
        grid.addEventListener("click", function() {
            const pratoId = grid.getAttribute("id");
            window.location.href = `/prato/${pratoId}`;
        });
    }
}

function ocultaIng() {
    document.getElementById("ingredientes").style.display = "none";
    document.getElementById("hideIng").style.display = "none";
    document.getElementById("showIng").style.display = "block";
}

function exibeIng() {
    document.getElementById("ingredientes").style.display = "block";
    document.getElementById("hideIng").style.display = "block";
    document.getElementById("showIng").style.display = "none";
}

function ocultaPreparo() {
    document.getElementById("preparo").style.display = "none";
    document.getElementById("hidePreparo").style.display = "none";
    document.getElementById("showPreparo").style.display = "block";
}

function exibePreparo() {
    document.getElementById("preparo").style.display = "block";
    document.getElementById("hidePreparo").style.display = "block";
    document.getElementById("showPreparo").style.display = "none";
}

function ocultaInfo() {
    document.getElementById("infoAd").style.display = "none";
    document.getElementById("hideInfo").style.display = "none";
    document.getElementById("showInfo").style.display = "block";
}

function exibeInfo() {
    document.getElementById("infoAd").style.display = "block";
    document.getElementById("hideInfo").style.display = "block";
    document.getElementById("showInfo").style.display = "none";
}

function addIngredient() {
    const ingredients = document.querySelector("#ingredientes");
    const campoContainer = document.querySelectorAll("#ingrediente");

    // Clone do último campo pr eenchido
    const newCampo = campoContainer[campoContainer.length - 1].cloneNode(true);

    // Não adiciona novo input se o último estiver vazio
    if (newCampo.children[0].value == "") {
        return false;
    }

    // Deixa o novo input vazio
    newCampo.children[0].value = "";
    ingredients.appendChild(newCampo);
    
}

function addPreparo() {
    const preparos = document.querySelector("#preparos");
    const campoContainer = document.querySelectorAll("#preparo");

    const newCampo = campoContainer[campoContainer.length - 1].cloneNode(true);

    if (newCampo.children[0].value == "") {
        return false;
    }

    newCampo.children[0].value = "";
    preparos.appendChild(newCampo);
    
}
