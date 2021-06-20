/**JAZMÍN NAZARZADEH
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:

necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) --->(que sea en letras)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperatura corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano
 */
/*
function probarEjercicio() {
	let tipoMascota;
	let tipoPelaje;
	let edad;
	let nombre;
	let raza;
	let peso;
	let estadoClinico;
	let temperatura;
	let seguirIngresando;

	do {

		nombre = prompt("Ingrese nombre de la mascota");
		while (isNaN(nombre) == false) {
			nombre = prompt("Error. Reingrese nombre de la mascota");
		}

		tipoMascota = prompt("Ingrese tipo de mascota(gato-perro-otro");
		tipoMascota = tipoMascota.toLowerCase();
		while (isNaN(tipoMascota) == false || tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "otro") {
			tipoMascota = prompt("Error. Reingrese tipo de mascota(gato-perro-otro");
			tipoMascota = tipoMascota.toLowerCase();
		}

		tipoPelaje = prompt("Ingrese tipo de pelaje")


		seguirIngresando = confirm("¿Seguir ingresando?");
	} while (seguirIngresando == true);



}
 */



/*
function probarEjercicio() {
   let nombreArray = new Array();
   let tipoAnimal;
   let tipoPelaje;
   let edad;
   let nombre;
   let raza;
   let peso;
   let estadoClinico;
   let temperatura;
   let seguirIngresando;
   let contadorPerro;
   let perroMasPesado;
   let contadorCantidadTotalMascotas;
   let flagTemperatura;
   let animalMenorTemperatura;
   let contadorMascotaEnferma;
   let acumuladorTemperaturaGato;
   let contadorGato;
   let acumuladorTemperaturaPerro;
   let acumuladorTemperaturaOtro;
   let promedioTemperaturaGato;
   let promedioTemperaturaPerro;
   let promedioTemperaturaOtro;
   let mayorPromedioTemperatura;
   let nombreAnimalMenorTemperatura;
   let sumaPerroYGato;
   let porcentajeGatoYPerro;
   let acumuladorKilosTotal;
   let contadorMascotaInternada;
   let contadorMascotaAdoptada;
   let estadoClinicoMenorCantidad;
   let flagGatoLiviano;
   let pesoGatoMasLiviano;
   let nombreGatoLiviano;
   let razaGatoLiviano;
   let contadorSinPelo;
   let contadorGatoSinPelo;


   contadorPerro = 0;
   contadorCantidadTotalMascotas = 0;
   contadorMascotaEnferma = 0;
   flagTemperatura = true;
   acumuladorTemperaturaGato = 0;
   contadorGato = 0;
   acumuladorTemperaturaPerro = 0;
   acumuladorTemperaturaOtro = 0;
   contadorOtro = 0;
   promedioTemperaturaGato = 0;
   promedioTemperaturaPerro = 0;
   promedioTemperaturaOtro = 0;
   acumuladorKilosTotal = 0;
   contadorMascotaInternada = 0;
   contadorMascotaAdoptada = 0;
   flagGatoLiviano = true;
   contadorSinPelo = 0;
   contadorGatoSinPelo = 0;


   do {
	   tipoAnimal = prompt("Ingrese tipo de mascota (gato-perro-otro)");
	   tipoAnimal = tipoAnimal.toLowerCase();
	   while (isNaN(tipoAnimal) == false || tipoAnimal != "gato" && tipoAnimal != "perro" && tipoAnimal != "otro") {
		   tipoAnimal = prompt("Error. Reingrese tipo de mascota (gato-perro-otro");
		   tipoAnimal = tipoAnimal.toLowerCase();
	   }

	   tipoPelaje = prompt("Ingrese tipo de pelaje de la mascota (corto-largo-sin pelo)")
	   tipoPelaje = tipoPelaje.toLowerCase();
	   while (isNaN(tipoAnimal) == false || tipoPelaje != "corto" && tipoPelaje != "largo" && tipoPelaje != "sin pelo") {
		   tipoPelaje = prompt("Error. Reingrese tipo de pelaje de la mascota (corto-largo-sin pelo)")
		   tipoPelaje = tipoPelaje.toLowerCase();
	   }

	   edad = parseInt(prompt("Ingrese la edad de la mascota"));
	   while (isNaN(edad)) {
		   edad = parseInt(prompt("Error. Reingrese la edad de la mascota"));
	   }

	   nombre = prompt("Ingrese nombre de la mascota");
	   nombre = nombre.toLowerCase();
	   while (isNaN(nombre) == false) {
		   nombre = prompt("Error. Reingrese nombre de la mascota");
		   nombre = nombre.toLowerCase();
	   }

	   raza = prompt("Ingrese raza de la mascota");
	   raza = raza.toLowerCase();
	   while (isNaN(raza) == false) {
		   raza = prompt("Error. Reingrese raza de la mascota");
		   raza = raza.toLowerCase();
	   }

	   peso = parseFloat(prompt("Ingrese peso de la mascota"));
	   while (isNaN(peso)) {
		   peso = parseFloat(prompt("Error. Reingrese peso de la mascota"));
	   }

	   estadoClinico = prompt("Ingrese estado clínico de la mascota (enfermo-internado-adopcion)");
	   while (isNaN(estadoClinico) == false || estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion") {
		   estadoClinico = prompt("Error. Reingrese estado clínico de la mascota (enfermo-internado-adopcion)");
	   }

	   temperatura = parseFloat(prompt("Ingrese temperatura de la mascota"));
	   while (isNaN(temperatura)) {
		   temperatura = parseFloat(prompt("Error. Reingrese temperatura de la mascota"));
	   }


	   // d)El animal sin pelo con menor temperatura corporal
	   if (tipoPelaje == "sin pelo") {
		   if (flagTemperatura || temperatura < animalMenorTemperatura) {
			   animalMenorTemperatura = temperatura;
			   nombreAnimalMenorTemperatura = nombre;
			   flag = false;
		   } else {
			   animalMenorTemperatura = temperatura;
			   nombreAnimalMenorTemperatura = nombre;
		   }
		   contadorSinPelo++;
	   }


	   switch (tipoAnimal) {
		   case "gato":
			   // i)El nombre y raza del gato sin pelos mas liviano
			   if (tipoPelaje == "sin pelo") {
				   if (flagGatoLiviano || peso < pesoGatoMasLiviano) {
					   nombreGatoLiviano = nombre;
					   razaGatoLiviano = raza;
					   flag = false;
				   }
				   contadorGatoSinPelo++;
			   }

			   acumuladorTemperaturaGato += temperatura;
			   contadorGato++;
			   break;
		   case "perro":
			   // a)El perro mas pesado
			   if (contadorPerro < 1 || peso > perroMasPesado) {
				   perroMasPesado = peso;
			   }

			   acumuladorTemperaturaPerro += temperatura;
			   contadorPerro++;
			   break;
		   case "otro":

			   // c)El nombre de la ultima mascota de tipo "otra cosa"
			   nombreArray.push(nombre);
			   acumuladorTemperaturaOtro += temperatura;
			   contadorOtro++;
			   break;
	   }

	   // g)Que estado clinico tiene la menor cantidad de mascotas
	   switch (estadoClinico) {
		   case "enfermo":
			   // b)El porcentaje de enfermos sobre el total de mascotas
			   contadorMascotaEnferma++;
			   break;
		   case "internado":
			   contadorMascotaInternada++;
			   break;
		   case "adopcion":
			   contadorMascotaAdoptada++;
			   break;
	   }

	   acumuladorKilosTotal += peso;
	   contadorCantidadTotalMascotas++;


	   seguirIngresando = confirm("¿Seguir ingresando mascotas?");
   } while (seguirIngresando == true);


   // a)El perro mas pesado
   if (contadorPerro != 0) {
	   document.write("El perro más pesado pesa: " + perroMasPesado + "</br>");
   } else {
	   document.write("El perro más pesado pesa: No hay perros </br>");
   }

   // b)El porcentaje de enfermos sobre el total de mascotas
   //cantidad de enfermos *100 / Total
   if (contadorMascotaEnferma != 0) {
	   porcentajeEnfermos = contadorMascotaEnferma * 100 / contadorCantidadTotalMascotas;
	   document.write("El porcentaje de enfermos sobre el total de mascotas es: " + porcentajeEnfermos + "</br>");
   } else {
	   document.write("El porcentaje de enfermos sobre el total de mascotas es: No hay mascotas enfermas</br>");
   }

   // c)El nombre de la ultima mascota de tipo "otra cosa"
   if (contadorOtro != 0) {
	   document.write("El nombre de la ultima mascota de tipo otra cosa: " + nombreArray[nombreArray.length - 1] + "</br>");
   } else {
	   document.write("El nombre de la ultima mascota de tipo otra cosa: No hay mascotas de tipo otra cosa</br>");

   }

   // d)El animal sin pelo con menor temperatura corporal
   if (contadorSinPelo != 0) {
	   document.write("El animal sin pelo con menor temperatura corporal tiene: " + animalMenorTemperatura + " y se llama " + nombreAnimalMenorTemperatura + "</br>");
   } else {
	   document.write("El animal sin pelo con menor temperatura corporal tiene: No hay mascotas sin pelo </br>");
   }

   // e)Que tipo de mascota(gato o un perro u "otra cosa") que tiene el mayor promedio de temperatura corporal
   promedioTemperaturaGato = acumuladorTemperaturaGato / contadorGato;
   promedioTemperaturaPerro = acumuladorTemperaturaPerro / contadorPerro;
   promedioTemperaturaOtro = acumuladorTemperaturaOtro / contadorOtro;

   if (promedioTemperaturaGato > promedioTemperaturaPerro && promedioTemperaturaGato > promedioTemperaturaOtro) {
	   mayorPromedioTemperatura = "gato";
   } else {
	   if (promedioTemperaturaPerro > promedioTemperaturaOtro) {
		   mayorPromedioTemperatura = "perro";
	   } else {
		   mayorPromedioTemperatura = "otra cosa";
	   }
   }

   document.write("Tipo de mascota con mayor promedio de temperatura: " + mayorPromedioTemperatura + "</br>");

   // f)Sumando gatos y perros que porcentaje del total de mascotas son?
   sumaPerroYGato = contadorPerro + contadorGato;
   porcentajeGatoYPerro = sumaPerroYGato * 100 / contadorCantidadTotalMascotas;

   document.write("Porcentaje del total de mascotas que son gatos y perros: " + porcentajeGatoYPerro + "</br>");

   // g)Que estado clinico tiene la menor cantidad de mascotas
   if (contadorMascotaEnferma < contadorMascotaInternada && contadorMascotaEnferma < contadorMascotaAdoptada) {
	   estadoClinicoMenorCantidad = "enfermo";
   } else {
	   if (contadorMascotaInternada < contadorMascotaAdoptada) {
		   estadoClinicoMenorCantidad = "internado";
	   } else {
		   estadoClinicoMenorCantidad = "adopcion";
	   }
   }
   document.write("Estado clinico que tiene la menor cantidad de mascotas: " + estadoClinicoMenorCantidad + "</br>");

   // h)Cual es el promedio de kilos de peso de tomando todas las mascotas
   promedioKilosTotal = acumuladorKilosTotal / contadorCantidadTotalMascotas;
   document.write("Promedio del peso todas las mascotas es: " + promedioKilosTotal + "</br>");

   // i)El nombre y raza del gato sin pelos mas liviano
   if (contadorGatoSinPelo != 0) {
	   document.write("El nombre del gato sin pelos mas liviano es: " + nombreGatoLiviano + "  y su raza es: " + razaGatoLiviano + "</br>");
   } else {
	   document.write("El nombre del gato sin pelos mas liviano es: No hay gatos </br>");
   }
} */



