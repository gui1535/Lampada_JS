const ligado = document.getElementById('ligar');
const desligado = document.getElementById('desligar');
const lampada = document.getElementById('lampada');

function lampadaLigada(){
    lampada.src = './img/ligada.jpg';

    document.getElementById('estado-lampada').value = "Lampada Ligada"
}

function lampadaDesligada(){
    lampada.src = './img/desligada.jpg';
}

function quebrarLampada(){
    lampada.src = './img/quebrada.jpg';
}

lampada.addEventListener('dblclick', quebrarLampada)

ligado.addEventListener('click', lampadaLigada); // Captura click

desligado.addEventListener('click', lampadaDesligada); // Captura click