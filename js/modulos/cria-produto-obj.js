export const criaProdutoObj = async (urlImagem, altImagem, nome, preco, descricao) => {
    const resposta = await fetch(`http://localhost:3000/produtos`, {
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