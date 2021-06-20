/*
Realizar el algoritmo que permita ingresar el 
nombre de un país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio
(entre -50 y 50) 
hasta que el usuario quiera e 
informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
(pais=tunes;habitantes = 10; t =1 )
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
(pais=china;habitantes = 2000; t =-12 )
*/

function mostrar() {
    let nombre;
    let habitantes;
    let temperatura;
    let seguirIngresando;
    let contadorTemperaturaPar;
    let acumuladorHabitantesTotal;
    let contadorHabitantesTotal;
    let paisMenosHabitantes;
    let contadorTemperaturaMasCuarenta;
    let promedioHabitantes;
    let flagTemperatura;
    let temperaturaMin;
    let paisTemperaturaMin;

    contadorTemperaturaPar = 0;
    acumuladorHabitantesTotal = 0;
    contadorHabitantesTotal = 0;
    contadorTemperaturaMasCuarenta = 0;
    flagTemperatura = true;

    do {

        nombre = prompt("Ingresar nombre del país");
        while (isNaN(nombre) == false) {
            nombre = prompt("Error. Reingresar nombre del país");
        }

        habitantes = parseFloat(prompt("Ingrese cantidad de habitantes(entre 1 y 7000)"));
        while (isNaN(habitantes) || habitantes < 1 || habitantes > 7000) {
            habitantes = parseFloat(prompt("Error. Reingrese cantidad de habitantes"));
        }

        temperatura = parseFloat(prompt("Ingrese temperatura (entre -50 y 50)"));
        while (isNaN(temperatura) || temperatura < -50 || temperatura > 50) {
            temperatura = parseFloat(prompt("Error. Reingrese temperatura (entre -50 y 50"));
        }

        // a) La cantidad de temperaturas pares.
        if (temperatura % 2 == 0) {
            contadorTemperaturaPar++;
        }
        // b) El nombre del pais con menos habitantes
        if (contadorHabitantesTotal < 1 || habitantes < paisMenosHabitantes) {
            paisMenosHabitantes = nombre;
        }

        // c) la cantidad de paises que superan los 40 grados.
        if (temperatura > 40) {
            contadorTemperaturaMasCuarenta++;
        }

        // f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
        if (flagTemperatura || temperatura < temperaturaMin) {
            temperaturaMin = temperatura;
            paisTemperaturaMin = nombre;
        }

        // d) el promedio de habitantes entre los paises ingresados
        acumuladorHabitantesTotal += habitantes;
        contadorHabitantesTotal++;

        seguirIngresando = confirm("¿Seguir ingresando números?");
    } while (seguirIngresando == true);


    // a) La cantidad de temperaturas pares.
    if (contadorTemperaturaPar != 0) {
        document.write("<br>Cantidad de temperaturas pares: " + contadorTemperaturaPar);
    } else {
        document.write("<br>Cantidad de temperaturas pares: No hay");

    }

    // b) El nombre del pais con menos habitantes
    document.write("<br>Nombre del pais con menos habitantes: " + paisMenosHabitantes);

    // c) la cantidad de paises que superan los 40 grados.
    if (contadorTemperaturaMasCuarenta != 0) {
        document.write("<br>Cantidad de paises que superan los 40 grados: " + contadorTemperaturaMasCuarenta);
    } else {
        document.write("<br>Cantidad de paises que superan los 40 grados: No hay");
    }

    // d) el promedio de habitantes entre los paises ingresados
    promedioHabitantes = acumuladorHabitantesTotal / contadorHabitantesTotal;
    document.write("<br>Promedio de habitantes entre los paises ingresados: " + promedioHabitantes);

    // f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
    document.write("<br>Temperatura mínima ingresada: " + temperaturaMin + ", nombre del pais que registro esa temperatura: " + paisTemperaturaMin);



}



/* function mostrar() {
    let nombrePais;
    let cantidadHabitantes;
    let temperatura;
    let seguirIngresando;
    let contadorTemperaturaPar;
    let MenorCantidadHabitantes;
    let flagHabitantes;
    let paisMenorHabitantes;
    let contadorTemperaturaMayorCuarenta;
    let contadorHabitantes;
    let acumuladorHabitantes;
    let promedioHabitantes;
    let flagTemperatura;
    let temperaturaMinima;
    let nombreTemperaturaMin;

    flagHabitantes = false;
    contadorTemperaturaMayorCuarenta = 0;
    contadorHabitantes = 0;
    acumuladorHabitantes = 0;
    flagTemperatura = false;


    do {
        nombrePais = prompt("Ingrese nombre del país");
        while (isNaN(nombrePais) == false) {
            nombrePais = prompt("Error. Reingrese nombre del país");
        }

        cantidadHabitantes = parseInt(prompt("Ingrese la cantidad de habitantes(en millones)"))
        while (isNaN(cantidadHabitantes) || cantidadHabitantes < 1 || cantidadHabitantes > 7000) {
            cantidadHabitantes = parseInt(prompt("Error. Reingrese cantidad de habitantes(en millones)"))
        }

        temperatura = parseFloat(prompt("Ingrese temperatura(°c)"));
        while (isNaN(temperatura) || temperatura < -50 || temperatura > 50) {
            temperatura = parseFloat(prompt("Error. Reingrese temperatura(°c)"));
        }

        //a) La cantidad de temperaturas pares.
        //Para temp par=NaN
        //Para temp impar sola=undefined
        if (temperatura % 2 == 0) {
            contadorTemperaturaPar++;
        }

        //b) El nombre del pais con menos habitantes
        if (flagHabitantes == false || cantidadHabitantes < MenorCantidadHabitantes) {
            paisMenorHabitantes = nombrePais;
        } else {
            paisMenorHabitantes = nombrePais;
        }

        //c) la cantidad de paises que superan los 40 grados.
        if (temperatura > 40) {
            contadorTemperaturaMayorCuarenta++;
        }


        //f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
        if (flagTemperatura = false || temperatura < temperaturaMinima) {
            temperaturaMinima = temperatura;
            nombreTemperaturaMin = nombrePais;
            flagTemperatura = true;
        } else {
            temperaturaMinima = temperatura;
            nombreTemperaturaMin = nombrePais;
        }


        //d) el promedio de habitantes entre los paises ingresados
        acumuladorHabitantes += cantidadHabitantes;
        contadorHabitantes++;


        seguirIngresando = confirm("¿Seguir ingresando?")
    } while (seguirIngresando == true);


    //a) La cantidad de temperaturas pares.
    if (contadorTemperaturaPar != 0) {
        document.write("<br>Cantidad de temperaturas pares: " + contadorTemperaturaPar);
    } else {
        document.write("<br>Cantidad de temperaturas pares: No hay temperaturas pares");
    }

    //b) El nombre del pais con menos habitantes
    document.write("<br>El nombre del pais con menos habitantes: " + paisMenorHabitantes);

    //c) la cantidad de paises que superan los 40 grados.
    document.write("<br>la cantidad de paises que superan los 40 grados: " + contadorTemperaturaMayorCuarenta);

    //d) el promedio de habitantes entre los paises ingresados
    promedioHabitantes = acumuladorHabitantes / contadorHabitantes;
    document.write("<br>el promedio de habitantes entre los paises ingresados: " + promedioHabitantes);

    //f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
    document.write("<br> temperatura mínima ingresada: " + temperaturaMinima + " y nombre del pais que registro esa temperatura: " + nombreTemperaturaMin);


}
 */