const ligado = document.getElementById('ligar');
const desligado = document.getElementById('desligar');
const lampada = document.getElementById('lampada');

// Verifica se lampada esta quebrada
function verificaLampada() {
    return lampada.src.indexOf('quebrada') > -1
}

// Ligar lampada
function lampadaLigada() {
    if (!verificaLampada()) {
        // imagem
        lampada.src = './img/ligada.jpg';
    }
}

// Desligar lampada
function lampadaDesligada() {

    // Verificando se lampada ja esta quebrada
    if (!verificaLampada()) {
        lampada.src = './img/desligada.jpg';
    }
}

// Quebrar lampada
function quebrarLampada() {

    // Imagem
    lampada.src = './img/quebrada.jpg';

    // Texto do paragrafo
    document.querySelector(".p1").innerHTML ="Ops, atualize a pagina para consertar a lâmpada";


}

// Evento double click
lampada.addEventListener('dblclick', quebrarLampada)

// Evento de click
ligado.addEventListener('click', lampadaLigada); // Captura click

// Evento de click
desligado.addEventListener('click', lampadaDesligada); // Captura click