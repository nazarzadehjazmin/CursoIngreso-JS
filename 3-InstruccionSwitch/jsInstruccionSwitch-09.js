/* Una agencia de viajes debe sacar las tarifas de los viajes, 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad 
para vacacionar para poder calcular el precio final

//Invierno: 
bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

//Verano: 
bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

//Otoño y Primavera: 
bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10%
Mar del plata tiene un aumento del 10% 
Cordoba tiene el precio sin descuento*/

//***** OTRA VERSIÓN *****

function mostrar() {
	let estacionIngresada;
	let destinoIngresado;
	let precioBase;
	let porcentaje;
	let operacion;
	let calculoFinal;

	estacionIngresada = txtIdEstacion.value;
	destinoIngresado = txtIdDestino.value;
	precioBase = 15000;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					porcentaje = 0.20;
					operacion = "Aumento";
					break;
				case "Cordoba":
					porcentaje = 0.10;
					operacion = "Descuento";
					break;
				case "Cataratas":
					porcentaje = 0.10;
					operacion = "Descuento";
					break;
				case "Mar del Plata":
					porcentaje = 0.10;
					operacion = "Descuento";
					break;
			}

			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					porcentaje = 0.20;
					operacion = "Descuento";
					break;
				case "Cordoba":
					porcentaje = 0.10;
					operacion = "Aumento";
					break;
				case "Cataratas":
					porcentaje = 0.10;
					operacion = "Aumento";
					break;
				case "Mar del Plata":
					porcentaje = 0.10;
					operacion = "Aumento";
					break;
			}

			break;
		case "Otoño":
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
					porcentaje = 0.10;
					operacion = "Aumento";
					break;
				case "Cordoba":
					porcentaje = 0;
					operacion = "Ninguna";
					break;
				case "Cataratas":
					porcentaje = 0.10;
					operacion = "Aumento";
					break;
				case "Mar del Plata":
					porcentaje = 0.10;
					operacion = "Aumento";
					break;
			}
			break;
	}
	switch (operacion) {
		case "Aumento":
			calculoFinal = precioBase + (precioBase * porcentaje);
			break;

		case "Descuento":
			calculoFinal = precioBase - (precioBase * porcentaje);
			break;
		default:
			calculoFinal = precioBase;

	}
	alert("El precio es " + calculoFinal);

}//FIN DE LA FUNCIÓN







//*****MIOS *****
/*
function mostrar() {
	let estadiaBase;
	let estacion;
	let localidad;
	let precioFinal;
	let descuento;
	let aumento;

	estadiaBase = 15000;
	estacion = txtIdEstacion.value;
	localidad = txtIdDestino.value;

	switch (localidad) {
		case "Bariloche":
			switch (estacion) {
				case "Invierno":
					aumento = 20;
					descuento = 0;
					break;
				case "Verano":
					aumento = 0;
					descuento = 20;
					break;
				case "Otoño":
				case "Primavera":
					aumento = 10;
					descuento = 0;
					break;
			}
			break;

		case "Cataratas":
			switch (estacion) {
				case "Invierno":
					descuento = 10;
					aumento = 0;
					break;
				case "Verano":
					aumento = 10;
					descuento = 0;
					break;
				case "Primavera":
				case "Otoño":
					descuento = 0;
					aumento = 10;
					break;
			}
			break;

		case "Cordoba":
			switch (estacion) {
				case "Invierno":
					descuento = 10;
					aumento = 0;
					break;
				case "Verano":
					aumento = 10;
					descuento = 0;
					break;
				case "Primavera":
				case "Otoño":
					descuento = 0;
					aumento = 0;
					break;
			}
			break;

		case "Mar del plata":
			switch (estacion) {
				case "Invierno":
					descuento = 20;
					aumento = 0;
					break;
				case "Verano":
					aumento = 20;
					descuento = 0;
					break;
				case "Otoño":
				case "Primavera":
					aumento = 10;
					descuento = 0;
					break;
			}
			break;
	}

	descuento = estadiaBase * descuento / 100;
	aumento = estadiaBase * aumento / 100;
	precioFinal = estadiaBase - descuento + aumento;

	alert("Su precio final es de " + precioFinal);
}
*/


