function mostrar() {
	let numero;

	numero = Math.floor(Math.random() * (100 - 1) + 1);

	if (numero >= 1 && numero <= 10) {
		alert(numero);
	}

}

/*numero = Math.floor(Math.random() * 10) + 1;
alert(numero);*/

	//Math.random() * (max - min) + min;

/*
//Math.round()

Math.round(Math.random() * 9 + 1);

numero = Math.round(Math.random() * (maximo - minimo) + minimo);
agregando variables = minimo y maximo
puedo ponerlo sin variables, directamente con los numeros

Devuelve el valor del número dado redondeado al entero más cercano.
EJ:
x = Math.round(20.49); --> Retorna el valor 20
x = Math.round(20.5); --> Retorna el valor 21
x = Math.round(-20.5); --> Retorna el valor -20
*/

/*
//Math.floor()

Devuelve el máximo entero menor o igual a un número.
EJ:
Si se pasa 45.95 a getFloor, éste devuelve 45;
si se le pasa -45.95,  devuelve -46.
*/
