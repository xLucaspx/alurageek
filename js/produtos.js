import { deletaProduto } from "./modulos/deleta-produto-modulo.js";
import { mostraProdutos } from "./modulos/mostra-produtos.js";

(() => {
    let listaProdutos = document.querySelector(".produtos__lista");

    listaProdutos.addEventListener("click", async (evento) => {
        let btnDeletar = evento.target.className === "produto__btn produto__btn--deletar";
        let btnEditar = evento.target.className === "produto__btn produto__btn--editar";
        let produto = evento.target.closest(".produtos__card");
        let id = produto.dataset["id"];

        if (btnDeletar) {
            try {
                await deletaProduto(id);
                setTimeout(() => {
                    mostraProdutos();
                }, 500);
            } catch (erro) {
                console.log(erro);
            }
        }

        if (btnEditar) window.location.href = `https://xlucaspx.github.io/alurageek/editar-produto.html?id=${id}`;
    });

    mostraProdutos();
})();
