function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var precioFinal;

	precio=prompt("Ingrese el precio de su producto");
	precio=parseFloat(precio);

	porcentaje=prompt("Ingrese su porcentaje de descuento");
	porcentaje=parseInt(porcentaje);

	descuento=precio*porcentaje/100;

	precioFinal=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioFinal.toFixed(2);
}