/* Enunciado:1

Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto
el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos */

/* function probarEjercicio() {
	let nombreProducto;
	let tipoProducto;
	let precio;
	let cantidadUnidades;
	let tipoInflamable;
	let marca;
	let flagTipoMasCaro;
	let tipoMasCaro;
	let marcaMasCara;
	let precioTipoMasCaro;
	let acumuladorAlcohol;
	let contadorAlcohol;
	let acumuladorIac;
	let contadorIac;
	let acumuladorQuat;
	let contadorQuat;
	let promedioAlcohol;
	let promedioIac;
	let promedioQuat;
	let contadorIacDoscientos;
	let acumuladorIgnifugo;
	let acumuladorCombustible;
	let acumuladorExplosivo;
	let inflamableMayorCantidad;

	flagTipoMasCaro = true;
	acumuladorAlcohol = 0;
	contadorAlcohol = 0;
	acumuladorIac = 0;
	contadorIac = 0;
	acumuladorQuat = 0;
	contadorQuat = 0;
	contadorIacDoscientos = 0;
	contadorIgnifugo = 0;
	acumuladorIgnifugo = 0;
	acumuladorCombustible = 0;
	acumuladorExplosivo = 0;




	for (let i = 0; i < 1; i++) {
		nombreProducto = prompt("Ingrese nombre del producto");
		while (isNaN(nombreProducto) == false) {
			nombreProducto = prompt("Error. Reingrese nombre del producto");
		}

		tipoProducto = prompt("Ingrese tipo de producto(alcohol-iac-quat");
		tipoProducto = tipoProducto.toLowerCase();
		while (isNaN(tipoProducto) == false || tipoProducto != "alcohol" && tipoProducto != "iac" && tipoProducto != "quat") {
			tipoProducto = prompt("Error. Reingrese tipo de producto(alcohol-iac-quat");
			tipoProducto = tipoProducto.toLowerCase();
		}

		precio = parseFloat(prompt("Ingrese precio del producto(entre 100 y 300)"));
		while (isNaN(precio) || precio < 100 || precio > 300) {
			precio = parseFloat(prompt("Error. Reingrese precio del producto(entre 100 y 300)"));

		}

		cantidadUnidades = parseInt(prompt("Ingrese cantidad de unidades(hasta 1000)"))
		while (isNaN(cantidadUnidades) || cantidadUnidades < 1 || cantidadUnidades > 1000) {
			cantidadUnidades = parseInt(prompt("Error. Reingrese cantidad de unidades(hasta 1000)"))

		}

		tipoInflamable = prompt("Ingrese tipo de inflamable(ignifugo-combustible-explosivo");
		tipoInflamable = tipoInflamable.toLowerCase();
		while (isNaN(tipoInflamable) == false || tipoInflamable != "ignifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo") {
			tipoInflamable = prompt("Error. Reingrese tipo de inflamable(ignifugo-combustible-explosivo");
			tipoInflamable = tipoInflamable.toLowerCase();
		}

		marca = prompt("Ingrese marca");

		// a) El promedio de cantidad por tipo de producto
		switch (tipoProducto) {
			case "alcohol":
				acumuladorAlcohol += cantidadUnidades;
				contadorAlcohol++;
				break;
			case "iac":
				// c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
				if (precio > 199) {
					contadorIacDoscientos++;
				}
				acumuladorIac += cantidadUnidades;
				contadorIac++;
				break;
			case "quat":

				acumuladorQuat += cantidadUnidades;
				contadorQuat++;
				break;
		}

		// b) El tipo de inflamable con más cantidad de unidades en total de la compra
		switch (tipoInflamable) {
			case "ignifugo":
				acumuladorIgnifugo += cantidadUnidades;
				break;
			case "combustible":
				acumuladorCombustible += cantidadUnidades;
				break;
			case "explosivo":
				acumuladorExplosivo += cantidadUnidades;
				break;
		}

		// d) la marca y tipo del más caro de los productos
		if (flagTipoMasCaro || precio > precioTipoMasCaro) {
			tipoMasCaro = tipoProducto;
			marcaMasCara = marca;
			flagTipoMasCaro = false;
		}

	}

	// a) El promedio de cantidad por tipo de producto
	promedioAlcohol = acumuladorAlcohol / contadorAlcohol;
	promedioIac = acumuladorIac / contadorIac;
	promedioQuat = acumuladorQuat / contadorQuat;

	if (contadorAlcohol != 0) {
		document.write("<br>promedio de cantidad del alcohol " + promedioAlcohol);

	} else {
		document.write("<br>promedio de cantidad del alcohol: No hay alcohol");
	}

	if (contadorIac != 0) {
		document.write("<br>promedio de cantidad del Iac " + promedioIac);
	} else {
		document.write("<br>promedio de cantidad del Iac: No hay iac");
	}

	if (contadorQuat != 0) {
		document.write("<br>promedio de cantidad del Quat " + promedioQuat);
	} else {
		document.write("<br>promedio de cantidad del Quat: No hay quat");

	}

	// b) El tipo de inflamable con más cantidad de unidades en total de la compra

	if (acumuladorIgnifugo > acumuladorCombustible && acumuladorIgnifugo > acumuladorExplosivo) {
		inflamableMayorCantidad = "ignifugo";
	} else {
		if (acumuladorCombustible > acumuladorExplosivo) {
			inflamableMayorCantidad = "combustible";
		} else {
			inflamableMayorCantidad = "explosivo";
		}
	}


	document.write("<br>tipo de inflamable con más cantidad de unidades en total de la compra: " + inflamableMayorCantidad);


	// c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
	if (contadorIacDoscientos != 0) {
		document.write("<br>unidades de IAC con precios menos a 200 (inclusive) que se compraron en total " + contadorIacDoscientos);
	} else {
		document.write("<br>unidades de IAC con precios menos a 200 (inclusive) que se compraron en total: No hay");

	}
	// d) la marca y tipo del más caro de los productos
	document.write("<br>tipo del más caro de los productos: " + tipoMasCaro + " y la marca " + marcaMasCara);

} */


