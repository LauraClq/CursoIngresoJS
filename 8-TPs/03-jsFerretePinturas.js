/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaFahrenheit;
	var temperaturaCentigrados;

	temperaturaFahrenheit=document.getElementById('txtIdTemperatura').value;
	temperaturaFahrenheit=parseFloat(temperaturaFahrenheit);

	temperaturaCentigrados=(temperaturaFahrenheit-32)/1.8;

	alert("La temperatura "+temperaturaFahrenheit+ " fahrenhheit son "+temperaturaCentigrados.toFixed(2)+" centigrados");

}

function CentigradosFahrenheit () 
{
	var temperaturaCentigrados;
	var temperaturaFahrenheit;

	temperaturaCentigrados=document.getElementById('txtIdTemperatura').value;
	temperaturaCentigrados=parseFloat(temperaturaCentigrados);

	temperaturaFahrenheit=(temperaturaCentigrados*1.8)+32;

	alert("La temperatura "+temperaturaCentigrados+ " centigrados son "+temperaturaFahrenheit.toFixed(2)+" fahrenhheit");

}
