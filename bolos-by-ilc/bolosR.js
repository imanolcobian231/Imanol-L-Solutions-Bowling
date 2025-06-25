let turnosRestantes = 10;
let partida = [];
let suma = 0;

function generarTiro() {
    let tiros = [];
    let restantes = 10;

    for (let i = 0; i < 2 && restantes > 0; i++) {
        tiros[i] = Math.floor(Math.random() * (restantes + 1));
        restantes -= tiros[i];
        if (tiros[i] === 10 && i === 0) break;
    }
    return tiros;
}

function esStrike(tiros) {
    return tiros[0] === 10;
}

function esSpare(tiros) {
    return !esStrike(tiros) && (tiros[0] + (tiros[1] ?? 0) === 10);
}

function jugar() {
    while (turnosRestantes > 0) {
        const tiro = generarTiro();
        partida.push(tiro);
        turnosRestantes--;
    }

    const ultimo = partida[partida.length - 1];
    if (esStrike(ultimo)) {
        partida.push(generarTiro());
    } else if (esSpare(ultimo)) {
        partida.push(Math.floor(Math.random() * 11));
    }
}

function calcularPuntos() {
    const lineaArriba = "┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐";
    const lineaMedio = "├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤";
    const lineaAbajo = "└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘";

    let lineaTiros = "│";
    let lineaPuntos = "│";
    let total = 0;

    for (let i = 0; i < 10; i++) {
        const frame = partida[i];
        let puntosFrame = frame[0] + (frame[1] ?? 0);
        let bonus = 0;

        if (esStrike(frame)) {
            bonus = (partida[i+1]?.[0] ?? 0) + ((partida[i+1]?.length > 1) ? partida[i+1][1] : partida[i+2]?.[0] ?? 0);
            lineaTiros += "  X  │";
        } else if (esSpare(frame)) {
            bonus = partida[i+1]?.[0] ?? 0;
            lineaTiros += ` ${frame[0]} / │`;
        } else {
            lineaTiros += ` ${frame[0]} ${frame[1] ?? 0} │`;
        }

        total += puntosFrame + bonus;
        lineaPuntos += ` ${total.toString().padStart(3, " ")} │`;
    }

    console.log(lineaArriba);
    console.log(lineaTiros);
    console.log(lineaMedio);
    console.log(lineaPuntos);
    console.log(lineaAbajo);
}

jugar();
calcularPuntos();