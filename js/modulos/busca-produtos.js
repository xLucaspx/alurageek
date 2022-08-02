export const buscaProdutos = async () => {
    const resposta = await fetch(`https://my-json-server.typicode.com/xlucaspx/alurageek/produtos`);

    if (resposta.ok) return resposta.json();

    throw new Error("Não foi possível listar os produtos");
}