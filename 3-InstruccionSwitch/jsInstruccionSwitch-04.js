function mostrar() {
	let mes;

	mes = txtIdMes.value;

	switch (mes) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 días");
			break;
		case "Febrero":
			alert("Este mes tiene 28 días");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días");
			break;
	}

	//podría haber puesto un default para los de 31 o 30 días también




}