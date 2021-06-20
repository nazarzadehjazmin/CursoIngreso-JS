/**JAZMÍN NAZARZADEH
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobreza entre (pobre, rico , muy rico) en europa no hay paises pobres(validar)
la temperatura mínima que se registra en su territorio(entre -50 y 50)
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
i) que continente tiene mas habitantes.
 */

function probarEjercicio() {
    let continente;
    let nombrePais;
    let cantidadHabitantes;
    let nivelPobreza;
    let temperatura;
    let contadorTemperaturaPar;
    let contadorTemperaturaImparEuropa;
    let contadorHabitantesTotal;
    let paisMenosHabitantes;
    let contadorTemperaturaMasCuarenta;
    let contadorTemperaturaMenorCero;
    let acumuladorHabitantes;
    let promedioHabitantes;
    let acumuladorTemperaturaMasCuarenta;
    let promedioTemperaturaMasCuarenta;
    let temperaturaMinima;
    let paisTemperaturaMinima;
    let flagtemperaturaMinima;
    let continenteMayorCantidadHabitantes;


    contadorTemperaturaPar = 0;
    contadorTemperaturaImparEuropa = 0;
    contadorHabitantesTotal = 0;
    contadorTemperaturaMasCuarenta = 0;
    contadorTemperaturaMenorCero = 0;
    acumuladorHabitantes = 0;
    acumuladorTemperaturaMasCuarenta = 0;
    flagtemperaturaMinima = true;

    for (let i = 0; i < 5; i++) {

        continente = prompt("Ingrese continente");
        continente = continente.toLowerCase();
        while (isNaN(continente) == false || continente != "america" && continente != "asia" && continente != "europa" && continente != "africa" && continente != "oceania") {
            continente = prompt("Error. Reingrese continente");
            continente = continente.toLowerCase();
        }

        nombrePais = prompt("Ingrese pais");
        while (isNaN(nombrePais) == false) {
            nombrePais = prompt("Error. Reingrese pais");
        }

        cantidadHabitantes = parseFloat(prompt("Ingrese cantidad de habitantes en millones (entre 1 y 7000)"));
        while (isNaN(cantidadHabitantes) || cantidadHabitantes < 1 || cantidadHabitantes > 7000) {
            cantidadHabitantes = parseFloat(prompt("Error. Reingrese cantidad de habitantes en millones (entre 1 y 7000)"));
        }

        nivelPobreza = prompt("Ingrese el nivel de pobreza (pobre, rico, muy rico)");
        nivelPobreza = nivelPobreza.toLowerCase();
        while (isNaN(nivelPobreza) == false || nivelPobreza != "pobre" && nivelPobreza != "rico" && nivelPobreza != "muy rico" || nivelPobreza == "pobre" && continente == "europa") {
            nivelPobreza = prompt("Error.Reingrese el nivel de pobreza (pobre, rico, muy rico)");
            nivelPobreza = nivelPobreza.toLowerCase();
        }

        temperatura = parseFloat(prompt("Ingrese temperatura (entre -50 y 50)"));
        while (isNaN(temperatura) || temperatura < -50 || temperatura > 50) {
            temperatura = parseFloat(prompt("Reigrese temperatura (entre -50 y 50)"));
        }

        //a)La cantidad de temperaturas pares.
        if (temperatura % 2 == 0) {
            contadorTemperaturaPar++;
        }

        // c)El nombre del pais con menos habitantes
        if (contadorHabitantesTotal < 1 || cantidadHabitantes < paisMenosHabitantes) {
            paisMenosHabitantes = nombrePais;
        }

        // d)la cantidad de paises que superan los 40 grados.
        // g)el promedio de habitantes entre los paises que superan los 40 grados
        if (temperatura > 40) {
            acumuladorTemperaturaMasCuarenta += temperatura;
            contadorTemperaturaMasCuarenta++;
        }

        switch (continente) {
            case "europa":
                // b)la cantidad de temperaturas impares de europa
                if (temperatura % 2 != 0) {
                    contadorTemperaturaImparEuropa++;
                }
                break;
            case "america":
                // e)la cantidad de paises de america que tienen menos de 0 grados 
                if (temperatura < 0) {
                    contadorTemperaturaMenorCero++;
                }
                break;
        }


        // h) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura
        if (flagtemperaturaMinima || temperatura < temperaturaMinima) {
            temperaturaMinima = temperatura;
            paisTemperaturaMinima = nombrePais;
        }

        // i) que continente tiene mas habitantes.
        if (contadorHabitantesTotal < 1 || cantidadHabitantes > continenteMayorCantidadHabitantes) {
            continenteMayorCantidadHabitantes = nombrePais;
        }


        // f)el promedio de habitantes entre los paises ingresados 
        acumuladorHabitantes += cantidadHabitantes;
        contadorHabitantesTotal++;
    }


    //a)La cantidad de temperaturas pares.
    if (contadorTemperaturaPar != 0) {
        document.write("<b>La cantidad de temperaturas pares es: </b>" + contadorTemperaturaPar + "</br>")
    } else {
        document.write("<b>La cantidad de temperaturas pares es:</b> No hay temperaturas pares</br>")
    }

    // b)la cantidad de temperaturas impares de europa
    if (contadorTemperaturaImparEuropa != 0) {
        document.write("<b>La cantidad de temperaturas impares en europa es: </b>" + contadorTemperaturaImparEuropa + "</br>")
    } else {
        document.write("<b>La cantidad de temperaturas impares en europa es: </b> No hay temperaturas impares en europa</br>")
    }

    // c)El nombre del pais con menos habitantes
    document.write("<b>El nombre del pais con menos habitantes es:</b> " + paisMenosHabitantes + "</br>");

    // d)la cantidad de paises que superan los 40 grados.
    // g)el promedio de habitantes entre los paises que superan los 40 grados
    promedioTemperaturaMasCuarenta = acumuladorTemperaturaMasCuarenta / contadorTemperaturaMasCuarenta;

    if (contadorTemperaturaMasCuarenta != 0) {
        // d)la cantidad de paises que superan los 40 grados.
        document.write("<b>La cantidad de paises que superan los 40 grados:</b> " + contadorTemperaturaMasCuarenta + "</br>");
        // g)el promedio de habitantes entre los paises que superan los 40 grados
        document.write("<b>Promedio de habitantes entre los paises que superan los 40 grados:</b> " + promedioTemperaturaMasCuarenta + "</br>");

    } else {
        document.write("<b>La cantidad de paises que superan los 40 grados:</b> No hay </br>");
        document.write("<b>Promedio de habitantes entre los paises que superan los 40 grados:</b> No hay</br>");

    }

    // e)la cantidad de paises de america que tienen menos de 0 grados.
    if (contadorTemperaturaMenorCero != 0) {
        document.write("<b>Cantidad de paises de america que tienen menos de 0 grados: </b>" + contadorTemperaturaMenorCero + "</br>");
    } else {
        document.write("<b>Cantidad de paises de america que tienen menos de 0 grados:</b> No hay </br>");
    }

    // f)el promedio de habitantes entre los paises ingresados 
    promedioHabitantes = acumuladorHabitantes / contadorHabitantesTotal;
    document.write("<b>Promedio de habitantes entre los paises ingresados:</b> " + promedioHabitantes + "</br>");

    // h) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
    document.write("<b>La temperatura mínima ingresada es:</b> " + temperaturaMinima + " <b>y el nombre del pais que registro esa temperatura:</b> " + paisTemperaturaMinima + "</br>");

    // i) que continente tiene mas habitantes.
    document.write("<b>El continente que tiene mayor cantidad de habitantes es:</b> " + continenteMayorCantidadHabitantes + "</br>");

}