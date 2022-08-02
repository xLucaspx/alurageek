export const editaProduto = async (id, urlImagem, altImagem, nome, preco, descricao) => {
    const resposta = await fetch(`https://my-json-server.typicode.com/xlucaspx/alurageek/produtos/${id}`, {
        method: "PUT",
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

    if (resposta.ok) return resposta.json;

    throw new Error("Não foi possível atualizar as informações do produto");
}