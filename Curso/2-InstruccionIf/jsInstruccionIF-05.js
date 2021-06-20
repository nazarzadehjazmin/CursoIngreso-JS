function mostrar() {
	let edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (!(edad >= 13 && edad <= 17)) {
		alert("No es adolescente");
	}

}

//recordar intervalos de números (matemática)
//DOM 2:19