/*
al presionar el botón mostrar 10 repeticiones
con números ASCENDENTE, desde el 1 al 10.


function mostrar() {
	let i;

	i = 0;

	while (i < 10) {
		i++; //i=i+1;
		alert(i);
	}

/*
	i = 1;
	while (i < 11) //(i<=10) {

		console.log(i);
	i++;
	}

* /

}

al presionar el botón mostrar 10 repeticiones
con números ASCENDENTE, desde el 1 al 10.

function mostrar() {
	let i;

	i = 1;

	while (i < 11) {
		alert(i);
		i++;
	}
}

*/


/*
WHILE

Mientras la condición sea verdadera, seguimos dentro del bucle,
iterando, hasta que la condición sea falsa.
Se va a seguir ejecutando el while, hasta que sea falsa la condic
siempre debemos tener la posibilidad de salir,
NO a los bucles infinitos

La CONDICIÓN es la que me dice si el cód se ejecuta o no y cuántas veces

VARIABLE DE CONTROL:
Dentro de la condición
Va a evaluar con algún operador relacional si cumple la condicion
Es la variable que controla la cant de repeticiones, es decir, controla el bucle
Es imp que esté declarada e inicializada (que se le haya asignado un valor)

Modificación de la variable de control=
Dentro del bloque de código
Para que la variable sea evaluada como FALSE y pueda escapar del while

para validaciones
para repetir código(loop)



while determinado es un while donde conozco la cantidad de
veces que se va a repetir, indeterminado si desconozco cuantas
veces se repite


PARTES
1. definir la variable que voy a iterar para poder ingresar por primera vez al while
2. la evaluacion de variable
3.el cambio de la variable

let contador;
contador = 0; //1 iniciar variable de control
while(contador <15 //2 comparar variable de control, lim superior, cant de vueltas)
{
contador = contador + 1 //3 cambio de variable de control
}

****contador siempre empieza en 0, puede ir arriba o abajo dentro de las {} del while
*si contador arriba dentro de {}--> el primer num es 1 min 7
*si contador abajo dentro de {}--> el primer num es el 0


****cuando no conocemos la cantidad de iteraciones
let contador;
let respuesta;

contador = 0;
respuesta=si;

while(contador <15)
{
contador = contador + 1;
console.log("numero:" + contador);
}
//para sumar num que se la cantidad

while(respuesta==si)
{
	respuesta=prompt("continuar?")
}
//esto se puede usar para sumar num q no se la cant


**** Ingreso de números
**EJ 1
//Sé la cant de vueltas (iteracion basada en números)
let contador;
let respuesta;
let acumulador; //para sacar promedio
let promedio;
let numeroIngresado;

contador = 0;
respuesta=si;
acumulador = 0; //inicializar

while(contador <5) //5 numeros
{
	contador = contador + 1;
	numeroIngresado=prompt("ingrese"+ contador);
	acumulador = acumulador + numeroIngresado; //si lo pongo afuera, no anda, solo acumula 1 num
//si pongo let promedio aca, se calcula 5 veces
}

promedio = acumulador / contador;


**EJ 2
//No sé la cant de vueltas (iteracion basada en la respuesta)
let contador;
let respuesta;
let acumulador; //para sacar promedio
let promedio;
let numeroIngresado;

contador = 0;
respuesta="si";
acumulador = 0;

while(respuesta==si)
{
	numeroIngresado=prompt("ingrese"+ contador);
	acumulador = acumulador + numeroIngresado;
	contador = contador + 1;
	respuesta=prompt("continuar?");
}

promedio = acumulador / contador;


*/

//EJ SABADO 20/2
/* JAZMÍN NAZARZADEH
1. Ingresar 5 numeros, y determinar la cantidad
de numeros que son mayores que
10 y menores 20 (incluisive en ambos casos)*/

//verificar el rango y contar
/*
function mostrar() {
	let contador;
	let numero;
	let contadorCantidad;

	contador = 0;
	contadorCantidad = 0;

	while (contador < 5) {
		numero = prompt("Ingrese un número");
		numero = parseFloat(numero);

		if (numero > 9 && numero < 21) {
			contadorCantidad++;
		}

		contador++;

	}

	alert("la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos) " + contadorCantidad);

}
*/

