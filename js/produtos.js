let valor = 0;
let compraTotal = document.querySelector(".valor")
let sacola = document.querySelector(".carrinho_escolhido");

function adicionar() {
    let produtos = document.getElementById("select").value;
    let nomeProduto = produtos.split("-")[0];
    let valorProduto = produtos.split("R$")[1]
    let quantidade = document.getElementById("qtd").value
    let carrinhoVazio = document.querySelector(".produtos_escolhido")
    
    
    carrinhoVazio.textContent = ""

    sacola.innerHTML += `
    <p class="produtos_escolhido">
    <span class="produto_destaque">${quantidade}x</span>
     ${nomeProduto} de
     <span class="produto_destaque">R$${valorProduto}</span>
     </p>`

    const valorTotal = valorProduto * quantidade;

    valor = valor + valorTotal

    compraTotal.textContent = `R$${valor}`

}

function limpar() {

    valor = 0;
    compraTotal.textContent = "R$ 0"

    sacola.innerHTML = "<p class='produtos_escolhido'>Carrinho Vazio</p>"

}