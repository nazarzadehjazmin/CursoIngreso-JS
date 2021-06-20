//JAZMÍN NAZARZADEH
//PARCIAL 2018 - PUNTO 3

/*
//MI SOLUCIÓN
function mostrar() {

    let precio;
    let porcentaje;
    let precioFinal;
    let precioParseado;
    let porcentajeParseado;

    precio = prompt("Ingrese el precio:");
    porcentaje = prompt("Ingrese el porcentaje de descuento (sólo números):");

    precioParseado = parseInt(precio);
    porcentajeParseado = parseInt(porcentaje);

    precioFinal = precioParseado - ((precioParseado * porcentajeParseado) / 100);

    document.getElementById("elPrecioFinal").value = precioFinal;
}

//Escribir en lugar de parseado, string y numerico

//SOLUCIÓN DE CLASE

function mostrar() {

    let porcentajeString;
    let precioString;
    let porcentajeNumerico;
    let descuento;
    let precioFinal;
    let precioNumerico;

    precioString = prompt("Ingrese el precio: ");
    porcentajeString = prompt("Ingrese el porcentaje: ");

    //puedo hacerlo con parseFloat también
    porcentajeNumerico = parseInt(porcentajeString);
    precioNumerico = parseInt(precioString);

    descuento = precioNumerico * porcentajeNumerico / 100;

    precioFinal = precioNumerico - descuento;

    elPrecioFinal.value = precioFinal;
}
*/

function mostrar() {
    let precioString;
    let precioNumerico;
    let porcentajeString;
    let porcentajeNumerico;
    let descuento;
    let precioFinal;

    precioString = prompt("Ingrese el precio");
    precioNumerico = parseInt(precioString);

    porcentajeString = prompt("Ingrese el porcentaje del descuento");
    porcentajeNumerico = parseInt(porcentajeString);

    descuento = precioNumerico * porcentajeNumerico / 100;
    precioFinal = precioNumerico - descuento;
    elPrecioFinal.value = precioFinal;
}