import { criaProdutoObj } from "./modulos/cria-produto-obj.js";

(() => {
    const form = document.querySelector(".cadastro-produto__form");

    form.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const inputs = evento.target.querySelectorAll(".campo__texto");

        try {
            const urlImagem = evento.target.querySelector("#cadastro-produto__imagem").value;
            const altImagem = evento.target.querySelector("#cadastro-produto__alt").value;
            const nome = evento.target.querySelector("#cadastro-produto__nome-produto").value;
            const preco = evento.target.querySelector("#cadastro-produto__preco").value;
            const descricao = evento.target.querySelector("#cadastro-produto__descricao").value;

            criaProdutoObj(urlImagem, altImagem, nome, preco, descricao);
            alert("Produto adicionado com sucesso!");
            inputs.forEach(input => {
                input.value = "";
            });
        
        } catch (error) {
            console.log(error);
        }
    });
})();