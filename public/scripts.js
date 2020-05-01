const modal = document.querySelector('.modal');
const grids = document.querySelectorAll('.receita');
const gridsPr = document.querySelectorAll('.receitaPr');

function modal() {
    for (let grid of grids) {
        grid.addEventListener("click", function() {
            const imageId = grid.getAttribute("id");
            const titulo = grid.querySelector("h3").innerHTML;
            const dono = grid.querySelector("p").innerHTML;

            modal.classList.add("active");
            
            modal.querySelector("img").src=`/${imageId}.png`;
            modal.querySelector("h3").innerHTML = `${titulo}`;
            modal.querySelector("p").innerHTML = `${dono}`;
        });
    }

    document.querySelector(".close").addEventListener("click", function(event) {
        event.preventDefault(event);
        modal.classList.remove("active");
    });
}

for (let gridPr of gridsPr) {
    gridPr.addEventListener("click", function() {
        const pratoId = gridPr.getAttribute("id");
        window.location.href = `/prato?id=${pratoId}`;
    });
}
