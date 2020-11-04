document.querySelector(".boton-barras").addEventListener("click", ()=>{
    document.querySelector(".listas").classList.toggle("show");
});

document.querySelector(".listas").addEventListener("click", ()=>{
    document.querySelector(".listas").classList.toggle("show");
});





ScrollReveal().reveal('.ShowCase');
ScrollReveal().reveal('.cards', {delay: 500});
ScrollReveal().reveal('.div-art-uno', {delay: 500});
ScrollReveal().reveal('.SeccionDos', {delay: 500});
ScrollReveal().reveal('.articuloDos', {delay: 500});