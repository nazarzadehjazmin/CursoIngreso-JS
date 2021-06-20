/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".*/

function mostrar() {
	let hora;

	hora = txtIdHora.value;
	hora = parseInt(hora);
	switch (hora) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");
			break;
		case 20:
		case 21:
		case 22:
		case 23:
			alert("Es de noche");
			break;
		case 0:
		case 24:
			alert("La hora no existe");
			break;
		default:
			alert("Es de tarde");
			break;
	}
}

