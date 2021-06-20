/*
//EJERCICIO 2
"Super chino" Se pide el ingreso de mercadería 
de un supermercado,
hasta que el usuario quiera, se pide:

tipo(limpieza, comestible, otros)solo estos tres tipos
nombre del producto
importe del producto(no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso(no mayor a 30 kilos)

informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del  mas caro de todos los productos
c) el NOMBRE del  mas barato de los elaborados
d) el tipo de mercadería  que mas aparece
e) el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado
*/

function probarEjercicio() {
	let tipoProducto;
	let nombreProducto;
	let precioProducto;
	let procedenciaProducto;
	let pesoProducto;
	let continuarIngresando;
	let flagComestibles;
	let productoMasPesado;
	let nombreMasPesado;
	let flagMasCaro;
	let precioMasCaro;
	let nombreMasCaro;
	let precioMasBaratoElaborados;
	let nombreMasBaratoElaborados;
	let contadorLimpieza;
	let contadorComestible;
	let contadorOtros;
	let acumuladorLimpieza;
	let acumuladorComestible;
	let acumuladorOtros;
	let contadorElaborados;
	let contadorImportados;
	let contadorNacionales;
	let cantidadTotalProductos;

	flagComestibles = false;
	flagMasCaro = false;
	contadorLimpieza = 0;
	contadorComestible = 0;
	contadorOtros = 0;
	acumuladorLimpieza = 0;
	acumuladorComestible = 0;
	acumuladorOtros = 0;
	contadorElaborados = 0;
	contadorImportados = 0;
	contadorNacionales = 0;

	//con strings evaluar primero si se puede con && 
	//con numeros evaluar primero si se puede con || 

	do {
		tipoProducto = prompt("Ingrese el tipo de producto(limpieza, comestible, otros)")
		tipoProducto = tipoProducto.toLowerCase();
		while (isNaN(tipoProducto) == false || tipoProducto != "limpieza" && tipoProducto != "comestible" && tipoProducto != "otros") {
			tipoProducto = prompt("Reingrese el tipo de producto(limpieza, comestible, otros)");
			tipoProducto = tipoProducto.toLowerCase();
		}

		nombreProducto = prompt("Ingrese nombre de producto");
		nombreProducto = nombreProducto.toLowerCase();
		while (isNaN(nombreProducto) == false) {
			nombreProducto = prompt("Reingrese nombre de producto");
			nombreProducto = nombreProducto.toLowerCase();
		}

		precioProducto = parseFloat(prompt("Ingrese precio del producto (no mayor a 1000 pesos)"));
		while (isNaN(precioProducto) == true || precioProducto < 1 || precioProducto > 1000) {
			precioProducto = parseFloat(prompt("Reingrese precio del producto (no mayor a 1000 pesos)"));
		}

		procedenciaProducto = prompt("Ingrese procedencia del producto (importado, nacional, elaborado)");
		procedenciaProducto = procedenciaProducto.toLowerCase();
		while (isNaN(procedenciaProducto) == false || procedenciaProducto != "importado" && procedenciaProducto != "nacional" && procedenciaProducto != "elaborado") {
			procedenciaProducto = prompt("Reingrese procedencia del producto (importado, nacional, elaborado)");
			procedenciaProducto = procedenciaProducto.toLowerCase();
		}

		pesoProducto = parseFloat(prompt("Ingrese el peso del producto en kg (no mayor a 30 kg)"));
		while (isNaN(pesoProducto) == true || pesoProducto > 30) {
			pesoProducto = parseFloat(prompt("Reingrese el peso del producto en kg (no mayor a 30 kg)"));
		}


		//a) el NOMBRE del mas pesado de los comestibles

		if (flagComestibles == false || pesoProducto > productoMasPesado) {
			productoMasPesado = pesoProducto;
			nombreMasPesado = nombreProducto;
			flagComestibles = true;
		} else {
			productoMasPesado = pesoProducto;
			nombreMasPesado = nombreProducto;
		}

		//b) el NOMBRE del  mas caro de todos los productos
		if (flagMasCaro == false || precioProducto > precioMasCaro) {
			precioMasCaro = precioProducto;
			nombreMasCaro = nombreProducto;
			flag = true;
		} else {
			precioMasCaro = precioProducto;
			nombreMasCaro = nombreProducto;
		}


		//d) el tipo de mercadería  que mas aparece
		//f) el promedio de pesos por cada tipo ingresado
		switch (tipoProducto) {
			case "limpieza":
				acumuladorLimpieza += precioProducto;
				contadorLimpieza++;
				break;
			case "comestible":
				acumuladorComestible += precioProducto;
				contadorComestible++;
				break;
			case "otros":
				acumuladorOtros += precioProducto;
				contadorOtros++;
				break;
		}


		//e) el porcentaje de productos elaborados por sobre el total
		switch (procedenciaProducto) {
			case "elaborado":
				if (precioProducto < precioMasBaratoElaborados) {
					precioMasBaratoElaborados = precioProducto;
					nombreMasBaratoElaborados = nombreProducto;
				} else {
					precioMasBaratoElaborados = precioProducto;
					nombreMasBaratoElaborados = nombreProducto;
				}
				contadorElaborados++;
				break;
			case "importado":
				contadorImportados++;
				break;
			case "nacional":
				contadorNacionales++;
				break;
		}

		continuarIngresando = confirm("¿Continuar ingresando productos?");
	} while (continuarIngresando == true);


	//a) el NOMBRE del mas pesado de los comestibles
	document.write("<br><b>El nombre del producto más pesado:</b> " + nombreMasPesado);

	//b) el NOMBRE del mas caro de todos los productos
	document.write("<br><b>El nombre del producto más caro:</b> " + nombreMasCaro);

	//c) el NOMBRE del mas barato de los elaborados
	document.write("<br><b>El nombre del producto más barato de los elaborados:</b> " + nombreMasBaratoElaborados);

	//d) el tipo de mercadería  que mas aparece
	if (contadorComestible > contadorLimpieza && contadorComestible > contadorOtros) {
		document.write("<br><b>El tipo de mercadería que más aparece: </b> Comestibles");
	} else {
		if (contadorLimpieza > contadorOtros) {
			document.write("<br><b>El tipo de mercadería que más aparece: </b> Limpieza");
		} else {
			document.write("<br><b>El tipo de mercadería que más aparece: </b> Otros");
		}
	}

	//e) el porcentaje de productos elaborados por sobre el total
	//del total cuantos productos son elaborados
	//500 productos, 100 son elaborados
	//que porcentaje es eso del total

	//n° o cantidad de lo que quiero saber el porcentaje * 100 / total
	//Cantidad de productos elaborados * 100 / Total de la cantidad de productos 
	cantidadTotalProductos = contadorImportados + contadorElaborados + contadorNacionales;
	porcentajeElaborados = contadorElaborados * 100 / cantidadTotalProductos;

	document.write("<br><b>Porcentaje de productos elaborados por sobre el total: </b>" + porcentajeElaborados);


	//f) el promedio de pesos por cada tipo ingresado

	promedioPesosLimpieza = contadorLimpieza * precioLimpieza / contadorLimpieza
	promedioPesosComestible = contadorComestible * precioComestible / contadorComestible
	promedioPesosOtros = contadorOtros * precioOtros / contadorOtros

	if (contadorComestible != 0) {
		promedioPesosComestible = contadorComestible * precioComestible / contadorComestible
	} else {
		promedioPesosComestible = "No se ingresaron productos comestibles";
	}

	if (contadorLimpieza != 0) {
		promedioPesosLimpieza = contadorLimpieza * precioLimpieza / contadorLimpieza
	} else {
		promedioPesosLimpieza = "No se ingresaron productos de limpieza";
	}

	if (contadorOtros != 0) {
		promedioPesosOtros = contadorOtros * precioOtros / contadorOtros
	} else {
		promedioPesosOtros = "No se ingresaron productos de categoría 'otros'";
	}

	//f) el promedio de pesos por cada tipo ingresado
	document.write("<br>Promedio de pesos de productos comestibles:" + promedioPesosComestible);
	document.write("<br>Promedio de pesos de productos de limpieza: " + promedioPesosLimpieza);
	document.write("<br>Promedio de pesos de productos de categoría otros: " + promedioPesosOtros);
}





