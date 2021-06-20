/*
Bienvenidos.
Realizar el algoritmo que permita iterar 
el ingreso de dos datos de un vehiculo, 
un color (rojo verde o amarillo) y 
un valor entre 0 y 10000 
hasta que el usuario quiera e informar al terminar el ingreso por 
document.write:
a) La cantidad de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color
Curso de ingreso UTN FRA
*/

function mostrar() {
    let color;
    let precio;
    let seguirIngresando;
    let contadorRojos;
    let contadorRojosMayorCincoMil;
    let contadorAutoMenorCincoMil;
    let contadorTodosLosAutos;
    let acumuladorTodosLosAutos;
    let promedioTodosLosAutos;
    let precioMasCaro;
    let colorAutoMasCaro;

    contadorRojos = 0;
    contadorRojosMayorCincoMil = 0;
    contadorAutoMenorCincoMil = 0;
    contadorTodosLosAutos = 0;
    acumuladorTodosLosAutos = 0;

    do {
        color = prompt("Ingrese color (rojo, verde o amarillo)");
        color = color.toLowerCase();
        while (isNaN(color) == false || color != "rojo" && color != "verde" && color != "amarillo") {
            color = prompt("Reingrese color (rojo, verde o amarillo)");
            color = color.toLowerCase();
        }

        precio = parseFloat(prompt("Ingresar precio"));
        while (isNaN(precio) == true || precio < 1 || precio > 10000) {
            precio = parseFloat(prompt("Reingresar precio"));
        }

        //a) La cantidad de rojos
        if (color == "rojo") {
            contadorRojos++;
            if (precio > 5000) {
                contadorRojosMayorCincoMil++;
            }
        }

        //c) La cantidad de vehiculos con precio inferior a 5000
        if (precio < 5000) {
            contadorAutoMenorCincoMil++;
        }

        //d) El promedio de todos los vehiculos ingresados.
        acumuladorTodosLosAutos += precio;
        contadorTodosLosAutos++;

        //e) El mas caro y su color
        if (precio > precioMasCaro) {
            precioMasCaro = precio;
            colorAutoMasCaro = color;
        } else {
            precioMasCaro = precio;
            colorAutoMasCaro = color;
        }


        seguirIngresando = confirm("¿Ingresar más productos?");
    } while (seguirIngresando == true);


    //a) La cantidad de rojos
    document.write("<br><b>Cantidad de rojos: </b>" + contadorRojos);

    //b) La cantidad de rojos con precio mayor a 5000
    document.write("<br><b>Cantidad de rojos con precio mayor a 5000: </b>" + contadorRojosMayorCincoMil);

    //c) La cantidad de vehiculos con precio inferior a 5000
    document.write("<br><b>Cantidad de vehiculos con precio inferior a 5000: </b>" + contadorAutoMenorCincoMil);

    //d) El promedio de todos los vehiculos ingresados.
    promedioTodosLosAutos = acumuladorTodosLosAutos / contadorTodosLosAutos;

    document.write("<br><b> El promedio de todos los vehiculos ingresados: </b>" + promedioTodosLosAutos);

    //e) El mas caro y su color
    document.write("<br><b>El mas caro vale: </b>" + precioMasCaro + " <b>y su color es:</b> " + colorAutoMasCaro);


}
