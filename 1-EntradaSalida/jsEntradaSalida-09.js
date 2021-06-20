//JAZMÍN NAZARZADEH
//EJERCICIO 9

/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

/*
//MI SOLUCIÓN

function mostrarAumento() {
	let importeString;
	let importeNumerico;
	let porcentajeAumento;
	let resultado;


	importeString = document.getElementById("txtIdSueldo").value;
	importeNumerico = parseInt(importeString);

	porcentajeAumento = 10;

	resultado = (importeNumerico * 10) / 100;

	document.getElementById("txtIdResultado").value = resultado;

}

//SOLUCIÓN DE CLASE


function mostrarAumento()
{
	let importeString;
	let importeNumerico;
	let aumento;
	let porcenteAumento;
	let importeNumericoConAumento;

	porcentajeAumento = 10;

	importeString = txtSueldo.value;
	importeNumerico = parseInt(importeString);

	aumento = importeNumerico * porcentajeAumento / 100;
	importeNumericoConAumento = aumento + importeNumerico;
	txtIdResultado.value = importeNumericoConAumento;
}
*/

function mostrarAumento() {
	let sueldoString;
	let sueldoNumerico;
	let porcentaje;
	let aumento;
	let resultado;

	sueldoString = txtIdSueldo.value;
	sueldoNumerico = parseInt(sueldoString);

	porcentaje = 10;
	aumento = sueldoNumerico * porcentaje / 100
	resultado = aumento + sueldoNumerico;

	txtIdResultado.value = resultado;

}