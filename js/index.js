import { criaSecaoProdutos } from "./modulos/cria-secao-produtos.js";
import { detalhaProduto } from "./modulos/detalha-produto.js";
import { criaProdutoCardSimples } from "./modulos/cria-card-simples.js";

(async () => {
    const secao1 = document.querySelector(".produtos-1");
    const secao2 = document.querySelector(".produtos-2");
    const secao3 = document.querySelector(".produtos-3");

    secao1.innerHTML = criaSecaoProdutos("Vestuário");
    secao2.innerHTML = criaSecaoProdutos("Consoles");
    secao3.innerHTML = criaSecaoProdutos("Star Wars");

    const lista1 = secao1.querySelector(".produtos__lista");
    const lista2 = secao2.querySelector(".produtos__lista");
    const lista3 = secao3.querySelector(".produtos__lista");

    const ids1 = [13, 14, 15, 16, 17, 18];
    const ids2 = [7, 8, 9, 10, 11, 12];
    const ids3 = [1, 2, 3, 4, 5, 6];

    ids1.forEach(id => {
        detalhaProduto(id).then(resposta => {
            lista1.appendChild(criaProdutoCardSimples(resposta.urlImagem, resposta.altImagem, resposta.nome, resposta.preco, resposta.id));
        });
    });

    ids2.forEach(id => {
        detalhaProduto(id).then(resposta => {
            lista2.appendChild(criaProdutoCardSimples(resposta.urlImagem, resposta.altImagem, resposta.nome, resposta.preco, resposta.id));
        });
    });

    ids3.forEach(id => {
        detalhaProduto(id).then(resposta => {
            lista3.appendChild(criaProdutoCardSimples(resposta.urlImagem, resposta.altImagem, resposta.nome, resposta.preco, resposta.id));
        });
    });
})();