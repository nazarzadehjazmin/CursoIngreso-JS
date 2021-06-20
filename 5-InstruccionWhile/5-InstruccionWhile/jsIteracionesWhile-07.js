/*
Al presionar el botón pedir números hasta 
que el USUARIO QUIERA e informar la suma 
acumulada y el promedio.
*/

/*function mostrar() {
	let acumulador;
	let i; //contador
	let numero;
	let promedio;
	let seguir;

	i = 0;
	acumulador = 0;
	seguir = "si";

	while (seguir == "si") {
		numero = prompt("Ingrese numero");
		numero = parseFloat(numero);

		acumulador = acumulador + numero;
		i++;
		seguir = prompt("¿Desea seguir?");
	}

	promedio = acumulador / i; //acumulador/contador

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;

}*/

/*
function mostrar() {
	let acumulador;
	let i; //contador
	let numero;
	let promedio;
	let seguir;

	i = 0;
	acumulador = 0;
	seguir = "si";

	do {
		numero = prompt("Ingrese numero");
		numero = parseFloat(numero);

		acumulador = acumulador + numero;
		i++;
		seguir = prompt("¿Desea seguir?");
	} while (seguir == "si");

	promedio = acumulador / i; //acumulador/contador

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;

}*/


/*
//while

es como un if se repite mientras la condicion sea verdadera
puedo limitar ese num de veces en que es verdadera

//do while

se ejecuta por lo menos una vez
do{
}while(condicion);

*/

/*
Al presionar el botón pedir números hasta 
que el USUARIO QUIERA e informar la suma 
acumulada y el promedio.
*/

/*
function mostrar() {
	let numero;
	let acumulador;
	let promedio;
	let respuesta;
	let contador;

	acumulador = 0;
	contador = 0;
	respuesta = "si";

	while (respuesta == "si") {
		numero = prompt("Ingrese un número");
		numero = parseFloat(numero);

		acumulador = acumulador + numero;
		respuesta = prompt("¿Volver a ingresar?");
		contador++;
	}

	txtIdSuma.value = acumulador;
	promedio = acumulador / contador;
	txtIdPromedio.value = promedio;
}*/


/*
Al presionar el botón pedir números hasta 
que el USUARIO QUIERA e informar la suma 
acumulada y el promedio.
*/

function mostrar() {
	let numero;
	let contador;
	let acumulador;
	let promedio;
	let respuesta;

	acumulador = 0;
	contador = 0;
	respuesta = "si";

	do {
		numero = prompt("Ingrese número");
		numero = parseFloat(numero);

		acumulador = acumulador + numero;
		contador++;

		respuesta = prompt("¿Desea volver a ingresar un número?");

	} while (respuesta == "si");


	promedio = acumulador / contador;

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio;

}

//confirm
