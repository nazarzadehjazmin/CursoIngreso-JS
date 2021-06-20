function mostrar() {
	let edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	if (!(isNaN(edad))) {
		if (edad > 17) {
			alert("Usted es mayor");
		}
		else if (edad >= 13 && edad <= 17) {
			//Recordar poner la variable dos veces siempre
			//que escribo dos condiciones en un mismo if (con &&, por ej)
			alert("Usted es adolescente");
		}
		else {
			alert("Usted es menor");
		}
	}
}

//Para que tome SOLO datos NUMÉRICOS

// !(isNaN(edad)) 
//todo lo que sea NaN es false

// (isNaN(edad) 
//todo lo que sea NaN es true

//Number.isInteger()
//es para que tome SOLO datos numericos
//Problema = que me toma el dato si pongo numeros y letras











//tener cuidado con esto porque nunca va a tener dos edades, debe ser OR
//OR lo uso cuando NO era adolescente
//tomar como primer if lo que nos permita abarcar mas cantidad de numeros
// if nested --> es lo que ellos prefieren que usemos
//NO SALIO, ERROR EN HTML. BUSCAR

//no es necesario q el if tenga un else
//!!!cada funcion es un programa? o todo lo que escribo en un documento de js lo es?