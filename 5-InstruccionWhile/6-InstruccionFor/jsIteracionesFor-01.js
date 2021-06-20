/*
al presionar el botón mostrar 10 repeticiones con 
números ASCENDENTE, desde el 1 al 10.
*/


function mostrar() {

	for (let i = 1; i <= 10; i++) {
		console.log(i);

	}
}
//0 al 9
//i=i*2, i=i+4, i--, etc

//(let i=100; i>0; i--) va del 100 al 1

//puede haber let = i; y let = j; 

/*

function mostrar() {
	let i;

	i = 0;

	while (i < 10) {
		i++; //i=i+1;
		console.log(i);
	}
}




	for (i = 1; i < 11; i++) {
		console.log(i);

	}
}


ES IGUAL QUE HACER ESTO (EJ 1 DE WHILE)

	function mostrar(){
	i = 1;
	while (i < 11) //(i<=10) {

		console.log(i);
		i++;
		}
	}







variable de control, la condicion, el incremento o modificacion de eso

for (valor inicial de la variable de control; condición; incremento)

**DO WHILE
Se ejecuta en todos aquellos casos donde queremos entrar por lo menos una vez

**WHILE
Puede ser que no se ejecuten
Si no sé de antemano la cantidad de repeticiones (por ej: pedir numeros hasta que la suma de los mismos sea 1 millon)

**FOR
Puede ser que no se ejecuten
Cuando conozco de antemano la cantidad de repeticiones, y lo se en tiempo de compilacion(por ej: pedir 5 numeros)

rompe la proxima iteracion break

*/