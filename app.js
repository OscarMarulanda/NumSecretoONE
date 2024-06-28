

let rango = parseInt(prompt("ingrese el rango dentro del que le gustaría jugar(100 numeros, 20 numeros, 25?)"));
let numeroSecreto = Math.floor(Math.random() * rango)+1;
let userNum;
let intentos = 0;

let maxIntentos = prompt("Cuántos intentos tendrá el jugador? ")

while (userNum != numeroSecreto) {


    intentos++;
    userNum = parseInt(prompt("intento: " + intentos + `. Ingrese un numero entre 1 y ${rango}: `));

    console.log(typeof(userNum));

    //Condiciones para comparar la entrada del usuario con el número secreto
    /*Este es para
    varias líneas*/
    //hola
    if (userNum == numeroSecreto) {
        alert(`buena! ${userNum}. Lo descubriste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`)
    } else {

        if (intentos == maxIntentos) {
            alert(`perdiste. Llegaste al número máximo de ${intentos} intentos`)
            break
        }
        if (userNum > numeroSecreto) {
            alert(`too big ${userNum}`)
        } else {
            alert(`too small ${userNum}`)
        }
    }
}
