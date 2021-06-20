function mostrar() {
	let edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	/*
	if (edad === 13 || 14 || 15 || 16 || 17) {
		alert("El usuario es adolescente");
	}
	*/

	/*
	if (edad >= 13){
		if (edad <=17){
			alert("es adolescente");
		}
	}
	*/

	if (edad >= 13 && edad <= 17) {
		alert("es adolescente");
	}

}