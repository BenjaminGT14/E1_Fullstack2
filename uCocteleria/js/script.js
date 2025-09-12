function enviarMensaje() {
    alert("¡Gracias por contactarnos! Te responderemos pronto 🍸");
}

// Buscador: usa el input con id #search-input
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.card');

    if (searchInput && cards.length > 0) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase();
            cards.forEach(card => {
                const nombreElem = card.querySelector('h3');
                const nombre = nombreElem ? nombreElem.textContent.toLowerCase() : '';
                if (nombre.includes(query)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});


