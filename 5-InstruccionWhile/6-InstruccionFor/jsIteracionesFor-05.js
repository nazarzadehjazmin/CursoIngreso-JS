/*
al presionar el botón repetir el pedido 
de número hasta que ingresemos el 9.
*/

function mostrar() {
	let numero;

	for (; ;) {
		numero = prompt("Ingrese un número");
		numero = parseInt(numero);

		if (numero == 9) {
			break;
		}

		console.log(numero);
	}
}