/*
switch (estacion) {
	case "Invierno":
		if (localidad == "Bariloche") {
			aumento = 20;
			descuento = 0;
		} else {
			if (localidad == "Mar del plata") {
				descuento = 20;
				aumento = 0;
			} else {
				descuento = 10;
				aumento = 0;
			}
		}
		break;
	case "Verano":
		if (localidad == "Bariloche") {
			descuento = 20;
			aumento = 0;
		} else {
			if (localidad == "Mar del plata") {
				aumento = 20;
				descuento = 0;
			} else {
				aumento = 10;
				descuento = 0;
			}
		}
		break;
	case "Otoño":
	case "Primavera":

		if (localidad == "Cordoba") {
			descuento = 0;
			aumento = 0;
		} else {
			aumento = 10;
			descuento = 0;
		}
		break;
}
*/

/*
descuento = estadiaBase * descuento / 100;
aumento = estadiaBase * aumento / 100;
precioFinal = estadiaBase - descuento + aumento;
*/
//da NaN porque multipliqué por 0

/*
	if (aumento != 0) {
		aumento = estadiaBase * aumento / 100;
		precioFinal = estadiaBase + aumento;
	} else {
		if (descuento != 0) {
			descuento = estadiaBase * descuento / 100;
			precioFinal = estadiaBase - descuento;
		} else {
			precioFinal = estadiaBase;
		}
	}
*/

/*alert("Su precio final es de " + precioFinal);
}
*/


//TAREA REPASO DEL SÁBADO 13/2
/*
3-con if
una agencia de viajes debe sacar las tarifas de los viajes,
se cobra $15.000 por cada estadia como base, se pide el ingreso
de una estacion del año y localidad para vacacionar para poder
calcular el precio final

en Invierno:
bariloche tiene un aumento del 20%
cataratas y Cordoba tiene un descuento del 10%
Mar del plata tiene un descuento del 20%

en Verano:
bariloche tiene un descuento del 20%
cataratas y Cordoba tiene un aumento del 10%
Mar del plata tiene un aumento del 20%

en Otoño y Primavera:
bariloche tiene un aumento del 10%
cataratas tiene un aumento del 10%
Mar del plata tiene un aumento del 10% y
Cordoba tiene el precio sin descuento
*/
/*
function mostrar() {
	let estadiaBase;
	let estacion;
	let localidad;
	let precioFinal;
	let descuento;
	let aumento;


	estadiaBase = 15000;
	estacion = txtIdEstacion.value;
	localidad = txtIdDestino.value;

	if (estacion == "Verano") {
		if (localidad == "Bariloche") {
			descuento = 20;
			aumento = 0;
		} else {
			if (localidad == "Mar del plata") {
				aumento = 20;
				descuento = 0;
			} else {
				aumento = 10;
				descuento = 0;
			}
		}

	} else {
		if (estacion == "Invierno") {
			if (localidad == "Bariloche") {
				aumento = 20;
				descuento = 0;
			} else {
				if (localidad == "Mar del plata") {
					descuento = 20;
					aumento = 0;
				} else {
					descuento = 10;
					aumento = 0;
				}
			}
		} else {
			if (localidad == "Cordoba") {
				descuento = 0;
				aumento = 0;
			} else {
				aumento = 10;
				descuento = 0;
			}
		}
	}

	aumento = aumento * estadiaBase / 100;
	descuento = descuento * estadiaBase / 100;
	precioFinal = estadiaBase + aumento - descuento;

	alert(precioFinal);
}
*/

//puedo hacer el precion con desc y el precio con aumento por separado





/*
ESTA BIEN ESTO?
NO!!!!

function mostrar() {

	switch (variableRandom) {
		case "Mengano":
		case "Fulano":
			alert("algo");
			break;
		case "Mengano":
			alert("otra cosa");
			break;
		case "Fulano":
			alert("otra cosa también");
			break;
	}

}
*/