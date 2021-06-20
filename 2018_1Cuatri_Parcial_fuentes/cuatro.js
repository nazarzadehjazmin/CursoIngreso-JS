/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el 
resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/

/*
function mostrar() {
    let numeroUno;
    let numeroDos;
    let suma;
    let resta;

    numeroUno = prompt("Ingrese un número");
    numeroUno = parseInt(numeroUno);

    numeroDos = prompt("Ingrese nuevamente un número");
    numeroDos = parseInt(numeroDos);

    suma = numeroUno + numeroDos;
    resta = numeroUno - numeroDos;

    if (numeroUno == numeroDos) {
        alert("Sus números son " + numeroUno + " y " + numeroDos);
    } else if (numeroUno > numeroDos) {
        alert(resta);
    } else if (!(numeroUno > numeroDos)) {
        alert(suma);
    }

    if (suma > 10) {
        alert("la suma es " + suma + " y supero el 10");
    }
}
*/

function mostrar() {
    let numeroUno;
    let numeroDos;
    let resta;
    let suma;

    numeroUno = prompt("Ingrese un número");
    numeroUno = parseFloat(numeroUno);
    numeroDos = prompt("Ingrese un número nuevamente");
    numeroDos = parseFloat(numeroDos);

    suma = numeroUno + numeroDos;
    resta = numeroUno - numeroDos;

    if (numeroUno == numeroDos) {
        alert("Ambos números son iguales: " + numeroUno);
    } else {
        if (numeroUno > numeroDos) {
            alert(resta);
        } else {
            alert(suma);
        }
    }

    if (suma > 10) {
        alert("La suma es " + suma + " y supero el 10");
    }

}