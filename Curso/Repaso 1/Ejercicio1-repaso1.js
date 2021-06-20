/*JAZMÍN NAZARZADEH
DIVISIÓN = 1°G

1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto junto al precio aumentado en un 30%.
Pueden utilizar el html del ejercicio 4 para resolverlo.*/

function mostrar() {

    let descripcion;
    let precio;
    let porcentajeAumento;
    let aumento;
    let precioTotal;

    descripcion = prompt("Ingresar la descripción del producto");

    precio = txtIdNombre.value;
    precio = parseInt(precio);

    porcentajeAumento = 30;
    aumento = precio * porcentajeAumento / 100;
    precioTotal = aumento + precio;

    alert("Descrición del producto: " + descripcion + ". Precio final: " + precioTotal);
}
