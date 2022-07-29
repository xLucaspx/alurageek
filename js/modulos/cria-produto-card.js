export const criaProdutoCard = (urlImagem, altImagem, nome, preco, id) => {
    const produto = document.createElement("li");
    const precoReal = parseFloat(preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    const conteudo = `
         <a href="product-view.html?id=${id}" class="produto__link" title="Ver produto">
            <img src=${urlImagem} alt="${altImagem}" width="176" height="174" class="produto__img">
            <h4 class="produto__nome">${nome}</h4>
            <p class="produto__preco">${precoReal}</p>
        </a>
        <div class="produtos__botoes">
            <button class="produto__btn produto__btn--editar" title="Editar produto"></button>
            <button class="produto__btn produto__btn--deletar" title="Deletar produto"></button>
        </div>
    `

    produto.classList.add("produtos__card");
    produto.dataset["id"] = id;
    produto.innerHTML = conteudo;
    return produto;
}