/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/


/*
function mostrar() {
	let numero;
	let maximo;
	let minimo;
	let respuesta;
	let flag;

	flag = 0;

	do {
		numero = prompt("Ingrese un número");
		numero = parseFloat(numero);

		//Sólo necesito saber si estoy en la primera iteración = uso FLAG
		//Si necesitara contar algo = CONTADOR --> pero se puede usar tmb


		FIJARSE DE QUE NO SE HAYA REESCRITO
		if (flag == 0) {
			//PARA RECONOCER SI ESTOY INGRESANDO EL NUMERO POR PRIMERA VEZ
			maximo = numero;
			minimo = numero;
			flag = 1;
		} else {
			if (numero > maximo) {
				maximo = numero;
			} else {
				if (numero < minimo) {
					minimo = numero;
				}
			}
		}


		//*****OTRA OPCION*****
				//if (flag == 0 || numero > maximo) {
					//maximo = numero;
				//}
				//if (flag == 0 || numero < minimo) {
					//minimo = numero;
					//flag = 1;
				//}


		respuesta = prompt("¿Desea seguir ingresando números?");
	} while (respuesta == "si");

	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;
}
*/



/*
***DO WHILE:
Se ejecuta el código al menos una vez, aunque la condición no se cumpla

***WHILE:
NO se ejecuta si no se cumple la condición
*/



/*
Al presionar el botón pedir números hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/


function mostrar() {
	let numero;
	let minimo;
	let maximo;
	let respuesta;
	let flag;

	flag = 0;

	do {
		numero = prompt("Ingrese número");
		numero = parseFloat(numero);


		if (flag == 0 || numero > maximo) {
			maximo = numero;
		}
		if (flag == 0 || numero < minimo) {
			minimo = numero;
			flag = 1;
		}

		respuesta = confirm("¿Seguir ingresando números?");
	} while (respuesta == true);


	txtIdMaximo.value = maximo;
	txtIdMinimo.value = minimo;

}


//numeros max y min NO PUEDE ESTAR INICIALIZADOS!!
//numero+undefined=NaN
//si comparo numero con nada=undefined

/*
para saber q es la primera vez
para que quiero saberlo? -->para darle por primera vez un visual+

contador=0;

if(contador==0){
	numeromax=numero
	numeromin=numero;
}else


contador++; (para que no sume antes de que suceda)
si pongo el contador arriba de todo: cuenta antes de que pase todo

*/



//DO WHILE EJECUTA EL COD 1 VEZ Y DESP PREG SI ES V EL CODIGO
//WHILE PRIMERO PREGUNTA SI LA CONDICION ES V Y DESPUES EJECUTA EL COD SI ES V