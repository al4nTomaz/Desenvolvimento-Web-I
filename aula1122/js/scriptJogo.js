const jogar = (opM, opP) => {
    var res;

    if (opM == 1 && opP == 2) {
        res = "Player";
    } else if(opM == 2 && opP == 1){
        res = "Máquina"
    } else if(opM == 3 && opP == 1){
        res = "Player";
    } else if (opM == 1 && opP == 3) {
        res = "Máquina";
    } else if (opM == 2 && opP == 3) {
        res = "Player";
    } else if(opM == 3 && opP == 2){
        res = "Máquina"
    } else{
        res = "Empate";
    }

    alert(res);
}
/*

1 - 2 = 2 
2 - 1 = 2

1 - 3 = 1
3 - 1 = 1

2 - 3 = 3
3 - 2 = 3
*/


const getOpMaquina = (min, max) => Math.random() * (max - min + 1) + min;

/*
 + 1 - pedra
 + 2 - papel
 + 3 - tesoura
*/

var ops = "1 - pedra\n2 - papel\n3 - tesoura";

var nome = prompt(`qual o seu nome?`);

var opPlayer = prompt(`${nome}, qual você escolhe?\n${ops}`);
opPlayer = parseInt(opPlayer);

if (opPlayer < 1 || opPlayer > 3) {
    console.log("op inválida!");
} else {

    switch (opPlayer) {
        case 1:
            console.log("pedra");
            break;

        case 2:
            console.log("papel");
            break;
        case 3:
            console.log("tesoura");
            break;
    }

    var opMaquina = getOpMaquina(1, 3);

    opMaquina = parseInt(opMaquina);
    console.log(opMaquina);


    jogar(opMaquina, opPlayer);
}






