AOS.init();

const dataDoEvento = new Date("Apr 01, 2025 19:00:00");
const timeStempDoEvento = dataDoEvento.getTime();

const conteAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStempAtual = agora.getTime();

    const distanciaAteOEvento = timeStempDoEvento - timeStempAtual;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % (1000 * 60)) / (1000));

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distanciaAteOEvento < 0) {
        clearInterval(conteAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000)