function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var precioFinal;

	precio=prompt("Ingrese el precio del producto: ");
	precio=parseFloat(precio);

	porcentaje=prompt("Ingrese el porcentaje de su descuento: ");
	porcentaje=parseFloat(porcentaje);

	descuento=precio*porcentaje/100;

	precioFinal=precio-descuento;

	document.getElementById('elPrecioFinal').value=precioFinal.toFixed(2);
	//caundo la variable va al final de document es para mostrarlo en una casilla
	//y al reves es para completar en la casila;
	//lee de izquierda a derecha estaria guardando la caja de texto a la variale 
	//tiene que ser al revez guarda el valor de la variable en la caja de texto
	//obtenemos la caja de texto y mostramos el valor 
	//inversa guardamos el valor a la caja de texto.
}
