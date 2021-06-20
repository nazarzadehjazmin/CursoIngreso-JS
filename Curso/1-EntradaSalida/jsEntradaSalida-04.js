/*
Debemos lograr tomar un dato por 'PROMPT'
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

/*
function mostrar() {
	let datoIngresado;
	datoIngresado = prompt("Ingrese el dato");

	//datoIngresado = txtIdNombre.value; no lo escribo asi porque quiero asignarle txtIdNombre.value a la variable.
	// siempre es el nombre = lo que quiero asignar. Acá quería asignar txtIdNombre.value a la variable
	txtIdNombre.value = datoIngresado;
	alert(datoIngresado);
}
*/

function mostrar() {
	let nombre;

	nombre = prompt("Ingrese su nombre");

	txtIdNombre.value = nombre;
}

