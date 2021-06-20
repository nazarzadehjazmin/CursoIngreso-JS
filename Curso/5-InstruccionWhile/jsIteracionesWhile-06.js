/*Al presionar el botón pedir 5 números 
e informar la suma acumulada y 
el promedio.*/

/*
function mostrar() {
	let i; //contador, asignar num fuera del while
	let acumulador; // asignar num fuera del while
	let numero;
	let promedio;

	i = 0;
	acumulador = 0;

	while (i < 5) {
		numero = prompt("Ingrese un número");
		numero = parseFloat(numero);

		acumulador = acumulador + numero;

		i++;
	}


	promedio = acumulador / 5;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;
}*/


/*Al presionar el botón pedir 5 números 
e informar la suma acumulada y 
el promedio.*/

function mostrar() {
	let numero;
	let promedio;
	let contador;
	let acumulador;

	contador = 0;
	acumulador = 0;


	while (contador < 5) {
		numero = prompt("Ingrese un número");
		numero = parseFloat(numero);

		acumulador = acumulador + numero;
		contador++;
	}

	promedio = acumulador / contador;
	txtIdPromedio.value = promedio;
	txtIdSuma.value = acumulador;

}