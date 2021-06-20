/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo
 precio de $35 pesos final.
A.	Si compra 6 o más
  lamparitas bajo consumo tiene un descuento del 50%.
(debe ser de cualquier marca)

B.	Si compra 5
 lamparitas bajo consumo marca "ArgentinaLuz"
 se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.

 C.	Si compra 4
   lamparitas bajo consumo marca "ArgentinaLuz" o
“FelipeLamparas” se hace un descuento del 25 % y si es de otra marca
el descuento es del 20%.

D.	Si compra 3
 lamparitas bajo consumo marca "ArgentinaLuz"
el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento
del 10 % y si es de otra marca un 5%.

E.	Si el importe final con descuento suma más de $120
se debe sumar un 10% de ingresos brutos en informar del impuesto
con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.
 */

//***** SÓLO CON SWITCH *****
//OTRA VERSIÓN
function CalcularPrecio() {
    var cantidadLamparitas;
    var descuento;
    var precioConDescuento;
    var precioFinal;
    var precioUnitarioLampara;
    var marcaLampara;
    var impuestoIB;


    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);
    precioUnitarioLampara = 35;
    marcaLampara = Marca.value;

    switch (cantidadLamparitas) {
        case 1:
        case 2:
            descuento = 0
            break;
        case 3:
            switch (marcaLampara) {
                case "ArgentinaLuz":
                    descuento = 0.15;
                    break;
                case "“FelipeLamparas”":
                    descuento = 0.10;
                    break;
                default:
                    descuento = 0.05;
            }
        case 4:
            switch (marcaLampara) {
                case "ArgentinaLuz":
                case "“FelipeLamparas”":
                    descuento = 0.25;
                    break;
                default:
                    descuento = 0.20;
                    break;
            }
        case 5:
            switch (marcaLampara) {
                case "ArgentinaLuz":
                    descuento = 0.40;
                    break;
                default:
                    descuento = 0.30;
                    break;

            }
        default:
            descuento = 0.5;
            break;
    }

    precioFinal = cantidadLamparitas * precioUnitarioLampara;
    if (descuento >= 0.5) {
        precioConDescuento = precioFinal - (precioFinal * descuento);
    }
    else {
        precioConDescuento = precioFinal;
    }

    if (precioConDescuento >= 120) {
        impuestoIB = precioConDescuento * 0.1
        alert("Usted pago " + impuestoIB + " de IIBB.");
    }
    txtIdprecioDescuento.value = precioConDescuento;


}
//MIO
/*
function CalcularPrecio() {
    let precio;
    let cantidad;
    let marca;
    let descuento;
    let precioConDescuento;
    let impuesto;

    precio = 35;
    cantidad = txtIdCantidad.value;
    cantidad = parseInt(cantidad);
    marca = Marca.value;

    switch (cantidad) {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            switch (marca) {
                case "ArgentinaLuz":
                    descuento = 15;
                    break;
                case "FelipeLamparas":
                    descuento = 10;
                    break;
                default:
                    descuento = 5;
            }
            break;
        case 4:
            switch (marca) {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    descuento = 25;
                    break;
                default:
                    descuento = 20;
                    break;
            }
            break;
        case 5:
            switch (marca) {
                case "ArgentinaLuz":
                    descuento = 40;
                    break;
                default:
                    descuento = 30;
                    break;
            }
            break;
        default:
            descuento = 50;
            break;
    }


    descuento = precio * descuento / 100;
    precioConDescuento = (precio * cantidad) - descuento;

    txtIdprecioDescuento.value = precioConDescuento;

    impuesto = precioConDescuento * 10 / 100;


    if (precioConDescuento > 119) {
        alert("Usted pagó " + precioConDescuento + " de IIBB, siendo " + impuesto + " el impuesto que se pagó.");
    }

}*/


/*descuento = descuento * precio / 100;
        precioConDescuento = (precio - descuento) * cantidad;*/





