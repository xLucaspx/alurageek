export const criaProdutoObj = async (urlImagem, altImagem, nome, preco, descricao) => {
    const resposta = await fetch(`https://my-json-server.typicode.com/xlucaspx/alurageek/produtos`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            urlImagem: urlImagem,
            altImagem: altImagem,
            nome: nome,
            preco: preco,
            descricao: descricao
        })
    });

    if (resposta.ok) return resposta.body;

    throw new Error("Não foi possível adicionar o produto");
}