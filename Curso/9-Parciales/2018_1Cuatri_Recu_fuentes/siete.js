/*
Realizar el algoritmo que permita el ingreso por prompt de las 
notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) 
de 5 alumnos, informar por alert:
// a) El promedio de las notas totales.
// b) La nota más baja y el sexo de esa persona.
// c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function mostrar() {
    let nota;
    let sexo;
    let contadorNotasTotales;
    let acumuladorNotasTotales;
    let promedioNotasTotales;
    let flagNotaMasBaja;
    let notaMasBaja;
    let sexoNotaMasBaja;
    let contadorVaronesNotaSeis;

    contadorNotasTotales = 0;
    acumuladorNotasTotales = 0;
    flagNotaMasBaja = false;
    contadorVaronesNotaSeis = 0;


    for (let i = 0; i < 2; i++) { //i<5 en realidad
        nota = parseFloat(prompt("Ingrese nota del alumno"));
        while (isNaN(nota) == true || nota < 1 || nota > 10) {
            nota = parseFloat(prompt("Error. Reingrese nota del alumno"));
        }

        sexo = prompt("Ingrese sexo (f o m)");
        sexo = sexo.toLowerCase();
        while (isNaN(sexo) == false || sexo != 'f' && sexo != 'm') {
            sexo = prompt("Error. Reingrese sexo (f o m)");
            sexo = sexo.toLowerCase();
        }


        // b) La nota más baja y el sexo de esa persona.
        if (flagNotaMasBaja == false || nota < notaMasBaja) {
            notaMasBaja = nota;
            sexoNotaMasBaja = sexo;
        }
        // c) La cantidad de varones que su nota haya sido mayor o igual a 6.
        if (sexo == 'm' && nota > 5) {
            contadorVaronesNotaSeis++;
        }

        // a) El promedio de las notas totales.
        acumuladorNotasTotales += nota;
        contadorNotasTotales++;
    }



    // a) El promedio de las notas totales.
    promedioNotasTotales = acumuladorNotasTotales / contadorNotasTotales;
    document.write("<br>El promedio de las notas totales: " + promedioNotasTotales);

    // b) La nota más baja y el sexo de esa persona.
    document.write("<br>La nota más baja: " + notaMasBaja + " y el sexo de esa persona: " + sexoNotaMasBaja);

    // c) La cantidad de varones que su nota haya sido mayor o igual a 6.
    document.write("<br>La cantidad de varones que su nota haya sido mayor o igual a 6: " + contadorVaronesNotaSeis);

}
