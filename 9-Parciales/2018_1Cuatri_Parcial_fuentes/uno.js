
function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=prompt("Ingrese el ancho del rectángulo");
	ancho=parseFloat(ancho);

	largo=prompt("Ingrese el largo del rectángulo");
	largo=parseFloat(largo);

	perimetro=(ancho+largo)*2;

	alert("El perimetro del rectángulo es: "+perimetro.toFixed(1));
}