/*
//EJERCICIO 1
1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:

A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?

//CORRECCIONES
1 switch para un solo caso hay tiene q ir if
pregunte psico 2 veces (una en un switch y otra en un if dentro de un switch)
psico ponela una sola vez
la pregunta de programacion una sola vez}
un solo switch y agrupa programacion, psico ahi
el de sexo lo obviaria, estaria adentro de carrera
*/


/*
function probarEjercicio() {
	let nombre;
	let carrera;
	let estadoDeCarrera;
	let sexo;
	let edad;
	let nota;
	let nuevoAlumno;
	let contadorProgramacion;
	let contadorDisenioGrafico;
	let contadorPsicologia;
	let contadorNoBinario;
	let contadorFemeninoYProgramacion;
	let acumuladorNotas;
	let contadorNotas;
	let promedio;
	let acumuladorEdad;
	let flag;
	let edadMaxima;
	let sexoMayorEdad;
	let nombreMayorEdad;
	let notaMaxima;
	let nombreNobinario;
	let estadoCarreraNobinario;
	let flagDos;

	contadorDisenioGrafico = 0;
	contadorProgramacion = 0;
	contadorPsicologia = 0;
	contadorNoBinario = 0;
	contadorFemeninoYProgramacion = 0;
	acumuladorNotas = 0;
	contadorNotas = 0;
	acumuladorEdad = 0;
	flag = 0;
	flagDos = 0;



	do {
		nombre = prompt("Ingrese nombre");
		while (nombre == " ") {
			nombre = prompt("Reingrese nombre");
		}

		carrera = prompt("Ingrese carrera (Programación, Psicología, Diseño gráfico)");
		while (carrera == " " && carrera != "Programación" && carrera != "Psicología" && carrera != "Diseño gráfico") {
			carrera = prompt("Reingrese carrera");
		}

		estadoDeCarrera = prompt("Ingrese estado de la carrera: en curso-abandono-finalizado");
		while (estadoDeCarrera == " " && estadoDeCarrera != "en curso" && estadoDeCarrera != "abandono" && estadoDeCarrera != "finalizado") {
			estadoDeCarrera = prompt("Reingrese estado (en curso-abandono-finalizado)");
		}

		sexo = prompt("Ingrese sexo (femenino - masculino - nobinario)");
		while (sexo == " " && sexo != "femenino" && sexo != "masculino" && sexo != "nobinario") {
			sexo = prompt("Reingrese sexo (femenino-masculino-nobinario)");
		}

		edad = prompt("Ingrese edad");
		edad = parseInt(edad);
		while (edad == " " || isNaN(edad) || edad < 18) {
			edad = prompt("Reingrese edad");
			acumuladorEdad = acumuladorEdad + edad;
		}

		nota = prompt("Ingrese su nota");
		nota = parseFloat(nota);
		while (nota == " " || isNaN(nota) || nota < 1 || nota > 10) {
			nota = prompt("Reingrese nota");
		}

		//VA CON IF
		switch (estadoDeCarrera) {
			case "finalizado":
				acumuladorNotas += nota;
				contadorNotas++;

		}
		//A. Cantidad total de alumnos de cada carrera.
		switch (carrera) {
			case "Programación":
				if (sexo == "femenino" && estado == "en curso") {
					//B. Cantidad total de mujeres que CURSAN la carrera de programación
					//progra, fem, en curso
					contadorFemeninoYProgramacion++;
				}

				contadorProgramacion++;
				break;
			case "Diseño gráfico":
				contadorDisenioGrafico++;
				break;
			case "Psicología":
				//E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
				//CON MAXIMOS Y MINIMOS

				if (flag == 0 || edad > edadMaxima) {
					edadMaxima = edad;
					sexoMayorEdad = sexo;
					nombreMayorEdad = nombre;
					flag = 1;
				}

				//C. Cantidad de alumnos no binarios.
				//F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.
				if (sexo == "nobinario") {

					if (flagDos == 0) {
						notaMaxima = nota;
						nombreNobinario = nombre;
						estadoCarreraNobinario = estadoDeCarrera;
						flagDos = 1;
					} else {
						if (nota > notaMaxima) {
							notaMaxima = nota;
							nombreNobinario = nombre;
							estadoCarreraNobinario = estadoDeCarrera;
						}
					}
					contadorNoBinario++;
				}

				contadorPsicologia++;
				break;
		}

		nuevoAlumno = confirm("¿Desea ingresar un nuevo alumno?");
	} while (nuevoAlumno == true);



	//A. Cantidad total de alumnos de cada carrera.
	document.write("<br><b>Cantidad de alumnos en Programación:</b> " + contadorProgramacion);
	document.write("<br><b>Cantidad de alumnos en Diseño Gráfico:</b> " + contadorDisenioGrafico);
	document.write("<br><b>Cantidad de alumnos en Psicología:</b> " + contadorPsicologia);

	//B. Cantidad total de mujeres que cursan la carrera de programación
	document.write("<br><b>Cantidad total de mujeres que cursan la carrera de programación:</b> " + contadorFemeninoYProgramacion);

	//C. Cantidad de alumnos no binarios.
	document.write("<br><b>Cantidad de alumnos no binarios:</b> " + contadorNoBinario);

	//D. Promedio de notas de los alumnos finalizantes.
	if (contadorNotas != 0) {
		promedio = acumuladorNotas / contadorNotas;
	} else {
		promedio = 0;
	}
	document.write("<br><b>Promedio de notas de los alumnos finalizantes:</b> " + promedio);

	//E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.

	//Cuando se cumple la condición que querés, guardas los datos que necesitas en variables aparte
	// El condicional sería si tal es el alumno más viejo de dicha carrera
	//Y si lo es, almacenas los datos en otras variables especiales para eso
	if (estadoDeCarrera == "finalizado" && carrera == "Psicología") {
		document.write("<br><b>El alumno más viejo de Psicología es:</b> " + nombreMayorEdad + ", su edad es " + edadMaxima + " y su sexo es: " + sexoMayorEdad);
	} else {
		document.write("<br><b>El alumno más viejo de Psicología es:</b> No hay");
	}


	//F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.
	if (sexo == "nobinario" && carrera == "Psicología") {
		document.write("<br><b>El mejor alumno no binario que estudia Psicología es:</b> " + nombreNobinario + ", su nota es " + notaMaxima + " y el estado de su carrera es: " + estadoCarreraNobinario);
	} else {
		document.write("<br><b>El mejor alumno no binario que estudia Psicología es:</b> No hay");
	}


	//G. ¿Cuál es la carrera que tiene más alumnos?
	//progra sea mas que diseño grafico y que psico
	if (contadorProgramacion > contadorDisenioGrafico && contadorProgramacion > contadorPsicologia) {
		document.write("<br><b> Carrera con mayor cantidad de alumnos: </b> Programación ");
	} else {
		//que diseño grafico sea mas que progra y psico
		if (contadorDisenioGrafico > contadorPsicologia) {
			document.write("<br><b> Carrera con mayor cantidad de alumnos: </b> Diseño Gráfico ");
		} else {
			//psico sea mas que diseño grafico y progra
			document.write("<br><b> Carrera con mayor cantidad de alumnos: </b> Psicología ");
		}
	}
}
*/




