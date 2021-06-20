/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan 
nombre, 
edad, 
sexo("f" o "m")
estado civil("soltero", "casado" o "viudo") 
temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años), 
tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar() {

	let nombre;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let seguirIngresando;
	let mayorTemperatura;
	let flagTemperatura;
	let nombreMayorTemperatura;
	let contadorSoltero;
	let contadorCasado;
	let contadorViudo;
	let contadorViudoMayorEdad;
	let contadorHombreViudo;
	let contadorHombreSoltero;
	let contadorTemperaturaMayorEdad;
	let acumuladorEdadSolteros;
	let promedioSolteros;

	flagTemperatura = false;
	contadorSoltero = 0;
	contadorCasado = 0;
	contadorViudo = 0;
	contadorViudoMayorEdad = 0;
	contadorHombreViudo = 0;
	contadorHombreSoltero = 0;
	contadorTemperaturaMayorEdad = 0;
	acumuladorEdadSolteros = 0;


	do {
		nombre = prompt("Ingrese nombre");
		while (isNaN(nombre) == false) {
			nombre = prompt("Reingrese nombre");
		}

		edad = parseInt(prompt("Ingrese edad"));
		while (isNaN(edad) == true) {
			edad = parseInt(prompt("Reingrese edad"));
		}

		sexo = prompt("Ingrese sexo(f o m)");
		sexo = sexo.toLowerCase();
		while (isNaN(sexo) == false || sexo != "f" && sexo != "m") {
			sexo = prompt("Reingrese sexo(f o m)");
			sexo = sexo.toLowerCase();
		}

		estadoCivil = prompt("Ingrese estado civil(soltero, casado o viudo)");
		estadoCivil = estadoCivil.toLowerCase();
		while (isNaN(estadoCivil) == false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Ingrese estado civil(soltero, casado o viudo)");
			estadoCivil = estadoCivil.toLowerCase();
		}

		temperatura = parseFloat(prompt("Ingrese temperatura(°c)"));
		while (isNaN(temperatura) == true) {
			temperatura = parseFloat(prompt("Reingrese temperatura(°c)"));
		}

		if (flagTemperatura == false && temperatura > mayorTemperatura) {
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
			flagTemperatura = true;
		} else {
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
		}

		switch (estadoCivil) {
			case "soltero":
				if (sexo == "m") {
					acumuladorEdadSolteros += edad;
					contadorHombreSoltero++;

				}

				contadorSoltero++;

				break;
			case "casado":
				contadorCasado++;
				break;
			case "viudo":
				if (edad > 59) {
					contadorViudoMayorEdad++;
					if (temperatura > 38) {
						contadorTemperaturaMayorEdad++;
					}
				}

				if (sexo == "m") {
					contadorHombreViudo++;
				}
				contadorViudo++;
				break;
		}


		seguirIngresando = confirm("¿Ingresar a otra persona?");
	} while (seguirIngresando == true);



	//a) El nombre de la persona con mas temperatura.
	document.write("<br><b>nombre de la persona con mas temperatura: </b>" + nombreMayorTemperatura);

	//b) Cuantos mayores de edad estan viudos
	document.write("<br><b>Cantidad de mayores de edad viudos: </b>" + contadorViudoMayorEdad);

	//c) La cantidad de hombres que hay solteros o viudos.
	document.write("<br><b>Cantidad de hombres que hay solteros:</b> " + contadorHombreSoltero);
	document.write("<br><b>Cantidad de hombres que hay viudos:</b> " + contadorHombreViudo);

	//d) cuantas personas de la tercera edad( mas de 60 años), 
	//tienen mas de 38 de temperatura
	document.write("<br><b>Cantidad de personas de la tercera edad tienen mas de 38 de temperatura:</b> " + contadorTemperaturaMayorEdad);

	//e) El promedio de edad entre los hombres solteros.

	//si el contador es 0
	if (contadorHombreSoltero != 0) {
		promedioSolteros = acumuladorEdadSolteros / contadorHombreSoltero;
	} else {
		promedioSolteros = "No hay hombres solteros";
	}

	document.write("<br><b>Promedio de edad entre los hombres solteros: </b>" + promedioSolteros);


}
