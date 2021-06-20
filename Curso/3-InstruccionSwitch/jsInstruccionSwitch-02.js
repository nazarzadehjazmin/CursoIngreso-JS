function mostrar() {
	let mes;

	mes = txtIdMes.value;

	switch (mes) {
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Enero":
		case "Febrero":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("¡Ya pasamos el frio, ahora calor!");
			break;
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
	}
	/*Si no pusiera el break en una sentencia, se ejecuta esa sentencia 
	junto a las otras sentencias que se estén ejecutando en ese momento, 
	es decir, no deja de ejecutarse nunca.*/

}