/* Enunciado:
Bienvenidos.
//37
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas,
de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% de los pasajeros que tiene mas de 60 años ,
el precio final tiene un descuento del 25%, que solo mostramos si corresponde. */

/*
function probarEjercicio() {
	let nombrePasajero;
	let estadoCivil;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let precioXPasajero;
	let seguirIngresando;
	let contadorViudoMasSesenta;
	let contadorSolteras;
	let edadSolteraMasJoven;
	let nombreSolteraMasJoven;
	let contadorPasajeros;
	let viajeTotalSinDescuento;
	let contadorPasajerosSesenta;
	let porcentajePasajerosSesenta;
	let descuento;
	let viajeTotalConDescuento;

	precioXPasajero = 600;
	contadorViudoMasSesenta = 0;
	contadorSolteras = 0;
	contadorPasajeros = 0;
	contadorPasajerosSesenta = 0;


	do {
		nombrePasajero = prompt("Ingrese nombre del pasajero");
		while (isNaN(nombrePasajero) == false) {
			nombrePasajero = prompt("Error. Reingrese nombre del pasajero");
		}

		estadoCivil = prompt("Ingrese estado civil del pasajero(soltero-casado-viudo)");
		estadoCivil = estadoCivil.toLowerCase();
		while (isNaN(estadoCivil) == false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Error. Reingrese estado civil del pasajero");
			estadoCivil = estadoCivil.toLowerCase();
		}

		edad = parseInt(prompt("Ingrese edad del pasajero"));
		while (isNaN(edad) || edad < 18) {
			edad = parseInt(prompt("Error. Reingrese edad del pasajero"));
		}

		temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal"));
		while (isNaN(temperaturaCorporal) || temperaturaCorporal > 40 || temperaturaCorporal < 36) {
			temperaturaCorporal = parseInt(prompt("Error. Reingrese temperatura corporal"));
		}

		sexo = prompt("Ingrese sexo(f-m-nb)");
		sexo = sexo.toLowerCase();
		while (isNaN(sexo) == false || sexo != "f" && sexo != "m" && sexo != "nb") {
			sexo = prompt("Error. Reingrese sexo(f-m-nb)");
			sexo = sexo.toLowerCase();
		}

		// a) La cantidad de personas con estado "viudo" de mas de 60 años.
		// b) el nombre y edad de la mujer soltera mas joven.
		switch (estadoCivil) {
			case "soltero":
				if (sexo == "f") {
					if (contadorSolteras < 1 || edad < edadSolteraMasJoven) {
						edadSolteraMasJoven = edad;
						nombreSolteraMasJoven = nombrePasajero;
					}
					contadorSolteras++;
				}
				break;
			case "viudo":
				if (edad > 60) {
					contadorViudoMasSesenta++;
				}
				break;
		}


		// d) si hay mas del 50% de los pasajeros que tiene mas de 60 años ,
		// el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
		if (edad > 60) {
			contadorPasajerosSesenta++;
		}


		// c) cuanto sale el viaje total sin descuento.
		contadorPasajeros++;

		seguirIngresando = confirm("¿Seguir ingresando pasajeros?");
	} while (seguirIngresando == true);

	// a) La cantidad de personas con estado "viudo" de mas de 60 años.
	if (contadorViudoMasSesenta != 0) {
		document.write("<br>cantidad de personas con estado viudo de mas de 60 años: " + contadorViudoMasSesenta);
	} else {
		document.write("<br>cantidad de personas con estado viudo de mas de 60 años: No hay");
	}

	// b) el nombre y edad de la mujer soltera mas joven.
	if (contadorSolteras != 0) {
		document.write("<br>nombre de la mujer soltera mas joven: " + nombreSolteraMasJoven + " y su edad: " + edadSolteraMasJoven);
	} else {
		document.write("<br>nombre de la mujer soltera mas joven y su edad: No hay");
	}

	// c) cuanto sale el viaje total sin descuento.
	viajeTotalSinDescuento = precioXPasajero * contadorPasajeros;

	document.write("<br>el viaje total sin descuento es de: " + viajeTotalSinDescuento);

	// d) si hay mas del 50% de los pasajeros que tiene mas de 60 años ,
	// el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

	//total de pasajeros con 60 * 100 / totalPasajeros
	porcentajePasajerosSesenta = contadorPasajerosSesenta * 100 / contadorPasajeros;
	descuento = viajeTotalSinDescuento * 0.25;
	viajeTotalConDescuento = viajeTotalSinDescuento - descuento;

	if (porcentajePasajerosSesenta > 51) {
		document.write("<br>Ud. tiene un descuento del 25%, su precio final es: " + viajeTotalConDescuento);
	}

}
 */


