// Função executada quando o DOM estiver totalmente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Navbar hamburger menu + overlay
    const hamburger = document.getElementById("hamburger-menu");
    const nav = document.querySelector(".navbar nav");
    const overlay = document.getElementById("navbar-overlay");

    function closeMenu() {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        overlay.classList.remove("active");
    }

    hamburger.addEventListener("click", (e) => {
        hamburger.classList.toggle("open");
        nav.classList.toggle("open");
        overlay.classList.toggle("active");
        e.stopPropagation();
    });

    overlay.addEventListener("click", closeMenu);

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    // Animação de fade-in nos cards (executa apenas na página de downloads)
    const cards = document.querySelectorAll(".card");
    if (cards.length > 0) {
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.add("visible");
            }, 120 * i);
        });

        // Filtro de busca (executa apenas na página de downloads)
        const searchInput = document.getElementById("searchInput");
        if (searchInput) {
            searchInput.addEventListener("input", function () {
                const value = this.value.toLowerCase();
                cards.forEach((card) => {
                    const text = card
                        .querySelector("p")
                        .textContent.toLowerCase();
                    card.style.display = text.includes(value) ? "flex" : "none";
                });
            });
        }
    }
});
