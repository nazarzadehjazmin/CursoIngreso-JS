/*
Realizar el algoritmo que permita ingresar el 
nombre de un animal del zoológico, 
el peso el cual debe ser entre 1 y 1000 y
la temperatura del hábitat (entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre y temperatura del animal más pesado
c) La cantidad de animales que viven a menos de 0 grados.
d) El promedio del peso de todos los animales.
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )
*/


function mostrar() {
    let nombre;
    let peso;
    let temperatura;
    let seguirIngresando;
    let contadorTempPar;
    let flag;
    let animalMayorPeso;
    let animalMayorPesoTemperatura;
    let contadorTodosLosAnimales;
    let acumuladorTodosLosAnimales;
    let promedioTodosLosAnimales;
    let contadorAnimalCeroGrados;
    let pesoMax;
    let pesoMin;

    contadorTempPar = 0;
    contadorTodosLosAnimales = 0;
    acumuladorTodosLosAnimales = 0;
    contadorAnimalCeroGrados = 0;
    flag = true;

    do {
        nombre = prompt("Ingrese un nombre");
        while (isNaN(nombre) == false) {
            nombre = prompt("Error. Reingrese un nombre");
        }

        peso = parseFloat(prompt("Ingrese peso (entre 1 y 1000)"));
        while (isNaN(peso) || peso < 1 || peso > 1000) {
            peso = parseFloat(prompt("Error. Reingrese peso (entre 1 y 1000)"));
        }

        temperatura = parseFloat(prompt("Ingrese temperatura(entre -30 y 30)"));
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseFloat(prompt("Error. Reingrese temperatura(entre -30 y 30)"));
        }

        // a) La cantidad de temperaturas pares.
        if (temperatura % 2 == 0) {
            contadorTempPar++;
        }
        // b) El nombre y temperatura del animal más pesado
        if (flag || peso > animalMayorPeso) {
            animalMayorPeso = nombre;
            animalMayorPesoTemperatura = temperatura;
            flag = false;
        }

        // c) La cantidad de animales que viven a menos de 0 grados.
        if (temperatura < 0) {
            contadorAnimalCeroGrados++;
        }
        // f) El peso máximo y el mínimo de todos los animales 
        //cuyas temperaturas sean bajo cero.
        if (contadorAnimalCeroGrados == 1) {
            pesoMax = peso;
            pesoMin = peso;
        } else if (peso > pesoMax) {
            pesoMax = peso;
        } else if (peso < pesoMin) {
            pesoMin = peso;
        }


        // d) El promedio del peso de todos los animales.
        acumuladorTodosLosAnimales += peso;
        contadorTodosLosAnimales++;


        seguirIngresando = confirm("¿Seguir ingresando animales?");
    } while (seguirIngresando == true);


    // a) La cantidad de temperaturas pares.
    document.write("La cantidad de temperaturas pares: " + contadorTempPar + "</br>");

    // b) El nombre y temperatura del animal más pesado
    document.write("El nombre y temperatura del animal más pesado: " + animalMayorPeso + " " + animalMayorPesoTemperatura + "</br>");

    // c) La cantidad de animales que viven a menos de 0 grados.
    document.write("La cantidad de animales que viven a menos de 0 grados: " + contadorAnimalCeroGrados + "</br>");

    // d) El promedio del peso de todos los animales.
    promedioTodosLosAnimales = acumuladorTodosLosAnimales / contadorTodosLosAnimales;
    document.write("El promedio del peso de todos los animales: " + promedioTodosLosAnimales + "</br>");

    // f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
    document.write("El peso máximo de todos los animales cuyas temperaturas sean bajo cero: " + pesoMax + " y el mínimo " + pesoMin + "</br>");

}
