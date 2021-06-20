/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:

el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y 
el fabricante.

Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades 
y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/


function mostrar() {

    /*

    */
    let tipo;
    let precio;
    let cantidad;
    let marca;
    let fabricante;
    let confirmar;
    let contadorAlcohol;
    let alcoholBarato;
    let cantidadAlcohol;
    let fabricanteAlcohol;
    let contadorBarbijo;
    let contadorJabon;
    let acumuladorJabon;
    let acumuladorBarbijo;
    let acumuladorAlcohol;
    let promedio;
    let precioAlcohol;


    contadorAlcohol = 0;
    alcoholBarato = 0;
    cantidadAlcohol = 0;
    fabricanteAlcohol = 0;
    contadorBarbijo = 0;
    contadorJabon = 0;
    acumuladorJabon = 0;
    acumuladorBarbijo = 0;
    acumuladorAlcohol = 0;
    confirmar = true;


    for (let i = 0; i < 5; i++) {
        tipo = prompt("Ingrese tipo de producto(barbijo, jabón, alcohol)");
        while (isNaN(tipo) == false || tipo != "barbijo" && tipo != "jabón" && tipo != "alcohol") {
            tipo = prompt("Reingrese tipo de producto(barbijo, jabón, alcohol)");
        }

        precio = parseFloat(prompt("Ingrese precio (entre 100 y 300)"));
        while (isNaN(precio) == true || precio < 100 || precio > 300) {
            precio = parseFloat(prompt("Reingrese precio (entre 100 y 300)"));
        }

        cantidad = parseInt(prompt("Ingrese cantidad (mayor a 0 y menor a 1000)"));
        while (isNaN(cantidad) == true || cantidad < 1 || cantidad > 999) {
            cantidad = parseInt(prompt("Reingrese cantidad (mayor a 0 y menor a 1000)"));
        }

        marca = prompt("Ingrese marca");
        fabricante = prompt("Ingrese fabricante");

        //console.log("tipo " + tipo + " precio " + precio + " cantidad " + cantidad + marca + fabricante);


        switch (tipo) {
            case "alcohol":
                if (contadorAlcohol == 1 || precio < precioAlcohol) {
                    precioAlcohol = precio;
                    cantidadAlcohol = cantidad;
                    fabricanteAlcohol = fabricante;
                } else {
                    if (contadorAlcohol == 0) {
                        precioAlcohol = 0;
                        cantidadAlcohol = "No se compraron alcoholes";
                        fabricanteAlcohol = "-";
                    }
                }
                acumuladorAlcohol += cantidad;
                contadorAlcohol++;
                break;
            case "barbijo":
                acumuladorBarbijo += cantidad;
                contadorBarbijo++;
                break;
            case "jabón":
                acumuladorJabon += cantidad;
                contadorJabon++;
                break;

        }//switch

        confirmar = confirm("¿Siguiente producto?");

    }//for



    //a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
    document.write("<br>Cantidad de unidades del más barato de los alcoholes: " + cantidadAlcohol + " y fabricante " + fabricanteAlcohol);

    //b) Del tipo con mas unidades, el promedio por compra
    //unidades las tengo en acumuladores
    if (acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
        promedio = acumuladorAlcohol / contadorAlcohol;

    } else {
        if (acumuladorBarbijo > acumuladorJabon) {
            promedio = acumuladorBarbijo / contadorBarbijo;
        } else {
            promedio = acumuladorJabon / contadorJabon;
        }
    }

    document.write("<br>Del tipo con mas unidades, el promedio por compra: " + promedio);

    //c) Cuántas unidades de jabones hay en total
    document.write("<br>Cantidad de jabones en total: " + contadorJabon);








}//funcion
