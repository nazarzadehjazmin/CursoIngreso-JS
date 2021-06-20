/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y 
un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
*/

function mostrar() {
    let letra;
    let numero;
    let seguirIngresando;
    let contadorPares;
    let contadorCeros;
    let contadorImpares;
    let acumuladorPositivos;
    let contadorPositivos;
    let acumuladorNegativos;
    let promedioPositivos;
    let flagMaxMin;
    let numeroMax;
    let letraMax;
    let numeroMin;
    let letraMin;

    contadorPares = 0;
    contadorCeros = 0;
    contadorImpares = 0;
    acumuladorPositivos = 0;
    contadorPositivos = 0;
    acumuladorNegativos = 0;
    flagMaxMin = true;


    do {

        letra = prompt("Ingrese una letra");
        while (isNaN(letra) == false) {
            letra = prompt("Error. Reingrese una letra");
        }

        numero = parseFloat(prompt("Ingrese un número (entre -100 y 100)"));
        while (isNaN(numero) || numero < -100 || numero > 100) {
            numero = parseFloat(prompt("Error. Reingrese un número (entre -100 y 100)"));
        }


        // a) La cantidad de números pares.
        // b) La cantidad de números impares.
        // c) La cantidad de ceros.
        if (numero == 0) {
            contadorCeros++;
        } else {
            if (numero % 2 == 0) {
                contadorPares++;
            } else {
                contadorImpares++;
            }
        }

        // d) El promedio de todos los números positivos ingresados.
        if (numero > 0) {
            acumuladorPositivos += numero;
            contadorPositivos++;
        } else {
            // e) La suma de todos los números negativos.
            acumuladorNegativos += numero;
        }


        // f) El número y la letra del máximo y el mínimo.
        if (flagMaxMin) {
            letraMax = letra;
            letraMin = letra;
            numeroMax = numero;
            numeroMin = numero;
            flagMaxMin = false;
        } else {
            if (numero > numeroMax) {
                numeroMax = numero;
                letraMax = letra;
            } else {
                if (numero < numeroMin) {
                    numeroMin = numero;
                    letraMin = letra;
                }
            }
        }


        seguirIngresando = confirm("¿Seguir ingresando?");
    } while (seguirIngresando == true);


    // a) La cantidad de números pares.
    if (contadorPares != 0) {
        document.write("<br>Cantidad de números pares: " + contadorPares);
    } else {
        document.write("<br>Cantidad de números pares: No hay");
    }

    // b) La cantidad de números impares.
    if (contadorImpares != 0) {
        document.write("<br>Cantidad de números impares: " + contadorImpares);
    } else {
        document.write("<br>Cantidad de números impares: No hay");
    }

    // c) La cantidad de ceros.
    if (contadorCeros != 0) {
        document.write("<br>Cantidad de ceros: " + contadorCeros);
    } else {
        document.write("<br>Cantidad de ceros: No hay");
    }

    // d) El promedio de todos los números positivos ingresados.
    promedioPositivos = acumuladorPositivos / contadorPositivos;
    if (contadorPositivos != 0) {
        document.write("<br>Promedio de todos los números positivos ingresados: " + promedioPositivos);
    } else {
        document.write("<br>Promedio de todos los números positivos ingresados: No hay");
    }

    // e) La suma de todos los números negativos.
    if (acumuladorNegativos < 0) {
        document.write("<br>Suma de todos los números negativos: " + acumuladorNegativos);
    } else {
        document.write("<br>Suma de todos los números negativos: No hay");

    }
    // f) El número y la letra del máximo y el mínimo.
    document.write("<br>Número del máximo: " + numeroMax + " y su letra: " + letraMax);
    document.write("<br>Número del mínimo: " + numeroMin + " y su letra: " + letraMin);

}
