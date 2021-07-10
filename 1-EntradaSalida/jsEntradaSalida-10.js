/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*
function mostrarAumento()
{
	var importe;
	var porcentajeImporte
	var descuento;
	var nuevoImporte;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseInt(importe);

	porcentajeImporte=prompt("Ingrese un porcentaje ");
	porcentajeImporte=parseInt(porcentajeImporte);

	descuento=importe*porcentajeImporte/100;
	nuevoImporte=importe-descuento;

	document.getElementById('txtIdResultado').value=nuevoImporte;

}
*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var descuento;
	var nuevoImporte;

	importe=document.getElementById('txtIdImporte').value;
	importe=parseFloat(importe);

	porcentaje=prompt("ingrese su porcenttaje de descuentop");
	porcentaje=parseInt(porcentaje);

	descuento=importe*porcentaje/100;

	nuevoImporte=importe-descuento;

	document.getElementById('txtIdResultado').value=nuevoImporte.toFixed(2);
}
