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