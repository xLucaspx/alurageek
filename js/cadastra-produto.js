import { criaProdutoObj } from "./modulos/cria-produto-obj.js";

(() => {
    const form = document.querySelector(".cadastro-produto__form");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();

        try {
            const urlImagem = evento.target.querySelector("#cadastro-produto__imagem").value;
            const altImagem = evento.target.querySelector("#cadastro-produto__alt").value;
            const nome = evento.target.querySelector("#cadastro-produto__nome-produto").value;
            const preco = evento.target.querySelector("#cadastro-produto__preco").value;
            const descricao = evento.target.querySelector("#cadastro-produto__descricao").value;

            criaProdutoObj(urlImagem, altImagem, nome, preco, descricao).then(alert("Produto adicionado com sucesso!"));
        } catch (error) {
            console.log(error);
        }
    });
})();