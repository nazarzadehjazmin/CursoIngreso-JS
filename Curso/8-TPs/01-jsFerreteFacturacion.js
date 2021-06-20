//JAZMÍN NAZARZADEH
//TPS - Ferrete facturación

/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
/*
function Sumar() {
    let precioUnoString;
    let precioDosString;
    let precioTresString;
    let precioUnoNumerico;
    let precioDosNumerico;
    let precioTresNumerico;
    let suma;

    precioUnoString = document.getElementById("txtIdPrecioUno").value;
    precioDosString = document.getElementById("txtIdPrecioDos").value;
    precioTresString = document.getElementById("txtIdPrecioTres").value;

    precioUnoNumerico = parseInt(precioUnoString);
    precioDosNumerico = parseInt(precioDosString);
    precioTresNumerico = parseInt(precioTresString);

    suma = precioUnoNumerico + precioDosNumerico + precioTresNumerico;

    alert(suma);


}

function Promedio() {
    let precioUno;
    let precioDos;
    let precioTres;
    let precioUnoParseado;
    let precioDosParseado;
    let precioTresParseado;
    let promedio;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUnoParseado = parseInt(precioUno);
    precioDosParseado = parseInt(precioDos);
    precioTresParseado = parseInt(precioTres);

    promedio = (precioUnoParseado + precioDosParseado + precioTresParseado) / 3;

    alert(promedio);
}

function PrecioFinal() {
    let precioUno;
    let precioDos;
    let precioTres;
    let precioUnoParseado;
    let precioDosParseado;
    let precioTresParseado;
    let sumaTresNumeros;
    let precioFinal;

    precioUno = document.getElementById("txtIdPrecioUno").value;
    precioDos = document.getElementById("txtIdPrecioDos").value;
    precioTres = document.getElementById("txtIdPrecioTres").value;

    precioUnoParseado = parseInt(precioUno);
    precioDosParseado = parseInt(precioDos);
    precioTresParseado = parseInt(precioTres);

    sumaTresNumeros = (precioUnoParseado + precioDosParseado + precioTresParseado);

    precioFinal = ((sumaTresNumeros * 21) / 100) + sumaTresNumeros;

    alert(precioFinal);

}
*/


function Sumar() {
    let precioUnoString;
    let precioDosString;
    let precioTresString;
    let precioUnoNumerico;
    let precioDosNumerico;
    let precioTresNumerico;
    let suma;

    precioUnoString = txtIdPrecioUno.value;
    precioDosString = txtIdPrecioDos.value;
    precioTresString = txtIdPrecioTres.value;

    precioUnoNumerico = parseInt(precioUnoString);
    precioDosNumerico = parseInt(precioDosString);
    precioTresNumerico = parseInt(precioTresString);

    suma = precioUnoNumerico + precioDosNumerico + precioTresNumerico;
    alert(suma);
}

function Promedio() {
    let precioUnoString;
    let precioDosString;
    let precioTresString;
    let precioUnoNumerico;
    let precioDosNumerico;
    let precioTresNumerico;
    let promedio;
    let suma;
    let cantidadProductos

    precioUnoString = txtIdPrecioUno.value;
    precioDosString = txtIdPrecioDos.value;
    precioTresString = txtIdPrecioTres.value;

    precioUnoNumerico = parseInt(precioUnoString);
    precioDosNumerico = parseInt(precioDosString);
    precioTresNumerico = parseInt(precioTresString);

    suma = precioUnoNumerico + precioDosNumerico + precioTresNumerico;
    cantidadProductos = 3;
    promedio = suma / cantidadProductos;

    alert(promedio);

}

function PrecioFinal() {
    let precioUnoString;
    let precioDosString;
    let precioTresString;
    let precioUnoNumerico;
    let precioDosNumerico;
    let precioTresNumerico;
    let suma;
    let iva;
    let precioFinal;

    precioUnoString = txtIdPrecioUno.value;
    precioDosString = txtIdPrecioDos.value;
    precioTresString = txtIdPrecioTres.value;

    precioUnoNumerico = parseInt(precioUnoString);
    precioDosNumerico = parseInt(precioDosString);
    precioTresNumerico = parseInt(precioTresString);

    suma = precioUnoNumerico + precioDosNumerico + precioTresNumerico;

    iva = suma * 21 / 100

    precioFinal = suma + iva;

    alert(precioFinal);
}