/*CORRECION*/
//ARMADO DEL ALGORITMO(estruct del programa)
//repetir 
//pedir un numero
//evaluar si el número cumple la condición
//si se cumple la condicion: cuento
//muestro cuántos cumplen la condición
/*
function mostrar() {
	let i; //contadorIteraciones
	let numeroIngresado;
	let contadorRango10y20;

	contador = 0;
	contadorRango10y20 = 0;

	while (i < 5) {
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado = parseFloat(numeroIngresado);

		if (numero > 9 && numero < 21) { //mejor no poner <= porque le da mas para procesar al programa (consume menos recursos)
			contadorRango10y20++; //contadorRango10y20 = contadorRango10y20 + 1;
		}

		i++;

	}

	alert("la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos) " + contadorRango10y20);

}*/


/*
JAZMÍN NAZARZADEH
**EJERCICIO 2**
1. Ingresar 5 numeros, y determinar la cantidad de numeros que son mayores
que 10 y menores 20 (incluisive en ambos casos)
2. Mismo ejercicio, pero no se cuantos numeros se ingresan.
(Lo decide el usuario). Mostrar tambien el promedio de los numeros
que cumplen la condicion.
*/

/*
function mostrar() {
	let i;
	let numero;
	let contadorDeCantidad;
	let respuesta;

	i = 0;
	contadorDeCantidad = 0;
	respuesta = "si";

	while (respuesta == "si") {
		numero = prompt("Ingrese un número");
		numero = parseFloat(numero);

		if (numero > 9 && numero < 21) {
			contadorDeCantidad++;
		}

		respuesta = prompt("¿Seguir ingresando números?");

	}

	alert("la cantidad de numeros que son mayores que 10 y menores 20 (incluisive en ambos casos) " + contadorDeCantidad);

}

*/


/*
pedir al usuario dos numeros por prompt
sumarlos
darle un alert
pedir 5*/

/*
function mostrar() {
	let numeroUno;
	let numeroDos;
	let numeroTres;
	let numeroCuatro;
	let numeroCinco;
	let suma;

	numeroUno = prompt("Ingrese número");
	numeroUno = parseFloat(numeroUno);

	numeroDos = prompt("Ingrese otro número");
	numeroDos = parseFloat(numeroDos);

	numeroTres = prompt("Ingrese otro número");
	numeroTres = parseFloat(numeroTres);

	numeroCuatro = prompt("Ingrese otro número");
	numeroCuatro = parseFloat(numeroCuatro);

	numeroCinco = prompt("Ingrese otro número");
	numeroCinco = parseFloat(numeroCinco);




	suma = numeroUno + numeroDos + numeroTres + numeroCuatro + numeroCinco;

	alert("La suma de los números es " + suma);
}
*/


//ESCRIBO UN NUMERO MENOS DEL QUE NECESITO
//ESCRIBIR LA FRASE DONDE EL WHILE SE CONVIERTE EN VERDADERO
//EN QUE MOMENTO DEJA DE SER VERDADERA LA CONDICION



/*
pedir al usuario 5 numeros por prompt
sumarlos
darle un alert
*/

/*
function mostrar() {
	let numero;
	let contador;
	let acumulador;

	contador = 0;
	acumulador = 0;

	while (contador < 5) {
		numero = prompt("Ingrese un número");
		numero = parseFloat(numero);

		contador++;
		acumulador = acumulador + numero;
	}

	alert("La suma es igual a " + acumulador);
}

*/

/*JAZMÍN NAZARZADEH
al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.
*/

function mostrar() {
	let contador;

	contador = 0;

	while (contador < 10) {
		contador++;
		console.log(contador);
	}
}


/*

**WHILE
asociada a 2 situaciones:
donde quiero hacer algo mientras det condicion se cumpla y no conozco la cant de veces q quiero hacer algo
itero mientras algo sea v o f dependiendo de la preg

hacer algo una det cant de veces --> con contador, esta la hago mejor con for

para q de otra vuelta(itere de nuevo, entre de nuevo en el bloque): condicion tiene que ser verdadera



*/