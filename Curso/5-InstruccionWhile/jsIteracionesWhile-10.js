/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/


//se inicializa en el while, no en el do while porque a la 
//variable de control la usamos para escribir un valor

function mostrar() {
	let respuesta;
	let numero;
	let contadorNegativos;
	let contadorPositivos;
	let contadorCeros;
	let contadorPares;
	let acumuladorPositivos;
	let acumuladorNegativos;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorCeros = 0;
	contadorPares = 0;
	acumuladorPositivos = 0;
	acumuladorNegativos = 0;
	respuesta = true;

	do {
		numero = prompt("Ingrese un número");
		numero = parseFloat(numero);

		if (numero == 0) {

			contadorCeros++;
		} else {
			if (numero > 0) {
				contadorPositivos++;
				acumuladorPositivos = acumuladorPositivos + numero; //acumuladorPositivos += numero;

			} else {
				contadorNegativos++;
				acumuladorNegativos = acumuladorNegativos + numero;
			}
		}

		if (numero % 2 == 0) {
			contadorPares++;
		}

		respuesta = confirm("¿Desea seguir ingresando números?");
	} while (respuesta);


	//document.write("la suma de negativos es :" + sumaNegativos);


	if (contadorNegativos != 0 && contadorPositivos != 0) {

		promedioNegativos = acumuladorNegativos / contadorNegativos;
		promedioPositivos = acumuladorPositivos / contadorPositivos;
	} else {
		promedioNegativos = 0;
		promedioPositivos = 0;
	}


	diferencia = acumuladorPositivos - acumuladorNegativos;

	document.write("Suma negativos= " + acumuladorNegativos + " Suma positivos= " + acumuladorPositivos);
	document.write("Promedio positivos= " + promedioPositivos + " Promedio negativos= " + promedioNegativos);
	document.write("Cantidad de números= positivos " + contadorPositivos + " negativos " + contadorNegativos + " ceros " + contadorCeros + " pares " + contadorPares);
	document.write("Diferencia entre positivos y negativos " + diferencia);

}



/*
*****document.write*****
	Te lleva a una pag en blanco
	Te redirecciona a HTML
	Es una mala práctica (parece que reemplaza algo escrito en HTML)
	*CÓMO LO REEMPLAZO?
	Usually, instead of doing document.write you can use someElement.innerHTML
	or better, document.createElement with an someElement.appendChild.
	You can also consider using a library like jQuery and using the modification
	functions in there: http://api.jquery.com/category/manipulation/

	*/
