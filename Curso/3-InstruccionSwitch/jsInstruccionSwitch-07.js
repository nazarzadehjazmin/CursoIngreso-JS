/*Al selecionar un destino, indicar 
el punto cardinal de nuestro pais en donde se encuentra 
Norte, Sur, Este u Oeste*/

function mostrar() {
	let destino;

	destino = txtIdDestino.value;
	switch (destino) {
		case "Bariloche":
			alert("Se encuentra en el oeste");
			break;
		case "Cataratas":
			alert("Se encuentra en el norte");
			break;
		case "Mar del plata":
			alert("Se encuentra en el este");
			break;
		case "Ushuaia":
			alert("Se encuentra en el sur");
			break;
	}


}