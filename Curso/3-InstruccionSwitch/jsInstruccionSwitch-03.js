function mostrar() {
	let mes;

	mes = txtIdMes.value;

	switch (mes) {
		case "Febrero":
			alert("Este mes no tiene más de 29 días");
			break;
		default:
			alert("Este mes tiene 30 o más días");
			break;

	}
}


//puedo no poner el break en el último case