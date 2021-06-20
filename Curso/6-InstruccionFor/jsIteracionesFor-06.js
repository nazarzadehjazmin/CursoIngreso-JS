/*
al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 
al número ingresado, y mostrar 
la cantidad de numeros pares encontrados.
*/


function mostrar() {
	let numero;
	let contadorPares;

	contadorPares = 0;

	numero = prompt("Ingrese un número");
	numero = parseInt(numero);

	for (let i = 0; i <= numero; i++) {

		if (i % 2 == 0) {
			contadorPares++;
			console.log(i);
		}

	}

	console.log("Cantidad de números pares: " + contadorPares);
}

/*
The modulo (%) operator calculates the remainder
of a division operation. In this case, it calculates
the remainder of i divided by 2. If i is an even number,
 the result will be 0 and if it is an odd number, the result will be 1.
 So this if statement checks to see if i is an even number.

 El operador %(módulo) calcula el resto de la división
 lo que hace en este caso es calcular el resto de i divido por 2.
 Si es un número par = el resultado es 0
 Si es un número impar=el resultado es 1
 entonces esto chequea si es numero par o no

 si un numero es par, el resto deberia dar 0 en esta sentencia
*/