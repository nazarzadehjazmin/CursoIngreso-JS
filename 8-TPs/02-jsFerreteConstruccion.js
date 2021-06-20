/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
//3 vueltas de alambre al terreno

function Rectangulo () 
{ 
    let largo;
    let ancho;
    let radio;
    let largoNumerico;
    let anchoNumerico;
    let radioNumerico; 
    let perimetroRectangulo;
    let hilosAlambrado;
    let alambradoTotal;


    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    radio = document.getElementById("txtIdRadio").value;

    //parsfloat
    largoNumerico = parseInt(largo);
    anchoNumerico = parseInt(ancho);
    radioNumerico = parseInt(radio);


    perimetroRectangulo = (largoNumerico + anchoNumerico) * 2;
    hilosAlambrado = 3;
    alambradoTotal = perimetroRectangulo * hilosAlambrado;

    alert(alambradoTotal);
}

function Circulo () 
{
    let largo;
    let ancho;
    let radio;
    let hilosAlambrado;
    let perimetroCirculo;
    let alambradoTotal;


    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    radio = document.getElementById("txtIdRadio").value;

    //parsfloat
    largoNumerico = parseInt(largo);
    anchoNumerico = parseInt(ancho);
    radioNumerico = parseInt(radio);

    hilosAlambrado = 3;
    perimetroCirculo = 2 * Math.PI * radio;
    alambradoTotal = perimetroCirculo * hilosAlambrado;
    
    alert(alambradoTotal);
}

function Materiales () 
{
    let largo;
    let ancho;
    let radio;
    let area;
    let cemento;
    let cal;
    let cementoTotal;
    let calTotal;


    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
    radio = document.getElementById("txtIdRadio").value;
    
    //parsfloat
    largoNumerico = parseInt(largo);
    anchoNumerico = parseInt(ancho);
    radioNumerico = parseInt(radio);

    cemento = 2;
    cal = 3;
    area = largo * ancho;
    cementoTotal = area * cemento;
    calTotal = area * cal;
    
    alert("Bolsas de cal = " + calTotal + " " + "Bolsas de cemento = " + cementoTotal);
}