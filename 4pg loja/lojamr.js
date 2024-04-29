document.addEventListener("DOMContentLoaded", async function() {
    const sideNavbar = document.getElementById("side-navbar");
    const menuToggle = document.getElementById("menu-toggle");

    const sideNavSections = [
        { title: "Destaques", links: ["Mais Vendidos", "Novidades na Amazon", "Produtos em alta"] },
        { title: "Conteúdo digital e dispositivos", links: ["Amazon Fire TV", "Amazon Music", "Prime Video", "Aplicativos Amazon", "Dispositivos Kindle e eBooks", "Echo e Alexa", "Audiolivros Audible"] },
        { title: "Comprar por categoria", links: ["Alimentos e Bebidas", "Automotivo", "Bebês", "Beleza e Cuidados Pessoais", "Bolsas, Malas e Mochilas", "Brinquedos e Jogos", "Casa, Jardim e Limpeza", "Celulares e Comunicação", "Computadores e Informática", "Cozinha", "Eletrônicos, TV e Áudio", "Esportes, Aventura e Lazer", "Ferramentas e Construção", "Filmes, Séries e Música", "Games e Consoles", "Livros", "Papelaria e Escritório", "Pet Shop", "Roupas, Calçados e Acessórios", "ver menos"] }
    ];

    // Criação do menu lateral
    function createSideNavbar() {
        sideNavSections.forEach(section => {
            const sectionTitle = document.createElement("h2");
            sectionTitle.textContent = section.title;
            sideNavbar.appendChild(sectionTitle);
            const sectionList = document.createElement("ul");
            section.links.forEach(link => {
                const listItem = document.createElement("li");
                const anchor = document.createElement("a");
                anchor.textContent = link;
                anchor.href = "#"; // Defina o link adequado para cada item
                listItem.appendChild(anchor);
                sectionList.appendChild(listItem);
            });
            sideNavbar.appendChild(sectionList);
        });
    }

    // Função para alternar a classe "active" no menu lateral
    function toggleMenu() {
        sideNavbar.classList.toggle("active");
    }

    // Event listener para o clique no botão do menu hamburguer
    menuToggle.addEventListener("click", function() {
        toggleMenu();
    });

    // Renderizar os produtos
    const products = await fetchProducts();
    const featuredProductsContainer = document.getElementById("featuredProducts");

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        const image = document.createElement("img");
        image.src = product.image;
        image.alt = product.name;

        const name = document.createElement("h3");
        name.textContent = product.name;

        const buyButton = document.createElement("button");
        buyButton.textContent = "Compre Já";
        buyButton.classList.add("buy-button");
        buyButton.onclick = function() {
            window.open(product.buyLink, "_blank");
        };

        productDiv.appendChild(image);
        productDiv.appendChild(name);
        productDiv.appendChild(buyButton);

        featuredProductsContainer.appendChild(productDiv);
    });
});

document.getElementById('cart-icon').addEventListener('click', function() {
    window.location.href = 'caminho_para_a_pagina_do_carrinho.html';
});

async function fetchProducts() {
    try {
        // Simulação de uma chamada de API para buscar os produtos
        // Aqui você pode substituir pela lógica real de chamada de API
        const products = [
            { name: "Produto 1", image: "imagens/echo.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-1" },
            { name: "Produto 2", image: "imagens/teclado.png", buyLink: "https://www.amazon.com/link-de-compra-produto-2" },
            { name: "Produto 3", image: "imagens/fire stick.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-3" },
            { name: "Produto 4", image: "imagens/produto4.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-4" },
            { name: "Produto 5", image: "imagens/produto5.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-5" },
            { name: "Produto 6", image: "imagens/produto6.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-6" },
            { name: "Produto 7", image: "imagens/produto7.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-7" },
            { name: "Produto 8", image: "imagens/produto8.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-8" },
            { name: "Produto 9", image: "imagens/produto9.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-9" },
            { name: "Produto 10", image: "imagens/produto10.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-10" },
            { name: "Produto 11", image: "imagens/produto11.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-11" },
            { name: "Produto 12", image: "imagens/produto12.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-12" },
            { name: "Produto 13", image: "imagens/produto13.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-13" },
            { name: "Produto 14", image: "imagens/produto14.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-14" },
            { name: "Produto 15", image: "imagens/produto15.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-15" },
            { name: "Produto 16", image: "imagens/produto16.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-16" },
            { name: "Produto 17", image: "imagens/produto17.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-17" },
            { name: "Produto 18", image: "imagens/produto18.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-18" },
            { name: "Produto 19", image: "imagens/produto19.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-19" },
            { name: "Produto 20", image: "imagens/produto20.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-20" },
            { name: "Produto 21", image: "imagens/produto21.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-21" },
            { name: "Produto 22", image: "imagens/produto22.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-22" },
            { name: "Produto 23", image: "imagens/produto23.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-23" },
            { name: "Produto 24", image: "imagens/produto24.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-24" },
            { name: "Produto 25", image: "imagens/produto25.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-25" },
            { name: "Produto 26", image: "imagens/produto26.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-26" },
            { name: "Produto 27", image: "imagens/produto27.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-27" },
            { name: "Produto 28", image: "imagens/produto28.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-28" },
            { name: "Produto 29", image: "imagens/produto29.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-29" },
            { name: "Produto 30", image: "imagens/produto30.jpg", buyLink: "https://www.amazon.com/link-de-compra-produto-30" }
        ];
        return products;
    } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
        return [];
    }
}

function updateCartItemCount(count) {
    // Função para atualizar a contagem de itens no carrinho
    // Implemente conforme necessário
}
