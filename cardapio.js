const nomeDoRestaurante = "Sabor da Ju";
const container = document.getElementById("produtos");

async function carregarProdutos() {
    try {
        const resposta = await fetch(
            https://tech4produtos.fly.dev/produtos/restaurante=${encodeURIComponent(nomeDoRestaurante)}
        );

        if (!resposta.ok) {
            throw new Error("Erro ao buscar produtos");
        }

        const dados = await resposta.json();
        const produtos = Array.isArray(dados)
            ? dados
            : dados.produtos || [];

        container.innerHTML = "";

        produtos.forEach(produto => {
            const card = document.createElement("div");
            card.className = "card-produto";

            const imagem = document.createElement("img");
            imagem.src = produto.imagem;
            imagem.alt = produto.nome;

            const nome = document.createElement("h3");
            nome.textContent = produto.nome;

            const descricao = document.createElement("p");
            descricao.textContent = produto.descricao;

            card.append(imagem, nome, descricao);

            card.addEventListener("click", () => {
                window.location.href =
                    detalhes.html?id=${encodeURIComponent(produto.id)};
            });

            container.appendChild(card);
        });

    } catch (erro) {
        console.error(erro);
        container.textContent = "Erro ao carregar o cardápio.";
    }
}

if (container) {
    carregarProdutos();
}