const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const container = document.getElementById("produto-detalhes");

async function carregarDetalhes() {
    try {
        if (!id) {
            throw new Error("Produto não encontrado.");
        }

        const resposta = await fetch(
            https://tech4produtos.fly.dev/produtos/${encodeURIComponent(id)}
        );

        if (!resposta.ok) {
            throw new Error("Erro ao buscar o produto.");
        }

        const produto = await resposta.json();

        container.innerHTML = "";

        const imagem = document.createElement("img");
        imagem.src = produto.imagem;
        imagem.alt = produto.nome;

        const nome = document.createElement("h2");
        nome.textContent = produto.nome;

        const descricao = document.createElement("p");
        descricao.textContent = produto.descricao;

        const tipo = document.createElement("p");
        tipo.textContent = "Produto: " + produto.produto;

        const restaurante = document.createElement("p");
        restaurante.textContent = "Restaurante: " + produto.restaurante;

        container.append(imagem, nome, descricao, tipo, restaurante);

    } catch (erro) {
        console.error(erro);
        container.textContent = "Não foi possível carregar o produto.";
    }
}

if (container) {
    carregarDetalhes();
}