/*function mostrar() {
	let edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad >= 18) {
		alert("El usuario es mayor de edad");
	}
	//podría poner en el if (edad > 17) también

}*/

//TAREA DEL SÁBADO 13/2
/*
1-con if
pedir a una persona que se fue de vacaciones,
la distancia que viajo y el tiempo que tardo,
para calcular la velocidad e informar:
60 km/hr = muy lento >60 <80
hata 80km/h= lento <=80
hasta 100= buen ritmo <=100
hasta 120= ahi de la ley <=120
mas = eso no se hace
*/

/*
function mostrar() {
	let distancia;
	let tiempo;
	let velocidad;
	let mensaje;

	distancia = prompt("¿Cuál es la distancia del recorrido?");
	distancia = parseFloat(distancia);

	tiempo = prompt("¿Cuánto tiempo tardó en recorrer esa distancia?");
	tiempo = parseFloat(tiempo);

	velocidad = distancia / tiempo;

	if (velocidad < 61) {
		mensaje = "Muy lento";
	} else {
		if (velocidad < 81) {
			mensaje = "Lento";
		} else {
			if (velocidad < 101) {
				mensaje = "Buen ritmo";
			} else {
				if (velocidad < 121) {
					mensaje = "Ahí de la ley";
				} else {
					mensaje = "Eso no se hace";
				}
			}

		}

	}

	alert(mensaje);

}
*/

/*2- con if
ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
Bajo peso
Peso normal
Preobesidad
Obesidad I
Obesidad II
Obesidad III

<18,5	Peso bajo
18,5-24,9	Peso normal
27-29,9	(preobesidad)
30-34,9	Obesidad de tipo I
35-39,9	Obesidad de tipo II
40-49,9	Obesidad de tipo III
*/

/*
function mostrar() {
	let nombre;
	let peso;
	let altura;
	let imc;
	let imcClasificacion;

	nombre = prompt("Ingrese nombre");

	peso = prompt("Ingrese su peso en kg");
	peso = parseFloat(peso);

	altura = prompt("Ingrese su altura en metros");
	altura = parseFloat(altura);

	imc = peso / (altura * altura);

	if (imc < 18.6) {
		imcClasificacion = "peso bajo";
	} else {
		if (imc < 25) {
			imcClasificacion = "peso normal";
		} else {
			if (imc < 30) {
				imcClasificacion = "preobesidad";
			} else {
				if (imc < 35) {
					imcClasificacion = "obesidad de tipo I";
				} else {
					if (imc < 40) {
						imcClasificacion = "obesidad de tipo II";
					} else {
						imcClasificacion = "obesidad de tipo III";
					}

				}
			}
		}

	}

	alert("Usted tiene " + imcClasificacion)

}

*/

