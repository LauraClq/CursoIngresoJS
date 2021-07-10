/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perimetro;
	var alambbre;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseFloat(largo);

	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseFloat(ancho);

	perimetro=(ancho+largo)*2;

	alambre=perimetro*3;

	alert("La cantidad de alambre a comprar es: "+alambre.toFixed(1)+" metros");


}
function Circulo () 
{
	var radio;
	var perimetro;
	var alambre;

	radio=document.getElementById('txtIdRadio').value;
	radio=parseFloat(radio);

	perimetro=2*3.14*radio;

	alambre=perimetro*3;

	alert("La cantidad de alambre a comprar es: "+alambre.toFixed(1)+" metros");
	
}
function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var cemento;
	var cal;

	largo=document.getElementById('txtIdLargo').value;
	largo=parseFloat(largo);

	ancho=document.getElementById('txtIdAncho').value;
	ancho=parseFloat(ancho);

	area=largo*ancho;

	cemento=area*2;
	cal=area*3;

	alert("Para hacer un contrapiso se nesecita "+cemento.toFixed(1)+" bolsas de cemento y "+cal.toFixed(1)+" bolsas de cal");
}