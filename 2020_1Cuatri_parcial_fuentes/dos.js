/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro

*/

function mostrar() {
  let tipo;
  let cantidadBolsas;
  let precioPorBolsa;

  let continuar;


  let acumuladorCal;
  let acumuladorArena;
  let acumuladorCemento;

  let contadorCal;
  let contadorArena;
  let contadorCemento;

  let descuento;
  let precioFinal;
  let precioUnitario;
  let precioBrutoFinal;
  let masCantidadBolsas;
  let tipoMasCantidad;
  let flagTipoCaro;
  let precioMasCaro;
  let tipoMasCaro;

  flagTipoCaro = false;

  acumuladorCal = 0;
  acumuladorCemento = 0;
  acumuladorArena = 0;

  contadorCal = 0;
  contadorArena = 0;
  contadorCemento = 0;

  do {
    tipo = prompt("Ingrese tipo de producto(arena-cal-cemento)");
    tipo = tipo.toLowerCase();
    while (isNaN(tipo) == false || tipo != "arena" && tipo != "cal" && tipo != "cemento") {
      tipo = prompt("Error. Reingrese tipo de producto(arena-cal-cemento)");
      tipo = tipo.toLowerCase();
    }

    cantidadBolsas = parseInt(prompt("Ingrese cantidad de bolsas"));
    while (isNaN(cantidadBolsas) == true || cantidadBolsas < 1) {
      cantidadBolsas = parseInt(prompt("Error. Reingrese cantidad de bolsas"));
    }

    precioPorBolsa = parseFloat(prompt("Ingrese precio por bolsa"));
    while (isNaN(precioPorBolsa) == true || precioPorBolsa < 1) {
      precioPorBolsa = parseFloat(prompt("Error. Reingrese precio por bolsa"));
    }


    //Si compro más de 10 bolsas en total tenes 15% de descuento 
    //sobre el total a pagar.
    //Si compro más de 30 bolsas en total tenes 25% de descuento 
    //sobre el total a pagar.
    if (cantidadBolsas < 10) {
      descuento = 0;
    } else {
      if (cantidadBolsas < 30) {
        descuento = 0.15;
      } else {
        descuento = 0.25;
      }
    }


    //d) Informar el tipo con mas cantidad de bolsas.

    switch (tipo) {
      case "arena":
        acumuladorArena += cantidadBolsas;
        contadorArena++;
        break;
      case "cal":
        acumuladorCal += cantidadBolsas;
        contadorCal++;
        break;
      case "cemento":
        acumuladorCemento += cantidadBolsas;
        contadorCemento++;
        break;
    }


    //d) Informar el tipo con mas cantidad de bolsas.
    if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento) {
      masCantidadBolsas = cantidadBolsas;
      tipoMasCantidad = "arena";
    } else {
      if (acumuladorCal > acumuladorCemento) {
        masCantidadBolsas = cantidadBolsas;
        tipoMasCantidad = "cal";
      } else {
        masCantidadBolsas = cantidadBolsas;
        tipoMasCantidad = "cemento";
      }
    }


    if (descuento != 0) {
      descuento = precioPorBolsa * cantidadBolsas * descuento;
      precioFinal = precioPorBolsa * cantidadBolsas - descuento;
      precioBrutoFinal = precioPorBolsa * cantidadBolsas;
    } else {
      precioBrutoFinal = precioPorBolsa * cantidadBolsas;
      precioFinal = "Sin descuento";
    }


    if (flagTipoCaro == false || precioPorBolsa > precioMasCaro) {
      precioMasCaro = precioPorBolsa;
      tipoMasCaro = tipo;
      flag = true;
    } else {
      precioMasCaro = precioPorBolsa;
      tipoMasCaro = tipo;
    }


    continuar = confirm("¿Ingresar más bolsas?");

  } while (continuar == true);




  //a) El importe total a pagar , bruto sin descuento y...
  document.write("Importe total a pagar con descuento: " + precioFinal);

  //b) el importe total a pagar con descuento(solo si corresponde)
  document.write("<br>Importe total a pagar, bruto sin descuento: " + precioBrutoFinal);


  //d) Informar el tipo con mas cantidad de bolsas.
  document.write("<br>Tipo con más cantidad de bolsas: " + tipoMasCantidad + ", cantidad: " + masCantidadBolsas);


  //f) El tipo mas caro
  document.write("<br>Tipo más caro: " + tipoMasCaro + ", precio: " + precioMasCaro);






}