/* Enunciado:2
//26 - 57
Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA,
los datos solicitados son:
nombre
Tipo cursada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota */

/*
function probarEjercicio() {
	let seguirIngresando;
	let nombreAlumno;
	let tipoCursada;
	let cantidadMaterias;
	let sexo;
	let nota;
	let edad;
	let acumuladorNotaFemenino;
	let contadorNotaFemenino;
	let contadorNotaMasculino;
	let acumuladorNotaMasculino;
	let acumuladorNotaNoBinario;
	let contadorNotaNoBinario;
	let promedioFemenino;
	let promedioMasculino;
	let promedioNoBinario;
	let nombreCursaNoRemoto;
	let edadCursaNoRemoto;
	let flagNoRemoto;
	let mayorCantMaterias;
	let nombreMasJovenYLibre;
	let edadMasJovenYLibre;
	let flagMasJovenYlibre = true;
	let acumuladorFemYNb = 0;
	let contadorFemYNb = 0;
	let flagMejorPromedioNoMasc = true;
	let mejorPromedioFemYNb;

	contadorNotaFemenino = 0;
	acumuladorNotaFemenino = 0;
	contadorNotaMasculino = 0;
	acumuladorNotaMasculino = 0;
	acumuladorNotaNoBinario = 0;
	contadorNotaNoBinario = 0;
	flagNoRemoto = true;



	do {
		nombreAlumno = prompt("Ingrese nombre");
		while (isNaN(nombreAlumno) == false) {
			nombreAlumno = prompt("Reingrese nombre");

		}

		tipoCursada = prompt("Ingrese tipo de cursada(libre, presencial, remota)");
		while (isNaN(tipoCursada) == false || tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota") {
			tipoCursada = prompt("Reingrese tipo de cursada(libre, presencial, remota)");
		}

		cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias"));
		while (isNaN(cantidadMaterias) || cantidadMaterias < 1 || cantidadMaterias > 8) {
			cantidadMaterias == parseInt(prompt("Reingrese cantidad de materias"));

		}

		sexo == prompt("Ingrese sexo(f-m-nb)");
		sexo = sexo.toLowerCase();
		while (isNaN(sexo) == false || sexo != "f" && sexo != "m" && sexo != "nb") {
			sexo == prompt("Reingrese sexo(f-m-nb)");
			sexo = sexo.toLowerCase();
		}

		nota = parseFloat(prompt("Ingrese nota"));
		while (isNaN(nota) || nota < 0 || nota > 10) {
			nota = parseFloat(prompt("Reingrese nota"));

		}

		edad = parseInt(prompt("Ingrese edad"));
		while (isNaN(edad) || edad < 17) {
			edad = parseInt(prompt("Reingrese edad"));

		}

		// c) El promedio de nota por sexo
		switch (sexo) {
			case "f":
				acumuladorNotaFemenino += nota;
				contadorNotaFemenino++;
				break;
			case "m":
				acumuladorNotaMasculino += nota;
				contadorNotaMasculino++;
				break;
			case "nb":
				acumuladorNotaNoBinario += nota;
				contadorNotaNoBinario++;
				break;

		}

		// a) El nombre del mejor promedio que no sea masculino
		if (sexo != "m") {
			acumuladorFemYNb += nota;
			contadorFemyNb++;
		}
		promedioFemYNb = acumuladorFemYNb / contadorFemYNb;
		if (flagMejorPromedioNoMasc || promedioFemYNb > mejorPromedioFemYNb) {
			mejorPromedioFemYNb = nombreAlumno;
		}


		// b) El nombre del mas joven de los alumnos entre los que la dan libre
		while (tipoCursada == "libre") {
			if (flagMasJovenYlibre || edad < edadMasJovenYLibre) {
				nombreMasJovenYLibre = nombreAlumno;
			}
		}

		// d) La edad y nombre del que cursa mas materias que no sean en forma remota
		while (tipoCursada != "remota") {
			if (flagNoRemoto || cantidadMaterias > mayorCantMaterias) {
				nombreCursaNoRemoto = nombreAlumno;
				edadCursaNoRemoto = edad;
				flagNoRemoto = false;
			}
		}

		// acumuladorNotasTotales += nota;
		// contadorNotasTotales++;

		seguirIngresando = confirm("¿Ingresar más alumnos?");
	} while (seguirIngresando == true);


	// b) El nombre del mas joven de los alumnos entre los que la dan libre
	document.write("nombre del mas joven de los alumnos entre los que la dan libre: " + nombreMasJovenYLibre);

	// c) El promedio de nota por sexo
	promedioFemenino = acumuladorNotaFemenino / contadorNotaFemenino;
	promedioMasculino = acumuladorNotaMasculino / contadorNotaMasculino;
	promedioNoBinario = acumuladorNotaNoBinario / contadorNotaNoBinario;

	if (contadorNotaFemenino != 0) {
		document.write("Promedio de notas de mujeres: " + promedioFemenino);
	} else {
		document.write("Promedio de notas de mujeres: No hay mujeres");
	}

	if (contadorNotaMasculino != 0) {
		document.write("Promedio de notas de hombres: " + promedioMasculino);
	} else {
		document.write("Promedio de notas de hombres: No hay hombres");
	}

	if (contadorNotaNoBinario != 0) {
		document.write("Promedio de notas de no binarios: " + promedioMasculino);
	} else {
		document.write("Promedio de notas de no binarios: No hay no binarios");
	}
	// d) La edad y nombre del que cursa mas materias que no sean en forma remota
	document.write("Nombre del que cursa mas materias que no sean en forma remota: " + nombreCursaNoRemoto + " y su edad: " + edadCursaNoRemoto);

	// a) El nombre del mejor promedio que no sea masculino
	if (contadorFemYNb != 0) {
		document.write("nombre del mejor promedio que no sea masculino: " + mejorPromedioFemYNb);

	} else {
		document.write("nombre del mejor promedio que no sea masculino: No hay género no binario ni femenino");

	}

}
 */










