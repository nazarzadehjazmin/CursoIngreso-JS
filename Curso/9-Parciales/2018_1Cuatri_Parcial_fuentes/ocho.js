/*
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número 
entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
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
    let contadorCeros;
    let contadorPares;
    let contadorImpares;
    let contadorPositivos;
    let acumuladorPositivos;
    let acumuladorNegativos;
    let promedioPositivos;
    let flagMaxMin;
    let numeroMax;
    let numeroMin;
    let letraMax;
    let letraMin;

    contadorCeros = 0;
    contadorPares = 0;
    contadorImpares = 0;
    contadorPositivos = 0;
    acumuladorPositivos = 0;
    acumuladorNegativos = 0;
    flagMaxMin = false;

    do {

        letra = prompt("Ingrese letra");
        while (isNaN(letra) == false) {
            letra = prompt("Error. Reingrese una letra");
        }

        numero = parseFloat(prompt("Ingrese un número"));
        while (isNaN(numero) || numero < -100 || numero > 100) {
            numero = parseFloat(prompt("Error. Reingrese un número"));
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
        // e) La suma de todos los números negativos.
        if (numero > 0) {
            acumuladorPositivos += numero;
            contadorPositivos++;
        } else {
            acumuladorNegativos += numero;
        }

        // f) El número y la letra del máximo y el mínimo.
        if (flagMaxMin == false) {
            numeroMax = numero;
            numeroMin = numero;
            letraMax = letra;
            letraMin = letra;
            flagMaxMin = true;
        } else if (numero < numeroMin) {
            numeroMin = numero;
            letraMin = letra;
        } else if (numero > numeroMax) {
            numeroMax = numero;
            letraMax = letra;
        }




        seguirIngresando = confirm("¿Seguir ingresando números?");
    } while (seguirIngresando == true);

    // a) La cantidad de números pares.
    if (contadorPares != 0) {
        document.write("<br>La cantidad de números pares: " + contadorPares);
    } else {
        document.write("<br>La cantidad de números pares: No hay números pares");
    }

    // b) La cantidad de números impares.
    if (contadorImpares != 0) {
        document.write("<br>La cantidad de números impares: " + contadorImpares);
    } else {
        document.write("<br>La cantidad de números impares: No hay números impares");
    }

    // c) La cantidad de ceros.
    if (contadorCeros != 0) {
        document.write("<br>La cantidad de ceros: " + contadorCeros);
    } else {
        document.write("<br>La cantidad de ceros: No hay ceros");
    }

    // d) El promedio de todos los números positivos ingresados.
    promedioPositivos = acumuladorPositivos / contadorPositivos;
    if (contadorPositivos != 0) {
        document.write("<br>El promedio de todos los números positivos ingresados es: " + promedioPositivos);
    } else {
        document.write("<br>El promedio de todos los números positivos ingresados es: No hay números positivos")
    }

    // e) La suma de todos los números negativos.
    document.write("<br>La suma de todos los números negativos: " + acumuladorNegativos);

    // f) El número y la letra del máximo y el mínimo.
    document.write("<br>El número y la letra del máximo es: " + numeroMax + " y " + letraMax);
    document.write("<br>El número y la letra del mínimo es: " + numeroMin + " y " + letraMin);
}
