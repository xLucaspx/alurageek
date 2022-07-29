(() => {
    function valida(input) {
        const tipoInput = input.dataset.tipo;
        const spanErro = input.parentElement.querySelector(".form__erro");

        if (input.validity.valid) {
            input.classList.add("campo__texto--valido");
            input.classList.remove("campo__texto--invalido");
            spanErro.innerHTML = "";
        } else {
            input.classList.add("campo__texto--invalido");
            input.classList.remove("campo__texto--valido");
            spanErro.innerHTML = mostraMensagemErro(input, tipoInput);
        }
    }

    function mostraMensagemErro(input, tipoInput) {
        let mensagem = "";

        tiposErro.forEach(erro => {
            if (input.validity[erro]) {
                mensagem = mensagensErro[tipoInput][erro];
            }
        });
        return mensagem;
    }

    const tiposErro = [
        "valueMissing",
        "typeMismatch",
        "patternMismatch",
        "rangeUnderflow"
    ];

    const mensagensErro = {
        nome: {
            valueMissing: "O campo nome deve ser preenchido"
        },
        mensagem: {
            valueMissing: "O campo mensagem deve ser preenchido"
        },
        email: {
            valueMissing: "O campo email deve ser preenchido",
            typeMismatch: "O email digitado não é válido",
            patternMismatch: "O email digitado não é válido"
        },
        senha: {
            valueMissing: "O campo senha deve ser preenchido",
        },
        urlImagem: {
            valueMissing: "O endereço da imagem deve ser preenchido"
        },
        alt: {
            valueMissing: "A descrição da imagem deve ser preenchida"
        },
        nomeProduto: {
            valueMissing: "O nome do produto deve ser preenchido"
        },
        preco: {
            valueMissing: "O preço do produto deve ser preenchido",
            patternMismatch: 'Insira apenas números, separando as casas decimais com "."',
            rangeUnderflow: "O preço deve ser maior que R$ 0,00"
        },
        descricao: {
            valueMissing: "O campo descrição deve ser preenchido"
        }
    };

    const inputs = document.querySelectorAll(".campo__texto");

    inputs.forEach(input => {
        input.addEventListener("blur", () => {
            valida(input);
        });
    });
})();