function mostrar() {
	let edad;
	let estadoCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estadoCivil = document.getElementById("estadoCivil").value;



	if (estadoCivil == "Soltero" && edad >= 18) {
		alert("Es soltero y no es menor");
	}

}
