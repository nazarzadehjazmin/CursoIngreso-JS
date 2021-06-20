//JAZMÍN NAZARZADEH
//EJERCICIO 8

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
/*
function SacarResto() {
	let dividendo;
	let dividendoParseado;
	let divisor;
	let divisorParseado;
	let resto;

	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;

	dividendoParseado = parseInt(dividendo);
	divisorParseado = parseInt(divisor);

	resto = dividendoParseado % divisorParseado;

	alert("El resto es " + resto + ".");
}

*/
/*
function SacarResto() {
	let dividendoString;
	let divisorString;
	let dividendoNumerico;
	let divisorNumerico;
	let resto;

	dividendoString = txtIdNumeroDividendo.value;
	divisorString = txtIdNumeroDivisor.value;

	dividendoNumerico = parseInt(dividendoString);
	divisorNumerico = parseInt(divisorString);

	resto = dividendoNumerico % divisorNumerico;

	alert("El resto es " + resto)

}
*/

//MODULO, MODULUS, RESTO, 
/* 
JAZMÍN NAZARZADEH
DIVISIÓN = 1°G

3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)
UTILIZAR EL EJERCICIO 8 para resolverlo
*/

function SacarResto() {
	let numeroUno;
	let numeroDos;
	let suma;
	let cantidadDeNumeros;
	let promedio;
	let modulo;

	numeroUno = txtIdNumeroDividendo.value;
	numeroUno = parseFloat(numeroUno);

	numeroDos = txtIdNumeroDivisor.value;
	numeroDos = parseFloat(numeroDos);

	suma = numeroUno + numeroDos;

	cantidadDeNumeros = 2;
	promedio = suma / cantidadDeNumeros;

	modulo = Math.abs(numeroUno % numeroDos);
	//Math.abs(num % denom) 
	//dividendo % divisor

	console.log("La suma es " + suma + ". El promedio es " + promedio + ". El módulo es " + modulo);
}