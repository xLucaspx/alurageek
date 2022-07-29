export const editaProduto = async (id, urlImagem, altImagem, nome, preco, descricao) => {
    const resposta = await fetch(`http://localhost:3000/produtos/${id}`, {
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

    throw new Error("Não fo possível atualizar as informações do produto");
}