function mostrar() {
	let edad;
	let estadoCivil;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	estadoCivil = document.getElementById("estadoCivil").value;
	//lo hice con document porque con estadoCivil.value no 
	//funcionaba al ser igual el nombre de la variable y del id
	//es porque hace referencia a la variable en ese caso y no al id

	if (edad < 18 && estadoCivil != "Soltero") {
		alert("Es muy pequeño para NO ser soltero");
	}
	//"Soltero" lo saqué de VALUE, "estadoCivil" de ID

	/*
	puedo hacer esto:

	alert(estadoCivil);
	alert(edad);

	en realidad lo que imprime el alert es el VALUE de las opciones
	no importa lo que se muestre en la etiqueta
	*/

}