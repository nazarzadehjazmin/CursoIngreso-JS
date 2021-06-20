/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

/*
function mostrar() {
	let nombre;
	let edad;
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	//Opción 1 USAR ESTA!!
	alert("Usted se llama " + nombre + " y tiene " + edad + " años");

	//Opción 2 NO USAR 
	//alert(`Usted se llama ${nombre} y tiene ${edad} años`);
	//no olvidarse de que va con comillas al revés
	//se llama templade of strings

	//Opción 3
	//escribir variables y sumarlas
}
*/

function mostrar() {
	let nombre;
	let edad;

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

	alert("Su nombre es " + nombre + " y su edad es " + edad + " años.");

}