/*
function mostrar() {

  let seguirIngresando;
  let nombreAlumno;
  let tipoCursada;
  let cantidadMaterias;
  let sexo;
  let nota;
  let edad;
  let acumuladorNotaFemenino;
  let contadorNotaFemenino;
  let contadorNotaMasculino;
  let acumuladorNotaMasculino;
  let acumuladorNotaNoBinario;
  let contadorNotaNoBinario;
  let promedioFemenino;
  let promedioMasculino;
  let promedioNoBinario;
  let nombreCursaNoRemoto;
  let edadCursaNoRemoto;
  let flagNoRemoto;
  let mayorCantMaterias;
  let nombreMasJovenYLibre;
  let edadMasJovenYLibre;
  let flagMasJovenYlibre;
  let acumuladorFemYNb;
  let contadorFemYNb;
  let flagMejorPromedioNoMasc;
  let mejorPromedioFemYNb;
  let contadorFemyNb;

  contadorNotaFemenino = 0;
  acumuladorNotaFemenino = 0;
  contadorNotaMasculino = 0;
  acumuladorNotaMasculino = 0;
  acumuladorNotaNoBinario = 0;
  contadorNotaNoBinario = 0;
  flagNoRemoto = true;
  contadorFemyNb = 0;
  acumuladorFemYNb = 0;
  flagMasJovenYlibre = true;
  flagMejorPromedioNoMasc = true;



  do {
	nombreAlumno = prompt("Ingrese nombre");
	while (isNaN(nombreAlumno) == false) {
	  nombreAlumno = prompt("Reingrese nombre");

	}

	tipoCursada = prompt("Ingrese tipo de cursada(libre, presencial, remota)");
	while (isNaN(tipoCursada) == false || tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota") {
	  tipoCursada = prompt("Reingrese tipo de cursada(libre, presencial, remota)");
	}

	cantidadMaterias = parseInt(prompt("Ingrese cantidad de materias"));
	while (isNaN(cantidadMaterias) || cantidadMaterias < 1 || cantidadMaterias > 8) {
	  cantidadMaterias = parseInt(prompt("Reingrese cantidad de materias"));

	}

	sexo = prompt("Ingrese sexo(f-m-nb)");
	sexo = sexo.toLowerCase();
	while (isNaN(sexo) == false || sexo != "f" && sexo != "m" && sexo != "nb") {
	  sexo = prompt("Reingrese sexo(f-m-nb)");
	  sexo = sexo.toLowerCase();
	}

	nota = parseFloat(prompt("Ingrese nota"));
	while (isNaN(nota) || nota < 0 || nota > 10) {
	  nota = parseFloat(prompt("Reingrese nota"));

	}

	edad = parseInt(prompt("Ingrese edad"));
	while (isNaN(edad) || edad < 17) {
	  edad = parseInt(prompt("Reingrese edad"));

	}

	// c) El promedio de nota por sexo
	switch (sexo) {
	  case "f":
		acumuladorNotaFemenino += nota;
		contadorNotaFemenino++;
		break;
	  case "m":
		acumuladorNotaMasculino += nota;
		contadorNotaMasculino++;
		break;
	  case "nb":
		acumuladorNotaNoBinario += nota;
		contadorNotaNoBinario++;
		break;

	}

	// a) El nombre del mejor promedio que no sea masculino
	if (sexo != "m") {
	  acumuladorFemYNb += nota;
	  contadorFemyNb++;
	}
	promedioFemYNb = acumuladorFemYNb / contadorFemYNb;
	if (flagMejorPromedioNoMasc || promedioFemYNb > mejorPromedioFemYNb) {
	  mejorPromedioFemYNb = nombreAlumno;
	}


	// b) El nombre del mas joven de los alumnos entre los que la dan libre
	while (tipoCursada == "libre") {
	  if (flagMasJovenYlibre || edad < edadMasJovenYLibre) {
		nombreMasJovenYLibre = nombreAlumno;
	  }
	}

	// d) La edad y nombre del que cursa mas materias que no sean en forma remota
	while (tipoCursada != "remota") {
	  if (flagNoRemoto || cantidadMaterias > mayorCantMaterias) {
		nombreCursaNoRemoto = nombreAlumno;
		edadCursaNoRemoto = edad;
		flagNoRemoto = false;
	  }
	}

	// acumuladorNotasTotales += nota;
	// contadorNotasTotales++;

	seguirIngresando = confirm("¿Ingresar más alumnos?");
  } while (seguirIngresando == true);



  // a) El nombre del mejor promedio que no sea masculino
  if (contadorFemYNb != 0) {
	document.write("nombre del mejor promedio que no sea masculino: " + mejorPromedioFemYNb);

  } else {
	document.write("nombre del mejor promedio que no sea masculino: No hay género no binario ni femenino");

  }

  // b) El nombre del mas joven de los alumnos entre los que la dan libre
  document.write("nombre del mas joven de los alumnos entre los que la dan libre: " + nombreMasJovenYLibre);

  // c) El promedio de nota por sexo
  promedioFemenino = acumuladorNotaFemenino / contadorNotaFemenino;
  promedioMasculino = acumuladorNotaMasculino / contadorNotaMasculino;
  promedioNoBinario = acumuladorNotaNoBinario / contadorNotaNoBinario;

  if (contadorNotaFemenino != 0) {
	document.write("Promedio de notas de mujeres: " + promedioFemenino);
  } else {
	document.write("Promedio de notas de mujeres: No hay mujeres");
  }

  if (contadorNotaMasculino != 0) {
	document.write("Promedio de notas de hombres: " + promedioMasculino);
  } else {
	document.write("Promedio de notas de hombres: No hay hombres");
  }

  if (contadorNotaNoBinario != 0) {
	document.write("Promedio de notas de no binarios: " + promedioMasculino);
  } else {
	document.write("Promedio de notas de no binarios: No hay no binarios");
  }
  // d) La edad y nombre del que cursa mas materias que no sean en forma remota
  document.write("Nombre del que cursa mas materias que no sean en forma remota: " + nombreCursaNoRemoto + " y su edad: " + edadCursaNoRemoto);



}

 */