//EJERCICIO 1 HECHO EN CLASE

/*
function probarEjercicio() {
	let nombre;
	let carrera;
	let estado;
	let sexo;
	let edad;
	let nota;
	let respuesta;
	let contadorProgra;
	let contadorPsico;
	let contadorDisenio;
	let contadorProgramadorasEnCurso;
	let contadorNoBinario;
	let acumuladorNotasFinalizantes;
	let contadorAlumnosFinalizantes = 0;
	let promedioFinalizantes;
	let nombreMasViejo;
	let sexoMasViejo;
	let edadMasViejo;
	let nombreMejorAlumno;
	let notaMejorAlumno;
	let estadoMejorAlumno;
	let flagPsicoNobinario = false;

	contadorProgra = 0;
	contadorPsico = 0;
	contadorDisenio = 0;
	contadorProgramadora = 0;
	contadorNoBinario = 0;
	acumuladorNotasFinalizantes = 0;

	respuesta = "si";

	//pedir los datos
	// despues validar
	//contadores etc
	//variable rta

	while (respuesta == "si") {
		nombre = prompt("Ingrese nombre");

		carrera = prompt("Ingrese carrera");
		while (carrera != "progra" && carrera != "psico" && carrera != "diseño") {
			carrera = prompt("Reingrese carrera");
		}

		estado = prompt("Ingrese estado");
		while (estado != "finalizado" && estado != "en curso" && estado != "abandonado") {
			estado = prompt("Reingrese estado");
		}

		sexo = prompt("Ingrese sexo");

		edad = prompt("Ingrese edad");
		while (edad < 18) {
			edad = prompt("Reingrese edad");
		}

		nota = prompt("Ingrese nota");
		while (nota < 1 || nota > 10) {
			nota = prompt("Reingrese nota");
		}

		//procesos repetitivos

		switch (carrera) {
			case "progra":
				if (sexo == "femenino" && estado == "en curso") {
					//revisar grab min 30 aprox
					contadorProgramadorasEnCurso++;
				}
				contadorProgra++;
				break;
			case "psico":
				//maximo
				//NO OLVIDAR QUE LOS MAXIMOS Y MINS NO SE INICIALIZAN
				//no necesito bandera porque ya tengo el contador (actuaria en lugar de la bandera)
				if (contadorpsico == 1 || edad > edadMasViejo) {
					//primer alumno de psico q ingreso
					//o sea, la primera vuelta tuvo que haber pasado, por eso 1
					edadMasViejo = edad;
					sexoMasViejo = sexo;
					nombreMasViejo = nombre;

				}

				if (sexo == "nobinario") {
					//flag si o si porque si usas contador te cuenta todos los alumnos de psico
					//si es el primero
					if (flagPsicoNobinario == false || nota > notaMejorAlumno) {
						notaMejorAlumno = nota;
						estadoMejorAlumno = estado;
						nombreMejorAlumno = nombre;
						flagPsicoNobinario = true;
					}
				}
				contadorPsico++;
				break;
			case "diseño":
				contadorDisenio++;
				break;
		}

		if (sexo == "no binario") {
			contadorNoBinario++;
		}

		if (estado == "finalizado") {
			contadorAlumnosFinalizantes++;
			acumuladorNotasFinalizantes = acumuladorNotasFinalizantes + nota;
		}



		respuesta = prompt("¿Ingresar más alumnos?");
	}


	//verifico para que no quede undefined
	if (contadorAlumnosFinalizantes != 0) {
		//se calcula el promedio
		promedioFinalizantes = acumuladorNotasFinalizantes / contadorAlumnosFinalizantes;
	} else {
		//no se calculo el promedio ya que no hay alumnos finalizantes
		//NO PONER PROMEDIO = 0
		promedioFinalizantes = ;
	}

	if (contadorProgra > contadorPsico && contadorProgra > contadorDisenio) {
		//hay mas de progra
	} else {

		if (contadorPsico > contadorDisenio) {
			//hay mas de psico
		} else {
			//hay mas de diseño
		}
	}

	//a.Mostrar los 3 contadores
	//b.Mostrar contadorProgramadorasEnCurso
	//c.Mostrar contadorNoBinario
	//d.Mostrar contadorNoBinario
	//e.Los datos del alumno mas viejo de psico
	//f.Los datos del mejor alumno de psico
	//(g.Carrera con mayor cant de alumnos)
}
*/





/*
VER COMO APLICAR .TOLOWERCASE
document.write <br>
VALIDAR=WHILE/IF, q el dato este correcto


isNaN(variable) --> true--> esto no sea un numero
isNaN("hola") --> true (no es un número)

!(isNaN(variable)) -->
isNaN(1) --> false
no le imp el tipo de dato, le importa q sea un numero--> porque no es fuertemente tipado
el tipo de dato no es tan estricto


isNaN(NaN) --> true :
let numeropedido="hola"
numeropedido=parseInt(numeropedido);
NaN --> no pude transf porque no es un numero
isNaN(numeroPedido)-->true (lo que pasaste NO es un numero)

isNaN("1")-->false --> (esto ES un número)
isNaN(variable) == false --> numero


COMO LO APLICO?
PARA STRING --> while(isNaN(variableString) == false)
PARA NUMBER --> while(isNaN(variableNumber) == true)
RECORDAR= "1"=number, 1=number, "hola"=string

*/