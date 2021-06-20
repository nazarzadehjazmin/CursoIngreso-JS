/*
Realizar el algoritmo que permita el ingreso por prompt de 
las alturas en centimetros(validar entre 0 y 250) , 
el sexo. (validar el sexo “f” o “m”) de 
5 jugadores de básquet, 

informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/


function mostrar() {
    let nombre;
    let sexo;
    let altura;
    let contadorAltura;
    let acumuladorAltura;
    let promedioAltura;
    let alturaBaja;
    let sexoAlturaBaja;
    let contadorMujeresAltas;
    let seguirIngresando;


    contadorAltura = 0;
    acumuladorAltura = 0;
    contadorMujeresAltas = 0;
    seguirIngresando = true;

    for (let i = 1; i < 5; i++) {
        nombre = prompt("Ingrese nombre del jugador");

        sexo = prompt("Ingrese sexo del jugador(f o m)");
        sexo = sexo.toLowerCase();
        while (isNaN(sexo) == false || sexo != "f" && sexo != "m") {
            sexo = prompt("Reingrese sexo del jugador(f o m)");
            sexo = sexo.toLowerCase();
        }

        altura = parseFloat(prompt("Ingrese altura (en cm) del jugador"));
        while (isNaN(altura) == true || altura < 1 || altura > 250) {
            altura = parseFloat(prompt("Reingrese altura (en cm) del jugador"));
        }

        //b) La altura más baja y el sexo de esa persona.
        if (contadorAltura == 1 || altura < alturaBaja) {
            alturaBaja = altura;
            sexoAlturaBaja = sexo;
        } else {
            alturaBaja = altura;
            sexoAlturaBaja = sexo;
        }

        //c) La cantidad de mujeres que su altura supere los 190 centimetros.
        if (sexo == "f" && altura > 190) {
            contadorMujeresAltas++;
        }

        acumuladorAltura += altura;
        contadorAltura++;

        seguirIngresando = confirm("¿Ingresar al siguiente jugador?");
    }


    //a) El promedio de las alturas totales.

    promedioAltura = acumuladorAltura / contadorAltura;
    document.write("<br>Promedio de las alturas totales: " + promedioAltura);

    //b) La altura más baja y el sexo de esa persona.
    document.write("<br>La altura más baja: " + alturaBaja + " y el sexo de esa persona: " + sexoAlturaBaja);
    //c) La cantidad de mujeres que su altura supere los 190 centimetros.
    if (contadorMujeresAltas != 0) {
        document.write("<br>Cantidad de mujeres que su altura supere los 190 centimetros: " + contadorMujeresAltas);
    } else {
        document.write("<br>Cantidad de mujeres que su altura supera los 190 centimetros: No hay");
    }

}
