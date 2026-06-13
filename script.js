function filtrarConteudo() {
    // Pega o texto digitado e transforma em letras minúsculas
    let input = document.getElementById('busca').value.toLowerCase();
    
    // Pega todos os cards de informação
    let cards = document.getElementsByClassName('card');

    // Loop por todos os cards para ver se o texto bate com o título ou o parágrafo
    for (let i = 0; i < cards.length; i++) {
        let conteudoCard = cards[i].innerText.toLowerCase();
        
        if (conteudoCard.includes(input)) {
            cards[i].style.display = ""; // Mostra o card
        } else {
            cards[i].style.display = "none"; // Esconde o card
        }
    }
}