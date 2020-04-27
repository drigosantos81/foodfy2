const modal = document.querySelector('.modal');
const grids = document.querySelectorAll('.receita');

for (let grid of grids) {
    grid.addEventListener("click", function() {
        const imageId = grid.getAttribute("id");
        const titulo = grid.getElementsByTagName("h3").innerHTML;
        const dono = grid.getElementsByTagName("p");

        modal.classList.add("active");
        
        modal.querySelector("img").src=`./img/${imageId}.png`;
        modal.querySelector("h3").innerHTML = `${titulo}`;
        modal.querySelector("p").innerHTML = `${dono}`;
        // modal.querySelector("h3").innerHTML = `${titulo}`;
        // modal.querySelector("p").innerHTML = `${dono}`;
    })
}

document.querySelector(".close").addEventListener("click", function(event) {
    event.preventDefault(event)
    modal.classList.remove("active")
})


// const modal = document.querySelector('.modal');
// const grids = document.querySelectorAll('.pratos');

// for (let grid of grids) {
//     grid.addEventListener("click", function() {
//         const imageId = grid.getAttribute("id");
//         const titulo = grid.getElementsByTagName("h3");
//         const dono = grid.getElementsByTagName("p");
//         modal.classList.add("active");
//         modal.querySelector("iframe").src=`/img/${imageId}.png`;
//     })
// }

// document.querySelector(".close").addEventListener("click", function(event) {
//     event.preventDefault(event);
//     modal.classList.remove("active");
// })

// ./img/burger.png