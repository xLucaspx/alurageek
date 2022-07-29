export const detalhaProduto = async (id) => {
    const resposta = await fetch(`http://localhost:3000/produtos/${id}`);

    if (resposta.ok) return resposta.json();

    throw new Error("Não foi possível exibir as informações do produto");
}