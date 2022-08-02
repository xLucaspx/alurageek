(() => {
    const formLogin = document.querySelector(".form__login");
    let loginCadastrado = "aluno@alura.com";
    let senhaCadastrada = "alura123";

    formLogin.addEventListener("submit", function (evento) {
        evento.preventDefault();
        let loginInformado;
        let senhaInformada;

        const inputs = this.querySelectorAll(".campo__texto");
        inputs.forEach(input => {
            if (input.dataset.tipo == "email") loginInformado = input.value;

            if (input.dataset.tipo == "senha") senhaInformada = input.value;
        });

        if (loginInformado == loginCadastrado && senhaInformada == senhaCadastrada) window.location.href = "https://xlucaspx.github.io/alurageek/produtos.html";

        else alert("Usuário ou senha inválidos. Tente novamente!");
    });
})();