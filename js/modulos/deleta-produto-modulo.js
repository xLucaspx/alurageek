export const deletaProduto = async (id) => {
    const resposta = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    });

    if (!resposta.ok) throw new Error("Não foi possível remover o produto");
}