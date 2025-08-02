window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        window.location.href = "mobile.html"; // Altere para o nome do seu arquivo
    } else {
        window.location.href = "mobile.html";
    }
});

// Checa logo ao carregar a página
if (window.innerWidth <= 768) {
    window.location.href = "mobile.html";
}
