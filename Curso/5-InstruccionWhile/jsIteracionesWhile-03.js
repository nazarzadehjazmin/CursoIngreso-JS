/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
/*
function mostrar() {

	//Pido el dato
	let clave;
	clave = prompt("ingrese el número clave.");

	//Valido el dato
	while (clave != "utn750") { //(!(clave == "utn750"))
		clave = prompt("Clave inválida, reingrese");
	}

	alert("Clave válida");
}
*/


/*
	WHILE es un bucle, IF un condicional

	Debo poner una condic que sea true y se ejecutará cuando el dato sea INVÁLIDO,
	porque si entro al while, tengo que informar que el dato es inválido
	y que lo tengo que volver a pedir

	Sólo entro al bucle cuando el dato es inválido, ya que va a
	seguir pidiéndome que ingrese un dato válido.

	2 OPCIONES:
	1. Poner la condición inválida --> (clave != "utn750")
	2. Negar una condición válida --> (!(clave == "utn750"))
*/


/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

/*
function mostrar() {
	let clave;
	let contador;

	contador = 0;
	clave = prompt("Ingrese la clave");

	while (clave != "utn750") {
		contador++;
		clave = prompt("Reingrese la clave");
	}

	alert("Clave válida");
}
*/


/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*
*/

function mostrar() {
	let clave;
	let contador;

	contador = 0;
	clave = prompt("Ingrese clave");

	while (clave != "utn750") {

		contador++;
		clave = prompt("Clave incorrecta. Reingrese clave");
	}

	alert("Clave válida");

}
