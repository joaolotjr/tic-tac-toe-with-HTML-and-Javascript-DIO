var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado')

mudarjogador('X')

function escolheQuadrado (id) {

    //console.log(id);

    var quadrado = document.getElementById(id);

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000'
}


function mudarjogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}