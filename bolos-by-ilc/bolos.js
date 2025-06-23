let turnosRestantes = 10;
let partida = [];
let suma = 0;

function tirar() {
    do {
    let tiros = [];
    let restantes = 10;
    for (let index = 0; index < 2 && restantes > 0; index++) {
        tiros[index] = Math.floor(Math.random() * restantes) + 1;
        restantes -= tiros[index];
        console.log(tiros[index]);
        if (tiros[index] === 10 && index === 0) {
            console.log("STRIKE");
            break;
        }
    }
    if (tiros[0] + (tiros[1] ?? 0) === 10 && tiros[0] !== 10) {
        console.log("SPARE");
    }
    console.log("restantes", restantes);
    console.log("Te quedan ", turnosRestantes - 1, "turnos");
    turnosRestantes--;
    partida.push(tiros);
} while (turnosRestantes !== 0);

let ultimos = partida[partida.length - 1];
if (ultimos[0] === 10) {
    partida.push([10, 10]);
} else if ((ultimos[0] + (ultimos[1] ?? 0)) === 10) {
    partida.push([10]);
}

}

function sumarTiros() {
    
for (let i = 0; i < 10; i++) {
    let sumaDeTiros = partida[i][0] + (partida[i][1] ?? 0);
    let bonus = 0;

    if (partida[i][0] === 10) {
        bonus += partida[i + 1]?.[0] ?? 0;
        if ((partida[i + 1]?.length ?? 0) > 1) {
            bonus += partida[i + 1][1] ?? 0;
        } else if (partida[i + 2]) {
            bonus += partida[i + 2][0] ?? 0;
        }
        console.log("Turno", i, "Tiros","[---X--]", "STRIKE", "Puntos de turno", sumaDeTiros + bonus);
        suma += sumaDeTiros + bonus;
    } else if (sumaDeTiros === 10) {
        bonus += partida[i + 1]?.[0] ?? 0;
        console.log("Turno", i, "Tiros", "[",partida[i][0],",/","]  " ,"SPARE", "Puntos de turno", sumaDeTiros + bonus);
        suma += sumaDeTiros + bonus;
    } else {
        console.log("Turno", i, "Tiros", partida[i], "Puntos de turno", sumaDeTiros);
        suma += sumaDeTiros;
    }
}

console.log("Puntaje total", suma)
}

tirar()
sumarTiros()