/*
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas,
de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final
tiene un descuento del 25%, que solo mostramos si corresponde.
*/
/*
function mostrar() {
	let nombrePasajero;
	let estadoCivil;
	let edad;
	let temperaturaCorporal;
	let sexo;
	let precioXPasajero;
	let seguirIngresando;
	let contadorViudoMasSesenta;
	let contadorSolteras;
	let edadSolteraMasJoven;
	let nombreSolteraMasJoven;
	let contadorPasajeros;
	let viajeTotalSinDescuento;
	let contadorPasajerosSesenta;
	let porcentajePasajerosSesenta;
	let descuento;
	let viajeTotalConDescuento;

	precioXPasajero = 600;
	contadorViudoMasSesenta = 0;
	contadorSolteras = 0;
	contadorPasajeros = 0;
	contadorPasajerosSesenta = 0;


	do {
		nombrePasajero = prompt("Ingrese nombre del pasajero");
		while (isNaN(nombrePasajero) == false) {
			nombrePasajero = prompt("Error. Reingrese nombre del pasajero");
		}

		estadoCivil = prompt("Ingrese estado civil del pasajero(soltero-casado-viudo)");
		estadoCivil = estadoCivil.toLowerCase();
		while (isNaN(estadoCivil) == false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Error. Reingrese estado civil del pasajero");
			estadoCivil = estadoCivil.toLowerCase();
		}

		edad = parseInt(prompt("Ingrese edad del pasajero"));
		while (isNaN(edad) || edad < 18) {
			edad = parseInt(prompt("Error. Reingrese edad del pasajero"));
		}

		temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal"));
		while (isNaN(temperaturaCorporal) || temperaturaCorporal > 40 || temperaturaCorporal < 36) {
			temperaturaCorporal = parseInt(prompt("Error. Reingrese temperatura corporal"));
		}

		sexo = prompt("Ingrese sexo(f-m-nb)");
		sexo = sexo.toLowerCase();
		while (isNaN(sexo) == false || sexo != "f" && sexo != "m" && sexo != "nb") {
			sexo = prompt("Error. Reingrese sexo(f-m-nb)");
			sexo = sexo.toLowerCase();
		}

		// a) La cantidad de personas con estado "viudo" de mas de 60 años.
		// b) el nombre y edad de la mujer soltera mas joven.
		switch (estadoCivil) {
			case "soltero":
				if (sexo == "f") {
					if (contadorSolteras < 1 || edad < edadSolteraMasJoven) {
						edadSolteraMasJoven = edad;
						nombreSolteraMasJoven = nombrePasajero;
					}
					contadorSolteras++;
				}
				break;
			case "viudo":
				if (edad > 60) {
					contadorViudoMasSesenta++;
				}
				break;
		}


		// d) si hay mas del 50% de los pasajeros que tiene mas de 60 años ,
		// el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
		if (edad > 60) {
			contadorPasajerosSesenta++;
		}


		// c) cuanto sale el viaje total sin descuento.
		contadorPasajeros++;

		seguirIngresando = confirm("¿Seguir ingresando pasajeros?");
	} while (seguirIngresando == true);

	// a) La cantidad de personas con estado "viudo" de mas de 60 años.
	if (contadorViudoMasSesenta != 0) {
		document.write("<br>cantidad de personas con estado viudo de mas de 60 años: " + contadorViudoMasSesenta);
	} else {
		document.write("<br>cantidad de personas con estado viudo de mas de 60 años: No hay");
	}

	// b) el nombre y edad de la mujer soltera mas joven.
	if (contadorSolteras != 0) {
		document.write("<br>nombre de la mujer soltera mas joven: " + nombreSolteraMasJoven + " y su edad: " + edadSolteraMasJoven);
	} else {
		document.write("<br>nombre de la mujer soltera mas joven y su edad: No hay");
	}

	// c) cuanto sale el viaje total sin descuento.
	viajeTotalSinDescuento = precioXPasajero * contadorPasajeros;

	document.write("<br>el viaje total sin descuento es de: " + viajeTotalSinDescuento);

	// d) si hay mas del 50% de los pasajeros que tiene mas de 60 años ,
	// el precio final tiene un descuento del 25%, que solo mostramos si corresponde.

	//total de pasajeros con 60 * 100 / totalPasajeros
	porcentajePasajerosSesenta = contadorPasajerosSesenta * 100 / contadorPasajeros;
	descuento = viajeTotalSinDescuento * 0.25;
	viajeTotalConDescuento = viajeTotalSinDescuento - descuento;

	if (porcentajePasajerosSesenta > 51) {
		document.write("<br>Ud. tiene un descuento del 25%, su precio final es: " + viajeTotalConDescuento);
	}

}

 */

