/*
Realizar el algoritmo que permita iterar el ingreso de 
dos datos, 
una letra y 
un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por 
document.write:
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
    let contadorImpares;
    let contadorCeros;
    let promedioPositivos;
    let acumuladorPositivos;
    let contadorPositivos;
    let acumuladorNegativos;
    let flag;
    let numeroMaximo;
    let numeroMinimo;
    let nombreMaximo;
    let nombreMinimo;

    contadorPares = 0;
    contadorImpares = 0;
    contadorCeros = 0;
    acumuladorPositivos = 0;
    contadorPositivos = 0;
    acumuladorNegativos = 0;
    flag = false;

    do {
        letra = prompt("Ingrese letra");
        while (isNaN(letra) == false) {
            letra = prompt("Reingrese letra");
        }

        numero = parseFloat(prompt("Ingrese número"));
        while (isNaN(numero) == true || numero < -100 || numero > 100) {
            numero = parseFloat(prompt("Reingrese número"));
        }

        //a) La cantidad de números pares.
        //b) La cantidad de números impares.
        //c) La cantidad de ceros.
        if (numero == 0) {
            contadorCeros++;
        } else {
            if (numero % 2 == 0) {
                contadorPares++;
            } else {
                contadorImpares++;
            }

        }

        //d) El promedio de todos los números positivos ingresados.
        //e) La suma de todos los números negativos.
        if (numero > 0) {
            acumuladorPositivos += numero;
            contadorPositivos++;
            promedioPositivos = acumuladorPositivos / contadorPositivos;
        } else {
            acumuladorNegativos += numero;
        }

        //f) El número y la letra del máximo y el mínimo.
        if (flag == false || numero > numeroMaximo) {
            numeroMaximo = numeroMaximo;
            nombreMaximo = nombre;
            flag = true;
        } else {
            numeroMinimo = numero;
            nombreMinimo = nombre;

        }

        seguirIngresando = confirm("¿Seguir ingresando números?");
    } while (seguirIngresando == true);


    //a) La cantidad de números pares.
    document.write("<br>Cantidad de n° pares: " + contadorPares);

    //b) La cantidad de números impares.
    document.write("<br>Cantidad de n° impares: " + contadorImpares);
    //c) La cantidad de ceros.
    document.write("<br>Cantidad de ceros: " + contadorCeros);

    //d) El promedio de todos los números positivos ingresados.
    document.write("<br>Promedio de todos los números positivos ingresados: " + promedioPositivos);

    //e) La suma de todos los números negativos.
    document.write("<br>La suma de todos los números negativos: " + acumuladorNegativos);

    //f) El número y la letra del máximo y el mínimo.
    document.write("<br>Número del n° máximo: " + numeroMaximo + "<br>Letra del n° máximo: " + nombreMaximo);
    document.write("<br>Número del n° mínimo: " + numeroMinimo + "<br>Letra del n° mínimo: " + nombreMinimo);



}
