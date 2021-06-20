/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/


//ANOTACIONES
//-1-
//literal de cadena = string
//String + String = String
//String+ Number = String 
//Number + String = String
//Number + Number = Number
//Cuando concateno numeros y string -->todo se vuelve STRING (string + number)

//-2-
//PARSEAR = Convertir variable no numérica a numérica --> parseInt
//El parseo NO admite números con coma(decimales), dará NaN, 
//es por esto que debemos utilizar para decimales = parseFloat
//CASTEAR = Convertir un dato numérico en otro tipo de dato numérico 
//--> por ej: entero en flotante(decimales) --> parseFloat



//MI SOLUCIÓN
/*
function sumar() {
	let numeroUno;
	let numeroDos;
	let numeroUnoParseint;
	let numeroDosParseint;
	let suma;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUnoParseint = parseInt(numeroUno);
	numeroDosParseint = parseInt(numeroDos);

	suma = numeroUnoParseint + numeroDosParseint;

	alert("Su resultado es " + suma);

}
*/

/*
//SOLUCIÓN DE CLASE
function sumar() {
	//Declaraciones
	let numeroUno;
	let numeroDos;
	let numeroUnoParseado;
	let numeroDosParseado;
	let suma;

	//Asignaciones
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;


	//Transformar en enteros
	numeroUnoParseado = parseInt(numeroUno);
	numeroDosParseado = parseInt(numeroDos);

	//Operación aritmética
	suma = numeroUnoParseado + numeroDosParseado;

	alert("El resultado es " + suma);
}
*/


function sumar() {
	let numeroUnoString;
	let numeroUnoNumerico;
	let numeroDosString;
	let numeroDosNumerico;
	let suma;

	numeroUnoString = txtIdNumeroUno.value;
	numeroDosString = txtIdNumeroDos.value;

	numeroUnoNumerico = parseInt(numeroUnoString);
	numeroDosNumerico = parseInt(numeroDosString);

	suma = numeroUnoNumerico + numeroDosNumerico;

	alert(suma);
}

//ESTO ES MEJOR HACERLO ASÍ
/*function sumar(){
	let numeroUno;
	let numeroDos;
	let suma;

	numeroUno = parseInt(txtIdNumeroUno.value);
}*/