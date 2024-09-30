document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('facil').checked = true
    criarTabuleiro();
    
    const inputNiveis = document.querySelectorAll('input[name="nivel"]')
    
    inputNiveis.forEach(nivel => {
        nivel.addEventListener('click', criarTabuleiro)
    })

    document.getElementById('start').addEventListener('click', iniciarJogo)
});

function criarTabuleiro() {
    const nivelSelecionado = document.querySelector('input[name="nivel"]:checked').value
    const tabuleiro = document.querySelector('.tabuleiro')
    tabuleiro.innerHTML = ''

    let numCartas

    if (nivelSelecionado === 'facil') {
        numCartas = 8
    } else if (nivelSelecionado === 'medio') {
        numCartas = 12
    } else if (nivelSelecionado === 'dificil') {
        numCartas = 16
    }

    for (let i = 0; i < numCartas; i++) {
        const carta = document.createElement('img')
        Object.assign(carta, {
            id: `img${i}`,
            src: '../images/carta_costas.png',
            alt: 'Carta do jogo'
        })
        carta.classList.add('cartas')
        tabuleiro.appendChild(carta)
    }
}

async function iniciarJogo() {
    console.log('Jogo iniciado');
}