import { buscaProdutos } from "./modulos/busca-produtos.js";
import { detalhaProduto } from "./modulos/detalha-produto.js";
import { criaProdutoCardSimples } from "./modulos/cria-card-simples.js";

(async () => {
    let ids = [];
    let maximo = (await buscaProdutos()).length;

    const listaProdutos = document.querySelector(".produtos__lista");

    while (ids.length < 6) {
        let id = Math.floor(Math.random() * maximo);

        for (let i = 0; i < ids.length; i++) {
            if (id == ids[i] || id <= 0) id++;
        }

        if (id > maximo) id--;

        ids.push(id);
    }

    ids.forEach(id => {
        detalhaProduto(id).then((dados) => {
            const urlImagem = dados.urlImagem;
            const altImagem = dados.altImagem;
            const nome = dados.nome;
            const preco = dados.preco;

            const produto = criaProdutoCardSimples(urlImagem, altImagem, nome, preco, id);
            listaProdutos.appendChild(produto);
        });
    });
})();