//JAZMÍN NAZARZADEH
//EJERCICIO 7

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

/*
function sumar() {
	let numeroUno;
	let numeroUnoParseado;
	let numeroDos;
	let numeroDosParseado;
	let suma;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUnoParseado = parseInt(numeroUno);
	numeroDosParseado = parseInt(numeroDos);

	suma = numeroUnoParseado + numeroDosParseado;

	alert("Su resultado es " + suma);
}



function restar() {
	let numeroUno;
	let numeroUnoParseado;
	let numeroDos;
	let numeroDosParseado;
	let resta;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUnoParseado = parseInt(numeroUno);
	numeroDosParseado = parseInt(numeroDos);

	resta = numeroUnoParseado - numeroDosParseado;

	alert("Su resultado es " + resta);

}

function multiplicar() {
	let numeroUno;
	let numeroUnoParseado;
	let numeroDos;
	let numeroDosParseado;
	let multiplicar;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUnoParseado = parseInt(numeroUno);
	numeroDosParseado = parseInt(numeroDos);

	multiplicar = numeroUnoParseado * numeroDosParseado;

	alert("Su resultado es " + multiplicar);
}

function dividir() {
	let numeroUno;
	let numeroUnoParseado;
	let numeroDos;
	let numeroDosParseado;
	let dividir;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUnoParseado = parseInt(numeroUno);
	numeroDosParseado = parseInt(numeroDos);

	dividir = numeroUnoParseado / numeroDosParseado;

	alert("Su resultado es " + dividir);
}
*/

function sumar() {
	let numeroUnoString;
	let numeroDosString;
	let numeroUnoNumerico;
	let numeroDosNumerico;
	let suma;

	numeroUnoString = txtIdNumeroUno.value;
	numeroDosString = txtIdNumeroDos.value;

	numeroUnoNumerico = parseInt(numeroUnoString);
	numeroDosNumerico = parseInt(numeroDosString);

	suma = numeroUnoNumerico + numeroDosNumerico;
	alert(suma);

}

function restar() {
	let numeroUnoString;
	let numeroDosString;
	let numeroUnoNumerico;
	let numeroDosNumerico;
	let resta;

	numeroUnoString = txtIdNumeroUno.value;
	numeroDosString = txtIdNumeroDos.value;

	numeroUnoNumerico = parseInt(numeroUnoString);
	numeroDosNumerico = parseInt(numeroDosString);

	resta = numeroUnoNumerico - numeroDosNumerico;
	alert(resta);
}

function multiplicar() {
	let numeroUnoString;
	let numeroDosString;
	let numeroUnoNumerico;
	let numeroDosNumerico;
	let multiplica;

	numeroUnoString = txtIdNumeroUno.value;
	numeroDosString = txtIdNumeroDos.value;

	numeroUnoNumerico = parseInt(numeroUnoString);
	numeroDosNumerico = parseInt(numeroDosString);

	multiplica = numeroUnoNumerico * numeroDosNumerico;
	alert(multiplica);
}

function dividir() {
	let numeroUnoString;
	let numeroDosString;
	let numeroUnoNumerico;
	let numeroDosNumerico;
	let divido;

	numeroUnoString = txtIdNumeroUno.value;
	numeroDosString = txtIdNumeroDos.value;

	numeroUnoNumerico = parseInt(numeroUnoString);
	numeroDosNumerico = parseInt(numeroDosString);

	divido = numeroUnoNumerico / numeroDosNumerico;
	alert(divido);

}