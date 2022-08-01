export const criaProductView = (urlImagem, altImagem, nome, preco, descricao) => {
    const productView = document.createElement("div");
    const precoReal = parseFloat(preco).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    const conteudo = `
        <img src=${urlImagem} alt="${altImagem}" width="250" height="250" class="product-view__img">

        <div class="product-view__divisao">
            <h2 class="product-view__titulo titulo-padrao">${nome}</h2>
            <p class="product-view__preco">${precoReal}</p>
            <p class="product-view__descricao">${descricao}</p>
        </div>
    `
    productView.classList.add("produto");
    productView.innerHTML = conteudo;
    return productView;
}