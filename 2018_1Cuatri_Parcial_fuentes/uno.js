//JAZMÍN NAZARZADEH
//PARCIAL 2018 - PUNTO 1

//Realizar el algoritmo que pida el ancho y el 
//largo de un rectángulo por prompt y que muestre el perímetro por alert.

/*
function mostrar() {
    let ancho;
    let largo;
    let perimetro;
    let anchoParseado;
    let largoParseado;

    ancho = prompt("¿Cuál es el ancho del rectángulo?");
    largo = prompt("¿Cuál es el largo del rectángulo?");

    anchoParseado = parseInt(ancho);
    largoParseado = parseInt(largo);

    perimetro = anchoParseado + largoParseado;

    alert("Su perimetro es " + perimetro);
}
*/
/*
function mostrar() {
    let anchoString;
    let anchoNumerico;
    let largoString;
    let largoNumerico;
    let perimetro;

    anchoString = prompt("Ingrese el ancho del rectángulo");
    largoString = prompt("Ingrese el largo del rectángulo");

    anchoNumerico = parseInt(anchoString);
    largoNumerico = parseInt(largoString);

    perimetro = (anchoNumerico + largoNumerico) * 2;

    alert("Su perímetro es de " + perimetro);
}
*/

function mostrar() {
    let perimetro;
    let ancho;
    let largo;

    ancho = prompt("Ingrese el ancho del rectángulo");
    ancho = parseFloat(ancho);

    largo = prompt("Ingrese el largo del rectángulo");
    largo = parseFloat(largo);

    perimetro = ancho * 2 + largo * 2;

    alert("Su perímetro es " + perimetro);
}