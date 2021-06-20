/*
Realizar el algoritmo que permita ingresar el 
nombre de un estudiante, 
la edad (validar) , 
el sexo (validar) y 
la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino
*/

function mostrar() {
    let edad;
    let sexo;
    let nota;
    let seguirIngresando;
    let contadorVaronesAprobados;
    let acumuladorNotasFem;
    let contadorNotasFem;
    let acumuladorNotasMasc;
    let contadorNotasMasc;
    let promedioNotasFem;
    let promedioNotasMasc;
    let acumuladorNotasMayores;
    let contadorNotasMayores;
    let acumuladorNotasAdolesc;
    let contadorNotasAdolesc;
    let acumuladorNotasNinios;
    let contadorNotasNinios;
    let promedioNotasNinios;
    let promedioNotasAdolesc;
    let promedioNotasMayores;

    contadorVaronesAprobados = 0;
    acumuladorNotasFem = 0;
    contadorNotasFem = 0;
    acumuladorNotasMasc = 0;
    contadorNotasMasc = 0;
    acumuladorNotasMayores = 0;
    contadorNotasMayores = 0;
    acumuladorNotasAdolesc = 0;
    contadorNotasAdolesc = 0;
    acumuladorNotasNinios = 0;
    contadorNotasNinios = 0;


    do {
        edad = parseInt(prompt("Ingrese edad"));
        while (isNaN(edad) == true || edad < 6) {
            edad = parseInt(prompt("Reingrese edad"));
        }

        sexo = prompt("Ingrese sexo");
        sexo = sexo.toLowerCase();
        while (isNaN(sexo) == false || sexo != "f" && sexo != "m") {
            sexo = prompt("Reingrese sexo");
            sexo = sexo.toLowerCase();
        }

        nota = parseFloat(prompt("Ingrese nota"));
        while (isNaN(nota) == true || nota < 1 || nota > 10) {
            nota = parseFloat(prompt("Reingrese nota"));
        }





        //b) El promedio de notas de los menores de edad
        //c) El promedio de notas de los adolescentes.
        //d) El promedio de notas de los mayores
        if (edad > 18) {
            //mayor de edad (más de 18)
            acumuladorNotasMayores += nota;
            contadorNotasMayores++;
        } else {
            if (edad > 12) {
                //adolescentes (12 a 18)
                acumuladorNotasAdolesc += nota;
                contadorNotasAdolesc++;
            } else {
                if (edad > 6) {
                    //menores (6 a 12)
                    acumuladorNotasNinios += nota;
                    contadorNotasNinios++;
                }
            }
        }


        //f) El promedio de notas por sexo masculino y femenino
        switch (sexo) {
            case "f":
                acumuladorNotasFem += nota;
                contadorNotasFem++;
                break;
            case "m":
                acumuladorNotasMasc += nota;
                contadorNotasMasc++;
                if (nota > 4) {
                    //a) La cantidad de varones aprobados
                    contadorVaronesAprobados++;
                }
                break;
        }

        seguirIngresando = confirm("¿Ingresar más alumnos?");
    } while (seguirIngresando == true);


    //a) La cantidad de varones aprobados
    if (contadorVaronesAprobados != 0) {
        document.write("<br>Cantidad de varones aprobados: " + contadorVaronesAprobados);

    }

    //b) El promedio de notas de los menores de edad
    promedioNotasNinios = acumuladorNotasNinios / contadorNotasNinios;
    if (contadorNotasNinios != 0) {
        document.write("<br>promedio de notas de los menores de edad: " + promedioNotasNinios);
    }


    //c) El promedio de notas de los adolescentes.
    promedioNotasAdolesc = acumuladorNotasAdolesc / contadorNotasAdolesc;
    if (contadorNotasAdolesc != 0) {
        document.write("<br>promedio de notas de los adolescentes: " + promedioNotasAdolesc);
    }

    //d) El promedio de notas de los mayores
    promedioNotasMayores = acumuladorNotasMayores / contadorNotasMayores;
    if (contadorNotasMayores != 0) {
        document.write("<br>promedio de notas de los mayores: " + promedioNotasMayores);
    }

    //f) El promedio de notas por sexo masculino y femenino
    promedioNotasFem = acumuladorNotasFem / contadorNotasFem;
    promedioNotasMasc = acumuladorNotasMasc / contadorNotasMasc;

    if (contadorNotasFem != 0) {
        document.write("<br>Promedio de notas por sexo femenino: " + promedioNotasFem);
    } else {
        document.write("<br>Promedio de notas por sexo femenino: No hay mujeres ");
    }

    if (contadorNotasMasc != 0) {
        document.write("<br>Promedio de notas por sexo masculino: " + promedioNotasMasc);
    } else {
        document.write("<br>Promedio de notas por sexo masculino: No hay hombres ");
    }

}
