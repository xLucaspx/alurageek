import { buscaProdutos } from "./modulos/busca-produtos.js";
import { criaProdutoCardSimples } from "./modulos/cria-card-simples.js";

(() => {
    const pesquisa = document.querySelector(".pesquisa-produto");
    const pagina = document.querySelector(".conteudo");

    pesquisa.addEventListener("submit", function (evento) {
        evento.preventDefault();
        const resultadoPesquisa = `
            <section class="produtos container" id="conteudo-principal">
                <div class="produtos-divisao">
                    <h3 class="produtos__titulo titulo-padrao">Resultados da pesquisa</h3>
                    <a href="produtos.html" class="produtos__link">Todos os produtos</a>
                </div>
    
                <ul class="produtos__lista"></ul>
            </section>
        `
        pagina.innerHTML = resultadoPesquisa;

        const barraPesquisa = document.querySelector(".pesquisa-produto__input");
        const expressao = new RegExp(barraPesquisa.value, "i");
        const listaProdutos = document.querySelector(".produtos__lista");

        buscaProdutos().then(resposta => {
            let produtos = resposta;

            for (let i = 0; i < produtos.length; i++) {
                const produto = produtos[i];
                const nome = produto.nome;

                if (expressao.test(nome)) {
                    listaProdutos.appendChild(criaProdutoCardSimples(produto.urlImagem, produto.altImagem, produto.nome, produto.preco, produto.id));
                }
            }
        });
    });
})();