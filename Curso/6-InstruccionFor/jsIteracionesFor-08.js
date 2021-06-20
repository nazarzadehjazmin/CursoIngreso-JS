/*
al presionar el botón pedir un número. 
Informar si el numero es PRIMO o no.
*/


function mostrar() {

	let numero;
	let contadorDivisores;

	contadorDivisores = 0;
	numero = prompt("Ingrese número");
	numero = parseFloat(numero);

	while (isNaN(numero)) {
		numero = prompt("Ud. no ha ingresado un número. Vuelva a ingresar");
		numero = parseFloat(numero);
	}

	for (let i = 0; i <= numero; i++) {
		if (numero % i == 0) {
			contadorDivisores++;
			console.log(i);
		}
	}


	if (contadorDivisores == 2) {
		console.log(numero + " es primo");
	} else {
		console.log(numero + " no es primo");
	}

}





//Con el while validé la variable número
/*
//APARECE 1 ES PRIMO
function mostrar() {

	let numero;
	let contadorDivisores;

	contadorDivisores = 0;
	numero = prompt("Ingrese número");
	numero = parseFloat(numero);

	for (let i = 2; i < numero; i++) {
		if (numero % i == 0) {
			contadorDivisores++;
			console.log(i);
		}
	}


	if (contadorDivisores == 0) {
		console.log(numero + " es primo");
	} else {
		console.log(numero + " no es primo");
	}
}

*/

/*
//NO DA BIEN
function mostrar() {

	let numero;
	let contadorDivisores;

	contadorDivisores = 0;
	numero = prompt("Ingrese número");
	numero = parseFloat(numero);

	for (let i = 2; i < numero; i++) {
		if (numero % i == 0) {
			contadorDivisores++;
			console.log(i);
		}
	}


	if (contadorDivisores != 0 || numero <= 1) {
		console.log(numero + " es primo");
	} else {
		console.log(numero + " no es primo");
	}
}

*/