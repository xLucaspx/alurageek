export const criaSecaoProdutos = (titulo) => {
    const conteudo = `
        <div class="produtos-divisao">
            <h3 class="produtos__titulo titulo-padrao">${titulo}</h3>
            <a href="produtos.html" class="produtos__link">Ver tudo</a>
        </div>
        <ul class="produtos__lista"></ul>
    `
    return conteudo
}