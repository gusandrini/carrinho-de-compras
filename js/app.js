// add variavel que acumule os valores
let totalGeral = 0;
// variavel para carrinho começar sem nenhum produto
document.getElementById('lista-produtos').innerHTML = 'Nenhum produto';
// variavel para carrinho começar sem nenhum valor
document.getElementById('valor-total').innerHTML = 'R$ 0';




function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
   // calcular p preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    //adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto}<span class="texto-azul">R$${preco}</span>
  </section>`
    //atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    //limpar o espaço para por quantidade 
    document.getElementById('quantidade').value = '';

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = 'Nenhum produto';
    document.getElementById('valor-total').innerHTML = 'R$ 0';

}