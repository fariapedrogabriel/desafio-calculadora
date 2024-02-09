let nomeHeroi = "João";
let vitorias;
let derrotas;
let nivel;
let saldo = calculadoraRanked(52, 1);

function calculadoraRanked(vitorias, derrotas){
    let saldo = vitorias - derrotas;
    return saldo
}



if (saldo < 10 ){
    nivel = "ferro"
} else if (saldo < 20 ){
    nivel = "bronze"
} else if (saldo < 50 ){
    nivel = "prata"
} else if (saldo < 80 ){
    nivel = "ouro"
} else if (saldo < 90 ){
    nivel = "diamante"
} else if (saldo < 100 ){
    nivel = "lendário"
} else {
    nivel = "imortal"
}

console.log("O heroi " + nomeHeroi + " tem um saldo de " + saldo + " e está no nível " + nivel);