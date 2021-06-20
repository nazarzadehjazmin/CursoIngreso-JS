/*
al presionar el botón pedir la 
cantidad de veces que quiero 
repetir el mensaje "Hola UTN FRA"
*/

function mostrar() {
	let repeticiones;

	repeticiones = prompt("Ingrese cantidad de repeticiones:");
	repeticiones = parseInt(repeticiones);

	for (i = 0; i < repeticiones; i++) {
		console.log(i + "Hola UTN FRA");
	}

}
