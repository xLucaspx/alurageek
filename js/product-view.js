import { detalhaProduto } from "./modulos/detalha-produto.js";
import { criaProductView } from "./modulos/cria-product-view.js";

(async () => {
    const pegaUrl = new URL(window.location);
    const id = pegaUrl.searchParams.get("id");
    const productView = document.querySelector(".product-view");

    try {
        const dados = await detalhaProduto(id);
        const urlImagem = dados.urlImagem;
        const altImagem = dados.altImagem;
        const nome = dados.nome;
        const preco = dados.preco;
        const descricao = dados.descricao;

        document.title = nome;
        productView.appendChild(criaProductView(urlImagem, altImagem, nome, preco, descricao));
    } catch (erro) {
        console.log(erro);
    }
})();