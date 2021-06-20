/*una agencia de viajes nos piden informar si hacemos 
viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: 
Solo Bariloche informa "se viaja" 
los demas destinos "No se viaja"
en Verano: 
Se viaja a Mar del plata y Cataratas solamente
en Otoño: 
Se viaja a todos los destinos.
primavera: 
solo no se viaja a Bariloche */

function mostrar() {
	let estacion;
	let destino;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch (estacion) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Mar del plata":
				case "Cataratas":
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case "Otoño":
			alert("Se viaja");
			break;
		case "Primavera":
			switch (destino) {
				case "Bariloche":
					alert("No se viaja");
					break;
				default:
					alert("Se viaja");
					break
			}
			break;
	}
}




/*
function mostrar() {
	let estacion;
	let destino;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;

	switch (estacion) {
		case "Invierno":
			if (destino == "Bariloche") {
				alert("Se viaja");
			} else {
				alert("No se viaja");
			}
			break;
		case "Verano":
			if (destino == "Mar del plata") {
				alert("Se viaja");
			} else {
				if (destino == "Cataratas") {
					alert("Se viaja");
				} else {
					alert("No se viaja");
				}
			}
			break;
		case "Otoño":
			alert("Se viaja");
			break;
		case "Primavera":
			if (destino != "Bariloche") {
				alert("Se viaja");
			} else {
				alert("No se viaja");
			}
			break;
	}

}
*/



/*
BUSCAR FLAG VARIABLES

A flag is a variable used to have some value until some condition
becomes true,then we change it to false and print the output
(Initially flag considered as true)

https://stackoverflow.com/questions/17402125/what-is-a-flag-variable

*/