//*****CON IF Y SWITCH*****
/*
function CalcularPrecio() {
    let precio;
    let cantidad;
    let marca;
    let descuento;
    let precioConDescuento;
    let impuesto;

    precio = 35;
    cantidad = txtIdCantidad.value;
    cantidad = parseInt(cantidad);
    marca = Marca.value;


    switch (cantidad) {
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                descuento = 15;
            } else {
                if (marca == "FelipeLamparas") {
                    descuento = 10;
                } else {
                    descuento = 5;
                }
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz") {
                descuento = 25;
            } else {
                if (marca == "FelipeLamparas") {
                    descuento = 25;
                } else {
                    descuento = 20;
                }
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                descuento = 40;
            } else {
                descuento = 30;
            }
            break;
        default:
            descuento = 50;
            break;

    }

    descuento = descuento * precio / 100;
    precioConDescuento = (precio - descuento) * cantidad;
    txtIdprecioDescuento.value = precioConDescuento;

    impuesto = precioConDescuento * 10 / 100;

    if (precioConDescuento > 119) {
        alert("Usted pagó" + precioConDescuento + " de IIBB, siendo " + impuesto + " el impuesto que se pagó.");
    }
}
*/


//*****SÓLO CON IF*****
/*
function CalcularPrecio() {
    let precio;
    let cantidad;
    let marca;
    let descuento;
    let precioConDescuento;
    let impuesto;

    precio = 35;

    cantidad = txtIdCantidad.value;
    cantidad = parseInt(cantidad);

    marca = Marca.value;

    if (cantidad > 5) {
        descuento = 50;
    } else {
        if (cantidad == 5) {
            if (marca == "ArgentinaLuz") {
                descuento = 40;
            } else {
                descuento = 30;
            }
        } else {
            if (cantidad == 4) {
                if (marca == "ArgentinaLuz") {
                    descuento = 25;
                } else {
                    if (marca == "FelipeLamparas") {
                        descuento = 25;
                    } else {
                        descuento = 20;
                    }
                }
            } else {
                if (cantidad == 3) {
                    if (marca == "ArgentinaLuz") {
                        descuento = 15;
                    } else {
                        if (marca == "FelipeLamparas") {
                            descuento = 10;
                        } else {
                            descuento = 5;
                        }
                    }
                } else {
                    descuento = 0;
                }
            }

        }
    }

    descuento = precio * descuento / 100;
    precioConDescuento = (precio - descuento) * cantidad;
    txtIdprecioDescuento.value = precioConDescuento;

    impuesto = precioConDescuento * 10 / 100;

    if (precioConDescuento > 119) {
        alert("Usted pagó " + precioConDescuento + " de IIBB, siendo " + impuesto + " el impuesto que se pagó.")
    }
}
*/






//*****PRUEBA Y ERROR*****

/*CODIGO PARA RESOLVER EN CLASE
function CalcularPrecio() {
    let cantidadLamparitas;
    let descuento;
    let precioFinal;
    let precioUnitarioLampara = 35;
    let marcaLampara;
    let precioConDescuento;

    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);

    marcaLampara = Marca.value;

    if (cantidadLamparitas > 5) {
        descuento = 50;
        //Mayor 5
        //aplicar descuento del 50%.
    }
    else {
        //Menor o = 5
        if (cantidadLamparitas == 5) {
            if (marcaLampara == "ArgentinaLuz") {
                descuento = 40;
                //descuento del 40 %
            }
            else {
                descuento = 30;
                //el otro descuento
            }
        }
        else {
            if (cantidad == 4) {
                if (marca == "ArgentinaLuz" || "FelipeLamparas") {
                    descuento = 25;
                } else {
                    descuento = 20;
                }
            }
            else {
                if (cantidadLamparitas == 3){
                if(marca=="Arg"){
                    desc 15
                }
        }
    }
}

precioConDescuento = precioUnitarioLampara - precioUnitarioLampara * descuento / 100;
precioFinal = precioConDescuento * cantidadLamparitas;
txtIdprecioDescuento.value = precioFinal;
*/

