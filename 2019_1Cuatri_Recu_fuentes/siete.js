/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso de 
10 bolsas de alimento por prompt,
con los kilos (validar entre 0 y 500) , 
sabor validar(carne vegetales pollo) e 
informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne
*/

function mostrar() {
    let bolsaAlimento;
    let kilos;
    let sabor;
    let promedioKilos;
    let contadorKilos;
    let acumuladorKilos;
    let flagKilos;
    let kilosMenor;
    let saborKilosMenor;
    let contadorCarne;
    let acumuladorCarne;
    let promedioCarne;
    let contadorBolsa;

    contadorKilos = 0;
    acumuladorKilos = 0;
    flagKilos = false;
    contadorCarne = 0;
    acumuladorCarne = 0;
    contadorBolsa = 0;

    for (let i = 1; i < 11; i++) {
        kilos = parseFloat(prompt("Ingrese kg"));
        while (isNaN(kilos) == true || kilos < 1 || kilos > 500) {
            kilos = parseFloat(prompt("Reingrese kg"));
        }

        sabor = prompt("Ingrese sabor");
        while (isNaN(sabor) == false || sabor != "carne" && sabor != "vegetales" && sabor != "pollo") {
            sabor = prompt("Reingrese sabor");
        }

        //a) El promedio de los kilos totales.
        acumuladorKilos += kilos;
        contadorKilos++;

        //b) El mas liviano y su sabor
        if (flagKilos == false || kilos < kilosMenor) {
            kilosMenor = kilos;
            saborKilosMenor = sabor;
        } else {
            kilosMenor = kilos;
            saborKilosMenor = sabor;
        }

        //c) La cantidad de sabor carne y el promedio de kilos de sabor carne
        if (sabor == "carne") {
            acumuladorCarne += kilos;
            contadorCarne++;
        }

        contadorBolsa++;

        bolsaAlimento = confirm("Ingresó la bolsa de alimento n°: " + contadorBolsa + ". ¿Seguir ingresando bolsas?");
    }



    //a) El promedio de los kilos totales.
    promedioKilos = acumuladorKilos / contadorKilos;
    document.write("Promedio de kilos: " + promedioKilos);

    //b) El mas liviano y su sabor
    document.write("<br>El más liviano: Pesa: " + kilosMenor + " y su sabor es: " + saborKilosMenor);

    //c) La cantidad de sabor carne y el promedio de kilos de sabor carne
    if (contadorCarne != 0) {
        promedioCarne = acumuladorCarne / contadorCarne;
    } else {
        promedioCarne = "No hay sabor carne";
    }
    document.write("<br>Cantidad de kilos sabor carne: " + acumuladorCarne + " y el promedio de kilos de sabor carne: " + promedioCarne);

}
