function mostrar() {
	let edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad >= 18) // (edad > 17) es lo mismo 
	{
		alert("El usuario es mayor de edad");
	} else {
		alert("El usuario es menor de edad");
	}


}