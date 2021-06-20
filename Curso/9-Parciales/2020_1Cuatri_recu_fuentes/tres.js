/*
En el ingreso a un viaje en avión nos solicitan 
nombre, 
nacionalidad , 
edad, 
sexo("f" o "m") y 
estado civil(soltero, casado o viudo) y
temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.
*/

function mostrar() {
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estadoCivil;
	let temperatura;
	let seguirIngresando;
	let contadorSolteras;
	let contadorCasadas;
	let contadorViudas;
	let acumuladorCasadas;
	let contadorSolterosGral;
	let contadorTerceraEdadTemperatura;
	let nacionalidadMayorTemperatura;
	let mayorTemperatura;
	let promedioEdadCasadas;
	let flagTemperatura;

	contadorSolteras = 0;
	contadorCasadas = 0;
	contadorViudas = 0;
	acumuladorCasadas = 0;
	contadorSolterosGral = 0;
	contadorTerceraEdadTemperatura = 0;
	flagTemperatura = false;

	do {

		nombre = prompt("Ingrese nombre");
		while (isNaN(nombre) == false) {
			nombre = prompt("Reingrese nombre");
		}

		nacionalidad = prompt("Ingrese nacionalidad");
		while (isNaN(nacionalidad) == false) {
			nacionalidad = prompt("Reingrese nacionalidad");
		}

		edad = parseInt(prompt("Ingrese edad"));
		while (isNaN(edad) == true) {
			edad = parseInt(prompt("Reingrese edad"));
		}


		sexo = prompt("Ingrese sexo(f o m)");
		sexo = sexo.toLowerCase();
		while (isNaN(sexo) == false || sexo == "f" && sexo == "m") {
			sexo = prompt("Reingrese sexo");
			sexo = sexo.toLowerCase();
		}


		estadoCivil = prompt("Ingrese estado civil(soltero, casado o viudo)");
		estadoCivil = estadoCivil.toLowerCase();
		while (isNaN(sexo) == false || estadoCivil == "soltero" && estadoCivil == "casado" && estadoCivil == "viudo") {
			estadoCivil = prompt("Reingrese estado civil(soltero, casado o viudo)");
			estadoCivil = estadoCivil.toLowerCase();
		}


		temperatura = parseInt(prompt("Ingrese temperatura"));
		while (isNaN(temperatura) == true) {
			temperatura = parseInt(prompt("Reingrese temperatura"));
		}



		//a) la Nacionalidad de la persona con mas temperatura.
		if (flagTemperatura == false || temperatura > mayorTemperatura) {
			nacionalidadMayorTemperatura = nacionalidad;
			flag = true;
		} else {
			nacionalidadMayorTemperatura = nacionalidad;
		}


		//b) Cuantos mayores de edad( más de 17) estan solteros

		if (edad > 17 && edad < 60) {
			if (estadoCivil == "soltero") {
				contadorSolterosGral++;
			}
		} else {
			//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
			if (temperatura > 38) {
				//probar con !
				contadorTerceraEdadTemperatura++;
			}

		}

		//c) La cantidad de Mujeres que hay solteras o viudas.
		//e) El promedio de edad entre las mujeres casadas.

		while (sexo == "f") {
			switch (estadoCivil) {
				case "soltero":
					contadorSolteras++;
					break;
				case "casado":
					acumuladorCasadas += edad;
					contadorCasadas++;
					break;
				case "viudo":
					contadorViudas++;
					break;
			}
		}



		seguirIngresando = confirm("¿Ingresar otro pasajero?");
	} while (seguirIngresando == true);





	//a) la Nacionalidad de la persona con mas temperatura.
	document.write("<br>Nacionalidad de persona con mayor temperatura: " + nacionalidadMayorTemperatura);

	//b) Cuantos mayores de edad( más de 17) estan solteros
	document.write("<br>Mayores de edad(más de 17) solteros: " + contadorSolterosGral);

	//c) La cantidad de Mujeres que hay solteras o viudas.
	document.write("<br>Cantidad de mujeres solteras: " + contadorSolteras);

	//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	document.write("<br>Tercera edad con más de 38°c: " + contadorTerceraEdadTemperatura);

	//e) El promedio de edad entre las mujeres casadas.

	if (contadorCasadas > 0) {
		promedioEdadCasadas = acumuladorCasadas / contadorCasadas;
	} else {
		promedioEdadCasadas = "No hay mujeres casadas";
	}

	document.write("<br>Promedio de edad entre las mujeres casadas: " + promedioEdadCasadas);






}
