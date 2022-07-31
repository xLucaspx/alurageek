import { detalhaProduto } from "./modulos/detalha-produto.js";
import { editaProduto } from "./modulos/edita-produto-modulo.js";

(async () => {
    const pegaUrl = new URL(window.location);
    const id = pegaUrl.searchParams.get("id");

    const form = document.querySelector(".editar-produto__form");
    const urlImagem = document.querySelector("#editar-produto__imagem");
    const altImagem = document.querySelector("#editar-produto__alt");
    const nome = document.querySelector("#editar-produto__nome-produto");
    const preco = document.querySelector("#editar-produto__preco");
    const descricao = document.querySelector("#editar-produto__descricao");

    try {
        const dados = await detalhaProduto(id);
        urlImagem.value = dados.urlImagem;
        altImagem.value = dados.altImagem;
        nome.value = dados.nome;
        preco.value = dados.preco;
        descricao.value = dados.descricao;
    } catch (erro) {
        console.log(erro);
    }

    form.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        try {
            await editaProduto(id, urlImagem.value, altImagem.value, nome.value, preco.value, descricao.value);
            window.location.href = "https://xlucaspx.github.io/alurageek/produtos.html";
        }
        catch (erro) {
            console.log(erro);
        }
    });
})();


