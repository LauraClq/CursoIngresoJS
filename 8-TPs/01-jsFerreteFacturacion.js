/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseFloat(precioUno);

	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseFloat(precioDos);

	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseFloat(precioTres);

	suma=precioUno+precioDos+precioTres;

	alert("La suma de los precios es: "+suma.toFixed(1));

}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var promedio;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseFloat(precioUno);

	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseFloat(precioDos);

	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseFloat(precioTres);

	suma=precioUno+precioDos+precioTres;
	promedio=suma/3;

	alert("El promedio es: "+promedio.toFixed(1));

}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	var iva;
	var precioFinal;

	precioUno=document.getElementById('txtIdPrecioUno').value;
	precioUno=parseFloat(precioUno);

	precioDos=document.getElementById('txtIdPrecioDos').value;
	precioDos=parseFloat(precioDos);

	precioTres=document.getElementById('txtIdPrecioTres').value;
	precioTres=parseFloat(precioTres);

	suma=precioUno+precioDos+precioTres;

	iva=suma*21/100;

	precioFinal=suma+iva;

	alert("El precio final con el iva incluido es: "+precioFinal.toFixed(1));

}