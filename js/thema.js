function thema() {
    let trilho = document.querySelector(".trilho");
    let trilhoo = document.querySelector(".trilhoo");
    let header = document.querySelector(".header");
    let textoHome = document.querySelector(".home")
    let botao = document.querySelector(".botao");
    let container = document.querySelector(".container");
    let carrinho = document.querySelector(".carrinho")
    let carrinhoContainer = document.querySelector(".carrinho_container")
    let imagens = document.querySelector(".imagens")
    let compras = document.querySelector(".produtos_escolhido")
    let tituloMinhas = document.querySelector(".carrinho_minhas")
    let valorTotal = document.querySelector(".valor")
    let menu_lista = document.querySelector(".menu_lista")
    let a = document.querySelectorAll(".a")
    
    textoHome.classList.toggle("dark")
    trilho.classList.toggle("dark")
    header.classList.toggle("dark")
    botao.classList.toggle("dark")
    container.classList.toggle("dark")
    carrinho.classList.toggle("dark")
    carrinhoContainer.classList.toggle("dark")
    imagens.classList.toggle("dark")
    compras.classList.toggle("dark")
    tituloMinhas.classList.toggle("dark")
    valorTotal.classList.toggle("dark")
    trilhoo.classList.toggle("dark")
    menu_lista.classList.toggle("dark")
    a.classList.toggle("dark")

    if(trilhoo.classList.contains("dark")) {
        trilhoo.textContent = "Claro"
    } else {
        trilhoo.textContent = "Escuro"
    }

}

function menu() {
    let menu = document.getElementById("menu");
    let iconMenu = document.querySelector(".menu")

    menu.classList.toggle("menu_lista")
    iconMenu.classList.toggle("dark")
}