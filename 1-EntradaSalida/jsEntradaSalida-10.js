//JAZMÍN NAZARZADEH
//EJERCICIO 10

/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*
function mostrarAumento() {
	let importe;
	let importeParseado;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;
	importeParseado = parseInt(importe);

	resultado = ((importeParseado * 25) / 100) + importeParseado;
	document.getElementById("txtIdResultado").value = resultado;
}
*/
/*
function mostrarAumento() {
	let importeString;
	let importeNumerico;
	let porcentajeDescuento;
	let descuento;

	importeString = txtIdImporte.value;
	importeNumerico = parseInt(importeString);

	porcentajeDescuento = 25;
	descuento = (importeNumerico * 25) / 100;

	resultado = importeNumerico - descuento;
	txtIdResultado.value = resultado;

}
*/

/* JAZMÍN NAZARZADEH
DIVISIÓN = 1°G
2- En el ejercicio 10 de entrada y salida , se debe pedir el nombre del producto, 
tambien se debe pedir el porcentaje de descuento al usuario, 
mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"
*/

//pedir nombre del producto por prompt
//porcentaje de descuento por prompt
//importe por id
//mensaje por id

function mostrarAumento() {
	let producto;
	let porcentajeDescuento;
	let precio;
	let descuento;
	let precioFinal;

	producto = prompt("Ingrese el nombre del producto");

	porcentajeDescuento = prompt("Ingrese el porcentaje de descuento:");
	porcentajeDescuento = parseInt(porcentajeDescuento);

	precio = txtIdImporte.value;
	precio = parseInt(precio)

	descuento = porcentajeDescuento * precio / 100;
	precioFinal = descuento + precio;

	//alert("Usted compró un " + producto + " con " + porcentajeDescuento + " % de descuento, el precio final es " + precioFinal);
	mensaje = "Usted compró un " + producto + " con " + porcentajeDescuento;
	mensaje += " % de descuento, el precio final es " + precioFinal;

	txtIdResultado.value = mensaje;
}