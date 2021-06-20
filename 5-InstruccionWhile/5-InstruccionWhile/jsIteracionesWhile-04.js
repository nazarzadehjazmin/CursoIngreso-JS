/*
al presionar el botón
pedir un número entre 0 y 
9 inclusive.*/


function mostrar() {

	let numero;



	numero = prompt("Ingrese un número del 0 al 9");
	numero = parseInt(numero);

	while (!(numero >= 0 && numero <= 9)) {
		//(numero < 0 || numero > 9)
		//la condicion verdadera para el while es 
		//la condicion por la que yo quiero que se repita
		//pregunta si esta mal este while
		//lo mejor es negar las condiciones de los while
		//para que la validacion sea verdadera, en la tabla de verdad tiene que dar F

		numero = prompt("Reingrese número");

	}

	txtIdNumero.value = numero;
}


/*
La condición verdadera para el while (o sea, para que funcione)
es la condicion por la que yo quiero que se repita. O sea, lo
mejor es preguntar "mientras esto este mal, hace esto". Y para que
la validación sea verdadera, en la tabla de verdad tiene que dar F,
porque yo le pedi que me verifique si se cumple lo contrario a lo que
verdaderamente quiero.
*/