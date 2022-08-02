export const detalhaProduto = async (id) => {
    const resposta = await fetch(`https://my-json-server.typicode.com/xlucaspx/alurageek/produtos/${id}`);

    if (resposta.ok) return resposta.json();

    throw new Error("Não foi possível exibir as informações do produto");
}