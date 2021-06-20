/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/


function mostrar() {

    let nota;
    let sexo;
    let acumuladorNotas;
    let contadorNotas;
    let promedioNotasTotales;
    let flagNotas;
    let notaMasBaja;
    let sexoNotaMasBaja;
    let contadorNotaVaron;

    acumuladorNotas = 0;
    contadorNotas = 0;
    flagNotas = false;
    contadorNotaVaron = 0;

    for (let i = 0; i < 2; i++) { //5
        sexo = prompt("Ingrese sexo(f o m)");
        sexo = sexo.toLowerCase();
        while (isNaN(sexo) == false || sexo != "f" && sexo != "m") {
            sexo = prompt("Error. Reingrese sexo(f o m)");
            sexo = sexo.toLowerCase();
        }

        nota = parseFloat(prompt("Ingrese nota"));
        while (isNaN(nota) || nota < 1 || nota > 10) {
            nota = parseFloat(prompt("Error. Reingrese nota"));
        }


        //b) La nota más baja y el sexo de esa persona.
        if (flagNotas == false || nota < notaMasBaja) {
            notaMasBaja = nota;
            sexoNotaMasBaja = sexo;
            flag = true;
        }

        //c) La cantidad de varones que su nota haya sido mayor o igual a 6.

        if (sexo == "m" && nota > 5) {
            contadorNotaVaron++;
        }

        //a) El promedio de las notas totales.
        acumuladorNotas += nota;
        contadorNotas++;
    }


    //a) El promedio de las notas totales.
    promedioNotasTotales = acumuladorNotas / contadorNotas;
    document.write("<br>El promedio de las notas totales: " + promedioNotasTotales);

    //b) La nota más baja y el sexo de esa persona.
    document.write("<br>La nota más baja es: " + notaMasBaja + " y el sexo de esa persona es: " + sexoNotaMasBaja);

    //c) La cantidad de varones que su nota haya sido mayor o igual a 6.
    if (contadorNotaVaron != 0) {
        document.write("<br>La cantidad de varones que su nota haya sido mayor o igual a 6 es: " + contadorNotaVaron);
    } else {
        document.write("<br>La cantidad de varones que su nota haya sido mayor o igual a 6 es: No hay varones con esa nota");
    }


}
