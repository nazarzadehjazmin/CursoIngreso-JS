/*
Realizar el algoritmo que permita ingresar la 
marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el 
ingreso por document.write:
// a) La cantidad de temperaturas pares.
// b) La marca del producto más pesado
// c) La cantidad de productos que se conservan a menos de 0 grados.
// d) El promedio del peso de todos los productos.
// f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )
*/


function mostrar() {
    let marca;
    let peso;
    let temperatura;
    let seguirIngresando;
    let contadorTemperaturaPar;
    let contadorTemperaturaMenorCero;
    let flagMaxMin;
    let pesoMax;
    let pesoMin;
    let marcaPesoMax;
    let promedioPesoTotal;
    let contadorPesoTotal;
    let acumuladorPesoTotal;

    contadorTemperaturaPar = 0;
    contadorTemperaturaMenorCero = 0;
    flagMaxMin = true;
    contadorPesoTotal = 0;
    acumuladorPesoTotal = 0;


    do {

        marca = prompt("Ingrese marca");
        while (isNaN(marca) == false) {
            marca = prompt("Error. Reingrese marca");
        }

        peso = parseFloat(prompt("Ingrese peso (entre 1 y 100)"));
        while (isNaN(peso) == true || peso < 1 || peso > 100) {
            peso = parseFloat(prompt("Error. Reingrese peso (entre 1 y 100)"));
        }

        temperatura = parseFloat(prompt("Ingrese temperatura de almacenamiento (entre -30 y 30)"));
        while (isNaN(temperatura) == true || temperatura < -30 || temperatura > 30) {
            temperatura = parseFloat(prompt("Error. Reingrese temperatura de almacenamiento (entre -30 y 30)"));
        }


        // a) La cantidad de temperaturas pares.
        if (temperatura % 2 == 0) {
            contadorTemperaturaPar++;
        }

        // c) La cantidad de productos que se conservan a menos de 0 grados.
        if (temperatura < 0) {
            contadorTemperaturaMenorCero++;
        }


        // f) El peso máximo y el mínimo.
        // b) La marca del producto más pesado

        if (flagMaxMin) {
            pesoMax = peso;
            pesoMin = peso;
            marcaPesoMax = marca;
            flagMaxMin = false;
        } else if (peso < pesoMin) {
            pesoMin = peso;
        } else if (peso > pesoMax) {
            pesoMax = peso;
            marcaPesoMax = marca;
        }


        // d) El promedio del peso de todos los productos.
        acumuladorPesoTotal += peso;
        contadorPesoTotal++;


        seguirIngresando = confirm("¿Seguir ingresando productos?")
    } while (seguirIngresando == true);


    // a) La cantidad de temperaturas pares.
    document.write("<br>La cantidad de temperaturas pares: " + contadorTemperaturaPar);

    // b) La marca del producto más pesado
    document.write("<br> La marca del producto más pesado es: " + marcaPesoMax);

    // c) La cantidad de productos que se conservan a menos de 0 grados.
    document.write("<br>La cantidad de productos que se conservan a menos de 0 grados: " + contadorTemperaturaMenorCero);

    // d) El promedio del peso de todos los productos.
    promedioPesoTotal = acumuladorPesoTotal / contadorPesoTotal;
    document.write("<br>El promedio del peso de todos los productos: " + promedioPesoTotal);

    // f) El peso máximo y el mínimo.
    document.write("<br>El peso máximo es: " + pesoMax + " y el mínimo es: " + pesoMin);

}
