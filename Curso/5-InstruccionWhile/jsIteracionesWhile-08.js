/*
Al presionar el botón pedir  números hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/


//******CON FLAG ******
function mostrar() {
	let numero;
	let positivo;
	let negativo;
	let respuesta;
	let flag;


	flag = 0;
	respuesta = true;
	positivo = 0; //elemento nulo con respecto a la suma
	negativo = 1; //elemento nulo con respecto a la multiplicación

	do {
		numero = prompt("Ingrese número");
		numero = parseFloat(numero);


		respuesta = confirm("¿Continuar ingresando números?");

		if (numero > -1) {
			positivo = numero + positivo;
		} else {
			flag = 1;
			negativo = numero * negativo;
		}


	} while (respuesta);


	if (flag == 0) {
		negativo = 0;
	}

	txtIdSuma.value = positivo;
	txtIdProducto.value = negativo;

}


/*
//***** CON CONTADOR *****
//NO USAR ESTA OPCIÓN, USAR FLAG
function mostrar() {
	let numero;
	let positivo;
	let negativo;
	let respuesta;
	let contadorNegativos;


	contadorNegativos = 0;
	//respuesta = "si"; en do while no es necesario iniciarla
	positivo = 0; //elemento nulo con respecto a la suma
	negativo = 1; //elemento nulo con respecto a la multiplicación

	do {
		numero = prompt("Ingrese número");
		numero = parseFloat(numero);


		respuesta = prompt("¿Continuar ingresando números?");

		if (numero > -1) {
			positivo = numero + positivo;
		} else {
			contadorNegativos++;
			negativo = numero * negativo;
		}


	} while (respuesta == "si");

	if (contadorNegativos == 0) {
		negativo = 0;
	}

	txtIdSuma.value = positivo;
	txtIdProducto.value = negativo;

}

*/