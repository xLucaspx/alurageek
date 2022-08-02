import { buscaProdutos } from "./busca-produtos.js";
import { criaProdutoCard } from "./cria-produto-card.js";

export const mostraProdutos = async () => {
    try {
        const listaProdutos = document.querySelector(".produtos__lista");
        listaProdutos.innerHTML = "";
        const produtos = await buscaProdutos();

        produtos.forEach(produto => {
            listaProdutos.appendChild(criaProdutoCard(produto.urlImagem, produto.altImagem, produto.nome, produto.preco, produto.id));
        });
    } catch (erro) {
        console.log(erro);
        alert("Ocorreu um erro ao tentar exibir os produtos");
    }
}