/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

//con variable.toLowerCase()

function mostrar() {

	let sexo;

	contador = 0;
	sexo = prompt("Ingrese sexo(f o m)");
	sexo = sexo.toLowerCase();


	while (isNaN(sexo) == false || sexo != "f" && sexo != "m") {

		sexo = prompt("Reingrese sexo (f o m)");
		sexo = sexo.toLowerCase();

	}

	if (sexo == "f") {
		sexo = "Femenino";
	} else {
		if (sexo == "m") {
			sexo = "Masculino";
		}
	}
	txtIdSexo.value = sexo;
}

//para que la validacion sea verdadera, en la tabla de verdad tiene que dar F


//para que la validacion sea verdadera, en la tabla de verdad tiene que dar F en este ejercicio

/*
function mostrar() {

	let sexo;

	let femenino;
	let masculino;

	contador = 0;
	sexo = prompt("Ingrese sexo(f o m)");
	femenino = "Femenino";
	masculino = "Masculino";



	while (sexo != 'f' && sexo != 'm' && sexo != 'F' && sexo != 'M') {

		sexo = prompt("Reingrese sexo (f o m)");
	}

	if (sexo == "f" || sexo == "F") {
		sexo = femenino;
	} else {
		if (sexo == "m" || sexo == "M") {
			sexo = masculino;
		}
	}
	txtIdSexo.value = sexo;
}
*/