//MI CODIGO
/*
function CalcularPrecio() {
   let cantidad;
   let marca;
   let precioConDescuento;
   let precio;
   let descuento;
   let precioSinDescuento;
   let ingresosBrutos;
   let impuesto;

   cantidad = document.getElementById("txtIdCantidad").value;
   cantidad = parseInt(cantidad);
   marca = document.getElementById("Marca").value;
   precio = 35;
   precioSinDescuento = precio * cantidad;
   precioConDescuento = precioSinDescuento - descuento;

   switch (cantidad) {
       case 1:
       case 2:

           break;
       case 3:
           if (marca == "ArgentinaLuz") {
               descuento = precioSinDescuento * 15 / 100;
               document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
           } else if (marca == "FelipeLamparas") {
               descuento = precioSinDescuento * 10 / 100;
               document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
           } else {
               descuento = precioSinDescuento * 5 / 100;
               document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
           }
           break;
       case 4:
           if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
               descuento = precioSinDescuento * 25 / 100;
               document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
           } else {
               descuento = precioSinDescuento * 20 / 100;
               document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
           }
           break;
       case 5:
           if (marca == "ArgentinaLuz") {
               descuento = precioSinDescuento * 40 / 100;
               document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
           } else {
               descuento = precioSinDescuento * 30 / 100;
               document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
           }
           break;
       default:
           if (cantidad >= 6) {
               descuento = precioSinDescuento * 50 / 100;
               document.getElementById("txtIdprecioDescuento").value = precioConDescuento;
           }
           break;
   }

   if (precioConDescuento > 120) {
       impuesto = precioConDescuento * 10 / 100;
       ingresosBrutos = impuesto + precioConDescuento;
       alert("Usted pagó " + ingresosBrutos + " de IIBB, siendo " + impuesto + " el impuesto que se pagó.");
   }
}
*/

/*
function CalcularPrecio() {
    let precio;
    let cantidad;
    let marca;
    let descuento;
    let precioConDescuento;
    let precioFinal;
    let impuesto;

    cantidad = txtIdCantidad.value;
    cantidad = parseInt(cantidad);
    marca = Marca.value;
    precio = 35;

    if (cantidad > 5) {
        descuento = 50;
    } else if (cantidad == 5 && marca == "ArgentinaLuz") {
        descuento = 40;
    } else if (cantidad == 5 && !(marca == "ArgentinaLuz")) {
        descuento = 30;
    } else if (cantidad == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {
        descuento = 25;
    } else if (cantidad == 4 && !(marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {
        descuento = 20;
    } else if (cantidad == 3 && marca == "ArgentinaLuz") {
        descuento = 15;
    } else if (cantidad == 3 && "FelipeLamparas") {
        descuento = 10;
    } else if (cantidad == 3 && !(marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {
        descuento = 5;
    } else {
        descuento = 0;
    }

    //anidar las marcas a la cantidad para mejorar el codigo

    //precio unitario con descuento
    precioConDescuento = precio - precio * descuento / 100;
    precioFinal = precioConDescuento * cantidad;

    impuesto = precioFinal * 10 / 100;

    if (precioFinal > 120) {
        alert("Usted pagó " + precioFinal + " de IIBB, siendo " + impuesto + " el impuesto que se pagó.");
    }

    txtIdprecioDescuento.value = precioFinal;

}*/



//*****NOTAS*****

//Control + F --> Para buscar

//Ingreso bruto = antes del impuesto
/*Es el ingreso neto de impuestos, o sea ingreso menos impuestos
Y el sueldo bruto es el sueldo antes de impuestos, o sin, pero no suma nada.
Es el sueldo en bruto, antes de pulirle los impuesto*/

//Ingreso neto = despues del impuesto

//IF CON VALORES NUMERICOS ANIDARLOS
//IF CON STRINGS PUEDO USAR OPERADORES LOGICOS