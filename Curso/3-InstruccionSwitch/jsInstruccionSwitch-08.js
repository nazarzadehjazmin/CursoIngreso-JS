/*Al seleccionar un destino informar 
si hace FRIO o CALOR en ese destino */

function mostrar() {
	let destino;

	destino = txtIdDestino.value;

	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Hace calor");
			break;

	}

}