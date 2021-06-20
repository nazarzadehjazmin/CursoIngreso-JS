/*
al presionar el botón repetir hasta 
que utilizamos 'BREAK'.
*/


function mostrar() {
	/*
		for (let i = 0; i < 5; i++) {
			break;
			console.log(i);
		}
		//no se ejecuta
	
		for (let i = 0; i < 5; i++) {
			console.log(i);
			break;
		}
		//muestra sólo 0
	*/

	for (let i = 0; i < 5; i++) {

		if (i == 3) {
			break;
			//no entra el 3. Solo 0, 1, 2
		}
		console.log(i);
	}

	//si quiero que entre el 3 tmb por ej: if (i > 3)



}

//break; para cuando quiero terminar de forma anticipada un bucle
/*
break: Significa detener la ejecución de un bucle y salirse de él.
continue: Sirve para detener la iteración actual y volver al principio del bucle para realizar otra iteración, si corresponde.
*/