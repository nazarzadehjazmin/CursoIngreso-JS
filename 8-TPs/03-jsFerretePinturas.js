/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura;
    let temperaturaNumerica;
    let fahrenheitCentigrados;

   temperatura = txtIdTemperatura.value;
   temperaturaNumerica = parseInt(temperatura);

   fahrenheitCentigrados = (temperaturaNumerica - 32) / 1.8;
     
   //celsius = (fahrenheit - 32) / 1.8

   alert (fahrenheitCentigrados);
	
}

function CentigradosFahrenheit () 
{
    let temperatura;
    let temperaturaNumerica;
    let CentigradosFahrenheit;

   temperatura = txtIdTemperatura.value;
   temperaturaNumerica = parseInt(temperatura);

   centigradosFahrenheit = (temperatura * 1.8) + 32;
     
   //fahrenheit = celsius * 1.8 + 32

   alert (centigradosFahrenheit);
	
}
